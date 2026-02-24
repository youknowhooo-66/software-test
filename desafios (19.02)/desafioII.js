// 1. Adicione o Taz no início do array de gangue, somente se o array estiver vazio

function adicionarTaz(gangue) {
if(gangue === null){
let trupe = gangue.map(gangue => gangue.toLowerCase()) 
trupe.push('Taz')  }else{
    console.log('O TAZ TEM VERGONHA E SÓ APARECE SE O ARRAY ESTIVER VAZIO')
}
    return trupe
}

// 2. Remova o último membro, a menos que esse membro seja o Taz.

function removerUltimo(gangue){
if('Taz' !== gangue[gangue.length - 1]){
 gangue.pop()
}else{
    console.log('Não me obrigue a tirar o Taz :(')
}
}

// 3. Remova o primeiro membro somente se o nome dele tiver menos de 5 letras.

function removerPrimeiro(gangue){
if(gangue[0].length === 5){
   gangue.shift()
}
}

// 4. Adicione Tina apenas se existir alguém cujo nome termine com a letra “a”.

function adicionarTina(gangue){
    const existeComA = gangue.some(nome => nome.toLowerCase().endsWith('a'))
    if (!existeComA) {
        gangue.push("Tina")

    } else {
        console.log('Tina não adicionado, existe personagem que termine com A.')
    }
}

// 5. Crie uma cópia contendo apenas os membros com nomes entre 5 e 8 letras.

function copiaGangue(gangue){
    let trupe = gangue.map()
}