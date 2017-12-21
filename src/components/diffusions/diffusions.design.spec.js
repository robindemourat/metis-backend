import {expect} from 'chai';
import design from './diffusions.design';

describe('Diffusions couchdb design', () => {
    it('should eval each view map as a function', (done) => {
        Object.keys(design.views).forEach(id => {
          const view = design.views[id];
          expect(eval(`(${view.map})`)).to.be.a('function');
        });
        done();
    });
});