import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule, TabsetConfig } from 'ngx-bootstrap/tabs';

import { DemoComponentsModule } from '../../../demo/components/demo-components.module';
import { FooterModule } from '../footer.module';
import { FooterExampleComponent } from './footer-example.component';

@NgModule({
  imports: [
    CommonModule,
    DemoComponentsModule,
    FormsModule,
    FooterModule,
    TabsModule.forRoot()
  ],
  declarations: [ FooterExampleComponent ],
  exports: [ FooterExampleComponent ],
  providers: [ TabsetConfig ]
})
export class FooterExampleModule {
  constructor() {}
}
