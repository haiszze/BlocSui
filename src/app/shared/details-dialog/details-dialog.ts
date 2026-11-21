import { Component, model } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { CodeViewer } from '../code-viewer/code-viewer';

/** Explains PlatformUtil, the branch condition every pass-through relies on. */
@Component({
  selector: 'app-details-dialog',
  imports: [DialogModule, CodeViewer],
  templateUrl: './details-dialog.html',
})
export class DetailsDialog {
  visible = model(false);
}
