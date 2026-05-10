/* i18n.js — Tradução PT-BR / EN-US */

const translations = {
  pt: {
    /* Navbar */
    'nav.about':       'Sobre',
    'nav.experience':  'Experiência',
    'nav.portfolio':   'Portfólio',
    'nav.contact':     'Contato',

    /* Hero */
    'hero.desc':         'Desenvolvedora Full-Stack com formação técnica em Eletrotécnica e Telecom. Trabalho com <strong>PHP</strong>, <strong>Java/Spring Boot</strong>, <strong>MySQL</strong> e <strong>JavaScript</strong>, com <strong>35+ projetos entregues</strong> em sistemas de gestão, APIs e integrações.',
    'hero.btn-projects': 'Ver Projetos',
    'hero.btn-contact':  'Falar Comigo',

    /* Stats */
    'stat.projects':   'Projetos Entregues',
    'stat.year':       'Ano como Dev Freelancer',
    'stat.tech':       'Tecnologias',
    'stat.commitment': 'Comprometimento',

    /* About */
    'about.label':       'Sobre mim',
    'about.location':    'Tubarão – SC',
    'about.degree':      'ADS · Uninter (2022–2026)',
    'about.tech-course': 'Técnico em Eletrotécnica',
    'about.p1':          'Desenvolvedora Full-Stack com base técnica em Eletrotécnica e formação em Análise e Desenvolvimento de Sistemas. Atuo no desenvolvimento de sistemas web completos com foco em performance, arquitetura limpa e entrega de valor real.',
    'about.p2':          'Com <strong class="text-highlight">35+ projetos em produção</strong>, tenho experiência em gamificação, dashboards financeiros, integrações de API, sistemas de pagamento, arquiteturas multi-tenant e migração de sistemas legados Java 8 → 21.',
    'about.btn-portfolio': 'Ver Portfólio',
    'about.btn-contact':   'Entre em Contato',

    /* Stack */
    'stack.label':        'Tecnologias',
    'stack.title-prefix': 'Minha',
    'stack.subtitle':     'Ferramentas e tecnologias que uso no dia a dia',
    'stack.database':     'Banco de Dados',
    'stack.tools':        'Ferramentas',

    /* Experience */
    'exp.label':        'Trajetória',
    'exp.title-prefix': 'Formação',
    'exp.title-suffix': 'Experiência',
    'exp.col-edu':      'Formação Acadêmica',
    'exp.ads-title':    'Análise e Desenvolvimento de Sistemas',
    'exp.eletro-title': 'Técnico em Eletrotécnica',
    'exp.certs-title':  'Certificações',
    'exp.col-prof':     'Experiência Profissional',
    'exp.job1-period':  '2025 – Atualmente',
    'exp.job1-title':   'Desenvolvedora Full-Stack Freelancer',
    'exp.job1-company': 'Projetos Independentes',
    'exp.job1-desc':    'PHP, Java/Spring Boot, MySQL e JavaScript. 35+ projetos: gamificação, dashboards, APIs, pagamentos, UX/UI.',
    'exp.job2-period':  '2025 – Atualmente',
    'exp.job2-title':   'Suporte Técnico – Service Desk',
    'exp.job2-desc':    'Triagem de chamados e apoio em diagnósticos.',
    'exp.job3-title':   'Suporte Técnico – Helpdesk',
    'exp.job4-title':   'Analista de Atendimento',
    'exp.job5-title':   'Desenhista Projetista / Técnico de Telecom',

    /* Certifications */
    'cert.logica':      'Lógica de Programação',
    'cert.pensamento':  'Pensamento Computacional',
    'cert.ia':          'Inteligência Artificial',
    'cert.redes':       'Redes de Computadores',
    'cert.sucesso':     'Sucesso do Cliente',
    'cert.atendimento': 'Atendimento ao Cliente',

    /* Featured */
    'feat.label':        'Em destaque',
    'feat.title-prefix': 'Projetos',
    'feat.title-suffix': 'Principais',
    'feat.subtitle':     'Trabalhos que melhor representam minha stack e profundidade técnica',
    'feat.c1-cat':   'Gamificação',
    'feat.c1-title': 'Motor de Saldo Dinâmico e Inventário FIFO',
    'feat.c1-desc':  'Motor de cálculo de saldo com consumo FIFO, abatendo pontos dos registros mais antigos com histórico de auditoria completo. Solução para consistência transacional em sistemas de fidelidade.',
    'feat.c2-cat':   'Backend / Migração',
    'feat.c2-title': 'Migração Java 8 → 21: Integração ERP',
    'feat.c2-desc':  'Migração completa de microsserviço legado para Java 21 LTS com isolamento de ambientes de teste, garantindo zero impacto em produção durante a transição.',
    'feat.c3-cat':   'Pagamentos',
    'feat.c3-title': 'Sistema de Reservas com Pagamento Antecipado',
    'feat.c3-desc':  'Regras de pagamento antecipado configuráveis por datas específicas com controle de capacidade por período e isolamento de dados por tenant.',

    /* Portfolio section */
    'port.label':        'Trabalhos',
    'port.title-prefix': 'Meu',
    'port.title-suffix': 'Portfólio',
    'port.subtitle':     '35+ projetos entregues em produção',

    /* Filters */
    'filter.all':         'Todos',
    'filter.gamificacao': '🎮 Gamificação',
    'filter.obras':       '🏗️ Obras',
    'filter.relatorios':  '📊 Relatórios',
    'filter.frontend':    '🎨 Frontend/UX',
    'filter.backend':     '⚙️ Backend/API',
    'filter.pagamentos':  '💳 Pagamentos',
    'filter.arquitetura': '🔐 Arquitetura',

    /* Portfolio items — Gamificação */
    'p-g1.t': 'Motor de Saldo Dinâmico e Inventário FIFO',
    'p-g1.d': 'Motor de cálculo de saldo com consumo FIFO, abatendo pontos dos registros mais antigos com histórico de auditoria completo.',
    'p-g2.t': 'Integração de E-commerce ao Ledger de Pontos',
    'p-g2.d': 'Migração do resgate de pontos para arquitetura centralizada de ledger com débito transacional automático.',
    'p-g3.t': 'Migração de Dados para Sistema de Pontuação',
    'p-g3.d': 'Migração da lógica de pontuação para arquitetura centralizada com refatoração do modelo de dados legado.',
    'p-g4.t': 'Arquitetura do Sistema Centralizado de Pontuação',
    'p-g4.d': 'Ledger central consolidando registros de pontos de diferentes origens com restrições de integridade.',
    'p-g5.t': 'Expansão do Módulo de Configurações de Gamificação',
    'p-g5.d': 'Parâmetros de pontuação dinâmica por tipo de cadastro sem re-deploy.',
    'p-g6.t': 'Sistema Dinâmico de Pontuação para Profissionais',
    'p-g6.d': 'Full-stack para atribuição flexível e personalizável de pontos com interface de gerenciamento otimizada.',

    /* Portfolio items — Obras */
    'p-o1.t': 'Dashboard de KPIs em Obras',
    'p-o1.d': 'Indicadores de engajamento com edição inline de status e prazos sem recarregar a página.',
    'p-o2.t': 'Filtros Avançados e UX no Módulo de Obras',
    'p-o2.d': 'Filtros de escopo, preenchimento automático e visualizador de imagens integrado.',
    'p-o3.t': 'Categorização Multi-Segmento para Parceiros',
    'p-o3.d': 'Múltiplos segmentos por perfil via N:N com gestão completa e integridade referencial.',

    /* Portfolio items — Relatórios */
    'p-r1.t': 'Rastreabilidade de Atendimento em Relatórios Financeiros',
    'p-r1.d': 'Identificação de vendas assistidas por atendente com coluna hierárquica para comissões.',
    'p-r2.t': 'Painel Analítico de Monitoramento',
    'p-r2.d': 'Consulta com múltiplos JOINs e agregações para dados de reservas em tempo real.',
    'p-r3.t': 'Otimização de Performance em Filtros',
    'p-r3.d': 'Refatoração sem funções de alto custo no banco, mantendo performance estável em produção.',
    'p-r4.t': 'Desenvolvimento Modular de Relatório Financeiro',
    'p-r4.d': 'Novo módulo com camadas Controller e Repository isoladas por adaptação de módulo existente.',

    /* Portfolio items — Frontend/UX */
    'p-f1.t': 'Busca Dinâmica com Autocomplete',
    'p-f1.d': 'Autocomplete via Ajax com redirecionamento automático pós-cadastro e correções de responsividade.',
    'p-f2.t': 'Refatoração de Interface para Mobile',
    'p-f2.d': 'Layout Mobile-First em duas colunas eliminando rolagem horizontal em tela operacional crítica.',
    'p-f3.t': 'Geração Dinâmica de Mensagens de Confirmação',
    'p-f3.d': 'Algoritmo que gera mensagens formatadas para WhatsApp eliminando preenchimento manual.',
    'p-f4.t': 'Integração com Google Maps',
    'p-f4.d': 'Conversão automática de endereços em links Google Maps com correções de responsividade.',
    'p-f5.t': 'CRM para Recuperação de Vendas',
    'p-f5.d': 'Reengajamento de clientes com pedidos abandonados via e-mails personalizados direto do relatório.',
    'p-f6.t': 'Finance Controller',
    'p-f6.d': 'App desktop de controle financeiro com gráficos, importação de planilhas Excel e notificações toast.',

    /* Portfolio items — Backend/API */
    'p-b1.t': 'Depuração em Módulo de Autenticação',
    'p-b1.d': 'Análise de logs críticos com tratamento defensivo e fallbacks que garantem estabilidade.',
    'p-b2.t': 'Migração Java 8 → 21: Integração ERP',
    'p-b2.d': 'Migração completa para Java 21 LTS com isolamento de ambientes de teste.',
    'p-b3.t': 'Migração Java 8 → 21: E-mails Transacionais',
    'p-b3.d': 'Modernização de microsserviço com estratégia eliminando disparo acidental em produção.',
    'p-b4.t': 'Integração de E-mail com AWS SES',
    'p-b4.d': 'Arquitetura de notificações com Amazon SES segregando métricas por aplicação. POC validada.',
    'p-b5.t': 'Precificação Dinâmica Temporal em API REST',
    'p-b5.d': 'API que calcula preço vigente ou futuro por data, com regra encapsulada no domínio.',
    'p-b6.t': 'Automação de Expiração de Vendas',
    'p-b6.d': 'Rotina com lógica condicional de expiração por período e consultas otimizadas por criticidade.',
    'p-b7.t': 'Correção de Bugs Críticos em Filtro de Vendas',
    'p-b7.d': 'Correção de conflito de collation e vulnerabilidade SQL com migração para prepared statements.',

    /* Portfolio items — Pagamentos */
    'p-p1.t': 'Gerenciamento de Meios de Pagamento',
    'p-p1.d': 'Vínculo relacional entre métodos e formas de pagamento com lógica condicional de interface.',
    'p-p2.t': 'Módulo de Terminais de Pagamento (TEF)',
    'p-p2.d': 'CRUD completo para terminais físicos com inativação lógica preservando histórico.',
    'p-p3.t': 'Edição de Itens com Controle de Desconto',
    'p-p3.d': 'Recálculo em tempo real com persistência em múltiplas tabelas e auditoria completa.',
    'p-p4.t': 'Sistema de Reservas com Pagamento Antecipado',
    'p-p4.d': 'Regras de pagamento antecipado em datas específicas com controle de capacidade por período.',
    'p-p5.t': 'Refatoração do Módulo de Caixas',
    'p-p5.d': 'Desacoplamento de provedor com isolamento de dados por tenant em todas as operações.',

    /* Portfolio items — Arquitetura */
    'p-a1.t': 'Fluxo Dinâmico de Recuperação de Acesso',
    'p-a1.d': 'Módulo de recuperação de senhas para múltiplos identificadores por configuração de cliente.',
    'p-a2.t': 'Escopo de Acesso por Tenant',
    'p-a2.d': 'Filtros garantindo que cada cliente acesse apenas seus próprios dados em todas as camadas.',
    'p-a3.t': 'Módulo de Canais de Venda com Unicidade Condicional',
    'p-a3.d': 'Validação de unicidade condicional bloqueando duplicatas para tipos operacionais específicos.',
    'p-a4.t': 'Cadastro Internacional no PDV',
    'p-a4.d': 'Campos dinâmicos para clientes nacionais e estrangeiros com alternância automática de validações.',
    'p-a5.t': 'Módulo de Gerenciamento de Recursos Físicos',
    'p-a5.d': 'Gestão de ativos físicos com controle de status e integração via chave estrangeira.',

    /* Contact */
    'contact.label':          'Vamos conversar',
    'contact.title-prefix':   'Entre em',
    'contact.title-suffix':   'Contato',
    'contact.subtitle':       'Aberta a oportunidades, freelas e parcerias',
    'contact.info-title':     'Informações de Contato',
    'contact.location-label': 'Localização',
    'contact.location-value': 'Tubarão – SC, Brasil',
    'contact.form-name':      'Nome',
    'contact.form-subject':   'Assunto',
    'contact.form-message':   'Mensagem',
    'contact.ph-name':        'Seu nome completo',
    'contact.ph-subject':     'Como posso te ajudar?',
    'contact.ph-message':     'Sua mensagem...',
    'contact.btn-send':       'Enviar Mensagem',
    'contact.btn-sending':    'Enviando...',

    /* Modal */
    'modal.title': 'Mensagem enviada!',
    'modal.desc':  'Obrigada pelo contato. Retorno em breve!',
    'modal.close': 'Fechar',

    /* Footer */
    'footer.rights': 'Todos os direitos reservados.',
  },

  en: {
    /* Navbar */
    'nav.about':       'About',
    'nav.experience':  'Experience',
    'nav.portfolio':   'Portfolio',
    'nav.contact':     'Contact',

    /* Hero */
    'hero.desc':         'Full-Stack Developer with a technical background in Electrical Engineering and Telecom. I work with <strong>PHP</strong>, <strong>Java/Spring Boot</strong>, <strong>MySQL</strong> and <strong>JavaScript</strong>, with <strong>35+ projects delivered</strong> in management systems, APIs and integrations.',
    'hero.btn-projects': 'View Projects',
    'hero.btn-contact':  'Get in Touch',

    /* Stats */
    'stat.projects':   'Projects Delivered',
    'stat.year':       'Year as Freelance Dev',
    'stat.tech':       'Technologies',
    'stat.commitment': 'Commitment',

    /* About */
    'about.label':       'About Me',
    'about.location':    'Tubarão – SC, Brazil',
    'about.degree':      'IT Systems · Uninter (2022–2026)',
    'about.tech-course': 'Electrical Engineering Technician',
    'about.p1':          'Full-Stack Developer with a technical background in Electrical Engineering and a degree in Systems Analysis and Development. I build complete web systems focused on performance, clean architecture and real value delivery.',
    'about.p2':          'With <strong class="text-highlight">35+ projects in production</strong>, I have experience in gamification, financial dashboards, API integrations, payment systems, multi-tenant architectures and Java 8 → 21 legacy migrations.',
    'about.btn-portfolio': 'View Portfolio',
    'about.btn-contact':   'Get in Touch',

    /* Stack */
    'stack.label':        'Technologies',
    'stack.title-prefix': 'My',
    'stack.subtitle':     'Tools and technologies I use every day',
    'stack.database':     'Database',
    'stack.tools':        'Tools',

    /* Experience */
    'exp.label':        'Career',
    'exp.title-prefix': 'Education',
    'exp.title-suffix': 'Experience',
    'exp.col-edu':      'Education',
    'exp.ads-title':    'Systems Analysis and Development',
    'exp.eletro-title': 'Electrical Engineering Technician',
    'exp.certs-title':  'Certifications',
    'exp.col-prof':     'Professional Experience',
    'exp.job1-period':  '2025 – Present',
    'exp.job1-title':   'Freelance Full-Stack Developer',
    'exp.job1-company': 'Independent Projects',
    'exp.job1-desc':    'PHP, Java/Spring Boot, MySQL and JavaScript. 35+ projects: gamification, dashboards, APIs, payments, UX/UI.',
    'exp.job2-period':  '2025 – Present',
    'exp.job2-title':   'Technical Support – Service Desk',
    'exp.job2-desc':    'Ticket triage and diagnostic support.',
    'exp.job3-title':   'Technical Support – Helpdesk',
    'exp.job4-title':   'Customer Service Analyst',
    'exp.job5-title':   'Design Engineer / Telecom Technician',

    /* Certifications */
    'cert.logica':      'Programming Logic',
    'cert.pensamento':  'Computational Thinking',
    'cert.ia':          'Artificial Intelligence',
    'cert.redes':       'Computer Networks',
    'cert.sucesso':     'Customer Success',
    'cert.atendimento': 'Customer Service',

    /* Featured */
    'feat.label':        'Featured',
    'feat.title-prefix': 'Highlight',
    'feat.title-suffix': 'Projects',
    'feat.subtitle':     'Work that best represents my stack and technical depth',
    'feat.c1-cat':   'Gamification',
    'feat.c1-title': 'Dynamic Balance Engine and FIFO Inventory',
    'feat.c1-desc':  'Balance calculation engine with FIFO consumption, deducting points from oldest records with a complete audit trail. Transactional consistency solution for loyalty systems.',
    'feat.c2-cat':   'Backend / Migration',
    'feat.c2-title': 'Java 8 → 21 Migration: ERP Integration',
    'feat.c2-desc':  'Full legacy microservice migration to Java 21 LTS with test environment isolation, ensuring zero impact on production during the transition.',
    'feat.c3-cat':   'Payments',
    'feat.c3-title': 'Booking System with Advance Payment',
    'feat.c3-desc':  'Configurable advance payment rules for specific dates with capacity control per period and per-tenant data isolation.',

    /* Portfolio section */
    'port.label':        'Work',
    'port.title-prefix': 'My',
    'port.title-suffix': 'Portfolio',
    'port.subtitle':     '35+ projects delivered in production',

    /* Filters */
    'filter.all':         'All',
    'filter.gamificacao': '🎮 Gamification',
    'filter.obras':       '🏗️ Construction',
    'filter.relatorios':  '📊 Reports',
    'filter.frontend':    '🎨 Frontend/UX',
    'filter.backend':     '⚙️ Backend/API',
    'filter.pagamentos':  '💳 Payments',
    'filter.arquitetura': '🔐 Architecture',

    /* Portfolio items — Gamification */
    'p-g1.t': 'Dynamic Balance Engine and FIFO Inventory',
    'p-g1.d': 'Balance calculation engine with FIFO consumption, deducting points from the oldest records with a complete audit history.',
    'p-g2.t': 'E-commerce Integration with Points Ledger',
    'p-g2.d': 'Migration of points redemption to a centralized ledger architecture with automatic transactional debit.',
    'p-g3.t': 'Data Migration to Scoring System',
    'p-g3.d': 'Migration of scoring logic to centralized architecture with legacy data model refactoring.',
    'p-g4.t': 'Centralized Scoring System Architecture',
    'p-g4.d': 'Central ledger consolidating point records from different sources with integrity constraints.',
    'p-g5.t': 'Gamification Settings Module Expansion',
    'p-g5.d': 'Dynamic scoring parameters per registration type without re-deploy.',
    'p-g6.t': 'Dynamic Scoring System for Professionals',
    'p-g6.d': 'Full-stack for flexible and customizable point assignment with an optimized management interface.',

    /* Portfolio items — Construction */
    'p-o1.t': 'KPI Dashboard for Construction Projects',
    'p-o1.d': 'Engagement indicators with inline status and deadline editing without page reload.',
    'p-o2.t': 'Advanced Filters and UX in Construction Module',
    'p-o2.d': 'Scope filters, auto-fill and integrated image viewer.',
    'p-o3.t': 'Multi-Segment Categorization for Partners',
    'p-o3.d': 'Multiple segments per profile via N:N with full management and referential integrity.',

    /* Portfolio items — Reports */
    'p-r1.t': 'Service Traceability in Financial Reports',
    'p-r1.d': 'Identification of sales assisted by agent with hierarchical column for commission tracking.',
    'p-r2.t': 'Analytical Monitoring Dashboard',
    'p-r2.d': 'Query with multiple JOINs and aggregations for real-time booking data.',
    'p-r3.t': 'Filter Performance Optimization',
    'p-r3.d': 'Refactoring without high-cost database functions, maintaining stable production performance.',
    'p-r4.t': 'Modular Financial Report Development',
    'p-r4.d': 'New module with isolated Controller and Repository layers adapted from existing module.',

    /* Portfolio items — Frontend/UX */
    'p-f1.t': 'Dynamic Search with Autocomplete',
    'p-f1.d': 'Ajax autocomplete with automatic post-registration redirect and responsiveness fixes.',
    'p-f2.t': 'Mobile Interface Refactoring',
    'p-f2.d': 'Two-column Mobile-First layout eliminating horizontal scrolling on a critical operational screen.',
    'p-f3.t': 'Dynamic Confirmation Message Generation',
    'p-f3.d': 'Algorithm generating formatted WhatsApp messages, eliminating manual input.',
    'p-f4.t': 'Google Maps Integration',
    'p-f4.d': 'Automatic conversion of addresses into Google Maps links with responsiveness fixes.',
    'p-f5.t': 'CRM for Sales Recovery',
    'p-f5.d': 'Re-engagement of customers with abandoned orders via personalized emails directly from the report.',
    'p-f6.t': 'Finance Controller',
    'p-f6.d': 'Desktop financial management app with charts, Excel spreadsheet import and toast notifications.',

    /* Portfolio items — Backend/API */
    'p-b1.t': 'Authentication Module Debugging',
    'p-b1.d': 'Critical log analysis with defensive handling and fallbacks ensuring stability.',
    'p-b2.t': 'Java 8 → 21 Migration: ERP Integration',
    'p-b2.d': 'Full migration to Java 21 LTS with test environment isolation.',
    'p-b3.t': 'Java 8 → 21 Migration: Transactional Emails',
    'p-b3.d': 'Microservice modernization with a strategy preventing accidental production triggers.',
    'p-b4.t': 'Email Integration with AWS SES',
    'p-b4.d': 'Notification architecture with Amazon SES segregating metrics per application. Validated POC.',
    'p-b5.t': 'Temporal Dynamic Pricing in REST API',
    'p-b5.d': 'API that calculates current or future price by date, with rule encapsulated in the domain.',
    'p-b6.t': 'Sales Expiration Automation',
    'p-b6.d': 'Scheduled routine with conditional expiration logic and queries optimized by criticality.',
    'p-b7.t': 'Critical Bug Fix in Sales Filter',
    'p-b7.d': 'Collation conflict fix and SQL vulnerability patched with migration to prepared statements.',

    /* Portfolio items — Payments */
    'p-p1.t': 'Payment Methods Management',
    'p-p1.d': 'Relational link between payment methods and forms with conditional interface logic.',
    'p-p2.t': 'Payment Terminal Module (TEF)',
    'p-p2.d': 'Full CRUD for physical terminals with logical deactivation preserving history.',
    'p-p3.t': 'Item Editing with Discount Control',
    'p-p3.d': 'Real-time recalculation with persistence across multiple tables and full audit trail.',
    'p-p4.t': 'Booking System with Advance Payment',
    'p-p4.d': 'Advance payment rules for specific dates with capacity control per period.',
    'p-p5.t': 'Cash Register Module Refactoring',
    'p-p5.d': 'Provider decoupling with per-tenant data isolation across all operations.',

    /* Portfolio items — Architecture */
    'p-a1.t': 'Dynamic Access Recovery Flow',
    'p-a1.d': 'Password recovery module for multiple identifiers per client configuration.',
    'p-a2.t': 'Tenant-Scoped Access Control',
    'p-a2.d': 'Filters ensuring each client accesses only their own data across all layers.',
    'p-a3.t': 'Sales Channel Module with Conditional Uniqueness',
    'p-a3.d': 'Conditional uniqueness validation blocking duplicates for specific operational types.',
    'p-a4.t': 'International Registration at POS',
    'p-a4.d': 'Dynamic fields for domestic and foreign customers with automatic validation switching.',
    'p-a5.t': 'Physical Resource Management Module',
    'p-a5.d': 'Physical asset management with status control and foreign key integration.',

    /* Contact */
    'contact.label':          "Let's Talk",
    'contact.title-prefix':   'Get in',
    'contact.title-suffix':   'Touch',
    'contact.subtitle':       'Open to opportunities, freelance and partnerships',
    'contact.info-title':     'Contact Information',
    'contact.location-label': 'Location',
    'contact.location-value': 'Tubarão – SC, Brazil',
    'contact.form-name':      'Name',
    'contact.form-subject':   'Subject',
    'contact.form-message':   'Message',
    'contact.ph-name':        'Your full name',
    'contact.ph-subject':     'How can I help you?',
    'contact.ph-message':     'Your message...',
    'contact.btn-send':       'Send Message',
    'contact.btn-sending':    'Sending...',

    /* Modal */
    'modal.title': 'Message sent!',
    'modal.desc':  "Thank you for reaching out. I'll get back to you soon!",
    'modal.close': 'Close',

    /* Footer */
    'footer.rights': 'All rights reserved.',
  },
};

/* ── Core ──────────────────────────────────────────────────── */
let currentLang = localStorage.getItem('lang') || 'pt';

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  /* Plain text */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* HTML (elements with inline tags like <strong>) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* Placeholders */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  /* html lang attribute */
  document.getElementById('html-root').lang = lang === 'pt' ? 'pt-BR' : 'en-US';

  /* Update all toggle button labels */
  document.querySelectorAll('.lang-label').forEach(el => {
    el.textContent = lang === 'pt' ? 'EN' : 'PT';
  });

  currentLang = lang;
  localStorage.setItem('lang', lang);
}

function toggleLang() {
  applyLang(currentLang === 'pt' ? 'en' : 'pt');
}

/* Attach to both desktop and mobile buttons */
document.querySelectorAll('#lang-toggle, #lang-toggle-mobile').forEach(btn => {
  btn?.addEventListener('click', toggleLang);
});

/* Apply on load */
applyLang(currentLang);
