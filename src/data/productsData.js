export const CATEGORIES = [
  { id: 'todos', label: 'Todos os Mimos' },
  { id: 'tercos', label: 'Terços Tradicionais' },
  { id: 'pulso', label: 'Terços de Pulso & Dezenas' },
  { id: 'maternidade', label: 'Maternidade & Bebê' },
  { id: 'lembrancinhas', label: 'Kits & Lembrancinhas' },
];

export const MEDAL_OPTIONS = [
  'Nossa Senhora Aparecida',
  'São Bento',
  'Santo Anjo da Guarda',
  'Sagrada Família',
  'Nossa Senhora das Graças',
  'São José',
  'Espírito Santo',
];

export const PRODUCTS = [
  {
    id: 'terco-perolas-nome',
    name: 'Terço Luxo em Pérolas com Nome Personalizado',
    category: 'tercos',
    price: 75.0,
    badge: 'Mais Pedido',
    image: 'https://images.unsplash.com/photo-1676206502051-89deda798a80?auto=format&fit=crop&w=700&q=80',
    description: 'Terço completo confeccionado com pérolas selecionadas, entremeio devocional resinado e letras com o nome da pessoa na primeira dezena.',
    allowsCustomName: true,
    leadTime: '3 a 5 dias úteis',
    details: 'Acabamento em fio de alta resistência, medalha com banho dourado e cruz clássica.'
  },
  {
    id: 'terco-noiva-cristal',
    name: 'Terço de Noiva em Cristais e Relicário',
    category: 'tercos',
    price: 135.0,
    badge: 'Exclusivo',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=700&q=80',
    description: 'Peça nobre para buquê de noiva ou casamento, com cristais facetados que refletem a luz e opção de relicário para foto de ente querido.',
    allowsCustomName: true,
    leadTime: '5 a 7 dias úteis',
    details: 'Comprimento especial de 65cm, cruz cravejada e caixa protetora com visor transparente.'
  },
  {
    id: 'terco-masculino-sao-bento',
    name: 'Terço Masculino de São Bento Fosco',
    category: 'tercos',
    price: 68.0,
    badge: 'Devocional',
    image: 'https://images.unsplash.com/photo-1640794296019-ab6b5de045c2?auto=format&fit=crop&w=700&q=80',
    description: 'Design sóbrio e resistente com contas foscas em tom grafite/amadeirado e medalha com a Cruz Sagrada de São Bento.',
    allowsCustomName: true,
    leadTime: '2 a 4 dias úteis',
    details: 'Ideal para carregar no bolso ou no carro. Montagem reforçada em cordão naval.'
  },
  {
    id: 'terco-pulso-aparecida',
    name: 'Terço de Pulso Regulável Nossa Senhora Aparecida',
    category: 'pulso',
    price: 42.0,
    badge: 'Queridinho',
    image: 'https://images.unsplash.com/photo-1506049420574-b51320eee265?auto=format&fit=crop&w=700&q=80',
    description: 'Pulseira terço delicada para usar no dia a dia, com fecho de macramê ajustável a qualquer tamanho de pulso.',
    allowsCustomName: true,
    leadTime: '2 a 3 dias úteis',
    details: 'Contas em cristal ou pérola acetinada, medalhinha com detalhe resinado azul/dourado.'
  },
  {
    id: 'chaveiro-dezena-bolsa',
    name: 'Chaveiro Dezena com Pingente e Franja Tassel',
    category: 'pulso',
    price: 35.0,
    badge: 'Presente Perfeito',
    image: 'https://images.unsplash.com/photo-1566997364585-919b247aba2c?auto=format&fit=crop&w=700&q=80',
    description: 'Dezena compacta para prender na bolsa, mochila ou retrovisor do carro, unindo proteção diária e estilo artesanal.',
    allowsCustomName: true,
    leadTime: '2 a 3 dias úteis',
    details: 'Mosquetão dourado reforçado, tassel acetinado e gravação do nome da pessoa.'
  },
  {
    id: 'terco-pulso-infantil',
    name: 'Terço de Pulso Infantil Santo Anjo',
    category: 'pulso',
    price: 38.0,
    badge: 'Infantil',
    image: 'https://images.unsplash.com/photo-1611591475102-4a004eb65b99?auto=format&fit=crop&w=700&q=80',
    description: 'Terço mini e seguro com miçangas coloridas em tons pastéis e medalha do Santo Anjo da Guarda.',
    allowsCustomName: true,
    leadTime: '2 a 3 dias úteis',
    details: 'Material atóxico, bordas suaves e fecho elástico anatômico para crianças.'
  },
  {
    id: 'prendedor-chupeta-nome',
    name: 'Prendedor de Chupeta Personalizado com Nome',
    category: 'maternidade',
    price: 45.0,
    badge: 'Sucesso Maternidade',
    image: 'https://images.unsplash.com/photo-1649646861148-5db6277fe231?auto=format&fit=crop&w=700&q=80',
    description: 'Prendedor artesanal feito com contas selecionadas e letras personalizadas com o nome do seu bebê.',
    allowsCustomName: true,
    leadTime: '2 a 4 dias úteis',
    details: 'Clip jacaré com trava segura para não danificar o tecido da roupinha.'
  },
  {
    id: 'kit-maternidade-abraco',
    name: 'Kit Maternidade: Prendedor + Terço de Berço com Oração',
    category: 'maternidade',
    price: 89.0,
    badge: 'Kit Presente',
    image: 'https://images.unsplash.com/photo-1645528364055-f45131ebc3a8?auto=format&fit=crop&w=700&q=80',
    description: 'O presente mais emocionante para chá de bebê ou visita à maternidade: prendedor com nome + terço de berço em tecido e pérolas.',
    allowsCustomName: true,
    leadTime: '3 a 5 dias úteis',
    details: 'Acompanha caixinha de kraft decorada com fita de cetim e cartão de bênção.'
  },
  {
    id: 'cracha-infantil-escola',
    name: 'Pingente / Identificador de Mochila Escolar com Nome',
    category: 'maternidade',
    price: 32.0,
    badge: 'Novidade',
    image: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=700&q=80',
    description: 'Acessório personalizado com o nome da criança para identificar mochila escolar, lancheira ou estojo.',
    allowsCustomName: true,
    leadTime: '2 a 3 dias úteis',
    details: 'Cores vibrantes ou pastéis, mosquetão resistente de fácil engate.'
  },
  {
    id: 'kit-10-minitercos-batizado',
    name: 'Kit 10 Miniterços para Lembrancinha de Batizado',
    category: 'lembrancinhas',
    price: 139.0,
    badge: 'Econômico (R$ 13,90/un)',
    image: 'https://images.unsplash.com/photo-1706691316604-4753e33fa74e?auto=format&fit=crop&w=700&q=80',
    description: 'Dez miniterços delicados para lembrança de batizado, primeira eucaristia ou crisma, com tag personalizada e saquinho de organza.',
    allowsCustomName: true,
    leadTime: '5 a 8 dias úteis',
    details: 'Inclui 10 saquinhos de organza brancos com fitilho de cetim e cartãozinho com nome e data.'
  },
  {
    id: 'kit-10-chaveiros-anjo',
    name: 'Kit 10 Chaveiros de Anjinho em Pérola',
    category: 'lembrancinhas',
    price: 119.0,
    badge: 'Batizado & Nascença',
    image: 'https://images.unsplash.com/photo-1654157946526-855dd0d541d3?auto=format&fit=crop&w=700&q=80',
    description: 'Lembrancinhas montadas em formato de anjinho com asas douradas e contas de pérola. Um mimo inesquecível para os padrinhos.',
    allowsCustomName: true,
    leadTime: '4 a 7 dias úteis',
    details: 'Embalados individualmente prontos para entregar aos convidados da celebração.'
  }
];
