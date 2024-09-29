function groupNotificationsBySource(notifications) {
    const result = {}
    for (let i = 0; i < notifications.length; i++) {
      const notification = notifications[i]
      const source = notification.source
      if (!result[source]) {
        result[source] = [];
      }
      result[source].push(notification);
    }
    return result;
  }