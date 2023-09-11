import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'age', 'email', 'number', 'address'];
  dataSource = new MatTableDataSource<tableData>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  isMenuCollapsed: boolean = true;

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

}

export interface tableData {
  id:number;
  name: string;
  age: string;
  email: string;
  number: string;
  address: string;
}

const ELEMENT_DATA: tableData[] = [
  { id: 1, name: 'John Doe', age: '24', email: 'john@example.com', number: '123-456-7890', address: '123 Main St' },
  { id: 2, name: 'Jane Smith', age: '28', email: 'jane@example.com', number: '456-789-1234', address: '456 Elm St' },
  { id: 3, name: 'Alice Johnson', age: '22', email: 'alice@example.com', number: '789-123-4567', address: '789 Oak Ave' },
  { id: 4, name: 'Bob Brown', age: '32', email: 'bob@example.com', number: '234-567-8901', address: '234 Birch Rd' },
  { id: 5, name: 'Eve White', age: '29', email: 'eve@example.com', number: '567-890-1234', address: '567 Cedar Ln' },
  { id: 6, name: 'Charlie Green', age: '27', email: 'charlie@example.com', number: '890-123-4567', address: '890 Maple Dr' },
  { id: 7, name: 'Grace Davis', age: '31', email: 'grace@example.com', number: '345-678-9012', address: '345 Pine St' },
  { id: 8, name: 'David Wilson', age: '26', email: 'david@example.com', number: '678-901-2345', address: '678 Spruce Rd' },
  { id: 9, name: 'Olivia Lee', age: '30', email: 'olivia@example.com', number: '901-234-5678', address: '901 Redwood Ave' },
  { id: 10, name: 'Sophia Martin', age: '25', email: 'sophia@example.com', number: '432-765-0987', address: '432 Oak St' },
  { id: 11, name: 'Liam Anderson', age: '23', email: 'liam@example.com', number: '123-654-9870', address: '123 Cedar Ave' },
  { id: 12, name: 'Mia Garcia', age: '33', email: 'mia@example.com', number: '543-789-0123', address: '543 Elm Rd' },
  { id: 13, name: 'Noah Hernandez', age: '27', email: 'noah@example.com', number: '234-890-1234', address: '234 Maple St' },
  { id: 14, name: 'Ava Smith', age: '29', email: 'ava@example.com', number: '654-901-2345', address: '654 Birch Ave' },
  { id: 15, name: 'Elijah Brown', age: '31', email: 'elijah@example.com', number: '765-012-3456', address: '765 Oak Rd' },
  { id: 16, name: 'Emma Johnson', age: '22', email: 'emma@example.com', number: '876-123-4567', address: '876 Pine St' },
  { id: 17, name: 'William Davis', age: '28', email: 'william@example.com', number: '987-234-5678', address: '987 Cedar Ave' },
  { id: 18, name: 'Sofia Wilson', age: '24', email: 'sofia@example.com', number: '234-456-7890', address: '234 Elm St' },
  { id: 19, name: 'James White', age: '30', email: 'james@example.com', number: '345-567-8901', address: '345 Oak Ave' },
  { id: 20, name: 'Oliver Thomas', age: '26', email: 'oliver@example.com', number: '456-678-9012', address: '456 Birch Rd' }
];
