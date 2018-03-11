describe('Portfolio JavaScript Testing',()=>{
	describe('A method that changes an element\'s visability', () => {
		it( 'changes an element class from hidden to show',() => {
			//Arrange
			const underTest = displayMenu;
			let testDiv = document.createElement('div');//copy line 6 and 7 lo find out what test actually holds 
			testDiv.className = 'hidden';
			//Act
			underTest(testDiv);//Function created under app.js
			//Assert
			let changedClassName = testDiv.className;
			expect(changedClassName).toBe('show');
		})
		it('replaces hidden with show while keeping other classes',() =>{
			const underTest = displayMenu;
			let testDiv = document.createElement('div');
			testDiv.className += 'hidden ';
			testDiv.className += 'blah';


			underTest(testDiv);

			let changedClassName = testDiv.className;
			expect(changedClassName).toBe('show blah');

		})
		it('replaces show with hidden while keeping other classes', () =>{
			const underTest=displayMenu;
			let testDiv = document.createElement('div');
			testDiv.className +='show ';
			testDiv.className +='foo';
			
			underTest(testDiv);

			let changedClassName = testDiv.className;
			expect(changedClassName).toBe('hidden foo');
		})
		it('replaces show with hidden in all elements in a nodelist', ()=>{
			const underTest=displayMenu;
			let testDiv1 = document.createElement('div');
			testDiv1.className +='show ';
			testDiv1.className +='foo';
			let testDiv2 = document.createElement('div');
			testDiv2.className +='show ';
			testDiv2.className +='foo';
			document.body.appendChild(testDiv1);
			document.body.appendChild(testDiv2);
			testDivs= document.body.querySelectorAll('div.show');
			
			underTest(testDivs);

			expect(testDiv1.className).toBe('hidden foo');
			expect(testDiv2.className).toBe('hidden foo');		
		})
		})

	})
