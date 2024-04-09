import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class RecipeShortOverviewComponent extends Component {
  @service recipeData;
  @tracked isExpanded = false;
  @tracked isFavorite = false;

  constructor() {
    super(...arguments);
    this.isFavorite = this.checkFavorite();
  }
  // eslint-disable-next-line no-dupe-class-members
  get isFavorite() {
    return this.checkFavorite();
  }

  checkFavorite() {
    return this.recipeData.isFavorite(this.args.id);
  }

  @action
  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }
  @action
  toggleFavorite(event) {
    event.stopPropagation();
    this.isFavorite = !this.isFavorite;
    this.recipeData.toggleFavorite(this.args.id, this.isFavorite);
  }
}
