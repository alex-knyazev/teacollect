<template>
  <div>
    
    <v-card class="content-header">
      <h1 class="title secondary--text">Create tea</h1>
      <v-btn
        class="success"
        @click="handleSaveClick"
      >
        save
      </v-btn>
    </v-card>

    <v-form>
      <v-select
        v-model="newTea.type"
        :items="teaTypes"
        item-value="id"
        item-text="name"
        label="type"
      />
      <v-text-field
        v-model="newTea.name"
        label="name"
      />

      <div class="formInnerBlock">
        <v-label>image:</v-label>
        <FileInput
          :value="newTea.image"
          accept="image/*"
        />
      </div>


      <div class="formInnerBlock">
        <v-label>translated names:</v-label>
        <v-btn
          icon
          @click="addTranslatedNames"
        >
          <v-icon>
            add
          </v-icon>
        </v-btn>
        <div
          v-for="(translatedName, index) in newTea.translatedNames"
          :key="translatedName.name"
          class="translatedNamesInputs"
        >
          <div>
            <v-text-field
              v-model="translatedName.name"
              label="name"
            />
          </div>
          <div>
            <v-select
              :items="languages"
              v-model="translatedName.language"
              label="language"
            />
          </div>
          <v-btn
            v-if="index=== newTea.translatedNames.length - 1"
            icon
            @click="removeTranslatedName"
          >
            <v-icon size="14px">
              close
            </v-icon>
          </v-btn>
        </div>
      </div>

      <div class="formInnerBlock">
        <v-label>birth place:</v-label>
        <div class="birthplaceInputs">
          <div>
            <div>
              <v-text-field
                v-model="newTea.birthplace.name"
                label="name"
              />
            </div>

            <div>
              <v-text-field
                v-model="newTea.birthplace.location.lat"
                label="lattitude"
                type="number"
              />
            </div>
            <div>
              <v-text-field
                v-model="newTea.birthplace.location.lng"
                label="longtitude"
                type="number"
              />
            </div>
          </div>
          <div class="formInnerBlock">
            <v-label>translated names:</v-label>
            <v-btn
              icon
              @click="addBirthplaceTranslatedName"
            >
              <v-icon>
                add
              </v-icon>
            </v-btn>
            <div
              v-for="(translatedName, index) in newTea.birthplace.translatedNames"
              :key="translatedName.name"
              class="translatedNamesInputs"
            >
              <div>
                <v-text-field
                  v-model="translatedName.name"
                  label="name"
                />
              </div>
              <div>
                <v-select
                  :items="languages"
                  v-model="translatedName.language"
                  label="language"
                />
              </div>
              <v-btn
                v-if="index=== newTea.birthplace.translatedNames.length - 1"
                icon
                @click="removeBirthplaceTranslatedName"
              >
                <v-icon size="14px">
                  close
                </v-icon>
              </v-btn>
            </div>
          </div>

        </div>
      </div>

      <v-select
        v-model="newTea.brewingTime"
        :items="brewingTimes"
        multiple
        label="brewing time"
        counter="2"
      />

      <v-select
        v-model="newTea.brewingAmount"
        :items="brewingTimes"
        multiple
        label="brewing amount"
      />

      <v-select
        v-model="newTea.temperature"
        :items="temperatureDegrees"
        multiple
        label="brewing temperature"
      />

      <v-select
        v-model="newTea.grams"
        :items="brewingTimes"
        multiple
        label="grams at cup"
      />

      <br>
      <v-label>
        origin of tea:
      </v-label>
      <VueEditor v-model="newTea.originText"/>

      <br>
      <v-label>
        brewing method:
      </v-label>
      <VueEditor v-model="newTea.brewingMethodText"/>

      <br>
      <v-label>
        production of tea:
      </v-label>
      <VueEditor v-model="newTea.productionText"/>

      <br>
      <v-label>
        effect of tea:
      </v-label>
      <VueEditor v-model="newTea.effectText"/>
    </v-form>
  </div>
</template>

<script src="./index.js"></script>
<style scoped src="./index.css"></style>






