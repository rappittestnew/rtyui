package com.rappitgithub.rtyui.backuprestore.controller;

import com.rappitgithub.rtyui.base.backuprestore.controller.BackupRestoreBaseController;
import com.rappitgithub.rtyui.backuprestore.service.BackupRestoreService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/rest/snapshot/", produces = "application/json")
public class BackupRestoreController extends BackupRestoreBaseController<BackupRestoreService> {

  public BackupRestoreController(BackupRestoreService backupRestoreService) {
    super(backupRestoreService);
  }
}
