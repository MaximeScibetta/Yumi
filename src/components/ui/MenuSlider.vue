<template>
    <div class="menuContent">
        <md-tabs md-active-tab="tab-day1" md-dynamic-height class="days">
            <md-tab id="tab-day1" md-label="LUN 2">
                <h1>Faux filet et sa sauce au vin rouge</h1>
                <div class="image" style="background-image: url('https://images.unsplash.com/photo-1504973960431-1c467e159aa4?ixlib=rb-0.3.5&s=2195ba5081c67a1865b0d2c284d43853&auto=format&fit=crop&w=1350&q=80');">
                    <!-- <img src= alt=""> -->
                </div>
                <div class="addToKart">
                    <span class="price">15€</span>
                    <button class="addKart">
                        + Ajouter au panier
                    </button>
                </div>
                <md-tabs>
                    <md-tab id="plats" md-label="plats">
                        <ul>
                            <li>Entrée</li>
                            <li>Potage vert</li>
                            <li>Plat</li>
                            <li>Faux filet et sa sauce au vin rouge</li>
                            <li>Dessert</li>
                            <li>Crème au chocolat</li>
                        </ul>
                    </md-tab>
                    <md-tab id="ingredient" md-label="ingredient">
                        <ul>
                            <li>Entrée</li>
                            <li>oignon, ail, huile d'olive, bouillon de poulet, brocoli, asperge, épinard, sel, poivre, fromage feta</li>
                            <li>Plat</li>
                            <li>faux-filet de boeuf, oignon rouge, thym, vin rouge, eau, beurre, sel, poivre</li>
                            <li>Dessert</li>
                            <li>chocolat noir, jaune d'oeuf, blanc d'oeuf, lait, sucre vanillé, sucre, maïzena, crème liquide, chocolat</li>
                        </ul>
                    </md-tab>
                </md-tabs>
            </md-tab>
            <md-tab id="tab-day2" md-label="MAR 3">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nihil vel beatae a obcaecati dolore quasi, odio veritatis ab, facilis quo cupiditate sapiente deleniti sequi quidem aperiam eum qui iusto.</p>
            </md-tab>
            <md-tab id="tab-day3" md-label="MER 4">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nihil vel beatae a obcaecati dolore quasi, odio veritatis ab, facilis quo cupiditate sapiente deleniti sequi quidem aperiam eum qui iusto.</p>
            </md-tab>
            <md-tab id="tab-day4" md-label="JEU 5">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nihil vel beatae a obcaecati dolore quasi, odio veritatis ab, facilis quo cupiditate sapiente deleniti sequi quidem aperiam eum qui iusto.</p>
            </md-tab>
            <md-tab id="tab-day5" md-label="VEN 6">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nihil vel beatae a obcaecati dolore quasi, odio veritatis ab, facilis quo cupiditate sapiente deleniti sequi quidem aperiam eum qui iusto.</p>
            </md-tab>
        </md-tabs>
    </div>
</template>

<script>

export default {  
    name: 'MenuSlider',
}
</script>


