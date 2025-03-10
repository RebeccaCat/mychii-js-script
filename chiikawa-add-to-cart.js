var products = [
    { id: '4550213539867', quantity: 1 },
    { id: '4522327953150', quantity: 1 },
    { id: '4522327953525', quantity: 1 }
];

// 遍歷陣列，依次發送 AJAX 請求
products.forEach(function(product) {
    $.ajax({
        url: '/zh-hant/cart/add',  // 替換成你平台的加入購物車 API 路徑
        method: 'POST',
        data: {
            productId: product.id,
            quantity: product.quantity,
            // 若有需要，可加入 CSRF token 或其他驗證資訊
        },
        success: function(response) {
            console.log('商品 ' + product.id + ' 已成功加入購物車');
        },
        error: function(err) {
            console.error('商品 ' + product.id + ' 加入購物車失敗', err);
        }
    });
});