import {Component, OnInit}   from '@angular/core';


@Component({
    template: `
      <div class="page-content mdl-grid">
        <div mdl class="welcome-card-wide mdl-card mdl-shadow--16dp mdl-cell--12-col">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Welcome</h2>
          </div>
          <div class="mdl-card__supporting-text">
            This is a demo project for starting developping a web application with Angular2 Framework.<br>
            For more information and details you can read my Wordpress post <a href="">here</a>.<br>
            The source code of the project is available on GitHub <a href="">here</a>.<br>
            This demo uses the open source frameworks and projects below:
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Get Started
            </a>
          </div>
          <div class="mdl-card__menu">
            <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i class="material-icons">share</i>
            </button>
          </div>
        </div>
      </div>
  `
})
export class HomeComponent {
}