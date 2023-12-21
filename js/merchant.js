products = [
    {
      "product": "feijao",
      "purshase_price": 10.00,
      "sale_price": 11.00
    },
    {
      "product": "arroz",
      "purshase_price": 12.00,
      "sale_price": 12.80
    },
    {
      "product": "oleo",
      "purshase_price": 5.00,
      "sale_price": 5.70
    },
    {
      "product": "sal",
      "purshase_price": 5.00,
      "sale_price": 5.70
    }
];

const profitProducts = (products) => {
    let countProfitBelow10perc = 0;
    let countProfitBetween10and20perc = 0;
    let countProfitAbove20perc = 0;
    let totalPurshase = 0.0;
    let totalSale = 0.0;
    
    for (const item of products) {
        let profitItem = (item.sale_price - item.purshase_price) / item.purshase_price * 100.0;
        
        if (profitItem < 10.0) {
            countProfitBelow10perc++;
        } 
        else if (profitItem < 20.0) {
            countProfitBetween10and20perc++;
        }
        else {
            countProfitAbove20perc++;
        }

        totalPurshase += item.purshase_price;
        totalSale += item.sale_price;
    }

    const totalProfit = totalSale - totalPurshase;

    console.log("\nRELATORIO:");
    console.log(`Lucro abaixo de 10%: ${countProfitBelow10perc}`);
    console.log(`Lucro entre 10% e 20%: ${countProfitBetween10and20perc}`);
    console.log(`Lucro acima de 20%: ${countProfitBelow10perc}`);
    console.log(`Valor total de compra: ${totalPurshase.toFixed(2)}`);
    console.log(`Valor total de venda: ${totalSale.toFixed(2)}`);
    console.log(`Lucro total: ${totalProfit.toFixed(2)}`);
};

profitProducts(products);