// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber > 42) {
        return blockNumber - 42
    } else {
        return 42 - blockNumber
    }
}

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264
}

function distanceTravelledInFeet(startingBlock, destinationBlock) {
    if (startingBlock > destinationBlock) {
        return (startingBlock - destinationBlock) * 264
    } else {
        return (destinationBlock - startingBlock) * 264
    }
}
// describe('calculatesFarePrice(start, destination)', function() {
//     it('gives customers a free sample', function() {
//       expect(calculatesFarePrice(43, 44)).to.equal(0);
//     });

//     it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
//       // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
//       expect(calculatesFarePrice(34, 32)).to.equal(2.56);
//     });

//     it('charges 25 dollars for a distance over 2000 feet', function() {
//       expect(calculatesFarePrice(50, 58)).to.equal(25);
//     });

//     it('does not allow rides over 2500 feet', function() {
//       expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
//     });
//   });
function calculatesFarePrice(startingBlock, destinationBlock) {
    const distance = distanceTravelledInFeet(startingBlock, destinationBlock)

    if (distance < 401) {
        return 0
    } else if (distance <= 2000 && distance > 400) {
        return (distance - 400) * .02
    } else if (distance > 2000 && distance < 2501) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}