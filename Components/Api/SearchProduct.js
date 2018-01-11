const searchProduct = (key) => {
    const url = `http://http://10.90.114.24:1080/api/search.php?key=${key}`;
    return fetch(url)
        .then(res => res.json());
};

export default searchProduct;
