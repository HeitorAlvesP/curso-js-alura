import fs from 'fs';
import chalk from 'chalk';
import { error } from 'console';

const texto_teste = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'

function extrailink(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = regex.exec(texto)
    console.log(capturas)
}

extrailink(texto_teste)

function trataErro(erro){
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'não há arquivo nesse diretorio'));
};

async function pegaArquivo(caminho){
    try{
        const encoding = 'utf-8'
        const texto = await fs.promises.readFile(caminho, encoding)
        console.log(chalk.green(texto))
    } catch (erro) {
        trataErro(error)
    }
}

//pegaArquivo('./arquivos/texto.md'); 