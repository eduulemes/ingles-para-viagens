import React, { useState } from 'react';

const checkoutUrl = ''; // Inserir aqui o link de checkout da oferta Inglês para Viagens.

const modules = [
  ['01', 'Preparando a viagem', 'Planejamento, reservas e perguntas antes de embarcar.'],
  ['02', 'No aeroporto', 'Check-in, despacho de bagagem, portão de embarque e conexões.'],
  ['03', 'Imigração e alfândega', 'Respostas simples para as perguntas mais comuns na chegada.'],
  ['04', 'Durante o voo', 'Conversas com a equipe, pedidos e situações dentro do avião.'],
  ['05', 'Chegada e transporte', 'Táxi, aplicativos, ônibus, metrô e como encontrar seu destino.'],
  ['06', 'No hotel', 'Reserva, check-in, solicitações e resolução de problemas.'],
  ['07', 'Restaurantes e alimentação', 'Fazer pedidos, entender o cardápio e pedir a conta.'],
  ['08', 'Compras e passeios', 'Preços, tamanhos, ingressos, horários e informações.'],
  ['09', 'Problemas e emergências', 'Pedir ajuda, explicar imprevistos e buscar atendimento.'],
  ['10', 'Conversas do dia a dia', 'Cumprimentos, apresentações e interações durante a viagem.'],
];

const bonuses = [
  { n: 'BÔNUS 01', title: '100 frases para situações de emergência', desc: 'Frases úteis para pedir ajuda e explicar o que aconteceu.', value: 'R$ 37' },
  { n: 'BÔNUS 02', title: 'Guia rápido de imigração', desc: 'Perguntas comuns e formas simples de responder.', value: 'R$ 27' },
  { n: 'BÔNUS 03', title: '100 expressões para entender melhor', desc: 'Expressões frequentes em conversas e situações informais.', value: 'R$ 47' },
  { n: 'BÔNUS 04', title: 'Guia rápido de pronúncia', desc: 'Orientações para ler as frases e praticar em voz alta.', value: 'R$ 63' },
];

function Icon({ name, size = 22 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const paths = {
    plane: <><path d="m2 16 20-5-20-5 5 5-5 5Z"/><path d="m7 11 4 2"/></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5z"/><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20"/></>,
    headphones: <><path d="M3 14v-2a9 9 0 0 1 18 0v2"/><rect x="3" y="13" width="4" height="7" rx="2"/><rect x="17" y="13" width="4" height="7" rx="2"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
    arrow: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
    message: <><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/></>,
  };
  return <svg {...common}>{paths[name] || paths.check}</svg>;
}

function BuyLink({ children = 'QUERO ACESSAR A APOSTILA', className = 'button' }) {
  return <a className={className} href={checkoutUrl || '#oferta'} onClick={checkoutUrl ? undefined : (e) => { e.preventDefault(); document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' }); }}>{children}<Icon name="arrow" size={18}/></a>;
}

function SectionTitle({ eyebrow, children, subtitle }) {
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{children}</h2>{subtitle && <p>{subtitle}</p>}</div>;
}

export default function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const faqs = [
    ['Preciso saber inglês para usar a apostila?', 'Não. A proposta é justamente ajudar quem ainda não domina o idioma. As frases vêm acompanhadas da tradução e de uma pronúncia aproximada escrita com letras do português.'],
    ['Como funciona a pronúncia escrita?', 'Cada frase apresenta uma forma aproximada de pronunciar o inglês usando letras familiares do português. Ela serve como apoio para praticar, não como substituição de áudio ou de um professor.'],
    ['Como vou receber o material?', 'O material é digital em PDF. Após a confirmação do pagamento, o acesso será enviado pelo canal informado na finalização da compra.'],
    ['Posso acessar pelo celular?', 'Sim. Você pode abrir o PDF em um celular, tablet ou computador e consultar as frases sempre que precisar.'],
    ['O pagamento é mensal?', 'Não. A oferta é de pagamento único, sem mensalidade.'],
  ];

  return <main>
    <div className="topbar"><span><Icon name="globe" size={15}/> INGLÊS PARA VIAGENS</span><span>APOSTILA DIGITAL • ACESSO EM PDF</span></div>

    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="pill"><span className="pill-dot"/> PARA QUEM QUER VIAJAR COM MAIS CONFIANÇA</div>
          <h1>Viaje para o exterior sabendo <em>o que falar</em> em inglês.</h1>
          <p className="hero-lead">Mesmo sem dominar o idioma: tenha frases prontas, tradução e a pronúncia escrita do jeito que se fala em português.</p>
          <div className="hero-points">
            <span><Icon name="check" size={17}/> 500 frases essenciais para viajar</span>
            <span><Icon name="check" size={17}/> Tradução em português</span>
            <span><Icon name="check" size={17}/> Pronúncia escrita para praticar</span>
          </div>
          <BuyLink>QUERO VIAJAR MAIS PREPARADO</BuyLink>
          <div className="secure-note"><Icon name="shield" size={15}/> Pagamento único • Material digital em PDF</div>
        </div>
        <div className="hero-art" aria-label="Ilustração de passaporte, cartão de embarque e guia de inglês">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="floating-stamp"><Icon name="plane" size={22}/><span>READY<br/>TO GO</span></div>
          <div className="passport">
            <div className="passport-top">PASSPORT</div><div className="passport-globe"><Icon name="globe" size={58}/></div>
            <div className="passport-bottom">TRAVEL DOCUMENT</div>
          </div>
          <div className="boarding">
            <div className="boarding-label">BOARDING PASS</div><div className="boarding-route"><strong>YOU</strong><span>✈</span><strong>WORLD</strong></div>
            <div className="boarding-lines"><i/><i/><i/></div><small>YOUR NEXT ADVENTURE STARTS HERE</small>
          </div>
          <div className="speech-card"><b>Excuse me...</b><span>Com licença...</span><small>ik-SKIUZ mi</small></div>
          <div className="art-caption">ENGLISH MADE SIMPLE</div>
        </div>
      </div>
      <div className="hero-wave"/>
    </section>

    <section className="trust-strip">
      <div><Icon name="book"/><span><b>500 frases</b><small>para situações reais</small></span></div>
      <div><Icon name="message"/><span><b>Tradução</b><small>para entender cada frase</small></span></div>
      <div><Icon name="headphones"/><span><b>Pronúncia escrita</b><small>para ler e praticar</small></span></div>
      <div><Icon name="globe"/><span><b>10 módulos</b><small>do embarque ao passeio</small></span></div>
    </section>

    <section className="problem section">
      <SectionTitle eyebrow="A DIFICULDADE DE MUITA GENTE" subtitle="Você não precisa falar inglês perfeitamente para se preparar melhor para uma viagem.">Já imaginou estar em outro país e não saber <em>como pedir ajuda?</em></SectionTitle>
      <div className="problem-grid">
        <div className="problem-card"><span className="problem-icon">01</span><h3>No aeroporto</h3><p>Não entender uma pergunta no check-in ou na imigração pode deixar qualquer pessoa insegura.</p></div>
        <div className="problem-card"><span className="problem-icon">02</span><h3>No hotel</h3><p>Precisar confirmar uma reserva, pedir algo ou explicar um problema sem saber o que dizer.</p></div>
        <div className="problem-card"><span className="problem-icon">03</span><h3>Na rua ou restaurante</h3><p>Querer pedir uma informação, fazer um pedido ou simplesmente conversar.</p></div>
      </div>
      <p className="problem-bottom">Com as frases certas em mãos, você consegue se preparar antes de sair de casa.</p>
    </section>

    <section className="solution section">
      <div className="solution-visual"><div className="mini-book"><span>TRAVEL<br/>ENGLISH</span><Icon name="plane" size={34}/><small>PHRASES TO GO</small></div><div className="solution-note"><b>“Where is the gate?”</b><span>Onde fica o portão?</span><small>uér iz dhâ gueit?</small></div></div>
      <div className="solution-copy"><span className="eyebrow">UMA FORMA MAIS SIMPLES DE SE PREPARAR</span><h2>Aprenda frases úteis sem precisar decorar regras complicadas.</h2><p>A apostila reúne situações comuns de uma viagem e apresenta frases que você pode consultar, ler em voz alta e praticar no seu ritmo.</p><ul><li><Icon name="check"/> Inglês original + tradução</li><li><Icon name="check"/> Pronúncia aproximada escrita em português</li><li><Icon name="check"/> Organização por situações da viagem</li><li><Icon name="check"/> Consulta fácil no celular ou computador</li></ul><BuyLink>QUERO CONHECER A APOSTILA</BuyLink></div>
    </section>

    <section className="inside section">
      <SectionTitle eyebrow="O QUE VOCÊ VAI RECEBER" subtitle="Conteúdo organizado para acompanhar você em diferentes momentos da viagem.">500 frases divididas em <em>10 módulos práticos</em></SectionTitle>
      <div className="module-grid">{modules.map(([n, title, desc]) => <article className="module-card" key={n}><span>{n}</span><div><h3>{title}</h3><p>{desc}</p></div><Icon name="arrow" size={18}/></article>)}</div>
      <div className="inside-foot"><span>10 módulos • 500 frases • Tradução + pronúncia escrita</span><BuyLink>QUERO TER ACESSO</BuyLink></div>
    </section>

    <section className="example section">
      <div className="example-head"><span className="eyebrow">VEJA COMO FUNCIONA</span><h2>Você lê a frase, entende o significado e pratica a pronúncia.</h2><p>Um exemplo do formato que você encontrará na apostila:</p></div>
      <div className="phrase-list">
        <div className="phrase"><span className="phrase-num">01</span><div><small>NO AEROPORTO</small><h3>Where is the check-in counter?</h3><p>Onde fica o balcão de check-in?</p><b>uér iz dhâ tchék-in káunter?</b></div><span className="sound">A</span></div>
        <div className="phrase"><span className="phrase-num">02</span><div><small>NO HOTEL</small><h3>I have a reservation.</h3><p>Eu tenho uma reserva.</p><b>ai rév â rézâr-vêi-shân.</b></div><span className="sound">A</span></div>
        <div className="phrase"><span className="phrase-num">03</span><div><small>NO RESTAURANTE</small><h3>Can I see the menu, please?</h3><p>Posso ver o cardápio, por favor?</p><b>kén ai sí dhâ méniu, plíz?</b></div><span className="sound">A</span></div>
      </div>
      <p className="example-disclaimer">A pronúncia é uma aproximação escrita para facilitar a leitura por falantes de português.</p>
    </section>

    <section className="bonus section">
      <SectionTitle eyebrow="E TEM MAIS" subtitle="Materiais complementares pensados para ajudar você a se preparar para diferentes situações.">Ao adquirir a apostila, você também recebe <em>4 materiais bônus</em></SectionTitle>
      <div className="bonus-grid">{bonuses.map((b) => <article className="bonus-card" key={b.n}><span>{b.n}</span><div className="bonus-icon"><Icon name="book" size={25}/></div><h3>{b.title}</h3><p>{b.desc}</p><small>VALOR SUGERIDO: {b.value}</small></article>)}</div>
      <div className="bonus-total"><span>Materiais complementares para sua preparação</span><strong>4 BÔNUS INCLUSOS</strong></div>
    </section>

    <section className="forwho section">
      <div><span className="eyebrow">FEITO PARA VOCÊ</span><h2>Uma ajuda prática para quem quer aproveitar melhor a viagem.</h2><p>Este material pode ser útil se você:</p></div>
      <div className="forwho-list"><p><Icon name="check"/> Vai viajar para um país onde o inglês é usado.</p><p><Icon name="check"/> Sente insegurança por não dominar o idioma.</p><p><Icon name="check"/> Quer se preparar para aeroporto, hotel e restaurantes.</p><p><Icon name="check"/> Prefere aprender com exemplos práticos e diretos.</p><p><Icon name="check"/> Quer consultar frases sempre que precisar.</p></div>
    </section>

    <section className="offer section" id="oferta">
      <div className="offer-ribbon">ACESSO DIGITAL • PAGAMENTO ÚNICO</div>
      <div className="offer-content">
        <div className="offer-copy"><span className="eyebrow">SUA PRÓXIMA VIAGEM COMEÇA AQUI</span><h2>Prepare-se para viajar com mais confiança.</h2><p>Tenha 500 frases essenciais, tradução e pronúncia escrita em um só material.</p><ul><li><Icon name="check"/> Apostila com 500 frases</li><li><Icon name="check"/> 10 módulos organizados por situação</li><li><Icon name="check"/> Tradução e pronúncia escrita</li><li><Icon name="check"/> 4 materiais bônus complementares</li><li><Icon name="check"/> Arquivo digital em PDF</li></ul></div>
        <div className="price-card"><div className="price-label">OFERTA ESPECIAL</div><p className="price-caption">Pagamento único de</p><div className="price"><small>R$</small>27<span>,90</span></div><p className="price-sub">Sem mensalidade</p><BuyLink className="button button-yellow">QUERO MINHA APOSTILA</BuyLink><div className="payment-note"><Icon name="shield" size={16}/> Compra processada em ambiente seguro</div><div className="delivery"><Icon name="mail" size={18}/><span><b>Material digital</b><small>Envio após confirmação do pagamento</small></span></div></div>
      </div>
    </section>

    <section className="faq section">
      <SectionTitle eyebrow="AINDA TEM DÚVIDAS?" subtitle="Confira as respostas para as perguntas mais comuns.">Perguntas frequentes</SectionTitle>
      <div className="faq-list">{faqs.map(([q,a],i)=><div className={'faq-item '+(openFaq===i?'active':'')} key={q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span>{q}</span><b>{openFaq===i?'−':'+'}</b></button>{openFaq===i&&<p>{a}</p>}</div>)}</div>
    </section>

    <footer><div className="footer-brand"><Icon name="globe" size={24}/> INGLÊS PARA VIAGENS</div><p>Material digital de apoio ao aprendizado de inglês para situações de viagem.</p><small>© {new Date().getFullYear()} • Todos os direitos reservados.</small></footer>
    <a className="mobile-buy" href="#oferta">QUERO MINHA APOSTILA • R$ 27,90 <Icon name="arrow" size={17}/></a>
  </main>;
}