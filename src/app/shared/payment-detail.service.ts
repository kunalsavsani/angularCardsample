import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData:PaymentDetail;
  list :PaymentDetail[];
  readonly rooturl='http://localhost:50080/api';
  

  constructor(private http:HttpClient) { }

  postPaymentDetail(form)
  {
 return this.http.post(this.rooturl+'/paymentDetails/',this.formData);
  }
  putPaymentDetail(form)
  {
 return this.http.put(this.rooturl+'/paymentDetails/'+this.formData.Id,this.formData)
  }
 DeletePaymentDetail(id)
 {
   return this.http.delete(this.rooturl+'/paymentDetails/'+id)
 }
  refreshList(){
    return this.http.get(this.rooturl+'/paymentDetails/');
    //.toPromise()
    //.then(res=> this.list=res as PaymentDetail[])
  }
}


