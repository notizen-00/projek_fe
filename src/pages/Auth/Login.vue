<template>
    <div>
        <v-img class="mx-auto my-6" max-width="228"
            src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"></v-img>

        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <div class="text-subtitle-1 text-medium-emphasis">Email</div>

            <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="fa-light fa-envelope"
                variant="outlined"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Password
            </div>

            <v-text-field :append-inner-icon="visible ? 'fa-light fa-eye-slash' : 'fa-light fa-eye'" :type="visible ? 'text' : 'password'"
                density="compact" placeholder="Enter your password" prepend-inner-icon="fa-duotone fa-lock"
                variant="outlined"  @click:append-inner="visible =! visible"
                ></v-text-field>

            <v-btn block class="mb-8" color="blue" size="large" variant="tonal">
                Log In
            </v-btn>

            <v-card-text class="text-center">
                <a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" target="_blank">
                    Daftar <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
    export default {
        data: () => ({
            visible: false,
        }),
    }
</script>