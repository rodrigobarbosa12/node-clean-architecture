const XLSX = require('xlsx');

const range = (length) => Array.from({ length });

const process = async (files) => {
  await files.mv(`${__dirname}/${files.name}`);

  const workbook = XLSX.readFile(`${__dirname}/${files.name}`);
  
  const sheetNames = workbook.SheetNames;

  return sheetNames.map((name) => {
    const item = XLSX.utils.sheet_to_json(workbook.Sheets[name], { header: 1 });
    
    range(5).forEach(() => item.shift());

    return item.map((item) => ({
      id: item[0],
      canal: item[1],
      classificacao: item[2],
      nome: item[3],
      cnpj: item[4],
      ramoAtividade: item[5],
      grupo: item[6],
      nomeContato: item[7],
      emailContato: item[8],
      telefoneContato: item[9]
    }));
  })[0];
};

module.exports = {
  process,
}