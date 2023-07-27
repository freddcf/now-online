<template>
    <div class="navbar">
        <div class="gt-sm">
            <div class="q-px-lg row justify-around items-center">
                <div>
                    <img class="img-logo" style="width: 160px" src="@/assets/images/logo.png" alt="Logo" />
                </div>

                <div class="q-gutter-x-lg menu-items bold">
                    <q-btn flat to="/#save" no-caps>Reservas</q-btn>
                    <q-btn flat to="/#save" no-caps>Serviços</q-btn>
                    <q-btn flat to="/#save" no-caps>Cardápio</q-btn>
                    <q-btn flat to="/#save" no-caps>Depoimentos</q-btn>
                </div>

                <div class="btn-cart" elevated @click="goToCart">
                    Meu carrinho
                    <span class="mockbtn">
                        <q-btn class="btn-cart-icon q-ml-sm" flat dense icon="shopping_cart" />
                    </span>
                </div>
            </div>
        </div>

        <div class="lt-md">
            <q-header class="bg-white text-black">
                <q-toolbar>
                    <q-btn flat dense round @click="drawer = !drawer" aria-label="Menu" icon="menu" />

                    <q-toolbar-title class="relative">
                        <img class="img-logo absolute-center" style="width: 160px" src="@/assets/images/logo-name.svg"
                            alt="Beckio on-line" />
                    </q-toolbar-title>
                </q-toolbar>
            </q-header>

            <q-drawer v-model="drawer">
                <q-scroll-area class="fit"
                    style="height: calc(100% - 150px); padding-top: 160px; border-right: 1px solid #ddd">

                    <q-list padding class="menu-list">
                        <q-item clickable v-ripple class="menu-icon">
                            <q-item-section avatar>
                                <q-icon name="inbox" />
                            </q-item-section>
                            <q-item-section>
                                Reservas
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-ripple class="menu-icon">
                            <q-item-section avatar>
                                <q-icon name="star" />
                            </q-item-section>
                            <q-item-section>
                                Serviços
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-ripple class="menu-icon">
                            <q-item-section avatar>
                                <q-icon name="send" />
                            </q-item-section>
                            <q-item-section>
                                Cardápio
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-ripple class="menu-icon">
                            <q-item-section avatar>
                                <q-icon name="drafts" />
                            </q-item-section>
                            <q-item-section>
                                Depoimentos
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-ripple class="menu-icon">
                            <q-item-section avatar>
                                <q-icon name="shopping_cart" />
                            </q-item-section>
                            <q-item-section>
                                Meu carrinho
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-scroll-area>
                <div style="width: 100%;" class="absolute-top column items-end">
                    <q-avatar size="30px" class="">
                        fechar
                    </q-avatar>
                </div>
                <div style="width: 100%;" class="absolute-top column items-center">
                    <q-avatar size="180px" class="q-mb-xm">
                        <img class="img-logo" src="@/assets/images/logo.png" alt="Logo" />
                    </q-avatar>
                </div>
            </q-drawer>
        </div>
    </div>

    <div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
</template>
  
<script>
import { ref, } from 'vue';

export default {
    name: "NavbarComponent",
    components: {},
    setup() {
        return {
            drawer: ref(false)
        }
    },
    methods: {
        goToCart() {
            console.log('Pressed');
        },
    }
};
</script>
  
<style lang="scss" scoped>
.menu-items {
    color: $color-black;
}

.menu-items>.q-btn {
    font-size: 17px;
}

.btn-cart {
    background-color: $color-white;
    color: $color-black;
    border-radius: 20px;
    padding: 12px 17px 12px 22px;
    font-size: 20px;
    box-shadow: 0px 10px 15px -3px rgba($color: #000000, $alpha: .1);
    cursor: pointer;
}

.btn-cart:hover {
    background-color: rgba($color: $color-primary, $alpha: .3);
    transition: all .8s;
}

.btn-cart .btn-cart-icon {
    background-color: $color-primary;
    border-radius: 15px;
    width: 45px;
    height: 45px;
}

.logo-title {
    font-family: 'PoppinsMedium', 'Rubik', sans-serif;
    font-size: 22px;
}

.menu-icon {
    color: $color-black;
}
</style>
  