import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContenerComponent } from './contener/contener.component';
import { ContentBackgroundDirective } from './directives/content-background.directive';
import { HeaderElHoverTextDirective } from './directives/header-el-hover-text.directive';
import { BoardComponent } from './board/board.component';
import { AboutMeComponent } from './contener/about-me/about-me.component';
import { ExtrasComponent } from './contener/extras/extras.component';
import { FavSongsComponent } from './contener/fav-songs/fav-songs.component';
import { ItStuffComponent } from './contener/it-stuff/it-stuff.component';
import { JsTutuComponent } from './contener/js-tutu/js-tutu.component';
import { MyMusicComponent } from './contener/my-music/my-music.component';
import { WhatILoveComponent } from './contener/what-i-love/what-i-love.component';
import { QuestionMarkComponent } from './contener/question-mark/question-mark.component';
import {HeaderElClickDirective} from "./directives/header-el-click.directive";
import { TextAutoTypingDirective } from './directives/text-auto-typing.directive';
import { SingleQuestionComponent } from './contener/it-stuff/single-question/single-question.component';
import { ShowTagsComponent } from './contener/it-stuff/show-tags/show-tags.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContenerComponent,
    ContentBackgroundDirective,
    HeaderElHoverTextDirective,
    BoardComponent,
    AboutMeComponent,
    ExtrasComponent,
    FavSongsComponent,
    ItStuffComponent,
    JsTutuComponent,
    MyMusicComponent,
    WhatILoveComponent,
    QuestionMarkComponent,
    HeaderElClickDirective,
    TextAutoTypingDirective,
    SingleQuestionComponent,
    ShowTagsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
