<template>
  <v-container fluid style="height: 100%" class="pa-0 bg">
    <v-row align="start" justify="center">
      <v-col cols="12" class="pa-0">
        <v-card color="rgb(52, 58, 64)" dark>
          <v-img src="../assets/imgs/profileBG.jpg" class="elevation-3" aspect-ratio="5:2" height="300px"
          >
          </v-img>
          <v-row>
            <v-col cols="12">
              <v-container fluid fill-height class="d-flex justify-center align-center pb-0">
                <v-row align="center" justify="center">
                  <v-col cols="4" style="position: relative">
                    <v-avatar size="200px"
                              class="avBorder"
                              style="bottom: 20px; position: absolute"
                    >
                      <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
                    </v-avatar>
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      small
                      color="primary"
                      elevation="5"
                      style="position:absolute; bottom: 15px; right: 40px"
                    >
                      <v-icon>mdi-camera</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="12" class="pa-0">
                    <h1 class="whiteCS--text text-center">John Doe</h1>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
          <v-row align="start" justify="space-around">
            <v-col cols="12" md="6" class="pt-0">
              <v-card class="pa-2 ma-8" color="rgb(73, 80, 87)" elevation="3">
                <v-card-title>Personal data</v-card-title>
                <v-autocomplete
                  class="ma-4" style="width: 80%"
                  ref="country"
                  v-model="country"
                  :items="countries"
                  readonly
                  label="Country"
                  placeholder="Select..."
                ></v-autocomplete>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      placeholder="Birthday"
                      label="Birthday date"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      class="ma-4" style="width: 80%"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    ref="picker"
                    v-model="date"
                    :max="new Date().toISOString().substr(0, 10)"
                    min="1950-01-01"
                    disabled
                    width="500px"
                  ></v-date-picker>
                </v-menu>
                <v-textarea
                  :rules="rules"
                  counter="100"
                  placeholder="Enter your biography here"
                  label="Biography (optional)"
                  class="ma-4" style="width: 80%"
                  :value="bio"
                  readonly
                  no-resize
                ></v-textarea>
              </v-card>
            </v-col>
            <v-col cols="12" md="6" class="pt-0">
              <v-card class="pa-2 ma-8" color="rgb(73, 80, 87)" elevation="3">
                <v-card-title>Favorite exercises</v-card-title>
                <v-list color="rgb(73, 80, 87)">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Exercise 1</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Exercise 1</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "Profile",
    data: () => ({
      date: null,
      menu: false,
      countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
      name: null,
      country: null,
      rules: [v => v.length <= 100 || 'Max 100 characters'],
      bio: ""
    }),
  }
</script>

<style>
  .bg {
    background-color: rgb(52, 58, 64);
  }

  .avBorder {
    border: 4px solid white;
  }
</style>


