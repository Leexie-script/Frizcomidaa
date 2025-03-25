 const products = [
    [
        { name: "Cedevita", unit: "kom", volume: 105, box: 30, pallet: 198, code: "003216", barcode: "8606017432661", image: "cedevita.png", category: "svi" },
        { name: "Frozen jogood kajsija", unit: "kom", volume: 120, box: 20, pallet: 120, code: "003284", barcode: "8606017433460", image: "jogood_kajsija.png", category: "povrce" },
        { name: "Frozen jogood višnja", unit: "kom", volume: 120, box: 20, pallet: 120, code: "003255", barcode: "8606017433033", image: "jogood_visnja.png", category: "povrce" },
        { name: "Losos filet", unit: "kg", volume: 500, box: 10, pallet: 80, code: "003400", barcode: "8606017434000", image: "losos.png", category: "riba" },
        { name: "Pohovane lignje", unit: "kg", volume: 1000, box: 5, pallet: 60, code: "003500", barcode: "8606017435000", image: "lignje.png", category: "riba" },
        { name: "Gotova sarma", unit: "kg", volume: 750, box: 8, pallet: 50, code: "003600", barcode: "8606017436000", image: "sarma.png", category: "gotova" },{ name: "Cedevita", unit: "kom", volume: 105, box: 30, pallet: 198, code: "003216", barcode: "8606017432661", image: "cedevita.png", category: "svi" },
        { name: "Frozen jogood kajsija", unit: "kom", volume: 120, box: 20, pallet: 120, code: "003284", barcode: "8606017433460", image: "jogood_kajsija.png", category: "povrce" },
        { name: "Frozen jogood višnja", unit: "kom", volume: 120, box: 20, pallet: 120, code: "003255", barcode: "8606017433033", image: "jogood_visnja.png", category: "povrce" },
        { name: "Losos filet", unit: "kg", volume: 500, box: 10, pallet: 80, code: "003400", barcode: "8606017434000", image: "losos.png", category: "riba" },
        { name: "Pohovane lignje", unit: "kg", volume: 1000, box: 5, pallet: 60, code: "003500", barcode: "8606017435000", image: "lignje.png", category: "riba" },
        { name: "Gotova sarma", unit: "kg", volume: 750, box: 8, pallet: 50, code: "003600", barcode: "8606017436000", image: "sarma.png", category: "gotova" },{ name: "Cedevita", unit: "kom", volume: 105, box: 30, pallet: 198, code: "003216", barcode: "8606017432661", image: "cedevita.png", category: "svi" },
        { name: "Frozen jogood kajsija", unit: "kom", volume: 120, box: 20, pallet: 120, code: "003284", barcode: "8606017433460", image: "jogood_kajsija.png", category: "povrce" },
        { name: "Frozen jogood višnja", unit: "kom", volume: 120, box: 20, pallet: 120, code: "003255", barcode: "8606017433033", image: "jogood_visnja.png", category: "povrce" },
        { name: "Losos filet", unit: "kg", volume: 500, box: 10, pallet: 80, code: "003400", barcode: "8606017434000", image: "losos.png", category: "riba" },
        { name: "Pohovane lignje", unit: "kg", volume: 1000, box: 5, pallet: 60, code: "003500", barcode: "8606017435000", image: "lignje.png", category: "riba" },
        { name: "Gotova sarma", unit: "kg", volume: 750, box: 8, pallet: 50, code: "003600", barcode: "8606017436000", image: "sarma.png", category: "gotova" },{ name: "Cedevita", unit: "kom", volume: 105, box: 30, pallet: 198, code: "003216", barcode: "8606017432661", image: "cedevita.png", category: "svi" },
        { name: "Frozen jogood kajsija", unit: "kom", volume: 120, box: 20, pallet: 120, code: "003284", barcode: "8606017433460", image: "jogood_kajsija.png", category: "povrce" },
        { name: "Frozen jogood višnja", unit: "kom", volume: 120, box: 20, pallet: 120, code: "003255", barcode: "8606017433033", image: "jogood_visnja.png", category: "povrce" },
        { name: "Losos filet", unit: "kg", volume: 500, box: 10, pallet: 80, code: "003400", barcode: "8606017434000", image: "losos.png", category: "riba" },
        { name: "Pohovane lignje", unit: "kg", volume: 1000, box: 5, pallet: 60, code: "003500", barcode: "8606017435000", image: "lignje.png", category: "riba" },
        { name: "Gotova sarma", unit: "kg", volume: 750, box: 8, pallet: 50, code: "003600", barcode: "8606017436000", image: "beta_variation_small_1599466704Frikom_saldoledi_0017s_0003_FRIKOM-Capri-kornet-2016.png", category: "gotova" },
    ]
    
            
        ];

        let selectedCategory = "all"; // Po defaultu prikazujemo sve proizvode

        function displayProducts(productList) {
            let table = document.getElementById("productTable");
            table.innerHTML = "";
            productList.forEach(product => {
                let row = `
                    <tr>
                        <td><img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.onerror=null; this.src='default.png';"></td>
                        <td>${product.name}</td>
                        <td>${product.unit}</td>
                        <td>${product.volume}</td>
                        <td>${product.box}</td>
                        <td>${product.pallet}</td>
                        <td>${product.code}</td>
                    </tr>
                `;
                table.innerHTML += row;
            });
        }

        function filterCategory(category) {
            selectedCategory = category;
            document.querySelectorAll(".category-menu a").forEach(link => link.classList.remove("active"));
            event.target.classList.add("active");
            let filteredProducts = category === "all" ? products : products.filter(product => product.category === category);
            displayProducts(filteredProducts);
        }

        function searchProducts() {
            let input = document.getElementById("searchInput").value.toLowerCase();
            let filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(input) && 
                (selectedCategory === "all" || product.category === selectedCategory)
            );
            displayProducts(filteredProducts);
        }

        window.onload = () => displayProducts(products);