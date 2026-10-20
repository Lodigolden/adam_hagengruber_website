<!-- Taken from EmbedPDF Getting Started Guide. -->
<!-- Modified to take a string to the location of the PDF in this repository. -->

<script setup lang="ts">
import { usePdfiumEngine } from '@embedpdf/engines/vue';
import { EmbedPDF } from '@embedpdf/core/vue';
import { createPluginRegistration } from '@embedpdf/core';
 
// Import the essential plugins
import { ViewportPluginPackage, Viewport } from '@embedpdf/plugin-viewport/vue';
import { ScrollPluginPackage, Scroller } from '@embedpdf/plugin-scroll/vue';
import {
  DocumentContent,
  DocumentManagerPluginPackage,
} from '@embedpdf/plugin-document-manager/vue';
import { RenderLayer, RenderPluginPackage } from '@embedpdf/plugin-render/vue';
 
// 1. Initialize the engine with the Vue composable
const { engine, isLoading } = usePdfiumEngine();

const props = defineProps({
    pdfLocation: {
        type: String,
    }
})
 
// 2. Register the plugins you need
const plugins = [
  createPluginRegistration(DocumentManagerPluginPackage, {
    initialDocuments: [{ url: pdfLocation }],
  }),
  createPluginRegistration(ViewportPluginPackage),
  createPluginRegistration(ScrollPluginPackage),
  createPluginRegistration(RenderPluginPackage),
];

</script>
 
<template>
  <div v-if="isLoading || !engine" class="loading-pane">
    Loading PDF Engine...
  </div>
 
  <!-- 3. Wrap your UI with the <EmbedPDF> provider -->
  <div v-else style="height: 500px">
    <EmbedPDF :engine="engine" :plugins="plugins" v-slot="{ activeDocumentId }">
      <DocumentContent
        v-if="activeDocumentId"
        :document-id="activeDocumentId"
        v-slot="{ isLoaded }"
      >
        <Viewport
          v-if="isLoaded"
          :document-id="activeDocumentId"
          style="background-color: #f1f3f5"
        >
          <Scroller :document-id="activeDocumentId">
            <template #default="{ page }">
              <div :style="{ width: page.width + 'px', height: page.height + 'px' }">
                <!-- The RenderLayer is responsible for drawing the page -->
                <RenderLayer
                  :document-id="activeDocumentId"
                  :page-index="page.pageIndex"
                />
              </div>
            </template>
          </Scroller>
        </Viewport>
      </DocumentContent>
    </EmbedPDF>
  </div>
</template>
 
<style scoped>
.loading-pane {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
