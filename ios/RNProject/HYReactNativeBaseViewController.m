
//
//  HYReactNativeBaseViewController.m
//  RNProject
//
//  Created by 许伟杰 on 2019/5/20.
//  Copyright © 2019 JackXu. All rights reserved.
//

#import "HYReactNativeBaseViewController.h"
#import <React/RCTRootView.h>
#import "HYReactNativeManager.h"

@implementation HYReactNativeBaseViewController

+ (instancetype)RNPageWithName:(NSString*)pageName initialProperty:(NSDictionary*)initialProperty{
    HYReactNativeBaseViewController *vc = [[HYReactNativeBaseViewController alloc] initWithPageName:pageName initialProperty:initialProperty];
    return vc;
}

- (instancetype)initWithPageName:(NSString*)pageName initialProperty:(NSDictionary*)initialProperty{
    if(self = [super init]){
        self.pageName = pageName;
        self.initialProperty = initialProperty;
    }
    return self;
}

- (void)viewWillAppear:(BOOL)animated{
    [super viewWillAppear:animated];
    [self.navigationController setNavigationBarHidden:YES];
}

- (void)viewWillDisappear:(BOOL)animated{
    [super viewWillDisappear:animated];
    [self.navigationController setNavigationBarHidden:NO];
}

- (void)dealloc{
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (void)navagateBack{
    [self.navigationController popViewControllerAnimated:YES];
}

- (void)viewDidLoad{
    [super viewDidLoad];
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(navagateBack) name:@"HYModuleNavigateBack" object:nil];

    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:[HYReactNativeManager shareInstance].bridge
                                                     moduleName:self.pageName
                                              initialProperties:self.initialProperty];
    self.view = rootView;
}

@end
