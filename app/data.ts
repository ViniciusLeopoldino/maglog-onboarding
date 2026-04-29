// --- MARCOS DA LINHA DO TEMPO (PUZZLE) ---
export const MARCOS_HISTORICOS = [
  { ano: "2014", texto: "Início das operações visão, coragem e foco." },
  { ano: "2015", texto: "Inovação no Last Mile e soluções portuárias." },
  { ano: "2016", texto: "Frota moderna + expansão de serviços e tecnologia TMS." },
  { ano: "2017", texto: "WMS próprio + novos serviços e integração." },
];

// --- QUESTÕES DA AVALIAÇÃO FINAL (QUIZ) ---
export const PERGUNTAS_AVALIACAO = [
  { p: "Você vê alguém operando sem EPI. Sua atitude é:", o: ["Deixar continuar, responsabilidade dele.", "Corrigir com autonomia.", "Comunicar e orientar com empatia.", "Filmar para o RH."], r: 2 },
  { p: "Em relação ao trabalho em equipe, espera-se que:", o: ["Guarde informações para si.", "Evite dar feedback.", "Compartilhe aprendizados e apoie colegas.", "Se comunique apenas informalmente."], r: 2 },
  { p: "Assinale a resposta CORRETA:", o: ["Atendemos o IAS quando convém.", "O uso do EPI não é opcional, é obrigatório.", "Só nos importamos com hábitos de alguns.", "Não temos preocupação com Diversidade."], r: 1 },
  { p: "Um colega sofre discriminação. O que você faz?", o: ["Nada.", "Finge que não viu.", "Reporta ao gestor ou RH.", "Posta em rede social."], r: 2 },
  { p: "Se você perceber risco numa atividade, deve:", o: ["Ignorar.", "Checar com colega primeiro.", "Resolver depois.", "Parar imediatamente e avisar líder/RH."], r: 3 },
  { p: "Comportamento que MAIS representa os valores da Maglog:", o: ["Burlar regras de segurança.", "Colaborar, comunicar riscos e ser transparente.", "Priorizar atalhos.", "Não registrar falhas."], r: 1 },
  { p: "Assinale a resposta ERRADA:", o: ["Inovação e Respeito são valores.", "Temos Parceria com faculdades.", "Atendemos somente clientes do varejo.", "Atendemos o Instituto Ayrton Senna."], r: 2 },
  { p: "A prioridade na operação é:", o: ["Segurança e prevenção!", "Velocidade e entrega!", "Reduzir custos de EPI.", "Trabalhar sem pausas."], r: 0 },
  { p: "Como tratamos o tema Diversidade e Inclusão?", o: ["Aceitamos piadinhas.", "Respeito e inclusão são princípios inegociáveis.", "É opcional.", "Não é relevante."], r: 1 },
  { p: "Exemplo de atitude coerente com os valores:", o: ["Assumir responsabilidade e ajudar a corrigir.", "Esconder um erro.", "Transferir a culpa para o cliente.", "Ignorar orientações."], r: 0 },
  { p: "Nosso propósito é:", o: ["Atuar apenas em SP.", "Ser o maior operador do país.", "Servir, influenciar e impactar a sociedade.", "Crescer sem foco em pessoas."], r: 2 },
  { p: "Onde estão nossos CDs principais?", o: ["Mooca e Jundiaí.", "Campinas e Santos.", "Guarulhos e Sorocaba.", "São Bernardo e Osasco."], r: 0 },
  { p: "A Maglog foi fundada em qual ano?", o: ["2012", "2014", "2016", "2018"], r: 1 },
  { p: "Assinale uma boa prática ambiental:", o: ["Economizar energia e água.", "Usar plástico sempre.", "Descartar tudo no mesmo lixo.", "Desconsiderar campanhas."], r: 0 },
  { p: "Qual solução faz parte das operações da Maglog?", o: ["Consultoria logística.", "Desenvolvimento de carros.", "Gestão de estoque e micro-logística.", "Agropecuária."], r: 2 },
  { p: "O que significa 'cada rota conta uma história'?", o: ["Só o financeiro importa.", "Entregas são eventos isolados.", "Motorista decide sozinho.", "Cada entrega impacta pessoas e a reputação Maglog."], r: 3 },
  { p: "A empresa iniciou suas operações com:", o: ["Investidores internacionais.", "Frota terceirizada.", "Apoio governamental.", "Poucos recursos e visão estratégica."], r: 3 },
];

// --- LISTA COMPLETA DAS 42 ATIVIDADES ---
export const FASES = [
  // Módulo 1
  { id: 1, modulo: 1, mNome: "Boas Vindas", titulo: "Introdução", tipo: "video", vId: "Gkuo63mOEvk" }, // vid 1
  { id: 2, modulo: 1, mNome: "Boas Vindas", titulo: "Boas Vindas!", tipo: "video", vId: "T4yqCO7mOCY" }, // vid 2
  { id: 3, modulo: 1, mNome: "Boas Vindas", titulo: "Abertura Diretoria", tipo: "video", vId: "j0w8ZC1ZJKQ" }, // vid 3
  { id: 4, modulo: 1, mNome: "Boas Vindas", titulo: "Nossa História", tipo: "video", vId: "Jqnu14Mq8eE" }, // vid 4
  { id: 5, modulo: 1, mNome: "Boas Vindas", titulo: "Nossos Clientes", tipo: "video", vId: "5dQckoxh3iM" }, // vid 5
  { id: 6, modulo: 1, mNome: "Boas Vindas", titulo: "Jogo da Memória", tipo: "puzzle" },

  // Módulo 2
  { id: 7, modulo: 2, mNome: "Conceitos Fundamentais e Estrutura Física", titulo: "Glossário Pt 1", tipo: "video", vId: "4Lby8WJDvNY" }, //vid 6
  { id: 8, modulo: 2, mNome: "Conceitos Fundamentais e Estrutura Física", titulo: "Glossário Pt 2", tipo: "video", vId: "lNnijxiVz5I" }, //vid 7 
  { id: 9, modulo: 2, mNome: "Conceitos Fundamentais e Estrutura Física", titulo: "Glossário Pt 3", tipo: "video", vId: "1NutqQvJ1iw" }, // vid 8
  { id: 10, modulo: 2, mNome: "Conceitos Fundamentais e Estrutura Física", titulo: "Glossário Pt 4", tipo: "video", vId: "EAEiYpWWtnQ" }, // vid 9
  { id: 11, modulo: 2, mNome: "Conceitos Fundamentais e Estrutura Física", titulo: "Glossário Pt 5", tipo: "video", vId: "VHS3aj2S0MY" }, // vid 10
  { id: 12, modulo: 2, mNome: "Conceitos Fundamentais e Estrutura Física", titulo: "Glossário Pt 6", tipo: "video", vId: "o2GYi_KUQJo" }, // vid 11
  { id: 13, modulo: 2, mNome: "Conceitos Fundamentais e Estrutura Física", titulo: "Desafio Glossário", tipo: "forca", resp: "LOGISTICA", dica: "O coração do nosso negócio" },
  { id: 14, modulo: 2, mNome: "Conceitos Fundamentais e Estrutura Física", titulo: "Nossa Estrutura", tipo: "video", vId: "92jtqV-ogaU" }, // vid 12
  { id: 15, modulo: 2, mNome: "Conceitos Fundamentais e Estrutura Física", titulo: "Gestão Estoque", tipo: "video", vId: "qoV5g2UNKp4" }, // vid 13
  { id: 16, modulo: 2, mNome: "Conceitos Fundamentais e Estrutura Física", titulo: "Nossa Frota", tipo: "video", vId: "hlG_AsNM5uI" }, // vid 14
  { id: 17, modulo: 2, mNome: "Conceitos Fundamentais e Estrutura Física", titulo: "Desafio Frota", tipo: "forca", resp: "TRANSPORTE", dica: "Movimentação de cargas" },
  { id: 18, modulo: 2, mNome: "Conceitos Fundamentais e Estrutura Física", titulo: "Nosso Processo", tipo: "video", vId: "4lsOzK3Qv9E" }, // vid 15
  { id: 19, modulo: 2, mNome: "Conceitos Fundamentais e Estrutura Física", titulo: "Caça Palavras", tipo: "puzzle" },
  { id: 20, modulo: 2, mNome: "Conceitos Fundamentais e Estrutura Física", titulo: "Complete Frase", tipo: "puzzle" },

  // Módulo 3
  // { id: 21, modulo: 3, mNome: "Missão, Valores e Saúde", titulo: "Missão e Visão", tipo: "video", vId: "dQw4w9WgXcQ" }, //????
  { id: 21, modulo: 3, mNome: "Missão, Valores e Saúde", titulo: "Não Discriminação", tipo: "video", vId: "VV43JiUd6Rk" }, // vid 16
  { id: 22, modulo: 3, mNome: "Missão, Valores e Saúde", titulo: "Saúde SSO", tipo: "video", vId: "1K9JgzJb9dA" }, // vid 17
  { id: 23, modulo: 3, mNome: "Missão, Valores e Saúde", titulo: "Meio Ambiente", tipo: "video", vId: "aCCBtMOqthU" }, // vid 18
  { id: 24, modulo: 3, mNome: "Missão, Valores e Saúde", titulo: "Ligue Letras", tipo: "forca", resp: "MAGLOG", dica: "Nome da nossa empresa" },

  // Módulo 4
  { id: 25, modulo: 4, mNome: "Compliance e Benefícios", titulo: "Organograma", tipo: "video", vId: "_QCcqea4fvo" }, // vid 19
  { id: 26, modulo: 4, mNome: "Compliance e Benefícios", titulo: "Frequência", tipo: "video", vId: "Y1BDKky240c" }, // vid 20
  { id: 27, modulo: 4, mNome: "Compliance e Benefícios", titulo: "Quiz Frequência", tipo: "forca", resp: "PONTO", dica: "Registro de jornada" },
  { id: 28, modulo: 4, mNome: "Compliance e Benefícios", titulo: "Atestados 1", tipo: "video", vId: "HPSbOQ_IdYs" }, // vid 21
  { id: 29, modulo: 4, mNome: "Compliance e Benefícios", titulo: "Atestados 2", tipo: "video", vId: "Wq_PXHg8p_k" }, // vid 22
  { id: 30, modulo: 4, mNome: "Compliance e Benefícios", titulo: "Quiz Atestados", tipo: "forca", resp: "SAUDE", dica: "Motivo de afastamento" },
  { id: 31, modulo: 4, mNome: "Compliance e Benefícios", titulo: "Uniforme", tipo: "video", vId: "WObbU4_ZTbU" }, // vid 23
  { id: 32, modulo: 4, mNome: "Compliance e Benefícios", titulo: "Quiz Uniforme", tipo: "forca", resp: "EPI", dica: "Equipamento de proteção" },
  { id: 33, modulo: 4, mNome: "Compliance e Benefícios", titulo: "Refeitório", tipo: "video", vId: "XTLMxovBaH8" }, // vid 24
  { id: 34, modulo: 4, mNome: "Compliance e Benefícios", titulo: "Quiz Estrutura", tipo: "forca", resp: "PAUSA", dica: "Hora do descanso" },
  { id: 35, modulo: 4, mNome: "Compliance e Benefícios", titulo: "Escritório", tipo: "video", vId: "wpS4JrULwZ0" }, // vid 25
  { id: 36, modulo: 4, mNome: "Compliance e Benefícios", titulo: "Quiz Recursos", tipo: "forca", resp: "ORDEM", dica: "Organização no ambiente" },
  { id: 37, modulo: 4, mNome: "Compliance e Benefícios", titulo: "Benefícios", tipo: "video", vId: "bCqBJKsu57w" }, // vid 26
  { id: 38, modulo: 4, mNome: "Compliance e Benefícios", titulo: "Quiz Compliance", tipo: "forca", resp: "ETICA", dica: "Princípio de conduta" },
  { id: 39, modulo: 4, mNome: "Compliance e Benefícios", titulo: "5S Organização", tipo: "video", vId: "hKOfStob89s" }, // vid 27
  { id: 40, modulo: 4, mNome: "Compliance e Benefícios", titulo: "Quiz 5S", tipo: "forca", resp: "LIMPEZA", dica: "Um dos sensos do 5S" },

  // Módulo 5
  { id: 41, modulo: 5, mNome: "Avaliação Final", titulo: "Avaliação de Conhecimento", tipo: "quiz" },
];