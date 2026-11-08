import dashboard from '../../assets/images/projects/kontrol/1.png'
import transactions from '../../assets/images/projects/kontrol/2.png'
import transactionList from '../../assets/images/projects/kontrol/3.png'
import editTransaction from '../../assets/images/projects/kontrol/4.png'
import deleteTransaction from '../../assets/images/projects/kontrol/5.png'
import reports from '../../assets/images/projects/kontrol/6.png'
import categoryReport from '../../assets/images/projects/kontrol/7.png'

const gallery = [
    { src: transactions, alt: 'Tela de transações com receitas, despesas, busca e filtros' },
    { src: transactionList, alt: 'Lista de movimentações financeiras do Kontrol Finance' },
    { src: editTransaction, alt: 'Formulário para edição de uma despesa' },
    { src: deleteTransaction, alt: 'Confirmação de exclusão de uma transação' },
    { src: reports, alt: 'Relatório financeiro com indicadores e evolução mensal' },
    { src: categoryReport, alt: 'Gráfico de despesas organizadas por categoria' },
]

const KontrolFinance = () => (
    <div className="single-project-page-design">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center pb-30">
                    <p>Kontrol Finance</p>
                    <h1>SaaS para controle e visualização financeira</h1>
                </div>
            </div>
        </div>

        <div className="single-project-image">
            <img src={dashboard} alt="Dashboard principal do Kontrol Finance" />
        </div>

        <div className="container pt-30">
            <div className="row">
                <div className="col-lg-4">
                    <div className="single-project-page-left wow fadeInUp delay-0-2s">
                        <div className="single-info">
                            <p>Ano</p>
                            <h3>2026</h3>
                        </div>
                        <div className="single-info">
                            <p>Serviços</p>
                            <h3>Desenvolvimento Full Stack, UX/UI</h3>
                        </div>
                        <div className="single-info">
                            <p>Projeto</p>
                            <h3>SaaS Financeiro</h3>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8">
                    <div className="single-project-page-right wow fadeInUp delay-0-4s">
                        <h2>Descrição</h2>
                        <p>O Kontrol Finance foi desenvolvido para reunir as principais informações financeiras em uma experiência simples e objetiva. O dashboard apresenta receitas, despesas, saldo e distribuição dos gastos para facilitar o acompanhamento mensal.</p>
                        <p>O sistema permite consultar, buscar, filtrar, editar e excluir movimentações. A área de relatórios transforma os registros em indicadores e gráficos, ajudando o usuário a compreender sua evolução financeira e os gastos por categoria.</p>
                    </div>
                </div>
            </div>

            <div className="row pt-30">
                {gallery.map(({ src, alt }, index) => (
                    <div className="col-lg-6" key={src}>
                        <div className={`single-image wow fadeInUp delay-0-${(index % 4) + 2}s`}>
                            <img src={src} alt={alt} loading="lazy" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

export default KontrolFinance
