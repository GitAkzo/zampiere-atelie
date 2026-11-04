import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

WIDTH = 1200
HEIGHT = 630

# Criar canvas base com degradê suave de linho/terracota
img = Image.new("RGB", (WIDTH, HEIGHT), "#FCFAF7")
draw = ImageDraw.Draw(img)

# Fundo sutil com gradiente quente e acolhedor
for y in range(HEIGHT):
    ratio = y / HEIGHT
    r = int(252 - (252 - 245) * ratio)
    g = int(250 - (250 - 236) * ratio)
    b = int(247 - (247 - 227) * ratio)
    draw.line([(0, y), (WIDTH, y)], fill=(r, g, b))

# Carregar e processar a foto dos terços à direita
temp_photo_path = "public/rosary_og_temp.jpg"
if os.path.exists(temp_photo_path):
    raw_photo = Image.open(temp_photo_path).convert("RGB")

    card_w = 490
    card_h = 510
    
    # Recortar no centro com aspecto desejado
    photo_aspect = raw_photo.width / raw_photo.height
    target_aspect = card_w / card_h

    if photo_aspect > target_aspect:
        # Foto é mais larga que o alvo
        new_w = int(raw_photo.height * target_aspect)
        left = (raw_photo.width - new_w) // 2
        raw_photo = raw_photo.crop((left, 0, left + new_w, raw_photo.height))
    else:
        # Foto é mais alta
        new_h = int(raw_photo.width / target_aspect)
        top = (raw_photo.height - new_h) // 2
        raw_photo = raw_photo.crop((0, top, raw_photo.width, top + new_h))

    photo_resized = raw_photo.resize((card_w, card_h), Image.Resampling.LANCZOS)

    # Cantos arredondados (28px)
    mask = Image.new('L', (card_w, card_h), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([(0, 0), (card_w, card_h)], 28, fill=255)

    # Sombra suave sob a foto
    shadow = Image.new('RGBA', (card_w + 40, card_h + 40), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.rounded_rectangle([(20, 20), (card_w + 20, card_h + 20)], 28, fill=(43, 35, 31, 45))
    shadow = shadow.filter(ImageFilter.GaussianBlur(14))

    card_x = 650
    card_y = (HEIGHT - card_h) // 2

    img.paste(shadow, (card_x - 20, card_y - 20), shadow)
    img.paste(photo_resized, (card_x, card_y), mask)

    # Moldura fina decorativa dourada em volta da foto
    border_img = Image.new('RGBA', (card_w, card_h), (0, 0, 0, 0))
    b_draw = ImageDraw.Draw(border_img)
    b_draw.rounded_rectangle([(0, 0), (card_w - 1, card_h - 1)], 28, outline=(212, 175, 55, 180), width=3)
    img.paste(border_img, (card_x, card_y), border_img)

    # Remover imagem temporária
    try:
        os.remove(temp_photo_path)
    except:
        pass

# Carregar fontes do sistema Windows
try:
    font_badge = ImageFont.truetype("arialbd.ttf", 20)
    font_brand = ImageFont.truetype("georgiab.ttf", 54)
    font_bold = ImageFont.truetype("georgiab.ttf", 44)
    font_sub = ImageFont.truetype("arial.ttf", 24)
    font_cta = ImageFont.truetype("arialbd.ttf", 22)
except:
    font_badge = ImageFont.load_default()
    font_brand = ImageFont.load_default()
    font_bold = ImageFont.load_default()
    font_sub = ImageFont.load_default()
    font_cta = ImageFont.load_default()

# 1. Badge Superior
badge_text = "ARTIGOS RELIGIOSOS & MATERNIDADE • GUARAPUAVA/PR"
draw.rounded_rectangle([(70, 65), (590, 105)], 20, fill="#F7ECE6", outline="#E5C4B5", width=1)
draw.text((90, 75), badge_text, fill="#8E4F3C", font=font_badge)

# 2. Nome da Marca
draw.text((70, 130), "Ateliê Ale Zampieri", fill="#2B231F", font=font_brand)

# 3. Frase de Impacto
draw.text((70, 215), "Peças personalizadas que", fill="#8E4F3C", font=font_bold)
draw.text((70, 275), "eternizam momentos de fé.", fill="#B89225", font=font_bold)

# 4. Bullets de Diferenciais
draw.text((70, 360), "• Terços devocionais e lembranças de batizado", fill="#63554D", font=font_sub)
draw.text((70, 400), "• Personalização exclusiva com nomes e medalhas", fill="#63554D", font=font_sub)
draw.text((70, 440), "• Escolha na sacola e envie direto no WhatsApp", fill="#63554D", font=font_sub)

# 5. Botão CTA
cta_box = [(70, 505), (460, 565)]
draw.rounded_rectangle(cta_box, 16, fill="#25D366")
draw.text((105, 521), "PEDIR PELO WHATSAPP", fill="#FFFFFF", font=font_cta)

# Salvar a imagem OG
os.makedirs("public", exist_ok=True)
img.save("public/og-image.jpg", quality=92)

# Se a pasta dist existir, salvar lá também
if os.path.exists("dist"):
    img.save("dist/og-image.jpg", quality=92)

print("public/og-image.jpg gerada com sucesso!")
