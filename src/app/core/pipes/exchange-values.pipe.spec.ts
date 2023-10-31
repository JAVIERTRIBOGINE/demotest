import { TestBed } from '@angular/core/testing';
import { RandomGeneratorService } from '../services/random-generator.service';
import { ExchangeValuesPipe } from './exchange-values.pipe';

const randomMockGeneratorService = {
  getResolvedRandomRate: () => 100,
} as RandomGeneratorService;

describe('ExchangeValuesPipe', () => {
  let pipe: ExchangeValuesPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeValuesPipe],
      providers: [
        {
          provide: RandomGeneratorService,
          useValue: randomMockGeneratorService,
        },
      ],
    }).compileComponents();
    pipe = new ExchangeValuesPipe(randomMockGeneratorService);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('evaluates when balance', () => {
    const value = 100;
    const col = 'balance';
    const result = pipe.transform(value, col);
    expect(result).toBe('100 BTC | $ 10000');
  });
});
