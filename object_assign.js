const params = {
    postParams: {
      landmarkTrackId: 1,
      destinationId: 1,
    },
    accessRight: 2,
};
params.postParams = {...params.postParams, robotId: '12'};
console.log(params);