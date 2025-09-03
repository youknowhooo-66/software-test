import { useState } from 'react'
import './App.css'

function App() {
 const ProdutosAntigos = [
  { id: 1,
   nome: 'Estante_de_madeira',
   preco: 250.00,
   data: '2022-05-10'
  },
  { id: 2,
  nome: 'Cadeira_de_escritorio',
  preco: 300.00,
  data: '2021-11-15'
  },
  { id: 3,
  nome: 'Mesa_de_centro',
  preco: 150.00,
  data: '2020-08-20'
  },
  { id: 4,
  nome: 'Sofa_de_couro',
  preco: 800.00, 
  data: '2019-12-05'
  },
  { id: 5,
  nome: 'Armario_de_cozinha',
  preco: 600.00,
  data: '2021-03-30'
  },
  { id: 6,
  nome: 'Cama_de_casal',
  preco: 1200.00,
  data: '2025-08-25'
  },
  { id: 7,
  nome: 'Guarda_roupa',
  preco: 950.00,
  data: '2019-07-14'
  },
  { id: 8,
  nome: 'Aparador_de_sala',
  preco: 400.00,
  data: '2021-09-09'
  },
  { id: 9,
  nome: 'Poltrona_de_leitura',
  preco: 350.00,
  data: '2025-08-22'
  },
  { id: 10,
  nome: 'Rack_para_TV',
  preco: 500.00,
  data: '2022-02-18'
  }
]

  const [mostrarDesconto, setMostrarDesconto] = useState(false)

  const ExibirDesconto = () => {
    setMostrarDesconto(true)
  }

  const ProdutosComDesconto = mostrarDesconto
    ? ProdutosAntigos
        .filter(produto => produto.data < '2025-07-29')
        .map(produto => ({
          ...produto,
          nome: produto.nome.replace(/_/g, ' '),
          precoComDesconto: (produto.preco * 0.7).toFixed(2)
        }))
        .sort((a, b) => a.preco - b.preco)
    : ProdutosAntigos
        .map(produto => ({
          ...produto,
          nome: produto.nome.replace(/_/g, ' ')
        }))
        .sort((a, b) => a.preco - b.preco)

  return (
    <>
      <label className='font-extrabold'>Liquidação na Romero Brique!</label>
          <p>PRODUTOS SELECIONADOS COM ATÉ 30% DE DESCONTO!!!</p>
      {ProdutosComDesconto.map((produto) => (
        <div key={produto.id} className="flex flex-col border p-4 m-2 rounded-lg shadow-lg bg-white vmax-w-sm">
          <h2>{produto.nome}</h2>
          <p>Preço Original: R$ {(produto.preco).toFixed(2)}</p>
          <p>Data de Aquisição: {produto.data}</p>
          {mostrarDesconto && (
          <p>Preço com Desconto: R$ {produto.precoComDesconto}</p>
          )}
        </div>
      ))}
      { !mostrarDesconto
      
       ? (<button onClick={ExibirDesconto} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Aplicar Desconto
          </button>)
       : (<button onClick={() => setMostrarDesconto(false)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
          Voltar à Exibição Padrão
          </button>)

      }
    </>
  )
}

export default App
