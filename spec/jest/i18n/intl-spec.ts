import { expect } from 'chai';
import { TestScheduler } from 'rxjs/testing/TestScheduler';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('a', () => {
  afterEach(() => {
    jest.resetModules();
  });

  it('1', () => {

  });

  it('2', () => {

  });

  it('3', () => {

  });

  it('4', () => {

  });

  it('5', () => {

  });

  it('6', () => {
  });

  it('7', () => {
  });

  it('8', () => {

  });

  it('9', () => {
  });

  it('10', () => {

  });

  it('11', () => {

  });

  it('12', () => {

  });

  describe('first', () => {

    beforeEach(() => {

    });

    it('13', () => {

    });

    it(`14`, () => {

    });

    it(`15`, () => {

    });

    it('16', () => {

    });
  });

  describe('17', () => {

    beforeEach(() => {

    });

    afterEach(() => {
    });

    it('meh', () => {

    });

    it('meh', () => {

    });

    it('18', (done) => {
      const materializeOnScheduler = <T>(o: Observable<T>) => o.observeOn(scheduler).materialize();

      const subj = new BehaviorSubject('initial');

      const values = [];

      subj.next('second');
      subj.asObservable().let(materializeOnScheduler).subscribe((x) => {
        console.log(x.value);
        expect(x.value).to.equal('second');
      }, (x) => {
        console.log(x);
        done();
      });

      subj.complete();
      scheduler.flush();
    });

  });
});
