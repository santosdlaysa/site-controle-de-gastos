export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-10">
        {/* Header */}
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 ring-1 ring-cyan-500/40">
              <span className="text-lg font-bold text-cyan-400">CG</span>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight text-slate-100">
                Controle de Gastos
              </p>
              <p className="text-xs text-slate-400">
                App móvel para organizar suas finanças
              </p>
            </div>
          </div>

          <a
            href="#download"
            className="rounded-full border border-cyan-400/60 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-100 shadow-sm transition hover:bg-cyan-500/20 hover:border-cyan-300"
          >
            Baixar o app
          </a>
        </header>

        {/* Hero */}
        <main className="mt-16 grid flex-1 gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
          <section className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Controle simples, do seu jeito
            </div>

            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
                Saiba exatamente{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  para onde seu dinheiro vai
                </span>
                .
              </h1>
              <p className="text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
                O app <strong>Controle de Gastos</strong> ajuda você a registrar despesas,
                acompanhar parcelas, ver o saldo do mês e não se perder nos boletos.
                Tudo rápido, visual e pensado para o dia a dia.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#download"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
              >
                Quero organizar minhas contas
              </a>
              <p className="text-xs text-slate-400">
                Sem cadastro complicado. Em poucos minutos você vê o resumo do mês.
              </p>
            </div>

            <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-700/80 bg-slate-900/40 p-4">
                <p className="font-semibold text-slate-50">Despesas por categoria</p>
                <p className="mt-1 text-xs text-slate-400">
                  Veja quanto está gastando em alimentação, transporte, moradia e mais.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700/80 bg-slate-900/40 p-4">
                <p className="font-semibold text-slate-50">Parcelas e recorrências</p>
                <p className="mt-1 text-xs text-slate-400">
                  Acompanhe facilmente quais parcelas já foram pagas e o que vem no próximo mês.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700/80 bg-slate-900/40 p-4">
                <p className="font-semibold text-slate-50">Saldo do mês em destaque</p>
                <p className="mt-1 text-xs text-slate-400">
                  Veja quanto sobrou da sua renda depois de todas as despesas.
                </p>
              </div>
            </div>
          </section>

          {/* Mobile preview card */}
          <section className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-emerald-400/10 to-sky-500/30 blur-3xl" />

              <div className="relative h-[460px] w-[240px] rounded-[2.5rem] border border-slate-600/60 bg-gradient-to-b from-slate-900 to-slate-950 p-4 shadow-2xl">
                <div className="mx-auto mb-3 h-1 w-16 rounded-full bg-slate-600/70" />

                <div className="space-y-4 text-xs text-slate-100">
                  <div className="rounded-2xl bg-slate-900/80 p-3">
                    <p className="text-[10px] text-slate-400">Resumo de Março</p>
                    <p className="mt-1 text-lg font-semibold text-emerald-300">
                      Saldo: R$ 1.250,00
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      Renda: R$ 4.000,00 · Despesas: R$ 2.750,00
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[11px] font-medium text-slate-300">
                      Despesas deste mês
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-400" />
                          <div>
                            <p className="text-[11px] font-medium text-slate-100">
                              Mercado do mês
                            </p>
                            <p className="text-[10px] text-slate-400">Alimentação</p>
                          </div>
                        </div>
                        <p className="text-[11px] font-semibold text-slate-100">
                          R$ 680,00
                        </p>
                      </div>

                      <div className="flex items-center justify-between rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-cyan-400" />
                          <div>
                            <p className="text-[11px] font-medium text-slate-100">
                              Cartão de crédito
                            </p>
                            <p className="text-[10px] text-slate-400">3/10 parcelas</p>
                          </div>
                        </div>
                        <p className="text-[11px] font-semibold text-slate-100">
                          R$ 420,00
                        </p>
                      </div>

                      <div className="flex items-center justify-between rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-rose-400" />
                          <div>
                            <p className="text-[11px] font-medium text-slate-100">
                              Aluguel
                            </p>
                            <p className="text-[10px] text-slate-400">Moradia</p>
                          </div>
                        </div>
                        <p className="text-[11px] font-semibold text-slate-100">
                          R$ 1.200,00
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3 text-[10px] text-emerald-50">
                    Dica: marque as despesas pagas e visualize só o que ainda falta
                    pagar no mês atual.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer simples */}
        <footer id="download" className="mt-10 border-t border-slate-800/80 pt-6">
          <div className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Controle de Gastos. Todos os direitos reservados.</p>
            <p className="text-xs">
              Em breve disponível na Play Store. Enquanto isso, entre em contato com a criadora para instalar o app.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
