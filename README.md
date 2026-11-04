# Ateliê Ale Zampieri - Catálogo Digital Interativo

Solução de vitrine digital interativa desenvolvida por **Paulo Raséc** para o **Ateliê Ale Zampieri** (Guarapuava - PR), focado em artigos religiosos, terços devocionais e acessórios infantis/maternidade.

---

## 🚀 Funcionalidades Principais

- **Catálogo Segmentado:** Filtro por categorias (*Terços Tradicionais*, *Terços de Pulso*, *Maternidade & Bebê*, *Lembrancinhas de Batizado*).
- **Personalização Visual:** Campo dinâmico para personalização de nomes na peça e escolha do santo/medalha devocional.
- **Sacola de Encomendas (Cart Drawer):** Gestão em tempo real de itens, cálculo de subtotal e persistência local com TTL (7 dias).
- **Checkout Direto no WhatsApp:** Geração de mensagem limpa e estruturada via `wa.me`, pronta para a artesã receber as especificações de bancada.
- **FAQ Integrado:** Respostas rápidas sobre prazos de confecção artesanal, formas de entrega e pagamentos via Pix.
- **Conformidade LGPD:** Cookie Banner interativo e Política de Privacidade integrada desde a Sprint 1.
- **Feedback Tátil (Haptics):** Disparos suaves na Vibration API para melhor experiência mobile.

---

## 🛠️ Tecnologias Utilizadas

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (Design system artesanal em tons terracota, ouro e linho)
- **Lucide Icons**
- **Vibration API** (Mobile Haptics)

---

## 📦 Como Executar Localmente

```bash
# Instalar dependências (caso não tenha o node_modules copiado)
npm install

# Iniciar ambiente de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```

