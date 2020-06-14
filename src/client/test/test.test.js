import { evaluate } from '../js/nlp-evaluate';
import { sections } from '../js/scroll-handler';
import { cards } from '../js/scroll-handler';

test('this is postData test', async () => {
	expect(evaluate).toBeDefined();
});

test('array length', () => {
	expect(cards.length).toEqual(0);
});
