// eslint-disable-next-line import/no-extraneous-dependencies
const aws = require('aws-sdk');

aws.config.update({ region: 'us-east-1' });
const sns = new aws.SNS({ apiVersion: '2010-03-31' });

module.exports = {
	PublishMessage,
};

function PublishMessage(messageContent, TOPIC_ARN, messageAttributes) {
	const params = {
		Message: JSON.stringify(messageContent),
		TopicArn: TOPIC_ARN,
		MessageAttributes: messageAttributes,
	};

	return sns.publish(params).promise();
}
