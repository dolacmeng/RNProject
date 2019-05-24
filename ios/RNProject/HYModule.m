//
//  HYModule.m
//  RNProject
//
//  Created by 许伟杰 on 2019/5/22.
//  Copyright © 2019 JackXu. All rights reserved.
//

#import "HYModule.h"

@implementation HYModule

RCT_EXPORT_MODULE()

- (dispatch_queue_t)methodQueue {
    return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(navigateBack){
    [[NSNotificationCenter defaultCenter] postNotificationName:@"HYModuleNavigateBack" object:nil];
}

@end
