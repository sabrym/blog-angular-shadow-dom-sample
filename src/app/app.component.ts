import { Component, ViewChild, ElementRef } from '@angular/core';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular Html To Pdf ';

  generatePDF() {
    html2pdf()
      .set({
        margin: 1,
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 4 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      })
      .from(this.parseDOM(document.getElementById('pdfTable')))
      .save();
  }

  getShadowDOMHtml = (shadowRoot: { children: any; }) => {
    let shadowHTML = '';
    for (let el of shadowRoot.children) {
      shadowHTML += el.nodeValue || el.outerHTML;
    }

    return shadowHTML;
  };

  parseDOM = (rootElement) => {
    for (let el of rootElement.children) {
      if (el.shadowRoot) {
        this.parseDOM(el.shadowRoot);
        el.innerHTML += this.getShadowDOMHtml(el.shadowRoot);
      }
    }

    return rootElement.innerHTML;
  };
}
