const Log = require('../models/Log');

exports.optimizeReminder = async (userId, medicationId) => {
  const logs = await Log.find({ userId, medicationId, status: 'taken' }).sort({ date: -1 }).limit(7);
  if (logs.length < 3) return null;

  let totalDiffs = 0;
  logs.forEach(log => {
    // Scheduled time is HH:mm string
    const [sHour, sMin] = log.scheduledTime.split(':').map(Number);
    const scheduledMinutes = sHour * 60 + sMin;
    
    const actualTime = new Date(log.actualTimeTaken);
    const actualMinutes = actualTime.getHours() * 60 + actualTime.getMinutes();
    
    totalDiffs += (actualMinutes - scheduledMinutes);
  });

  const avgDiff = totalDiffs / logs.length;
  if (Math.abs(avgDiff) > 15) {
    return {
      suggestedOffsetMins: Math.round(avgDiff),
      message: `You usually take this medication ${Math.abs(Math.round(avgDiff))} mins ${avgDiff > 0 ? 'late' : 'early'}. Consider adjusting your reminder.`
    };
  }
  return null;
};
