import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  visibleImages = [];

  getImages(){
      return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number){
      return IMAGES.slice(0).find(image => image.id == id)
  }
}
const contact: string ="\n 45 Bạch Đằng, Nha Trang, Khánh Hòa, Việt Nam 57126 \n +84 93 721 28 29 ";
const IMAGES =[
  {"id":1, "category": "boats", "caption": "váy đen" + contact, "url":"../../../assets/img/145180535_137783174839902_297318895999131057_n.jpg"},
  
  
  {"id":2, "category": "camping", "caption": "Đầm đen" + contact, "url":"../../../assets/img/146018485_138369614781258_9173770974662659116_n.jpg"},
 
  {"id":3, "category": "library", "caption": contact, "url":"../../../assets/img/146235254_140269311257955_4130580717047356268_n.jpg"},

  {"id":4, "category": "camping", "caption": "trắng" + contact, "url":"../../../assets/img/145205686_138369621447924_9221206029074731794_n.jpg"},
  
  
  {"id":5, "category": "library", "caption": "đen" + contact, "url":"../../../assets/img/145260702_138046114813608_6596945523468609607_n.jpg"},
 
  {"id":6, "category": "library", "caption": "trắng" + contact, "url":"../../../assets/img/145574014_138046034813616_4991695004490102426_n.jpg"},
  {"id":7, "category": "library", "caption": "trắng" + contact, "url":"../../../assets/img/145577286_138046054813614_971503849297041080_n.jpg"}
]

