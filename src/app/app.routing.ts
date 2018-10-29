import { NewComponent } from './new/new.component';
import { LinksComponent } from './links/links.component';
import { CommentsComponent } from './comments/comments.component';
import { JobsComponent } from './jobs/jobs.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';

const appRoutes: Routes = [
      {
        path: '',
        component: NewComponent,
      },
      {
        path: 'jobs',
        component: JobsComponent,
      },
      {
        path: 'links',
        component: LinksComponent,
      },
      {
        path: 'comments',
        component: CommentsComponent
      },
      {
        path: 'post/:id',
        component: PostDetailComponent
      }
];




export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);