<template>
  <v-container fluid style="height: 100%" class="pa-0 bg">
    <v-row align="start" justify="center">
      <v-col cols="12" class="pa-0">
        <v-card color="rgb(233 236 239)">
          <v-img src="../assets/imgs/profileBG.jpg" class="elevation-3" aspect-ratio="5:2" height="400px"
          >
          </v-img>
          <v-row>
            <v-col cols="12" class="pa-0">
              <v-container fluid fill-height class="d-flex justify-center align-center pb-0">
                <v-row align="center" justify="center">
                  <v-col cols="6" class="d-flex align-center justify-center" style="position: relative">
                    <div style="position: absolute; bottom: 15px">
                      <v-avatar size="200px"
                                class="avBorder elevation-5">
                        <img src="../assets/imgs/fausDuro.jpg">
                      </v-avatar>
                      <v-btn
                        class="mx-2"
                        fab
                        dark
                        small
                        color="#f8f9fa"
                        elevation="5"
                        style="position:absolute; bottom:0;right:10px"
                        @click="openPicPicker"
                      >
                        <v-icon color="#202121">mdi-camera</v-icon>
                      </v-btn>
                      <input type="file" style="display: none" ref="picInput" @change="changePicture">
                    </div>
                  </v-col>
                  <v-col cols="12" class="pa-0">
                    <h1 class="nameProfile text-center">FAUS</h1>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
          <v-row align="start" justify="space-around">
            <v-col cols="12" md="6" class="pt-0 pl-md-9">
              <PersonalData></PersonalData>
            </v-col>
            <v-col cols="12" md="6" class="pt-0 pr-md-9">
              <FavoriteProfile></FavoriteProfile>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import PersonalData from "@/components/PersonalData";
  import FavoriteProfile from "@/components/FavoriteProfile";
  export default {
    name: "Profile",
    components: {FavoriteProfile, PersonalData},
    data: () => ({
      date: null,
      menu: false,
      countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
      name: null,
      country: null,
      rules: [v => v.length <= 100 || 'Max 100 characters'],
      bio: "",
      editData: true
    }),
    methods: {
      openPicPicker() {
        this.$refs.picInput.click();
      },
      changePicture(event) {
        console.log(event.target.files);
        console.log(event.target.value);
      },
      print(aux){
        console.log(aux);
      }
    }
  }
</script>

<style>
  .bg {
    background-color: rgb(52, 58, 64);
  }

  .avBorder {
    border: 4px solid white;
  }
  .nameProfile{
    color:#212529;
  }
</style>


