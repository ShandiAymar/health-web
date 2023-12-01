<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-card class="q-mb-md" style="width: 50%">
        <q-card-section>
          <div class="q-responsive-embed">
            <video ref="video" v-if="captureStream" :srcObject="captureStream" id="video" autoplay playsinline muted
              @loadedmetadata="videoLoaded" style="max-width: 100%; height: auto;"></video>
          </div>
        </q-card-section>

        <q-card-actions align="center">
          <q-btn color="primary" @click="takePhoto" :disable="!videoIsLoaded">Tomar Foto</q-btn>
          &nbsp;&nbsp; <!-- Espacio en blanco -->
          <input type="file" @change="handleFileUpload" style="display: none" ref="fileInput">
          <q-btn color="primary" @click="openFileInput">Examinar</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="q-mb-md" style="width: 50%">
        <q-card-section>
          <q-img v-if="photo" :src="photo" basic />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn color="positive" @click="sendPhoto" :disable="!photo">Enviar Foto</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>


<script>
export default {
  name: "CameraForm",
  data() {
    return {
      captureStream: undefined,
      photo: null,
      videoIsLoaded: false,
    };
  },
  mounted() {
    /* global MediaStreamConstraints */
    // Definir el objeto de restricciones para los dispositivos a utilizar
    const constraints = {
      audio: true,
      video: true,
    };

    // Función que se ejecuta cuando se obtiene un MediaStream con getUserMedia
    const gotStream = (stream) => {
      this.captureStream = stream;
    };

    // Función que se ejecuta cuando se produce un error en la promesa
    const handleError = (error) => {
      console.error(error.name, error.message);
    };

    // Proceso para obtener el MediaStream
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(gotStream)
      .catch(handleError);
  },
  methods: {
    videoLoaded() {
      this.videoIsLoaded = true;
    },
    takePhoto() {
      if (this.videoIsLoaded) {
        const canvas = document.createElement("canvas");
        const video = this.$refs.video;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas
          .getContext("2d")
          .drawImage(video, 0, 0, canvas.width, canvas.height);
        this.photo = canvas.toDataURL("image/jpeg");
      }
    },
    sendPhoto() {
      if (this.photo) {
        // Aquí debes agregar la lógica para enviar la foto al backend
        axios.post("/url_del_backend", { photo: this.photo })
          .then(response => {
            // Manejar la respuesta del servidor si es necesario
          })
          .catch(error => {
            console.error("Error al enviar la foto al backend", error);
          });
      }
    },
    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>
