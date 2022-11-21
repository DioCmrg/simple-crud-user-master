import XLSX from "xlsx";

export default function parseXLSX(file: string) {
    const arquivo = XLSX.readFile(file);
    // console.log(arquivo);
    const parsedData = XLSX.utils.sheet_to_json(
        arquivo.Sheets[arquivo.SheetNames[0]]
    );

    console.log(parsedData);
    return parsedData as any[];
}
