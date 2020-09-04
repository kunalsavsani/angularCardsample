/*import {PaymentDetailComponent } from './payment-detail.component';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { Observable } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClientJsonpModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

describe('PaymentDetailService', ()=>
{

    let service : PaymentDetailService;
    let HttpTestingController: HttpTestingController;
   let component :PaymentDetailComponent;

     beforeEach (()=>
     {
         /*
       TestBed.configureTestingModule({
           providers: [service],
           imports:[HttpClientTestingModule]
       });
        
         service=TestBed.get(PaymentDetailService);
         HttpTestingController =TestBed.get(HttpTestingController);
    
   TestBed.configureTestingModule({
imports: [HttpTestingController]
   }
   );
   
   service=new PaymentDetailService(null);

   component=new PaymentDetailComponent(service);
     });

     it('should create record',()=>
     {
      
          
    const card : PaymentDetail ={
        Id:1,
      CardNumber : '1111222233334444',
      CardOwnerName : 'kunal',
      CVV :'777',
      ExpiryDate : '12-21'
  
  };
  
  service.postPaymentDetail({card})
  .subscribe(PaymentDetail=>
      {
          expect(card.Id).toEqual(20);
      });
  
      const req=HttpTestingController.expectOne('http://localhost:50080/api/paymentDetails/');
  
      expect(req.request.method).toEqual('POST');
  
      req.flush(card);
  
  
  
      });
    /*

    it('returned Observable should match the right data', () => {
        const mockCourses = [
        {
            Id:1,
            CardNumber : '1111222233334444',
            CardOwnerName : 'kunal',
            CVV :'777',
            ExpiryDate : '12-21'
        }
        ];
  
        service.refreshList()
          .subscribe(coursesData => {
            expect(coursesData[0].Id).toEqual(1);
            expect(coursesData[0].CardNumber).toEqual(
              '1111222233334444'
            );
      
          });
  
        const req = HttpTestingController.expectOne(
            'http://localhost:50080/api/paymentDetails/'
        );

        req.flush(mockCourses);
        });
        
});

*/