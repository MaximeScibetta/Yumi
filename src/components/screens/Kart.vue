<template>
    <div class="kart">
        <div class="kart__mobile">
            <div class="recap">
                <div class="recap__header">
                    <div class="total">
                        <p>Sous-total (3 articles) :</p>
                        <p class="total__price">33,00 €</p>
                    </div>
                    <button v-if="!startCommande" class="commande" @click="startCommande = true">Passer la commande</button>
                    <div v-else class="description">
                        <ul class="description__content">
                            <li>Potage vert, Faux filet et sa sauce au vin rouge, Crème au chocolat</li>
                            <li>Potage vert, Faux filet et sa sauce au vin rouge, Crème au chocolat</li>
                            <li>Bouteille de vin 50cl</li>
                        </ul>
                        <div class="description__price">
                            <dl>
                                <dt>Articles :</dt>
                                <dd>33,00 €</dd>
                                <dt>Livraison :</dt>
                                <dd>1,50 €</dd>
                                <dt>T.V.A. :</dt>
                                <dd>12,00 %</dd>
                                <dt class="end">Montant :</dt>
                                <dd class="end">34,50 €</dd>
                            </dl>
                        </div>
                        <button class="commande" @click="startCommande = false">Retour</button>
                    </div>
                </div>
                <div class="recap__content" v-if="!startCommande">
                    <div class="item">
                        <div class="item__image">
                            <img src="https://images.unsplash.com/photo-1504973960431-1c467e159aa4?ixlib=rb-0.3.5&s=2195ba5081c67a1865b0d2c284d43853&auto=format&fit=crop&w=1350&q=80" alt="">
                            <p class="date">02/04</p>
                            <button class="delete">Supprimer</button>
                        </div>
                        <div class="item__description">
                            <p class="title">Potage vert, Faux filet et sa sauce au vin rouge, Crème au chocolat</p>
                            <p class="boisson">Aucune boisson n'a été ajoutée</p>
                            <p class="item__price">15,00 €</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item__image">
                            <img src="https://images.unsplash.com/photo-1504973960431-1c467e159aa4?ixlib=rb-0.3.5&s=2195ba5081c67a1865b0d2c284d43853&auto=format&fit=crop&w=1350&q=80" alt="">
                            <p class="date">03/04</p>
                            <button class="delete">Supprimer</button>
                        </div>
                        <div class="item__description">
                            <p class="title">Potage vert, Faux filet et sa sauce au vin rouge, Crème au chocolat</p>
                            <p class="boisson">Bouteille d'eau 50cl</p>
                            <p class="item__price">15,00 €</p>
                        </div>
                    </div>
                </div>
                <div class="recap__form" v-else>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Kart',
    components: {
    },
    data(){
        return{
            startCommande: false,
        }
    }
}
</script>