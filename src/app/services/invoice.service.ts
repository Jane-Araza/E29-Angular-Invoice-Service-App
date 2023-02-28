import { Injectable } from '@angular/core';
import { InvoiceDetailsComponent } from '../components/invoice-details/invoice-details.component';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor() { }
  getInvoiceDetails() {
    return [
      {"description": "monitor", "quantity": 1, "unitPrice": 3000.00, "totalPrice": 3000.00},
      {"description": "monitor", "quantity": 2, "unitPrice": 4000.00, "totalPrice": 8000.00},
      {"description": "monitor", "quantity": 3, "unitPrice": 5000.00, "totalPrice": 15000.00},
      {"description": "monitor", "quantity": 4, "unitPrice": 6000.00, "totalPrice": 24000.00},
      {"description": "monitor", "quantity": 5, "unitPrice": 7000.00, "totalPrice": 35000.00}
    ];
  }
  getTotal() {
    let sum: number = 0;
    this.getInvoiceDetails().forEach(i => sum += i.totalPrice);
    return(sum);
  }
}


