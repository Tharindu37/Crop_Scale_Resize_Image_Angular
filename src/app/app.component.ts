import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageCroppedEvent, ImageCropperModule } from 'ngx-image-cropper';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageCropperModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  imgChangeEvt: any = '';
  cropImgPreview: any;
  image: File | undefined;

  title = 'Crop_Scale_Resize_Image_Angular';

  onFileChange(evnet: any) {
    this.imgChangeEvt = event;
  }

  cropImg(e: ImageCroppedEvent) {
    const blob = e.blob;
    const reader = new FileReader();
    reader.onload = (event: any) => {
      // Assign the base64-encoded image data to cropImgPreview
      this.cropImgPreview = event.target.result;
    };
    reader.readAsDataURL(blob!);
    this.image = new File([blob!], 'crop_profile', { type: 'image/png' });
  }

  imgLoad() {}

  initCropper() {}

  imgFailed() {
    alert('Image failed to show');
  }
}
