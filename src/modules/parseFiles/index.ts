import parseXLSX from "./leitores/xlsx";
import path from "path";
import bcrypty from "bcryptjs";
import { user } from "../../models";

export default function parseFile(file: string): any[] {
    "usuario.final.xlsx";
    const extencao = file.split(".").pop();

    let data = [];
    switch (extencao) {
        case "xlsx":
            data = parseXLSX(file);
            break;
        default:
            console.log("arquivo não mapeado");
    }

    return data;
}

// salvar as informacoes no banco de dados
async function salvarDados(dados: any) {
    const dadosFormatados = dados.map((item: any) => {
        const pass = bcrypty.hashSync(item.senha, 10);

        return { ...item, senha: pass };
    });
    const usuarios = await user.instance.bulkCreate(dadosFormatados);
    return usuarios;
}

// parseFile(path.resolve("usuarios.xlsx"));
