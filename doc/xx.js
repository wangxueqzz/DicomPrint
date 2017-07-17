/**************************************************
LEADTOOLS (C) 1991-2017 LEAD Technologies, Inc. ALL RIGHTS RESERVED.
This software is protected by United States and International copyright laws.
Any copying, duplication, deployment, redistribution, modification or other
disposition hereof is STRICTLY PROHIBITED without an express written license
granted by LEAD Technologies, Inc.. This notice may not be removed or otherwise
altered under any circumstances.
Portions of this product are licensed under US patent 5,327,254 and foreign
counterparts.
For more information, contact LEAD Technologies, Inc. at 704-332-5532 or visit
https://www.leadtools.com
**************************************************/
// Leadtools.Controls.Medical.js
// Version:19.0.0.7
(function() {
	Type.registerNamespace("lt.Controls.Medical");
	window.lt.Controls.Medical._lT_VersionNumber = function() {};
	lt.Controls.Medical.WindowLevelPaletteType = function() {};
	lt.Controls.Medical.WindowLevelPaletteType.prototype = {
		none: 0,
		cool: 1,
		cyanHot: 2,
		fire: 3,
		icA2: 4,
		ice: 5,
		orangeHot: 6,
		rainbowRGB: 7,
		redHot: 8,
		spectrum: 9
	};
	lt.Controls.Medical.WindowLevelPaletteType.registerEnum("lt.Controls.Medical.WindowLevelPaletteType", !1);
	lt.Controls.Medical.MedicalViewerSizeMode = function() {};
	lt.Controls.Medical.MedicalViewerSizeMode.prototype = {
		none: 0,
		actualSize: 1,
		fit: 2,
		trueSize: 3
	};
	lt.Controls.Medical.MedicalViewerSizeMode.registerEnum("lt.Controls.Medical.MedicalViewerSizeMode", !1);
	lt.Controls.Medical.CellsArrangement = function() {};
	lt.Controls.Medical.CellsArrangement.prototype = {
		grid: 0,
		random: 1
	};
	lt.Controls.Medical.CellsArrangement.registerEnum("lt.Controls.Medical.CellsArrangement", !1);
	lt.Controls.Medical.FrameArrangement = function() {};
	lt.Controls.Medical.FrameArrangement.prototype = {
		grid: 0,
		custom: 1,
		rowSymmetric: 2,
		colSymmetric: 3
	};
	lt.Controls.Medical.FrameArrangement.registerEnum("lt.Controls.Medical.FrameArrangement", !1);
	lt.Controls.Medical.MPRStatus = function() {};
	lt.Controls.Medical.MPRStatus.prototype = {
		ok: 0,
		notEnoughFrames: -1,
		imagePositionNotReady: -2,
		allFramesNotReady: -3,
		cellNotValid: -4,
		imageOrientationNotTheSame: -5
	};
	lt.Controls.Medical.MPRStatus.registerEnum("lt.Controls.Medical.MPRStatus", !1);
	lt.Controls.Medical.CellMPRType = function() {};
	lt.Controls.Medical.CellMPRType.prototype = {
		none: -1,
		axial: 0,
		sagittal: 1,
		coronal: 2
	};
	lt.Controls.Medical.CellMPRType.registerEnum("lt.Controls.Medical.CellMPRType", !1);
	lt.Controls.Medical.ScrollType =
		function() {};
	lt.Controls.Medical.ScrollType.prototype = {
		none: 0,
		normal: 1,
		row: 2,
		column: 3,
		page: 4
	};
	lt.Controls.Medical.ScrollType.registerEnum("lt.Controls.Medical.ScrollType", !1);
	lt.Controls.Medical.HorizontalAlignmentType = function() {};
	lt.Controls.Medical.HorizontalAlignmentType.prototype = {
		middle: 0,
		left: 1,
		right: 2
	};
	lt.Controls.Medical.HorizontalAlignmentType.registerEnum("lt.Controls.Medical.HorizontalAlignmentType", !1);
	lt.Controls.Medical.VerticalAlignmentType = function() {};
	lt.Controls.Medical.VerticalAlignmentType.prototype = {
		middle: 0,
		top: 1,
		bottom: 2
	};
	lt.Controls.Medical.VerticalAlignmentType.registerEnum("lt.Controls.Medical.VerticalAlignmentType", !1);
	lt.Controls.Medical.OverlayTextType = function() {};
	lt.Controls.Medical.OverlayTextType.prototype = {
		windowLevel: 0,
		instanceNumber: 1,
		userData: 2,
		imageQuality: 3,
		frameNumber: 4,
		leftOrientation: 5,
		rightOrientation: 6,
		topOrientation: 7,
		bottomOrientation: 8,
		mprType: 9,
		retakeImage: 10,
		laterality: 11,
		fieldOfView: 12
	};
	lt.Controls.Medical.OverlayTextType.registerEnum("lt.Controls.Medical.OverlayTextType", !1);
	lt.Controls.Medical.OverlayAlignment = function() {};
	lt.Controls.Medical.OverlayAlignment.prototype = {
		none: -1,
		topLeft: 0,
		topRight: 1,
		bottomLeft: 2,
		bottomRight: 3,
		centerTop: 4,
		centerLeft: 5,
		centerRight: 6,
		centerBottom: 7
	};
	lt.Controls.Medical.OverlayAlignment.registerEnum("lt.Controls.Medical.OverlayAlignment", !1);
	lt.Controls.Medical.ColorType = function() {};
	lt.Controls.Medical.ColorType.prototype = {
		auto: 0,
		RGB: 1,
		gray: 2
	};
	lt.Controls.Medical.ColorType.registerEnum("lt.Controls.Medical.ColorType", !1);
	lt.Controls.Medical.PlayingDirection =
		function() {};
	lt.Controls.Medical.PlayingDirection.prototype = {
		forward: 0,
		backward: 1,
		shuffle: 2,
		sweep: 3
	};
	lt.Controls.Medical.PlayingDirection.registerEnum("lt.Controls.Medical.PlayingDirection", !1);
	lt.Controls.Medical._imrtiRenderer = function() {};
	lt.Controls.Medical._imrtiRenderer.prototype = {
		get_image: null,
		set_image: null,
		renderAsync: null,
		add_renderChunk: null,
		remove_renderChunk: null
	};
	lt.Controls.Medical._imrtiRenderer.registerInterface("lt.Controls.Medical._imrtiRenderer");
	lt.Controls.Medical.ProjectionOrientationType =
		function() {};
	lt.Controls.Medical.ProjectionOrientationType.prototype = {
		none: 0,
		faceToFace: 1,
		faceToBack: 2
	};
	lt.Controls.Medical.ProjectionOrientationType.registerEnum("lt.Controls.Medical.ProjectionOrientationType", !1);
	lt.Controls.Medical.SortType = function() {};
	lt.Controls.Medical.SortType.prototype = {
		none: 0,
		byAxis: 1,
		byAcquisitionTime: 2
	};
	lt.Controls.Medical.SortType.registerEnum("lt.Controls.Medical.SortType", !1);
	lt.Controls.Medical.SortOrder = function() {};
	lt.Controls.Medical.SortOrder.prototype = {
		ascending: 0,
		descending: 2
	};
	lt.Controls.Medical.SortOrder.registerEnum("lt.Controls.Medical.SortOrder", !1);
	lt.Controls.Medical.AutomationImageViewer = function(a) {
		this._annRenderingEngine$1 = new lt.Annotations.Rendering.AnnHtml5RenderingEngine;
		this._imageExtraPixelSize$1 = lt.LeadSizeD.create(0, 0);
		this._identityMatrix$1 = lt.LeadMatrix.get_identity();
		lt.Controls.Medical.AutomationImageViewer.initializeBase(this, [a]);
		null != this.__automationEnabledChanged$1 && this.__automationEnabledChanged$1(this, lt.LeadEventArgs.Empty);
		null != this.__automationUseDpiChanged$1 && this.__automationUseDpiChanged$1(this, lt.LeadEventArgs.Empty);
		null != this.__automationGotFocus$1 && this.__automationGotFocus$1(this, lt.LeadEventArgs.Empty);
		null != this.__automationLostFocus$1 && this.__automationLostFocus$1(this, lt.LeadEventArgs.Empty);
		this.set_imageBackgroundColor("transparent")
	};
	lt.Controls.Medical.AutomationImageViewer.prototype = {
		_container$1: null,
		get_automationScrollOffset: function() {
			return lt.LeadPointD.create(0, 0)
		},
		_customObjects$1: null,
		get__customObjects$1: function() {
			return this._customObjects$1
		},
		set__customObjects$1: function(a) {
			return this._customObjects$1 = a
		},
		_automationObject$1: null,
		get_automationObject: function() {
			return this._automationObject$1
		},
		set_automationObject: function(a) {
			return this._automationObject$1 = a
		},
		_automationObject_ActiveContainerChanged$1: function() {
			for(var a = ss.IEnumerator.getEnumerator(this._automationObject$1.get_containers()); a.moveNext();) {
				var b = a.current;
				b === this._automationObject$1.get_activeContainer() ? b.set_stroke(lt.Controls.Medical.AutomationImageViewer._activeStroke$1) :
					b.set_stroke(lt.Controls.Medical.AutomationImageViewer._normalStroke$1)
			}
			this._automationObject$1.invalidate(lt.LeadRectD.get_empty())
		},
		_onCanvasSizeChanged$1: function() {
			lt.LeadRectD.create(0, 0, this.get_mainDiv().clientWidth, this.get_mainDiv().clientHeight)
		},
		_isAttached$1: !1,
		automationAttach: function(a) {
			this._isAttached$1 || (this._container$1 = a);
			this._isAttached$1 = !0
		},
		automationDetach: function() {
			this._container$1 = null;
			this._isAttached$1 = !1
		},
		add_automationDoubleClick: function(a) {
			this.__automationDoubleClick$1 =
				ss.Delegate.combine(this.__automationDoubleClick$1, a)
		},
		remove_automationDoubleClick: function(a) {
			this.__automationDoubleClick$1 = ss.Delegate.remove(this.__automationDoubleClick$1, a)
		},
		__automationDoubleClick$1_handler_get: function() {
			null == this.__automationDoubleClick$1_handler && (this.__automationDoubleClick$1_handler = ss.EventHandler.create(this, this.add_automationDoubleClick, this.remove_automationDoubleClick));
			return this.__automationDoubleClick$1_handler
		},
		__automationDoubleClick$1: null,
		__automationDoubleClick$1_handler: null,
		get_automationDpiX: function() {
			return 96
		},
		get_automationDpiY: function() {
			return 96
		},
		get_automationEnabled: function() {
			return !0
		},
		add_automationEnabledChanged: function(a) {
			this.__automationEnabledChanged$1 = ss.Delegate.combine(this.__automationEnabledChanged$1, a)
		},
		remove_automationEnabledChanged: function(a) {
			this.__automationEnabledChanged$1 = ss.Delegate.remove(this.__automationEnabledChanged$1, a)
		},
		__automationEnabledChanged$1_handler_get: function() {
			null == this.__automationEnabledChanged$1_handler && (this.__automationEnabledChanged$1_handler =
				ss.EventHandler.create(this, this.add_automationEnabledChanged, this.remove_automationEnabledChanged));
			return this.__automationEnabledChanged$1_handler
		},
		__automationEnabledChanged$1: null,
		__automationEnabledChanged$1_handler: null,
		_automationGetContainersCallback$1: null,
		get_automationGetContainersCallback: function() {
			return this._automationGetContainersCallback$1
		},
		set_automationGetContainersCallback: function(a) {
			return this._automationGetContainersCallback$1 = a
		},
		add_automationGotFocus: function(a) {
			this.__automationGotFocus$1 =
				ss.Delegate.combine(this.__automationGotFocus$1, a)
		},
		remove_automationGotFocus: function(a) {
			this.__automationGotFocus$1 = ss.Delegate.remove(this.__automationGotFocus$1, a)
		},
		__automationGotFocus$1_handler_get: function() {
			null == this.__automationGotFocus$1_handler && (this.__automationGotFocus$1_handler = ss.EventHandler.create(this, this.add_automationGotFocus, this.remove_automationGotFocus));
			return this.__automationGotFocus$1_handler
		},
		__automationGotFocus$1: null,
		__automationGotFocus$1_handler: null,
		automationInvalidate: function(a) {
			this._invalidate1$1(null ==
				a ? lt.LeadRectD.get_empty() : a)
		},
		_invalidate1$1: function(a) {
			if(null != this._automationGetContainersCallback$1) {
				var b = this._automationGetContainersCallback$1(),
					c = 0,
					d = b.get_count(),
					e, f = null,
					g, h = null,
					i = !1;
				a.get_isEmpty() || (i = !0);
				for(c = 0; c < d; c++)
					if(g = b.get_item(c), e = g.AttachedSubCell, null != e && (f = e.get_attachedFrame(), e = e.get_annotationCanvas(), h = e.getContext("2d"), a.get_isEmpty() && (a = lt.LeadRectD.create(0, 0, e.width, e.height)), !i || g.get_isEnabled())) a = lt.LeadRectD.create(a.get_x() + 1, a.get_y() + 1, a.get_width() +
						1, a.get_height() + 1), h.clearRect(a.get_x(), a.get_y(), a.get_width(), a.get_height()), g.get_children().get_count() && e.width && e.height && (h.save(), h.beginPath(), h.rect(a.get_x(), a.get_y(), a.get_width(), a.get_height()), h.clip(), this._renderContainer$1(h, this._annRenderingEngine$1, g, a), h.closePath(), h.restore(), null != f && null != f.get_shutter() && f.get_shutter().get_objects().get_count() && f.get_shutter().updateView());
				null != f && (a = f.get_parentCell(), null != a.get_lineProfile() && a.get_lineProfile().draw(h))
			} else null !=
				this._container$1 && (e = this._getCurrentSubCell$1(), null != e && (e = e.get_annotationCanvas(), h = e.getContext("2d"), h.clearRect(0, 0, e.width, e.height), this._renderContainer$1(h, this._annRenderingEngine$1, this._container$1, a)))
		},
		_renderContainer$1: function(a, b, c, d) {
			b.attach(c, a);
			try {
				var e = lt.LeadRectD.get_empty();
				d.get_isEmpty() || (e = lt.LeadRectD.create(d.get_x(), d.get_y(), d.get_width(), d.get_height()), e = c.get_mapper().rectToContainerCoordinates(e));
				b.renderContainer(e, c, !1)
			} finally {
				b.detach()
			}
		},
		add_automationLostFocus: function(a) {
			this.__automationLostFocus$1 =
				ss.Delegate.combine(this.__automationLostFocus$1, a)
		},
		remove_automationLostFocus: function(a) {
			this.__automationLostFocus$1 = ss.Delegate.remove(this.__automationLostFocus$1, a)
		},
		__automationLostFocus$1_handler_get: function() {
			null == this.__automationLostFocus$1_handler && (this.__automationLostFocus$1_handler = ss.EventHandler.create(this, this.add_automationLostFocus, this.remove_automationLostFocus));
			return this.__automationLostFocus$1_handler
		},
		__automationLostFocus$1: null,
		__automationLostFocus$1_handler: null,
		add_automationPointerDown: function(a) {
			this.__automationPointerDown$1 = ss.Delegate.combine(this.__automationPointerDown$1, a)
		},
		remove_automationPointerDown: function(a) {
			this.__automationPointerDown$1 = ss.Delegate.remove(this.__automationPointerDown$1, a)
		},
		__automationPointerDown$1_handler_get: function() {
			null == this.__automationPointerDown$1_handler && (this.__automationPointerDown$1_handler = ss.EventHandler.create(this, this.add_automationPointerDown, this.remove_automationPointerDown));
			return this.__automationPointerDown$1_handler
		},
		__automationPointerDown$1: null,
		__automationPointerDown$1_handler: null,
		add_automationPointerMove: function(a) {
			this.__automationPointerMove$1 = ss.Delegate.combine(this.__automationPointerMove$1, a)
		},
		remove_automationPointerMove: function(a) {
			this.__automationPointerMove$1 = ss.Delegate.remove(this.__automationPointerMove$1, a)
		},
		__automationPointerMove$1_handler_get: function() {
			null == this.__automationPointerMove$1_handler && (this.__automationPointerMove$1_handler = ss.EventHandler.create(this, this.add_automationPointerMove,
				this.remove_automationPointerMove));
			return this.__automationPointerMove$1_handler
		},
		__automationPointerMove$1: null,
		__automationPointerMove$1_handler: null,
		add_automationPointerUp: function(a) {
			this.__automationPointerUp$1 = ss.Delegate.combine(this.__automationPointerUp$1, a)
		},
		remove_automationPointerUp: function(a) {
			this.__automationPointerUp$1 = ss.Delegate.remove(this.__automationPointerUp$1, a)
		},
		__automationPointerUp$1_handler_get: function() {
			null == this.__automationPointerUp$1_handler && (this.__automationPointerUp$1_handler =
				ss.EventHandler.create(this, this.add_automationPointerUp, this.remove_automationPointerUp));
			return this.__automationPointerUp$1_handler
		},
		__automationPointerUp$1: null,
		__automationPointerUp$1_handler: null,
		add_automationSizeChanged: function(a) {
			this.__automationSizeChanged$1 = ss.Delegate.combine(this.__automationSizeChanged$1, a)
		},
		remove_automationSizeChanged: function(a) {
			this.__automationSizeChanged$1 = ss.Delegate.remove(this.__automationSizeChanged$1, a)
		},
		__automationSizeChanged$1_handler_get: function() {
			null ==
				this.__automationSizeChanged$1_handler && (this.__automationSizeChanged$1_handler = ss.EventHandler.create(this, this.add_automationSizeChanged, this.remove_automationSizeChanged));
			return this.__automationSizeChanged$1_handler
		},
		__automationSizeChanged$1: null,
		__automationSizeChanged$1_handler: null,
		_getCurrentSubCell$1: function() {
			var a = this._getCurrentContainer$1();
			return null == a ? null : a.AttachedSubCell
		},
		_getCurrentContainer$1: function() {
			return null != this._automationObject$1 && -1 !== this._automationContainerIndex$1 ?
				this._automationObject$1.get_containers().get_item(this._automationContainerIndex$1) : null
		},
		get_automationTransform: function() {
			var a = this._getCurrentSubCell$1();
			if(null != a) {
				var b = this.getItemBounds(a, lt.Controls.ImageViewerItemPart.view),
					c = lt.Controls.Medical.MRTISubCell.getFloatImageRect(this, a),
					d = this.getItemImageFloatingPointTransform(a);
				if(b.get_isEmpty()) return this._identityMatrix$1;
				d.set_offsetX(d.get_offsetX() - b.get_left());
				d.set_offsetY(d.get_offsetY() - b.get_top());
				a = a.get_attachedFrame();
				null != a && (d.rotateAt(a.get_rotateAngle(), (c.get_left() + c.get_right()) / 2 - b.get_left(), (c.get_top() + c.get_bottom()) / 2 - b.get_top()), d.scaleAt(a.get_reversed() ? -1 : 1, a.get_flipped() ? -1 : 1, (c.get_left() + c.get_right()) / 2 - b.get_left(), (c.get_top() + c.get_bottom()) / 2 - b.get_top()));
				return d
			}
			return this._identityMatrix$1
		},
		add_automationTransformChanged: function(a) {
			this.__automationTransformChanged$1 = ss.Delegate.combine(this.__automationTransformChanged$1, a)
		},
		remove_automationTransformChanged: function(a) {
			this.__automationTransformChanged$1 =
				ss.Delegate.remove(this.__automationTransformChanged$1, a)
		},
		__automationTransformChanged$1_handler_get: function() {
			null == this.__automationTransformChanged$1_handler && (this.__automationTransformChanged$1_handler = ss.EventHandler.create(this, this.add_automationTransformChanged, this.remove_automationTransformChanged));
			return this.__automationTransformChanged$1_handler
		},
		__automationTransformChanged$1: null,
		__automationTransformChanged$1_handler: null,
		get_automationUseDpi: function() {
			return !1
		},
		add_automationUseDpiChanged: function(a) {
			this.__automationUseDpiChanged$1 =
				ss.Delegate.combine(this.__automationUseDpiChanged$1, a)
		},
		remove_automationUseDpiChanged: function(a) {
			this.__automationUseDpiChanged$1 = ss.Delegate.remove(this.__automationUseDpiChanged$1, a)
		},
		__automationUseDpiChanged$1_handler_get: function() {
			null == this.__automationUseDpiChanged$1_handler && (this.__automationUseDpiChanged$1_handler = ss.EventHandler.create(this, this.add_automationUseDpiChanged, this.remove_automationUseDpiChanged));
			return this.__automationUseDpiChanged$1_handler
		},
		__automationUseDpiChanged$1: null,
		__automationUseDpiChanged$1_handler: null,
		get_automationXResolution: function() {
			return 150
		},
		get_automationYResolution: function() {
			return 150
		},
		get_renderingEngine: function() {
			return this._annRenderingEngine$1
		},
		set_renderingEngine: function(a) {
			this._annRenderingEngine$1 = Type.safeCast(a, lt.Annotations.Rendering.AnnHtml5RenderingEngine);
			return a
		},
		get__isAutomationAttached$1: function() {
			return this._isAttached$1
		},
		onItemChanged: function(a) {
			switch(a.get_reason()) {
				case lt.Controls.ImageViewerItemChangedReason.size:
					null !=
						this.__automationSizeChanged$1 && this.__automationSizeChanged$1(this, lt.LeadEventArgs.Empty);
					this._invalidate1$1(lt.LeadRectD.get_empty());
					break;
				case lt.Controls.ImageViewerItemChangedReason.url:
				case lt.Controls.ImageViewerItemChangedReason.image:
				case lt.Controls.ImageViewerItemChangedReason.imageChanged:
				case lt.Controls.ImageViewerItemChangedReason.transform:
					this.get__isAutomationAttached$1() && (null != this.__automationTransformChanged$1 && this.__automationTransformChanged$1(this, lt.LeadEventArgs.Empty),
						this._invalidate1$1(lt.LeadRectD.get_empty()))
			}
			lt.Controls.Medical.AutomationImageViewer.callBaseMethod(this, "onItemChanged", [a])
		},
		onTransformChanged: function(a) {
			lt.Controls.Medical.AutomationImageViewer.callBaseMethod(this, "onTransformChanged", [a]);
			this.get__isAutomationAttached$1() && null != this.__automationTransformChanged$1 && this.__automationTransformChanged$1(this, lt.LeadEventArgs.Empty);
			this._onCanvasSizeChanged$1(a)
		},
		onAutomationPointerDown: function(a) {
			null != this.__automationPointerDown$1 && this.__automationPointerDown$1(this,
				a)
		},
		onAutomationPointerMove: function(a) {
			null != this.__automationPointerMove$1 && this.__automationPointerMove$1(this, a)
		},
		onAutomationPointerUp: function(a) {
			null != this.__automationPointerUp$1 && this.__automationPointerUp$1(this, a)
		},
		onAutomationDoubleClick: function(a) {
			null != this.__automationDoubleClick$1 && this.__automationDoubleClick$1(this, a)
		},
		_dataProvider$1: null,
		get_automationDataProvider: function() {
			return this._dataProvider$1
		},
		set_automationDataProvider: function(a) {
			return this._dataProvider$1 = a
		},
		_automationAntiAlias$1: !1,
		get_automationAntiAlias: function() {
			return this._automationAntiAlias$1
		},
		set_automationAntiAlias: function(a) {
			return this._automationAntiAlias$1 = a
		},
		_automationContainerIndex$1: 0,
		get_automationContainerIndex: function() {
			return this._automationContainerIndex$1
		},
		set_automationContainerIndex: function(a) {
			return this._automationContainerIndex$1 = a
		}
	};
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationScrollOffset", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.get_automationScrollOffset,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationObject", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.get_automationObject,
		set: lt.Controls.Medical.AutomationImageViewer.prototype.set_automationObject,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationDoubleClick", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.__automationDoubleClick$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationDpiX", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.get_automationDpiX,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationDpiY", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.get_automationDpiY,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype,
		"automationEnabled", {
			get: lt.Controls.Medical.AutomationImageViewer.prototype.get_automationEnabled,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationEnabledChanged", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.__automationEnabledChanged$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationGetContainersCallback", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.get_automationGetContainersCallback,
		set: lt.Controls.Medical.AutomationImageViewer.prototype.set_automationGetContainersCallback,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationGotFocus", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.__automationGotFocus$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationLostFocus", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.__automationLostFocus$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationPointerDown", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.__automationPointerDown$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationPointerMove", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.__automationPointerMove$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype,
		"automationPointerUp", {
			get: lt.Controls.Medical.AutomationImageViewer.prototype.__automationPointerUp$1_handler_get,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationSizeChanged", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.__automationSizeChanged$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationTransform", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.get_automationTransform,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationTransformChanged", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.__automationTransformChanged$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationUseDpi", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.get_automationUseDpi,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype,
		"automationUseDpiChanged", {
			get: lt.Controls.Medical.AutomationImageViewer.prototype.__automationUseDpiChanged$1_handler_get,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationXResolution", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.get_automationXResolution,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationYResolution", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.get_automationYResolution,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "renderingEngine", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.get_renderingEngine,
		set: lt.Controls.Medical.AutomationImageViewer.prototype.set_renderingEngine,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationDataProvider", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.get_automationDataProvider,
		set: lt.Controls.Medical.AutomationImageViewer.prototype.set_automationDataProvider,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationAntiAlias", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.get_automationAntiAlias,
		set: lt.Controls.Medical.AutomationImageViewer.prototype.set_automationAntiAlias,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationImageViewer.prototype, "automationContainerIndex", {
		get: lt.Controls.Medical.AutomationImageViewer.prototype.get_automationContainerIndex,
		set: lt.Controls.Medical.AutomationImageViewer.prototype.set_automationContainerIndex,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.AutomationInteractiveMode = function() {
		lt.Controls.Medical.AutomationInteractiveMode.initializeBase(this);
		this.set_autoItemMode(lt.Controls.ImageViewerAutoItemMode.autoSet);
		this.set_itemPart(lt.Controls.ImageViewerItemPart.item);
		this.set_isDragMouseWheelEnabled(!1)
	};
	lt.Controls.Medical.AutomationInteractiveMode.prototype = {
		_viewer$1: null,
		get_id: function() {
			return 100
		},
		start: function(a) {
			this._viewer$1 = a;
			null == this._viewer$1 && lt.Annotations.Core.ExceptionHelper.invalidOperationException("Must me attached to AutomationImageViewer instance");
			lt.Controls.Medical.AutomationInteractiveMode.callBaseMethod(this, "start", [a]);
			a = lt.Controls.Medical.AutomationInteractiveMode.callBaseMethod(this, "get_interactiveService");
			a.set_dragStartsOnDown(!0);
			a.add_dragStarted(ss.Delegate.create(this, this._service_DragStarted$1));
			a.add_dragDelta(ss.Delegate.create(this, this._service_DragDelta$1));
			a.add_dragCompleted(ss.Delegate.create(this, this._service_DragCompleted$1));
			a.add_doubleTap(ss.Delegate.create(this, this._service_DoubleTap$1))
		},
		stop: function(a) {
			if(this.get_isStarted()) {
				var b = lt.Controls.Medical.AutomationInteractiveMode.callBaseMethod(this, "get_interactiveService");
				b.remove_dragStarted(ss.Delegate.create(this, this._service_DragStarted$1));
				b.remove_dragDelta(ss.Delegate.create(this, this._service_DragDelta$1));
				b.remove_dragCompleted(ss.Delegate.create(this, this._service_DragCompleted$1));
				b.remove_doubleTap(ss.Delegate.create(this, this._service_DoubleTap$1));
				this._viewer$1 = null;
				lt.Controls.Medical.AutomationInteractiveMode.callBaseMethod(this, "stop", [a])
			}
		},
		get_name: function() {
			return "AutomationInteractiveMode"
		},
		_getScrollPoints$1: function(a) {
			for(var a = a.get_parentCell().get_div(), b = 0, c = 0; null != a;) void 0 != a.scrollLeft && (b += a.scrollLeft), void 0 != a.scrollTop && (c += a.scrollTop), a = a.parentNode;
			return lt.LeadPointD.create(b, c)
		},
		_scrollPoint$1: null,
		_service_DragStarted$1: function(a, b) {
			if(this.canStartWork(b) &&
				null != this.get_item()) {
				var c = this.get_item();
				this._scrollPoint$1 = this._getScrollPoints$1(this.get_item());
				c = c.get_imageViewer().getItemViewBounds(c, lt.Controls.ImageViewerItemPart.view, !1);
				if(!c.get_isEmpty() && (c = lt.LeadPointD.create(this._scrollPoint$1.get_x() + b.get_position().get_x() - c.get_left(), this._scrollPoint$1.get_y() + b.get_position().get_y() - c.get_top()), null != this._viewer$1)) switch(this.onWorkStarted(lt.LeadEventArgs.Empty), b.get_mouseButton()) {
					case lt.Controls.MouseButtons.right:
						this._viewer$1.onAutomationPointerDown(lt.Annotations.Core.AnnPointerEventArgs.create(lt.Annotations.Core.AnnMouseButton.right,
							lt.LeadPointD.create(c.get_x(), c.get_y())));
						break;
					default:
						this._viewer$1.onAutomationPointerDown(lt.Annotations.Core.AnnPointerEventArgs.create(lt.Annotations.Core.AnnMouseButton.left, lt.LeadPointD.create(c.get_x(), c.get_y())))
				}
			}
		},
		_service_DragDelta$1: function(a, b) {
			if(null != this._viewer$1 && this.get_isWorking()) {
				var c = this.get_item(),
					c = c.get_imageViewer().getItemViewBounds(c, lt.Controls.ImageViewerItemPart.view, !1);
				c.get_isEmpty() || (c = lt.LeadPointD.create(this._scrollPoint$1.get_x() + b.get_position().get_x() -
					c.get_left(), this._scrollPoint$1.get_y() + b.get_position().get_y() - c.get_top()), this._viewer$1.onAutomationPointerMove(lt.Annotations.Core.AnnPointerEventArgs.create(lt.Annotations.Core.AnnMouseButton.left, lt.LeadPointD.create(c.get_x(), c.get_y()))), b.set_isHandled(!0))
			}
		},
		_service_DragCompleted$1: function(a, b) {
			if(null != this._viewer$1 && this.get_isWorking()) {
				var c = this.get_item(),
					c = c.get_imageViewer().getItemViewBounds(c, lt.Controls.ImageViewerItemPart.view, !1);
				c.get_isEmpty() || (c = lt.LeadPointD.create(this._scrollPoint$1.get_x() +
					b.get_position().get_x() - c.get_left(), this._scrollPoint$1.get_y() + b.get_position().get_y() - c.get_top()), this._viewer$1.onAutomationPointerUp(lt.Annotations.Core.AnnPointerEventArgs.create(lt.Annotations.Core.AnnMouseButton.left, lt.LeadPointD.create(c.get_x(), c.get_y()))), this.onWorkCompleted(lt.LeadEventArgs.Empty), b.set_isHandled(!0))
			}
		},
		_service_DoubleTap$1: function(a, b) {
			null != this._viewer$1 && this.canStartWork(b) && (this.onWorkStarted(lt.LeadEventArgs.Empty), this._viewer$1.onAutomationDoubleClick(lt.Annotations.Core.AnnPointerEventArgs.create(lt.Annotations.Core.AnnMouseButton.left,
				lt.LeadPointD.get_empty())), this.onWorkCompleted(lt.LeadEventArgs.Empty), b.set_isHandled(!0))
		}
	};
	Object.defineProperty(lt.Controls.Medical.AutomationInteractiveMode.prototype, "id", {
		get: lt.Controls.Medical.AutomationInteractiveMode.prototype.get_id,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.AutomationInteractiveMode.prototype, "name", {
		get: lt.Controls.Medical.AutomationInteractiveMode.prototype.get_name,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical._imageDataStreamer =
		function(canvas, b, c) {
			this._numberOfRows = Math.max(1, Math.floor(b / (4 * canvas.width)) + c >> 1);
			this._canvas = canvas;
			this._dim = c
		};
	lt.Controls.Medical._imageDataStreamer.prototype = {
		_canvas: null,
		_isEOF: !1,
		_numberOfRows: 0,
		_dim: 0,
		_currentRow: 0,
		beginStream: function() {
			this._currentRow = 0;
			this._isEOF = !1
		},
		get_isEOF: function() {
			return this._isEOF
		},
		getNextChunk: function() {
			var ogx = this._canvas.getContext("2d"),
				height = this._canvas.height,
				c = Math.min(height - this._currentRow, this._numberOfRows),
				imgData = ogx.getImageData(0, this._currentRow, this._canvas.width, c);
			this._currentRow += this._numberOfRows;
			this._currentRow >= height && (this._isEOF = !0);
			return imgData
		},
		setNextChunk: function(a) {
			var b = this._canvas.getContext("2d"),
				c = this._canvas.height,
				d = Math.min(c, this._currentRow + this._numberOfRows);
			b.putImageData(a, 0, this._currentRow);
			this._currentRow += this._numberOfRows;
			d === c && (this._isEOF = !0)
		}
	};
	lt.Controls.Medical.DICOMImageInformation = function() {
		this.set_minValue(0);
		this.set_maxValue(0);
		this.set_signed(!1);
		this.set_modalitySlope(1);
		this.set_autoScaleSlope(1)
	};
	lt.Controls.Medical.DICOMImageInformation._updateImageData =
		function(a, b, c, d, e, f) {
			for(var g = Math.min(b.length - c, 1E6), h = c; h < c + g; h++) b[h] = a[d + 1] << 8 | a[d], d += 2;
			c + g >= b.length ? e(b, f) : setTimeout(function() {
				lt.Controls.Medical.DICOMImageInformation._updateImageData(a, b, c + g, d, e, f)
			}, 1)
		};
	lt.Controls.Medical.DICOMImageInformation.prototype = {
		_autoScaleIntercept: 0,
		get_autoScaleIntercept: function() {
			return this._autoScaleIntercept
		},
		set_autoScaleIntercept: function(a) {
			return this._autoScaleIntercept = a
		},
		_autoScaleSlope: 0,
		get_autoScaleSlope: function() {
			return this._autoScaleSlope
		},
		set_autoScaleSlope: function(a) {
			return this._autoScaleSlope = a
		},
		_image: null,
		get_image: function() {
			return this._image
		},
		set_image: function(a) {
			return this._image = a
		},
		_canvas: null,
		get_canvas: function() {
			return this._canvas
		},
		set_canvas: function(a) {
			return this._canvas = a
		},
		_Width: 0,
		get_width: function() {
			return this._Width
		},
		set_width: function(a) {
			return this._Width = a
		},
		_Height: 0,
		get_height: function() {
			return this._Height
		},
		set_height: function(a) {
			return this._Height = a
		},
		_BitsPerPixel: 0,
		get_bitsPerPixel: function() {
			return this._BitsPerPixel
		},
		set_bitsPerPixel: function(a) {
			return this._BitsPerPixel = a
		},
		_MinValue: 0,
		get_minValue: function() {
			return this._MinValue
		},
		set_minValue: function(a) {
			return this._MinValue = a
		},
		_MaxValue: 0,
		get_maxValue: function() {
			return this._MaxValue
		},
		set_maxValue: function(a) {
			return this._MaxValue = a
		},
		_LUT32: null,
		get_luT32: function() {
			return this._LUT32
		},
		set_luT32: function(a) {
			return this._LUT32 = a
		},
		_LUT2: null,
		get__luT2: function() {
			return this._LUT2
		},
		set__luT2: function(a) {
			return this._LUT2 = a
		},
		_Data32: null,
		get_data32: function() {
			return this._Data32
		},
		set_data32: function(a) {
			return this._Data32 = a
		},
		_windowWidth: 0,
		get_windowWidth: function() {
			return this._windowWidth
		},
		set_windowWidth: function(a) {
			return this._windowWidth = a
		},
		_windowCenter: 0,
		get_windowCenter: function() {
			return this._windowCenter
		},
		set_windowCenter: function(a) {
			return this._windowCenter = a
		},
		_LowBit: 0,
		get_lowBit: function() {
			return this._LowBit
		},
		set_lowBit: function(a) {
			return this._LowBit = a
		},
		_HighBit: 0,
		get_highBit: function() {
			return this._HighBit
		},
		set_highBit: function(a) {
			return this._HighBit = a
		},
		_ModalityIntercept: 0,
		get_modalityIntercept: function() {
			return this._ModalityIntercept
		},
		set_modalityIntercept: function(a) {
			return this._ModalityIntercept = a
		},
		_ModalitySlope: 0,
		get_modalitySlope: function() {
			return this._ModalitySlope
		},
		set_modalitySlope: function(a) {
			return this._ModalitySlope = a
		},
		_Signed: !1,
		get_signed: function() {
			return this._Signed
		},
		set_signed: function(a) {
			return this._Signed = a
		},
		_photoMetricInterpretation: null,
		get_photometricInterpretation: function() {
			return this._photoMetricInterpretation
		},
		set_photometricInterpretation: function(a) {
			return this._photoMetricInterpretation = a
		},
		_LUTDescriptor: null,
		get_lutDescriptor: function() {
			return this._LUTDescriptor
		},
		set_lutDescriptor: function(a) {
			return this._LUTDescriptor = a
		},
		_firstStoredPixelValueMapped: 0,
		get_firstStoredPixelValueMapped: function() {
			return this._firstStoredPixelValueMapped
		},
		set_firstStoredPixelValueMapped: function(a) {
			return this._firstStoredPixelValueMapped = a
		},
		_prepareImageData: function() {
			var a = this.get_data32(),
				b = this.get_bitsPerPixel(),
				c = a.length,
				d = null,
				e;
			switch(b) {
				case 12:
				case 16:
				case 48:
				case 64:
					d = lt.LTHelper.supportsTypedArray ? new Uint32Array(c >> 1) : Array(c >> 1);
					for(b = e = 0; b < c; b++) d[b] = a[e + 1] << 8 | a[e], e += 2;
					break;
				default:
					d = lt.LTHelper.supportsTypedArray ? new Uint32Array(a) : a
			}
			return d
		},
		_onPreparingDataCompleted: function(a, b) {
			this._Data32 = a;
			b()
		},
		_setAndPrepareImageDataAsync: function(a, b) {
			var c = this.get_bitsPerPixel(),
				d = a.length,
				e = null;
			switch(c) {
				case 12:
				case 16:
				case 48:
				case 64:
					e = lt.LTHelper.supportsTypedArray ? new Uint32Array(d >> 1) : Array(d >>1);
					lt.Controls.Medical.DICOMImageInformation._updateImageData(a, e, 0, 0, ss.Delegate.create(this, this._onPreparingDataCompleted), b);
					break;
				default:
					e = lt.LTHelper.supportsTypedArray ? new Uint32Array(a) : a, this._onPreparingDataCompleted(e, b)
			}
		},
		_restoreImageData: function(a, b) {
			var c = this.get_bitsPerPixel(),
				d = a.data.length,
				e = 0;
			switch(c) {
				case 12:
				case 16:
				case 48:
				case 64:
					for(var c = 0, f = a.data; e < d; e += 4) f[e + 1] = b[c] >> 8, f[e + 2] = b[c] & 255, f[e + 3] = 255, c++;
					break;
				default:
					f = a.data;
					for(c = 0; e < d; e += 4) f[e + 2] = b[c], f[e + 3] = 255, c++
			}
		},
		clone: function() {
			var a = new lt.Controls.Medical.DICOMImageInformation;
			a.set_width(this.get_width());
			a.set_height(this.get_height());
			a.set_bitsPerPixel(this.get_bitsPerPixel());
			a.set_minValue(this.get_minValue());
			a.set_maxValue(this.get_maxValue());
			a.set_luT32(this.get_luT32());
			a.set_windowWidth(this.get_windowWidth());
			a.set_windowCenter(this.get_windowCenter());
			a.set_signed(this.get_signed());
			a.set_lowBit(this.get_lowBit());
			a.set_highBit(this.get_highBit());
			return a
		},
		_prepareDataChunk: function(a) {
			var b =
				null,
				b = this.get_bitsPerPixel(),
				c = a.data.length >> 2,
				d = 0;
			switch(b) {
				case 12:
				case 16:
				case 48:
				case 64:
					for(var b = lt.LTHelper.supportsTypedArray ? new Uint32Array(c) : Array(c), e = 0, a = a.data; d < c; d++) 
						b[d] = a[e + 1] << 8 | a[e + 2], e += 4;
					break;
				default:
					b = lt.LTHelper.supportsTypedArray ? new Uint32Array(c) : Array(c);
					a = a.data;
					for(e = 0; d < c; d++) 
						b[d] = a[e + 2], e += 4
			}
			return b
		},
		_setAndPrepareCanvasData: function(a) {
			this._canvas = a
		}
	};
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "autoScaleIntercept", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_autoScaleIntercept,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_autoScaleIntercept,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "autoScaleSlope", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_autoScaleSlope,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_autoScaleSlope,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "image", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_image,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_image,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "canvas", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_canvas,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_canvas,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "width", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_width,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_width,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "height", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_height,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_height,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "bitsPerPixel", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_bitsPerPixel,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_bitsPerPixel,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "minValue", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_minValue,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_minValue,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "maxValue", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_maxValue,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_maxValue,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "luT32", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_luT32,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_luT32,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "data32", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_data32,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_data32,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "windowWidth", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_windowWidth,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_windowWidth,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "windowCenter", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_windowCenter,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_windowCenter,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "lowBit", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_lowBit,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_lowBit,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "highBit", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_highBit,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_highBit,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "modalityIntercept", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_modalityIntercept,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_modalityIntercept,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "modalitySlope", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_modalitySlope,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_modalitySlope,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "signed", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_signed,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_signed,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "photometricInterpretation", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_photometricInterpretation,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_photometricInterpretation,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "lutDescriptor", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_lutDescriptor,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_lutDescriptor,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformation.prototype, "firstStoredPixelValueMapped", {
		get: lt.Controls.Medical.DICOMImageInformation.prototype.get_firstStoredPixelValueMapped,
		set: lt.Controls.Medical.DICOMImageInformation.prototype.set_firstStoredPixelValueMapped,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.DICOMImageInformationRenderer = function(a) {
		if(null == a) throw Error("'information' cannot be null");
		this._info = a;
		this._windowLevelPaletteType = 0;
		this._updatePalette();
		(this._useDescriptor = this._doUseDescriptor()) && this._prepareLUTDescriptor();
		var a = !1,
			b = this._info.get_photometricInterpretation();
		if("MONOCHROME2" === b || "MONOCHROME1" === b) {
			null == this._info.get_luT32() && (a = !0, 32 !== this._info.get_bitsPerPixel() && (lt.LTHelper.supportsTypedArray ? this._info.set_luT32(new Uint32Array(1 <<
				this._info.get_highBit() + 1)) : this._info.set_luT32(Array(1 << this._info.get_highBit() + 1))));
			b = !1;
			this._info.get_signed() && (this._info.set_minValue(32767 < this._info.get_minValue() ? this._info.get_minValue() - 65536 : this._info.get_minValue()), this._info.set_maxValue(32767 < this._info.get_maxValue() ? this._info.get_maxValue() - 65536 : this._info.get_maxValue()), b = 0 > this._info.get_minValue() && 0 > this._info.get_maxValue());
			if(!(this._info.get_maxValue() - this._info.get_minValue()) || -1 === this._info.get_maxValue() ||
				b) 8 === this._info.get_bitsPerPixel() ? (this._info.set_minValue(0), this._info.set_maxValue(255)) : (this._getMinMaxValue(), this._info.set_minValue(this._minValue), this._info.set_maxValue(this._maxValue));
			this._calculateLUT(a)
		} else lt.LTHelper.supportsTypedArray ? this._info.set_luT32(new Uint32Array(2E3)) : this._info.set_luT32(Array(2E3)), this._windowLevelWidth = 256, this._windowLevelCenter = 128, this._originalWindowLevelWidth = 256, this._originalWindowLevelCenter = 128, this._minimumWindowLevelWidth = 1, this._maximumWindowLevelWidth =
			256, this._minimumWindowLevelCenter = -this._maximumWindowLevelWidth, this._maximumWindowLevelCenter = this._maximumWindowLevelWidth
	};
	lt.Controls.Medical.DICOMImageInformationRenderer._stringArrayToIntArray = function(a) {
		if(null == a) return null;
		var b, c = Array(a.length);
		for(b = 0; b < a.length; b++) c[b] = parseInt(a[b]);
		return c
	};
	lt.Controls.Medical.DICOMImageInformationRenderer.shouldResize = function() {
		return 0
	};
	lt.Controls.Medical.DICOMImageInformationRenderer.prototype = {
		dispose: function() {
			this._info = this._pLUT = this._paletteB =
				this._paletteG = this._paletteR = this._modifiedDescriptor = this._renderImageData = null
		},
		_minValue: 0,
		_maxValue: 0,
		_getMinMaxValue: function() {
			var a = this._info.get_width(),
				b = this._info.get_height(),
				c, d, e, f = this._info.get_data32(),
				g, h = 65536,
				h = 1 << this._info.get_highBit() - this._info.get_lowBit() + 1;
			this._info.get_signed();
			var i = !this._info.get_signed() ? h : h + 1 >> 1;
			this._minValue = 65536;
			this._maxValue = -65536;
			if(null != this._info.get_canvas()) {
				a = new lt.Controls.Medical._imageDataStreamer(this._info.get_canvas(), 4E5, 0);
				for(a.beginStream(); !a.get_isEOF();) {
					f = this._info._prepareDataChunk(a.getNextChunk());
					b = f.length;
					for(c = 0; c < b; c++) 
						g = f[c], g >= i && (g -= h), this._maxValue = Math.max(this._maxValue, g), this._minValue = Math.min(this._minValue, g)
				}
			} else
				for(d = 0; d < b; d++) {
					e = d * a;
					for(c = 0; c < a; c++) g = f[e + c], g >= i && (g -= h), this._maxValue = Math.max(this._maxValue, g), this._minValue = Math.min(this._minValue, g)
				}
		},
		_doUseDescriptor: function() {
			var a = null != this._info.get_lutDescriptor() && !this._info.get_windowWidth();
			this._info.get_modalityIntercept() &&
				this._info.get_modalitySlope() && 1 !== this._info.get_modalitySlope() && (a = !1);
			return a
		},
		_updateRenderer: function() {
			(this._useDescriptor = this._doUseDescriptor()) && this._prepareLUTDescriptor()
		},
		_calculateLUT: function(a) {
			this._getLUTValues(a);
			
			if(this._info.get_windowWidth()) {
			
				this._windowLevelWidth = this._info.get_windowWidth();
				this._windowLevelCenter = this._info.get_windowCenter();
				this._originalWindowLevelWidth = this._info.get_windowWidth();
				this._originalWindowLevelCenter = this._info.get_windowCenter();
			}		
			else{
			(
				this._originalWindowLevelWidth = this._windowLevelWidth, this._originalWindowLevelCenter = this._windowLevelCenter);
			}
			
			this.updateWindowLevelLUT(this._originalWindowLevelWidth, this._originalWindowLevelCenter);
			
			this._isLUTCalculated = !0
		},
		_isLUTCalculated: !1,
		get__isLUTCalculated: function() {
			return this._isLUTCalculated
		},
		_info: null,
		get_information: function() {
			return this._info
		},
		_from: 0,
		_to: 0,
		_previous1: 0,
		_previous2: 65535,
		_minimumWindowLevelWidth: 0,
		get_minimumWindowLevelWidth: function() {
			return this._minimumWindowLevelWidth
		},
		_maximumWindowLevelWidth: 0,
		get_maximumWindowLevelWidth: function() {
			return this._maximumWindowLevelWidth
		},
		_minimumWindowLevelCenter: 0,
		get_minimumWindowLevelCenter: function() {
			return this._minimumWindowLevelCenter
		},
		_maximumWindowLevelCenter: 0,
		get_maximumWindowLevelCenter: function() {
			return this._maximumWindowLevelCenter
		},
		_originalWindowLevelWidth: 0,
		get_originalWindowLevelWidth: function() {
			return this._originalWindowLevelWidth
		},
		_originalWindowLevelCenter: 0,
		get_originalWindowLevelCenter: function() {
			return this._originalWindowLevelCenter
		},
		_windowLevelWidth: 0,
		get_windowLevelWidth: function() {
			return this._windowLevelWidth
		},
		_windowLevelCenter: 0,
		get_windowLevelCenter: function() {
			return this._windowLevelCenter
		},
		_attachedRenderer: null,
		reset: function() {
			this.updateWindowLevelLUT(this._originalWindowLevelWidth, this._originalWindowLevelCenter)
		},
		updateWindowLevelLUT: function(width, center) {
			this._applyWindowLevelLUT(width, center, 8)
		},
		add_changed: function(a) {
			this.__changed = ss.Delegate.combine(this.__changed, a)
		},
		remove_changed: function(a) {
			this.__changed = ss.Delegate.remove(this.__changed,
				a)
		},
		__changed_handler_get: function() {
			null == this.__changed_handler && (this.__changed_handler = ss.EventHandler.create(this, this.add_changed, this.remove_changed));
			return this.__changed_handler
		},
		__changed: null,
		__changed_handler: null,
		onChanged: function(a) {
			null != this.__changed && this.__changed(this, a)
		},
		_useDescriptor: !1,
		_getLUTValues: function(a) {
			var b = 0,
				c = 0;
			if(this._useDescriptor) b = this._info.get_firstStoredPixelValueMapped(), c = b + this._info.get_lutDescriptor().length;
			else if(a) - 1 === this._info.get_maxValue() &&
				this._info.set_maxValue((1 << this._info.get_bitsPerPixel()) - 1), b = this._info.get_minValue(), c = this._info.get_maxValue();
			else if(null != this._info.get_luT32()) {
				var a = this._info.get_luT32()[0],
					d = this._info.get_luT32()[this._info.get_luT32().length - 1],
					e;
				for(e = 0; e < this._info.get_luT32().length; e++)
					if(this._info.get_luT32()[e] !== a) {
						b = e;
						break
					}
				for(e = this._info.get_luT32().length - 1; 0 < e; e--)
					if(this._info.get_luT32()[e] !== d) {
						c = e;
						break
					}
			}
			this._from = c - b;
			this._to = parseInt((c + b) / 2);
			this._windowLevelWidth = this._from;
			this._windowLevelCenter = this._to;
			32 === this._info.get_bitsPerPixel() ? (this._minimumWindowLevelWidth = 1, this._maximumWindowLevelWidth = c, this._minimumWindowLevelCenter = -c, this._maximumWindowLevelCenter = c) : (this._minimumWindowLevelWidth = 1, this._maximumWindowLevelWidth = ((1 << (12 === this._info.get_bitsPerPixel() || 8 === this._info.get_bitsPerPixel() ? 16 : this._info.get_bitsPerPixel())) - 1) * this._info.get_modalitySlope() + this._info.get_modalityIntercept(), this._minimumWindowLevelCenter = -this._maximumWindowLevelWidth,
				this._maximumWindowLevelCenter = this._maximumWindowLevelWidth)
		},
		_renderImageData: null,
		_renderUsingCanvasInternal: function(a, b) {
			var c = null;
			if(null != this._info.get_image()) {
				var d = this._info.get_image();
				null == this._info.get_canvas() && (c = document.createElement("canvas"), c.width = d.naturalWidth, c.height = d.naturalHeight, c.getContext("2d").drawImage(d, 0, 0, c.width, c.height), this._info.set_canvas(c))
			}
			this._renderImageData = null;
			b ? this._firstRender(a, this._renderImageData) : this._updateRender(a, this._renderImageData);
			this.onUpdateImageData(lt.LeadEventArgs.Empty)
		},
		_freeInfoCanvas: function() {
			null != this._info.get_image() && null != this._info.get_canvas() && (lt.Controls.Medical.Tools._disposeCanvas(this._info.get_canvas()), this._info.set_canvas(null))
		},
		renderUsingCanvas: function(a, b) {
			this._renderUsingCanvasInternal(a, b);
			this._freeInfoCanvas()
		},
		_render32BitGrayScale: function(a) {
			var b = a.get_canvas().getContext("2d"),
				c = b.getImageData(0, 0, a.get_canvas().width, a.get_canvas().height),
				a = a.get_backCanvas().getContext("2d").getImageData(0,
					0, a.get_backCanvas().width, a.get_backCanvas().height);
			this._windowLevel32(this._info.get_luT32(), c.data, a.data);
			b.putImageData(c, 0, 0)
		},
		_renderColored: function(a, b) {
			for(var c = a.get_canvas().getContext("2d"), d = a.get_canvas().width, e = a.get_canvas().height, f = c.getImageData(0, 0, d, e), g = f.data, d = 4 * d * e, e = 0; e < d; e += 4) g[e] = b.get_luT32()[g[e]], g[e + 1] = b.get_luT32()[g[e + 1]], g[e + 2] = b.get_luT32()[g[e + 2]];
			c.putImageData(f, 0, 0)
		},
		_renderInPlace: function(a) {
			var b = a.get_canvas().getContext("2d"),
				a = b.getImageData(0, 0,
					a.get_canvas().width, a.get_canvas().height);
			this._windowLevel2(this._info.get_luT32(), a.data);
			b.putImageData(a, 0, 0)
		},
		_render: function(a) {
			var b = a.getContext("2d"),
				a = b.getImageData(0, 0, a.width, a.height);
			this._windowLevel2(this._info.get_luT32(), a.data);
			b.putImageData(a, 0, 0)
		},
		_renderMPR: function(a, b, c, d) {
			var e = a.getContext("2d"),
				a = e.getImageData(0, 0, a.width, a.height);
			this._windowLevelMPR(a.data, b, c, d);
			e.putImageData(a, 0, 0)
		},
		add_updateImageData: function(a) {
			this.__updateImageData = ss.Delegate.combine(this.__updateImageData,
				a)
		},
		remove_updateImageData: function(a) {
			this.__updateImageData = ss.Delegate.remove(this.__updateImageData, a)
		},
		__updateImageData_handler_get: function() {
			null == this.__updateImageData_handler && (this.__updateImageData_handler = ss.EventHandler.create(this, this.add_updateImageData, this.remove_updateImageData));
			return this.__updateImageData_handler
		},
		__updateImageData: null,
		__updateImageData_handler: null,
		onUpdateImageData: function(a) {
			null != this.__updateImageData && this.__updateImageData(this, a)
		},
		_firstRender: function(a,b) {
			if(null == b) {
				var c = null;
				this._info.get_luT32();
				var d = new lt.Controls.Medical._imageDataStreamer(this._info.get_canvas(), 2E6, 0),
					e = new lt.Controls.Medical._imageDataStreamer(a, 2E6, 0);
				e.beginStream();
				for(d.beginStream(); !d.get_isEOF();) {
					var f = d.getNextChunk(),
						c = this._info._prepareDataChunk(f),
						g = c.length << 2;
					this._windowLevel(this._info.get_luT32(), f.data, c, 0, g, !0);
					e.setNextChunk(f)
				}
			} else if(null == this._info.get_data32()) {
				e = b.data;
				this._info.get_data32();
				this._info.get_luT32();
				d = new lt.Controls.Medical._imageDataStreamer(this._info.get_canvas(),
					2E6, 0);
				d.beginStream();
				for(var h = 0; !d.get_isEOF();) {
					f = d.getNextChunk();
					c = this._info._prepareDataChunk(f);
					g = h + (c.length << 2);
					h = this._windowLevel(this._info.get_luT32(), e, c, h, g, !0);
				}
			} else {
				e = b.data;
				c = this._info.get_data32();
				g = this._info.get_data32().length << 2;
				this._info.get_luT32();
				this._windowLevel(this._info.get_luT32(), e, c, 0, g, !0);
			}
		},
		_updateRender: function(a, b) {
			if(null == b) {
				var c = null;
				this._info.get_luT32();
				var d = new lt.Controls.Medical._imageDataStreamer(this._info.get_canvas(), 2E6, 0),
					e = new lt.Controls.Medical._imageDataStreamer(a,
						2E6, 0);
				e.beginStream();
				for(d.beginStream(); !d.get_isEOF();) {
					var f = d.getNextChunk(),
						c = this._info._prepareDataChunk(f),
						g = c.length << 2;
					this._windowLevel(this._info.get_luT32(), f.data, c, 0, g, !1);
					e.setNextChunk(f)
				}
			} else if(null == this._info.get_data32()) {
				e = b.data;
				this._info.get_data32();
				this._info.get_luT32();
				d = new lt.Controls.Medical._imageDataStreamer(this._info.get_canvas(), 2E6, 0);
				d.beginStream();
				for(var h = 0; !d.get_isEOF();) f = d.getNextChunk(), c = this._info._prepareDataChunk(f), g = h + (c.length << 2), h = this._windowLevel(this._info.get_luT32(),
					e, c, h, g, !1)
			} else e = b.data, c = this._info.get_data32(), g = this._info.get_data32().length << 2, this._info.get_luT32(), this._windowLevel(this._info.get_luT32(), e, c, 0, g, !1)
		},
		_beginResize: function(a) {
			if(null == a) throw Error("'resizeRenderer' must not be null");
			a._from = this._from;
			a._to = this._to;
			a._previous1 = this._previous1;
			a._previous2 = this._previous2;
			a._minimumWindowLevelWidth = this._minimumWindowLevelWidth;
			a._maximumWindowLevelWidth = this._maximumWindowLevelWidth;
			a._minimumWindowLevelCenter = this._minimumWindowLevelCenter;
			a._maximumWindowLevelCenter = this._maximumWindowLevelCenter;
			a._originalWindowLevelWidth = this._originalWindowLevelWidth;
			a._originalWindowLevelCenter = this._originalWindowLevelCenter;
			a._windowLevelWidth = this._windowLevelWidth;
			a._windowLevelCenter = this._windowLevelCenter;
			a._attachedRenderer = this;
			this._attachedRenderer = a
		},
		_endResize: function() {
			null != this._attachedRenderer && (this._attachedRenderer = this._attachedRenderer._attachedRenderer = null)
		},
		_modifiedDescriptor: null,
		_prepareLUTDescriptor: function() {
			var a =
				this._info.get_lutDescriptor().length,
				b = this._info.get_lutDescriptor(),
				c, d = !1;
			"MONOCHROME1" === this._info.get_photometricInterpretation() && (d = !0);
			this._getMinMaxLUTValues(b, a);
			this._modifiedDescriptor = Array(a);
			for(c = 0; c < a; c++) this._modifiedDescriptor[c] = d ? 255 - 255 * b[c] / this._maxValueApplyVOI : 255 * b[c] / this._maxValueApplyVOI
		},
		_getMinMaxLUTValues: function(a, b) {
			var c, d;
			c = d = a[0];
			for(var e = 1; e < b; e++) c > a[e] && (c = a[e]), d < a[e] && (d = a[e]);
			this._minValueApplyVOI = c;
			this._maxValueApplyVOI = d
		},
		_applyWindowLevelLUTUsingDescriptor: function(a,
			b) {
			var c = this._info.get_lutDescriptor().length - 1,
				d = c << 8 | 255,
				e = 8,
				e = 8,
				f, g, h = 65536;
			null != this._info.get_luT32() && this._info.get_luT32().length && (h = this._info.get_luT32().length);
			f = !this._info.get_signed() ? 0 : -(h + 1 >> 1);
			g = !this._info.get_signed() ? h : h + 1 >> 1;
			var i = this._info.get_luT32(),
				j = lt.LeadPointD.create(b - (a + 1 >> 1), 0),
				k = lt.LeadPointD.create(b + (a >> 1), c),
				l = parseInt(j.get_x()),
				m = 0,
				d = d / parseInt(k.get_x() - j.get_x()),
				n = Math.min(j.get_x(), 0);
			for(j.get_x() < f && (m = -(l - f) * d); f < n; f++) l = h + f, i[l] = 0;
			for(n = Math.min(0,
					k.get_x()); f < n; f++) l = h + f, i[l] = m >> e, m += d;
			for(; 0 > f; f++) l = h + f, i[l] = c;
			for(; f < j.get_x(); f++) i[f] = 0;
			for(n = Math.min(g, k.get_x()); f < n; f++) i[f] = m >> e, m += d;
			for(; f < g; f++) i[f] = c;
			i = this._info.get_luT32();
			c = i.length;
			for(f = 0; f < c; f++) i[f] = this._modifiedDescriptor[i[f]]
		},
		_applyWindowLevelLUT: function(a, b, c) {
			a < this._minimumWindowLevelWidth && (a = this._minimumWindowLevelWidth);
			a > this._maximumWindowLevelWidth && (a = this._maximumWindowLevelWidth);
			b < this._minimumWindowLevelCenter && (b = this._minimumWindowLevelCenter);
			b > this._maximumWindowLevelCenter &&
				(b = this._maximumWindowLevelCenter);
				
			var d = b,
				e = a,
				a = a * (1 << this._info.get_lowBit()),
				b = b * (1 << this._info.get_lowBit()),
				a = Math.round(a * this._info.get_autoScaleSlope()),
				b = Math.round(b * this._info.get_autoScaleSlope() + this._info.get_autoScaleIntercept());
			
			if(null != this.get_information().get_luT32()) {
				if(this._useDescriptor) this._applyWindowLevelLUTUsingDescriptor(a, b, c);
				else {
					var f = 0,
						g = 255,
						h = 8;
					16 === c ? (f *= 257, g *= 257, h = 8) : h = 16;
					var i = 8 === this._info.get_bitsPerPixel() ? 255 : 65535,
						j, k = 65536;
					null != this._info.get_luT32() &&
						this._info.get_luT32().length && (k = this._info.get_luT32().length);
					j = !this._info.get_signed() ? 0 : -(k + 1 >> 1);
					var c = !this._info.get_signed() ? k : k + 1 >> 1,
						l = this._info.get_luT32(),
						m = lt.LeadPointD.create(b - (a + 1 >> 1), 0),
						a = lt.LeadPointD.create(b + (a >> 1), i),
						n = parseInt(m.get_x()),
						i = 0,
						b = 16777215 / parseInt(a.get_x() - m.get_x());
					"MONOCHROME1" === this._info.get_photometricInterpretation() && (i = f, f = g, g = i, n = parseInt(a.get_x()), b = -b, i = 16777215);
					var o = Math.min(m.get_x(), 0);
					for(m.get_x() < j && (i = -(n - j) * b); j < o; j++) n = k + j, l[n] = f;
					for(o =
						Math.min(0, a.get_x()); j < o; j++) n = k + j, l[n] = i >> h, i += b;
					for(; 0 > j; j++) n = k + j, l[n] = g;
					for(; j < m.get_x(); j++) l[j] = f;
					for(o = Math.min(c, a.get_x()); j < o; j++) l[j] = i >> h, i += b;
					for(; j < c; j++) l[j] = g
				}
				try {
					var p, t, q, s, r = this._info.get_luT32();
					null == this._info.get__luT2() && this._info.set__luT2(Array(parseInt(r.length / 256) + 1));
					p = 0;
					for(k = 256; p < k; p++) {
						lt.LTHelper.supportsTypedArray ? this._info.get__luT2()[p] = new Uint32Array(256) : this._info.get__luT2()[p] = Array(256);
						s = this._info.get__luT2()[p];
						f = 0;
						t = 256 * p;
						for(q = 256 * (p + 1); t < q; t++) t >=
							r.length ? p = k : s[f] = r[t], f++
					}
				} catch(u) {}
			}
			if(this._windowLevelWidth !== e || this._windowLevelCenter !== d) this._windowLevelWidth = e, this._windowLevelCenter = d, this.onChanged(lt.LeadEventArgs.Empty)
		},
		_paletteR: null,
		_paletteG: null,
		_paletteB: null,
		_paletteData: null,
		loadPaletteData: function(a) {
			var b = new XMLHttpRequest;
			b.open("GET", a, !1);
			a = lt.LTHelper.requestCustomHeaders;
			if(0 < Object.getKeyCount(a))
				for(var c = ss.IEnumerator.getEnumerator(Object.keys(a)); c.moveNext();) {
					var d = c.current;
					b.setRequestHeader(d, a[d])
				}
			b.send();
			this._paletteData = b.responseText
		},
		_getPaletteName: function(a) {
			var b = "None";
			switch(a) {
				case 0:
					b = "None";
					break;
				case 1:
					b = "Cool";
					break;
				case 2:
					b = "CyanHot";
					break;
				case 3:
					b = "Fire";
					break;
				case 4:
					b = "ICA2";
					break;
				case 5:
					b = "Ice";
					break;
				case 6:
					b = "OrangeHot";
					break;
				case 7:
					b = "RainbowRGB";
					break;
				case 8:
					b = "RedHot";
					break;
				case 9:
					b = "Spectrum";
					break;
				default:
					b = "Spectrum"
			}
			return b
		},
		_loadPalette: function(a) {
			for(var b = (new DOMParser).parseFromString(this._paletteData, "text/xml"), a = this._getPaletteName(a), b = b.getElementsByTagName(a),
					b = lt.Controls.Medical.DICOMImageInformationRenderer._stringArrayToIntArray(b[0].textContent.split(",")), a = b.length, c = 0, d = 0; c < a; c += 3) this._paletteR[d] = b[c], this._paletteG[d] = b[c + 1], this._paletteB[d] = b[c + 2], ++d
		},
		_updatePalette: function() {
			this._windowLevelPaletteType && (null == this._paletteR && (this._paletteR = Array(256)), null == this._paletteG && (this._paletteG = Array(256)), null == this._paletteB && (this._paletteB = Array(256)), this._loadPalette(this._windowLevelPaletteType), this.updateWindowLevelLUT(this._windowLevelWidth,
				this._windowLevelCenter))
		},
		_windowLevelPaletteType: 0,
		get_paletteType: function() {
			return this._windowLevelPaletteType
		},
		set_paletteType: function(a) {
			this._windowLevelPaletteType = a;
			this._updatePalette();
			return a
		},
		_windowLevel: function(a, b, c, d, e, f) {
			var g = 0;
			if(this._windowLevelPaletteType)
				if(f)
					for(; d < e; d += 4, g++) f = a[c[g]], b[d] = this._paletteR[f], b[d + 1] = this._paletteG[f], b[d + 2] = this._paletteB[f], b[d + 3] = 255;
				else
					for(; d < e; d += 4, g++) f = a[c[g]], b[d] = this._paletteR[f], b[d + 1] = this._paletteG[f], b[d + 2] = this._paletteB[f];
			else if(f)
				for(; d < e; d += 4, g++) b[d] = b[d + 1] = b[d + 2] = a[c[g]], b[d + 3] = 255;
			else
				for(; d < e; d += 4, g++) b[d] = b[d + 1] = b[d + 2] = a[c[g]];
			return d
		},
		_windowLevel2: function(a, b) {
			var c = this._info.get__luT2(),
				d = 0,
				e = b.length,
				f = c.length - 1;
			if(12 <= this._info.get_bitsPerPixel())
				if(this._windowLevelPaletteType)
					for(; d < e; d += 4) c = a[b[d] << 8 | b[d + 1]], b[d] = this._paletteR[c], b[d + 1] = this._paletteG[c], b[d + 2] = this._paletteB[c];
				else
					for(; d < e; d += 4) b[d] = b[d + 1] = b[d + 2] = c[Math.min(f, b[d + 1])][b[d + 2]];
			else if(this._windowLevelPaletteType)
				for(; d < e; d +=
					4) c = a[b[d]], b[d] = this._paletteR[c], b[d + 1] = this._paletteG[c], b[d + 2] = this._paletteB[c];
			else
				for(; d < e; d += 4) b[d] = b[d + 1] = b[d + 2] = a[b[d]];
			return d
		},
		_windowLevelMPR: function(a, b, c, d) {
			var e = 0,
				f = 4 * c,
				g, h = this._windowLevelCenter - this._windowLevelWidth / 2 + this._info.get_autoScaleIntercept(),
				i = this._windowLevelWidth - this._originalWindowLevelWidth,
				j = this._windowLevelCenter - this._originalWindowLevelCenter,
				k = 0,
				l = b.get_count(),
				m, n, o, p;
			if(!this._windowLevelPaletteType)
				if(d)
					for(k = 0; k < l; k++) {
						h = b.get_item(k);
						d = h.get_information().get_bitsPerPixel();
						m = !h.get_information().get_windowWidth() ? h.get_windowWidth() : h.get_information().get_windowWidth();
						o = !h.get_information().get_windowCenter() ? h.get_windowCenter() : h.get_information().get_windowCenter();
						m = m * (1 << h.get_information().get_lowBit()) + i;
						n = o * (1 << h.get_information().get_lowBit()) + j;
						m = Math.round(m * h.get_information().get_autoScaleSlope());
						n = Math.round(n * h.get_information().get_autoScaleSlope() + h.get_information().get_autoScaleIntercept());
						o = 1 << h.get_information().get_highBit() + 1;
						p = !h.get_information().get_signed() ?
							o : o + 1 >> 1;
						h = n - m / 2;
						n = 4 * c;
						f = a.length;
						for(e = 4 * k; e < f; e += n) g = 8 === d ? a[e] : (a[e + 1] << 8) + a[e + 2], g > p && (g -= o), g = (g - h) / m, g = 0 > g ? 0 : 1 < g ? 255 : parseInt(255 * g), a[e] = a[e + 1] = a[e + 2] = g, a[e + 3] = 255
					} else
						for(k = 0; k < l; k++) {
							h = b.get_item(k);
							d = h.get_information().get_bitsPerPixel();
							m = !h.get_information().get_windowWidth() ? h.get_windowWidth() : h.get_information().get_windowWidth();
							o = !h.get_information().get_windowCenter() ? h.get_windowCenter() : h.get_information().get_windowCenter();
							m = m * (1 << h.get_information().get_lowBit()) + i;
							n = o * (1 <<
								h.get_information().get_lowBit()) + j;
							m = Math.round(m * h.get_information().get_autoScaleSlope());
							n = Math.round(n * h.get_information().get_autoScaleSlope() + h.get_information().get_autoScaleIntercept());
							o = 1 << h.get_information().get_highBit() + 1;
							p = !h.get_information().get_signed() ? o : o + 1 >> 1;
							for(h = n - m / 2; e < f; e += 4) g = 8 === d ? a[e] : (a[e + 1] << 8) + a[e + 2], g > p && (g -= o), g = (g - h) / m, g = 0 > g ? 0 : 1 < g ? 255 : parseInt(255 * g), a[e] = a[e + 1] = a[e + 2] = g, a[e + 3] = 255;
							f += 4 * c
						}
			return e
		},
		_windowLevel32: function(a, b, c) {
			var d = a = 0,
				e = b.length,
				f, g = this._windowLevelCenter -
				this._windowLevelWidth / 2,
				h = this._windowLevelWidth;
			if(this._windowLevelPaletteType)
				for(; a < e; a += 4, d += 8) f = 16777216 * c[d + 5] + 65536 * c[d + 6] + (c[d + 1] << 8) + c[d + 2], f = (f - g) / h, f = 0 > f ? 0 : 1 < f ? 255 : parseInt(255 * f + 0.5), b[a] = this._paletteR[f], b[a + 1] = this._paletteG[f], b[a + 2] = this._paletteB[f], b[a + 3] = 255;
			else
				for(; a < e; a += 4, d += 8) f = 16777216 * c[d + 5] + 65536 * c[d + 6] + (c[d + 1] << 8) + c[d + 2], f = (f - g) / h, f = 0 > f ? 0 : 1 < f ? 255 : parseInt(255 * f), b[a] = b[a + 1] = b[a + 2] = f, b[a + 3] = 255;
			return a
		},
		_isSignedBetter: function(a, b, c, d) {
			var e = 0,
				f = 0,
				g = 0,
				h = 0,
				i = h = 0,
				j =
				0,
				k = 0,
				l = 0;
			this._pExpandBitsInternallyOnly = !1;
			this._pBitsTrimmed = 0;
			g = this._info.get_highBit() - this._info.get_lowBit() + 1;
			h = (1 << g - 1) - 1;
			l = this._info.get_bitsPerPixel() - g;
			0 > l && (l = 0);
			e = parseInt(c * b + a);
			f = parseInt(d * b + a);
			a = e;
			e = Math.min(e, f);
			f = Math.max(a, f);
			if(0 < l && 0 > e && 0 < f) {
				a = Math.max(f, -e - 1);
				for(d = b = 1; d < a;) b++, d = 2 * d + 1;
				b++;
				this._pBitsTrimmed = b - g;
				0 > this._pBitsTrimmed && (this._pBitsTrimmed = 0);
				if(!this._pBitsTrimmed && (c = e - c, 0 > c && (c *= -1), c = Math.floor(c / h), 0 < c && (this._pBitsTrimmed += c), this._pExpandBitsInternallyOnly &&
						0 < this._pBitsTrimmed)) this._pExpandBitsInternallyOnly = !0;
				if(this._pBitsTrimmed < l) return this._pbSignedBetter = !0, 1;
				this._pBitsTrimmed = 0
			}
			this._pbSignedBetter = !1;
			this._pbSignedBetter = 0 < e && 0 < f ? !1 : -e > f - h ? !0 : !1;
			k = j = this._pBitsTrimmed = 0;
			if(0 < l) {
				this._pbSignedBetter ? (h = -(1 << g - 1), i = (1 << g - 1) - 1) : (h = 0, i = (1 << g) - 1);
				if(e < h - 1)
					for(; e < h - 1;) {
						j += 1;
						if(j > l) break;
						h = -(1 << g - 1 + j)
					}
				if(f > i + 1)
					for(; f > i + 1;) {
						k += 1;
						if(k > l) break;
						i = (1 << g + k) - 1
					}
				this._pBitsTrimmed = Math.max(j, k)
			}
			return 1
		},
		_allocAndFillLUT: function(a, b, c, d, e, f, g, h) {
			var i,
				j = (1 << a) - 1,
				a = d[0];
			h & this._m_LUT_SIGNED && 32767 < a && (a -= 65536);
			i = b + c - 1;
			c = d[c - 1];
			h & this._m_LUT_SIGNED && 32767 < c && (c -= 65536);
			this._allocMinVal = Math.min(a, c);
			this._allocMaxVal = Math.max(a, c);
			this._pLUT16 = Array(65536);
			if(null != this._pLUT16)
				if(f)
					for(f = -32768; 32767 >= f; f++) h = f * e / 65535, h = h <= b ? a : h >= i ? c : d[h - b], this._pLUT16[f] = 65535 * (65535 & h) / j;
				else
					for(f = 0; 65535 >= f; f++) h = parseInt((f * e + 32767) / 65535), h = h <= b ? a : h >= i ? c : d[h - b], j = h << 16 - g, 0 > j && (j += 65536), j &= 65535, this._pLUT16[f] = j
		},
		_minValueApplyVOI: 0,
		_maxValueApplyVOI: 0,
		_remainingBitOriginal: 0,
		_pbSignedBetter: !1,
		_pExpandBitsInternallyOnly: !1,
		_pBitsTrimmed: 0,
		_uMask16Get: 0,
		_allocMinVal: 0,
		_allocMaxVal: 0,
		_pLUT16: null,
		_m_LUT_SIGNED: 1,
		_m_LUT_UPDATE_MIN_MAX: 2,
		_m_LUT_USE_FULL_RANGE: 4,
		_m_LUT_ALLOW_RANGE_EXPANSION: 8,
		_voI_LUT_UPDATE_MIN_MAX: 1,
		_voI_LUT_REVERSE_ORDER: 2,
		_pNewLowBit: 0,
		_pNewHighBit: 0,
		_pLUT: null,
		_applyLUTBitmap8: function(a, b, c, d) {
			var e, f, a = this._pLUT[0];
			d & this._m_LUT_SIGNED && 32767 < a && (a -= 65536);
			e = b + c - 1;
			c = this._pLUT[c - 1];
			d & this._m_LUT_SIGNED && 32767 < c && (c -= 65536);
			this._allocMinVal = Math.min(a, c);
			this._allocMaxVal = Math.max(a, c);
			d = Array(256);
			if(null == d) return -1;
			for(f = 0; 255 >= f; f++) d[f] = f <= b ? a : f >= e ? c : this._pLUT[f];
			b = this._info.get_width();
			a = this._info.get_height();
			a *= b;
			b = 0;
			if(null != this._info.get_canvas()) {
				a = new lt.Controls.Medical._imageDataStreamer(this._info.get_canvas(), 4E5, 0);
				e = new lt.Controls.Medical._imageDataStreamer(this._info.get_canvas(), 4E5, 0);
				a.beginStream();
				for(e.beginStream(); !a.get_isEOF();) {
					c = a.getNextChunk();
					f = this._info._prepareDataChunk(c);
					for(var g = f.length, b = 0; b < g; b++) f[b] = d[f[b] & 255];
					this._info._restoreImageData(c, f);
					e.setNextChunk(c)
				}
			} else
				for(; b < a; b++) this._info.get_data32()[b] = d[this._info.get_data32()[b] & 255];
			return 1
		},
		_getNewLowHighBits: function(a, b, c, d) {
			var e;
			if(b > c || c >= a || 0 > b) return -13;
			this._pNewHighBit = c;
			this._pNewLowBit = b;
			if(!d) return 1;
			b && (e = Math.min(b - 0, d), 0 < e && (this._pNewLowBit = b - e, d -= e));
			c && d && (e = Math.min(a - c - 1, d), 0 < e && (this._pNewHighBit = c + e, d -= e));
			0 < d && (this._pNewHighBit = c, this._pNewLowBit = b);
			return 1
		},
		_l_ApplyModalityLUT: function(a,
			b, c, d) {
			var e = 0,
				f = 0,
				g = 0,
				h;
			h = this._info.get_highBit() - this._info.get_lowBit() + 1;
			if(8 === this._info.get_bitsPerPixel()) return this._applyLUTBitmap8(a, b, c, d);
			if(!c) return -1;
			d & this._m_LUT_USE_FULL_RANGE && (e = this._info.get_lowBit(), f = this._info.get_highBit(), this._info.set_lowBit(0), this._info.set_highBit(15));
			g = a - (this._info.get_highBit() - this._info.get_lowBit() + 1);
			0 > g && (g = 0);
			var i = 0,
				j = 0;
			d & this._m_LUT_ALLOW_RANGE_EXPANSION && g && (this._getNewLowHighBits(this._info.get_bitsPerPixel(), this._info.get_lowBit(),
				this._info.get_highBit(), g), i = this._pNewLowBit, j = this._pNewHighBit, h = j - i + 1, this._remainingBitOriginal = this._info.get_bitsPerPixel() - h);
			this._allocAndFillLUT(a, b, c, this._pLUT, this._uMask16Get, this._info.get_signed(), h, d);
			a = this._info.get_data32();
			h = this._info.get_highBit() - this._info.get_lowBit() + 1;
			h = this._info.get_bitsPerPixel() - h;
			c = this._info.get_width() * this._info.get_height();
			if(null != this._info.get_canvas()) {
				c = new lt.Controls.Medical._imageDataStreamer(this._info.get_canvas(), 4E5, 0);
				a = new lt.Controls.Medical._imageDataStreamer(this._info.get_canvas(),
					4E5, 0);
				c.beginStream();
				for(a.beginStream(); !c.get_isEOF();) {
					for(var k = c.getNextChunk(), a = this._info._prepareDataChunk(k), l = a.length, b = 0; b < l; b++) a[b] = this._pLUT16[a[b] << h] >> this._remainingBitOriginal;
					this._info._restoreImageData(k, a)
				}
			} else
				for(b = 0; b < c; b++) a[b] = this._pLUT16[a[b] << h] >> this._remainingBitOriginal;
			this._info.set_signed(!!(d & this._m_LUT_SIGNED));
			d & this._m_LUT_ALLOW_RANGE_EXPANSION && g && (this._info.set_lowBit(i), this._info.set_highBit(j));
			d & this._m_LUT_USE_FULL_RANGE && (this._info.set_lowBit(e),
				this._info.set_highBit(f));
			d & this._m_LUT_UPDATE_MIN_MAX && (this._getMinMaxValue(), this._info.set_minValue(this._minValue), this._info.set_maxValue(this._maxValue));
			return 1
		},
		_l_ApplyLinearModalityLUT: function(a, b, c) {
			var d = 0,
				e = 0,
				f = 0,
				g = 0,
				h;
			h = 0;
			var i, j, k = 0,
				l = 0,
				e = 0,
				m, n;
			if(1 === b && !a || !b && !a) return 1;
			var o = !1; - 1 === this._info.get_highBit() && this._info.set_highBit(this._info.get_bitsPerPixel() - 1);
			m = this._info.get_lowBit();
			n = this._info.get_highBit();
			this._getMinMaxValue();
			h = this._minValue;
			j = this._maxValue;
			this._isSignedBetter(a,
				b, h, j);
			i = this._pbSignedBetter;
			k = this._pBitsTrimmed;
			o = this._pExpandBitsInternallyOnly;
			this._remainingBitOriginal = l = this._info.get_bitsPerPixel() - (this._info.get_highBit() - this._info.get_lowBit() + 1);
			this._uMask16Get = (1 << this._info.get_highBit() - this._info.get_lowBit() + 1) - 1;
			d = this._info.get_lowBit();
			f = this._info.get_highBit();
			if(c & this._m_LUT_ALLOW_RANGE_EXPANSION && k && l && (g = this._info.get_highBit(), e = this._info.get_lowBit(), k = Math.min(k, l), 0 > k && (k = 0), this._getNewLowHighBits(this._info.get_bitsPerPixel(),
					this._info.get_lowBit(), this._info.get_highBit(), k), d = this._pNewLowBit, f = this._pNewHighBit, this._info.set_lowBit(d), this._info.set_highBit(f), h = this._isSignedBetter(a, b, h, j), i = this._pbSignedBetter, this._info.set_highBit(g), this._info.set_lowBit(e), 1 !== h)) return h;
			f = f - d + 1;
			g = 1 << f;
			this._info.get_signed() ? (d = -(1 << f - 1), e = (1 << f - 1) - 1) : (d = 0, e = (1 << f) - 1);
			this._pLUT = null;
			this._pLUT = Array(g);
			if(null == this._pLUT) return -13;
			for(h = d; h <= e; h++) j = h * b + a >> 0, 0 > j && (j += 65536), this._pLUT[h - d] = j;
			e = 0;
			i && (e |= this._m_LUT_SIGNED);
			c & this._m_LUT_ALLOW_RANGE_EXPANSION && (e |= this._m_LUT_ALLOW_RANGE_EXPANSION);
			h = this._l_ApplyModalityLUT(f, d, g, e);
			if(1 !== h) return h;
			o && (this._info.set_lowBit(m), this._info.set_highBit(n));
			c & this._m_LUT_UPDATE_MIN_MAX && (this._getMinMaxValue(), this._info.set_minValue(this._minValue), this._info.set_maxValue(this._maxValue));
			return 1
		},
		_l_ApplyLinearVOILUT: function(a, b, c) {
			var d = 0,
				e = 0,
				f, g, h, i, j;
			if(1 > b) return -13;
			this._info.get_minValue();
			this._info.get_maxValue();
			g = -1 === this._info.get_highBit() ? this._info.get_bitsPerPixel() :
				this._info.get_highBit();
			f = this._info.get_lowBit();
			e = this._info.get_signed();
			0 > f && (f = 0);
			h = g - f + 1;
			g = 1 << h;
			f = Array(g);
			if(null == f) return -1;
			j = !!(c & this._voI_LUT_REVERSE_ORDER);
			i = !!(c & this._voI_LUT_UPDATE_MIN_MAX);
			e ? (d = -(1 << h - 1), e = (1 << h - 1) - 1) : (d = 0, e = (1 << h) - 1);
			c = parseInt(a - 0.5 - (b - 1) / 2);
			h = parseInt(a - 0.5 + (b - 1) / 2);
			if(i) {
				var k;
				i = Math.max(c, d);
				i = Math.min(i, e);
				k = Math.max(h, d);
				k = Math.min(k, e);
				this._info.set_minValue(i);
				this._info.set_maxValue(k)
			}
			for(k = d; k <= e; k++) k <= c ? i = 0 : k > h ? i = 255 : (i = parseInt(255 * ((k - (a - 0.5)) / (b -
				1) + 0.5)), 255 < i && (i = 255)), j && (i = 255 - i), d = k, 0 > k && (d += g), f[d] = i;
			this._applyWindowLevelLUT(parseInt(b + 0.5), parseInt(a + 0.5), 16);
			return 1
		},
		_l_ApplyVOILUT: function(a, b, c, d, e, f, g) {
			var h, i = h = d = 0;
			h = 0;
			var j, k, l, m;
			h = this._info.get_highBit();
			d = this._info.get_lowBit();
			0 > d && (d = 0);
			0 > h && (h = this._info.get_bitsPerPixel() - 1);
			b = b - (a >> 1) + 1;
			a = b + a;
			this._getMinMaxLUTValues(c, f);
			e = this._minValueApplyVOI;
			m = this._maxValueApplyVOI;
			h = h - d + 1;
			d = 1 << h;
			for(l = 1; l < m;) l = l + l + 1;
			this._info.get_signed() ? (i = -(1 << h - 1), h = (1 << h - 1) - 1) : (i = 0, h = (1 <<
				h) - 1);
			j = 8 < this._info.get_bitsPerPixel() ? 65535 : 255;
			var n = this._info.get_luT32(),
				o = "MONOCHROME1" === this._info.get_photometricInterpretation(),
				p = l / 2;
			for(k = i; k <= h; k++) {
				i = k <= b ? c[0] : k >= a ? c[f - 1] : c[k - b];
				i = (i * j + p) / l >> 0;
				o && (i = j - i);
				var t = k & d - 1;
				0 > t && (t += 65536);
				n[t] = i >> 8
			}
			g & this._voI_LUT_UPDATE_MIN_MAX && (this._minValue = e, this._maxValue = m);
			return 1
		}
	};
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformationRenderer.prototype, "information", {
		get: lt.Controls.Medical.DICOMImageInformationRenderer.prototype.get_information,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformationRenderer.prototype, "minimumWindowLevelWidth", {
		get: lt.Controls.Medical.DICOMImageInformationRenderer.prototype.get_minimumWindowLevelWidth,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformationRenderer.prototype, "maximumWindowLevelWidth", {
		get: lt.Controls.Medical.DICOMImageInformationRenderer.prototype.get_maximumWindowLevelWidth,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformationRenderer.prototype,
		"minimumWindowLevelCenter", {
			get: lt.Controls.Medical.DICOMImageInformationRenderer.prototype.get_minimumWindowLevelCenter,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformationRenderer.prototype, "maximumWindowLevelCenter", {
		get: lt.Controls.Medical.DICOMImageInformationRenderer.prototype.get_maximumWindowLevelCenter,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformationRenderer.prototype, "originalWindowLevelWidth", {
		get: lt.Controls.Medical.DICOMImageInformationRenderer.prototype.get_originalWindowLevelWidth,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformationRenderer.prototype, "originalWindowLevelCenter", {
		get: lt.Controls.Medical.DICOMImageInformationRenderer.prototype.get_originalWindowLevelCenter,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformationRenderer.prototype, "windowLevelWidth", {
		get: lt.Controls.Medical.DICOMImageInformationRenderer.prototype.get_windowLevelWidth,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformationRenderer.prototype,
		"windowLevelCenter", {
			get: lt.Controls.Medical.DICOMImageInformationRenderer.prototype.get_windowLevelCenter,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformationRenderer.prototype, "changed", {
		get: lt.Controls.Medical.DICOMImageInformationRenderer.prototype.__changed_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformationRenderer.prototype, "updateImageData", {
		get: lt.Controls.Medical.DICOMImageInformationRenderer.prototype.__updateImageData_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.DICOMImageInformationRenderer.prototype, "paletteType", {
		get: lt.Controls.Medical.DICOMImageInformationRenderer.prototype.get_paletteType,
		set: lt.Controls.Medical.DICOMImageInformationRenderer.prototype.set_paletteType,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.ImageProcessing = function() {};
	lt.Controls.Medical.ImageProcessing._stretchHistogramData = function(a, b) {
		var c, d, e = a.length;
		for(c = 0; c < e && !(a[c] > b); c++);
		for(d = e - 1; 0 <=
			d && !(a[d] > b); d--);
		if(d <= c) return null;
		var f = lt.Controls.Medical.Tools._l_AllocateUint32ArrayInit(a.length);
		d -= c;
		for(var g = 0, h = e - 1, i = 0, g = 0; g < e; g++) i = parseInt((g - c) * h / d + 0.5), f[g] = Math.max(0, Math.min(255, i));
		return f
	};
	lt.Controls.Medical.ImageProcessing._stretchHistogramDataLowHigh = function(a, b, c) {
		for(var d = a.length, a = lt.Controls.Medical.Tools._l_AllocateUint32ArrayInit(a.length), c = c - b, e = 0, f = d - 1, g = 0, e = 0; e < d; e++) g = parseInt((e - b) * f / c + 0.5), a[e] = Math.max(0, Math.min(255, g));
		return a
	};
	lt.Controls.Medical.ImageProcessing.getHistogramPoint =
		function(a, b) {
			var c = a.data,
				d = c.length,
				c = lt.Controls.Medical.ImageProcessing._getHistogram(c),
				e;
			for(e = 0; e < d && !(c[e] > b); e++);
			for(d -= 1; 0 <= d && !(c[d] > b); d--);
			return lt.LeadPointD.create(e, d)
		};
	lt.Controls.Medical.ImageProcessing.levelIntensity = function(a, b, c) {
		var a = a.data,
			d = a.length,
			e = 0,
			e = lt.Controls.Medical.ImageProcessing._getHistogram(a),
			b = lt.Controls.Medical.ImageProcessing._stretchHistogramDataLowHigh(e, b, c);
		if(null != b)
			for(e = 0; e < d; e += 4) a[e] = b[a[e]], a[e + 1] = b[a[e + 1]], a[e + 2] = b[a[e + 2]], a[e + 3] = 255
	};
	lt.Controls.Medical.ImageProcessing.stretchIntensity =
		function(a, b) {
			var c = a.data,
				d = c.length,
				e = 0,
				e = lt.Controls.Medical.ImageProcessing._getHistogram(c),
				f = lt.Controls.Medical.ImageProcessing._stretchHistogramData(e, b);
			if(null != f)
				for(e = 0; e < d; e += 4) c[e] = f[c[e]], c[e + 1] = f[c[e + 1]], c[e + 2] = f[c[e + 2]], c[e + 3] = 255
		};
	lt.Controls.Medical.ImageProcessing._getHistogram = function(a) {
		for(var b = a.length, c = 0, d = lt.Controls.Medical.Tools._l_AllocateUint32ArrayInit(256), c = 0; c < b; c += 4) d[(a[c] << 1) + 5 * a[c + 1] + a[c + 2] + 4 >> 3]++;
		return d
	};
	lt.Controls.Medical._seriesReferenceLines = function() {
		this.show = !1;
		this.frames = null;
		this.frames = []
	};
	lt.Controls.Medical._seriesReferenceLines.prototype = {
		show: !1,
		frames: null
	};
	lt.Controls.Medical._referenceLineInformation = function() {
		this.line = new lt.Controls.Medical.LeadLine(0, 0, 0, 0);
		this.text = ""
	};
	lt.Controls.Medical._referenceLineInformation.prototype = {
		line: null,
		text: null
	};
	lt.Controls.Medical._frameReferenceLines = function() {
		this.firstAndLastLineCaluclated = !1;
		this.line = new lt.Controls.Medical._referenceLineInformation;
		this.firstLine = new lt.Controls.Medical._referenceLineInformation;
		this.lastLine = new lt.Controls.Medical._referenceLineInformation
	};
	lt.Controls.Medical._frameReferenceLines.prototype = {
		firstAndLastLineCaluclated: !1,
		line: null,
		firstLine: null,
		lastLine: null
	};
	lt.Controls.Medical.LayoutManagerItem = function() {
		this._position = -1;
		this._div = document.createElement("div");
		this._div.style.backgroundColor = "rgba(0, 0, 0, 1)"
	};
	lt.Controls.Medical.LayoutManagerItem.prototype = {
		_parent: null,
		_bounds: null,
		_selected: !1,
		_displayRectangle: null,
		_columnsPosition: 0,
		_rowPosition: 0,
		_numberOfRows: 1,
		_numberOfColumns: 1,
		_div: null,
		_divID: null,
		_highlightDiv: null,
		_updateHighlight: function() {
			null != this._highlightDiv && (this._highlighted ? (this._highlightDiv.style.left = "0px", this._highlightDiv.style.top = "0px", this._highlightDiv.style.width = this._div.style.width, this._highlightDiv.style.height = this._div.style.height, this._highlightDiv.style.position = this._div.style.position, this._highlightDiv.style.backgroundColor = "rgba(255, 0, 255, 0.5)") : (this._highlightDiv.style.left = "0px", this._highlightDiv.style.top =
				"0px", this._highlightDiv.style.width = "1px", this._highlightDiv.style.height = "1px", this._highlightDiv.style.backgroundColor = "rgba(0, 0, 0, 0)"))
		},
		_highlighted: !1,
		get_highlighted: function() {
			return this._highlighted
		},
		set_highlighted: function(a) {
			(this._highlighted = a) ? (null == this._highlightDiv && (this._highlightDiv = document.createElement("div")), this._div.appendChild(this._highlightDiv), this._updateHighlight()) : null != this._highlightDiv && this._div.removeChild(this._highlightDiv);
			return a
		},
		get_numberOfRows: function() {
			return this._numberOfRows
		},
		set_numberOfRows: function(a) {
			return this._numberOfRows = a
		},
		get_numberOfColumns: function() {
			return this._numberOfColumns
		},
		set_numberOfColumns: function(a) {
			return this._numberOfColumns = a
		},
		_userData: null,
		get_userData: function() {
			return this._userData
		},
		set_userData: function(a) {
			return this._userData = a
		},
		get_div: function() {
			return this._div
		},
		get_divID: function() {
			return this._divID
		},
		set_divID: function(a) {
			this._divID = a;
			null != this._div && (this._div.id = a);
			return a
		},
		get_parent: function() {
			return this._parent
		},
		set_parent: function(a) {
			return this._parent =
				a
		},
		get_displayRectangle: function() {
			return this._displayRectangle
		},
		set_displayRectangle: function(a) {
			return this._displayRectangle = a
		},
		get_bounds: function() {
			return this._bounds
		},
		set_bounds: function(a) {
			return this._bounds = a
		},
		get_selected: function() {
			return this._selected
		},
		set_selected: function(a) {
			if(this._selected !== a) return this._selected = a, null != this._parent && this._parent.selectItem(this, a), a
		},
		onSizeChanged: function() {
			var a, b = this._parent.get_div().clientWidth,
				c = this._parent.get_div().clientHeight;
			a =
				this.get_bounds();
			null != a && (this.set_displayRectangle(lt.LeadRectD.create(a.get_left() * b, a.get_top() * c, a.get_width() * b, a.get_height() * c)), this.get_div().style.left = this.get_displayRectangle().get_left().toString() + "px", this.get_div().style.top = this.get_displayRectangle().get_top().toString() + "px", this.get_div().style.width = this.get_displayRectangle().get_width().toString() + "px", this.get_div().style.height = this.get_displayRectangle().get_height().toString() + "px", this.get_div().style.position = "absolute",
				this._updateHighlight())
		},
		get_position: function() {
			return this._position
		},
		set_position: function(a) {
			this._position = a;
			null != this._parent.get_viewer() && this._parent.get_viewer().layout.canUpdate() && !this._parent.get_viewer().get_cellsArrangement() && this._parent.get_viewer().layoutCells();
			return a
		},
		get_rowPosition: function() {
			return this._rowPosition
		},
		set_rowPosition: function(a) {
			this._rowPosition = a;
			null != this._parent.get_viewer() && this._parent.get_viewer().layout.canUpdate() && !this._parent.get_viewer().get_cellsArrangement() &&
				this._parent.get_viewer().layoutCells();
			return a
		},
		get_columnsPosition: function() {
			return this._columnsPosition
		},
		set_columnsPosition: function(a) {
			this._columnsPosition = a;
			null != this._parent.get_viewer() && this._parent.get_viewer().layout.canUpdate() && !this._parent.get_viewer().get_cellsArrangement() && this._parent.get_viewer().layoutCells();
			return a
		}
	};
	Object.defineProperty(lt.Controls.Medical.LayoutManagerItem.prototype, "highlighted", {
		get: lt.Controls.Medical.LayoutManagerItem.prototype.get_highlighted,
		set: lt.Controls.Medical.LayoutManagerItem.prototype.set_highlighted,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LayoutManagerItem.prototype, "numberOfRows", {
		get: lt.Controls.Medical.LayoutManagerItem.prototype.get_numberOfRows,
		set: lt.Controls.Medical.LayoutManagerItem.prototype.set_numberOfRows,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LayoutManagerItem.prototype, "numberOfColumns", {
		get: lt.Controls.Medical.LayoutManagerItem.prototype.get_numberOfColumns,
		set: lt.Controls.Medical.LayoutManagerItem.prototype.set_numberOfColumns,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LayoutManagerItem.prototype, "userData", {
		get: lt.Controls.Medical.LayoutManagerItem.prototype.get_userData,
		set: lt.Controls.Medical.LayoutManagerItem.prototype.set_userData,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LayoutManagerItem.prototype, "div", {
		get: lt.Controls.Medical.LayoutManagerItem.prototype.get_div,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LayoutManagerItem.prototype, "divID", {
		get: lt.Controls.Medical.LayoutManagerItem.prototype.get_divID,
		set: lt.Controls.Medical.LayoutManagerItem.prototype.set_divID,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LayoutManagerItem.prototype, "parent", {
		get: lt.Controls.Medical.LayoutManagerItem.prototype.get_parent,
		set: lt.Controls.Medical.LayoutManagerItem.prototype.set_parent,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LayoutManagerItem.prototype,
		"displayRectangle", {
			get: lt.Controls.Medical.LayoutManagerItem.prototype.get_displayRectangle,
			set: lt.Controls.Medical.LayoutManagerItem.prototype.set_displayRectangle,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.LayoutManagerItem.prototype, "bounds", {
		get: lt.Controls.Medical.LayoutManagerItem.prototype.get_bounds,
		set: lt.Controls.Medical.LayoutManagerItem.prototype.set_bounds,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LayoutManagerItem.prototype,
		"selected", {
			get: lt.Controls.Medical.LayoutManagerItem.prototype.get_selected,
			set: lt.Controls.Medical.LayoutManagerItem.prototype.set_selected,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.LayoutManagerItem.prototype, "position", {
		get: lt.Controls.Medical.LayoutManagerItem.prototype.get_position,
		set: lt.Controls.Medical.LayoutManagerItem.prototype.set_position,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LayoutManagerItem.prototype, "rowPosition", {
		get: lt.Controls.Medical.LayoutManagerItem.prototype.get_rowPosition,
		set: lt.Controls.Medical.LayoutManagerItem.prototype.set_rowPosition,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LayoutManagerItem.prototype, "columnsPosition", {
		get: lt.Controls.Medical.LayoutManagerItem.prototype.get_columnsPosition,
		set: lt.Controls.Medical.LayoutManagerItem.prototype.set_columnsPosition,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical._rightClickMenuItem = function(a, b) {
		this.name = a;
		this.itemCell =
			b
	};
	lt.Controls.Medical._rightClickMenuItem.prototype = {
		name: null,
		itemCell: null
	};
	lt.Controls.Medical.LayoutManager = function(a, b) {
		if(null == a) throw Error("divParent cannot be null");
		this._divElement = a;
		this._viewer = b;
		this._selectedItems = new lt.LeadCollection;
		this._highlightedItems = new lt.LeadCollection;
		this._highlightedItems.add_collectionChanged(ss.Delegate.create(this, this._highlightedItems_CollectionChanged));
		this._items = new lt.LeadCollection
	};
	lt.Controls.Medical.LayoutManager.prototype = {
		_divElement: null,
		_newWidth: 0,
		_newHeight: 0,
		_beginUpdate: !1,
		_beginUpdateCounter: 0,
		_selectedItems: null,
		_items: null,
		get_items: function() {
			return this._items
		},
		_highlightedItems: null,
		get_highlightedItems: function() {
			return this._highlightedItems
		},
		get_selectedItems: function() {
			return this._selectedItems
		},
		get_selectedItem: function() {
			return this._selectedItems.get_item(0)
		},
		set_selectedItem: function(a) {
			null == this._selectedItems && (this._selectedItems = new lt.LeadCollection, this._selectedItems.add(a));
			this._selectedItems.get_count() &&
				this._selectedItems.clear();
			this._selectedItems.add(a);
			return a
		},
		selectItem: function(a, b) {
			if(b)
				if(-1 !== this._items.indexOf(a)) - 1 === this._selectedItems.indexOf(a) && this._selectedItems.add(a);
				else throw Error("You must add 'item' to the LayoutManager first before selecting it");
			else -1 !== this._selectedItems.indexOf(a) && this._selectedItems.remove(a)
		},
		_viewer: null,
		get_viewer: function() {
			return this._viewer
		},
		_highlightedItems_CollectionChanged: function(a, b) {
			for(var c = 0, d = b.get_newItems().length, e, c = 0; c <
				d; c++) switch(e = b.get_newItems()[c], b.get_action()) {
				case lt.NotifyLeadCollectionChangedAction.add:
					e.set_highlighted(!0);
					break;
				case lt.NotifyLeadCollectionChangedAction.remove:
				case lt.NotifyLeadCollectionChangedAction.reset:
					e.set_highlighted(!1)
			}
		},
		get_div: function() {
			return this._divElement
		},
		onSizeChanged: function() {
			null != this._divElement && (this._newWidth = this._divElement.clientWidth, this._newHeight = this._divElement.clientHeight, this._onLayout())
		},
		beginUpdate: function() {
			this._beginUpdate = !0;
			this._beginUpdateCounter++
		},
		canUpdate: function() {
			return !this._beginUpdate
		},
		endUpdate: function() {
			this._beginUpdateCounter--;
			this._beginUpdateCounter || (this._beginUpdate = !1, this.onSizeChanged())
		},
		_onLayout: function() {
			var a, b = this._items.get_count(),
				c;
			for(a = 0; a < b; a++) c = this._items.get_item(a), c.onSizeChanged()
		}
	};
	Object.defineProperty(lt.Controls.Medical.LayoutManager.prototype, "items", {
		get: lt.Controls.Medical.LayoutManager.prototype.get_items,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LayoutManager.prototype,
		"highlightedItems", {
			get: lt.Controls.Medical.LayoutManager.prototype.get_highlightedItems,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.LayoutManager.prototype, "selectedItems", {
		get: lt.Controls.Medical.LayoutManager.prototype.get_selectedItems,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LayoutManager.prototype, "selectedItem", {
		get: lt.Controls.Medical.LayoutManager.prototype.get_selectedItem,
		set: lt.Controls.Medical.LayoutManager.prototype.set_selectedItem,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LayoutManager.prototype, "viewer", {
		get: lt.Controls.Medical.LayoutManager.prototype.get_viewer,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LayoutManager.prototype, "div", {
		get: lt.Controls.Medical.LayoutManager.prototype.get_div,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.GridLayout = function(a, b, c) {
		this._rows = b;
		this._columns = c;
		this._viewer = a;
		this._splitterSize = 3;
		this._horizontalSplitters = [];
		this._verticalSplitters = []
	};
	lt.Controls.Medical.GridLayout.prototype = {
		_horizontalSplitters: null,
		_verticalSplitters: null,
		_splittersMovable: !1,
		_viewer: null,
		_rows: 0,
		_columns: 0,
		_splitterSize: 0,
		_updateSplittersPosition: function(a, b) {
			var c = this.get_horizontalSplitters(),
				d = this.get_verticalSplitters();
			document.getElementById(this._viewer.get_divId());
			for(var e = 1; e < a; e++) c[e - 1] = e / a;
			for(e = 1; e < b; e++) d[e - 1] = e / b;
			for(var f = a - 1, g = c.length, e = a; e <= g; e++) c.removeAt(f);
			f = b - 1;
			g = d.length;
			for(e = b; e <= g; e++) d.removeAt(f)
		},
		_layout: function() {
			this._viewer.layoutCells();
			this._viewer.renderViewer()
		},
		_resetCellsRowsColumns: function() {
			for(var a = 0, b = this._viewer.layout.get_items().get_count(), a = 0; a < b; a++) this._viewer.layout.get_items().get_item(a).set_numberOfRows(1), this._viewer.layout.get_items().get_item(a).set_numberOfColumns(1);
			b = this._viewer.get_emptyDivs().get_items().get_count();
			for(a = 0; a < b; a++) this._viewer.get_emptyDivs().get_items().get_item(a).set_numberOfRows(1), this._viewer.get_emptyDivs().get_items().get_item(a).set_numberOfColumns(1)
		},
		_update: function() {
			this._resetCellsRowsColumns();
			this._updateSplittersPosition(this._rows, this._columns);
			this._layout()
		},
		get_splitterSize: function() {
			return this._splitterSize
		},
		set_splitterSize: function(a) {
			this._splitterSize = a;
			this._layout();
			return a
		},
		get_rows: function() {
			return this._rows
		},
		set_rows: function(a) {
			this._rows = a;
			this._update();
			return a
		},
		get_columns: function() {
			return this._columns
		},
		set_columns: function(a) {
			this._columns = a;
			this._update();
			return a
		},
		get_horizontalSplitters: function() {
			return this._horizontalSplitters
		},
		get_verticalSplitters: function() {
			return this._verticalSplitters
		},
		get_splittersMovable: function() {
			return this._splittersMovable
		},
		set_splittersMovable: function(a) {
			return this._splittersMovable = a
		}
	};
	Object.defineProperty(lt.Controls.Medical.GridLayout.prototype, "splitterSize", {
		get: lt.Controls.Medical.GridLayout.prototype.get_splitterSize,
		set: lt.Controls.Medical.GridLayout.prototype.set_splitterSize,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.GridLayout.prototype, "rows", {
		get: lt.Controls.Medical.GridLayout.prototype.get_rows,
		set: lt.Controls.Medical.GridLayout.prototype.set_rows,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.GridLayout.prototype, "columns", {
		get: lt.Controls.Medical.GridLayout.prototype.get_columns,
		set: lt.Controls.Medical.GridLayout.prototype.set_columns,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.GridLayout.prototype, "horizontalSplitters", {
		get: lt.Controls.Medical.GridLayout.prototype.get_horizontalSplitters,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.GridLayout.prototype,
		"verticalSplitters", {
			get: lt.Controls.Medical.GridLayout.prototype.get_verticalSplitters,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.GridLayout.prototype, "splittersMovable", {
		get: lt.Controls.Medical.GridLayout.prototype.get_splittersMovable,
		set: lt.Controls.Medical.GridLayout.prototype.set_splittersMovable,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical._matchedSeries = function() {
		this.studies = [];
		this.fidutialPoints = []
	};
	lt.Controls.Medical._matchedSeries.prototype = {
		studies: null,
		fidutialPoints: null
	};
	lt.Controls.Medical.MedicalViewer = function(a, b, c) {
		lt.Controls.Medical.MedicalViewer.initializeBase(this);
		this._initialize$1(a, b, c);
		this.renderViewer();
		this.onSizeChanged()
	};
	lt.Controls.Medical.MedicalViewer.prototype = {
		_cellsArrangement$1: 0,
		_gridLayout$1: null,
		_horizontalSplitterShadow$1: null,
		_verticalSplitterShadow$1: null,
		_viewerDivElement$1: null,
		_viewerCanvasElement$1: null,
		_parentDiv$1: null,
		_emptyCellColor$1: null,
		_selectedSeries$1: null,
		_activeSeries$1: null,
		_showReferenceLine$1: !1,
		_showFirstAndLastReferenceLine$1: !1,
		_enableSynchronization$1: !1,
		_exploded$1: !1,
		_explodedCell$1: null,
		_dictionary: null,
		_rightClickMenu$1: null,
		_emptyDivLayout$1: null,
		_emptyDivs$1: null,
		_menuItemSelected$1: null,
		_mouseOverMenu$1: null,
		_mouseLeaveMenu$1: null,
		_totalCells$1: 0,
		_multipleSelection$1: !1,
		_getAllCellsMatrix$1: function() {
			for(var a = this._gridLayout$1.get_rows(), b = this._gridLayout$1.get_columns(), a = this._initializeAMatrix$1(a, b, null), b = 0, c = this.layout.get_selectedItems().get_count(), b = 0; b < c; b++) this._fillCellInMatrix$1(this.layout.get_selectedItems().get_item(b),
				a);
			c = this.get_emptyDivs().get_selectedItems().get_count();
			for(b = 0; b < c; b++) this._fillCellInMatrix$1(this.get_emptyDivs().get_selectedItems().get_item(b), a);
			return a
		},
		_getSelectedMatrixBounds$1: function(a) {
			var b = Array(2);
			b[0] = lt.LeadPointD.create(a[0].length + 1, a.length + 1);
			b[1] = lt.LeadPointD.create(-1, -1);
			var c, d;
			for(d = 0; d < a.length; d++)
				for(c = 0; c < a[d].length; c++) a[d][c] && (b[0].get_x() > c && b[0].set_x(c), b[0].get_y() > d && b[0].set_y(d), b[1].get_x() < c && b[1].set_x(c), b[1].get_y() < d && b[1].set_y(d));
			return -1 ===
				b[1].get_x() || -1 === b[1].get_y() ? null : b
		},
		canMerge: function() {
			var a = this._getAllCellsMatrix$1(),
				b = this._getSelectedMatrixBounds$1(a);
			if(null == b) return !1;
			var c, d;
			for(c = parseInt(b[0].get_y()); c <= parseInt(b[1].get_y()); c++)
				for(d = parseInt(b[0].get_x()); d <= parseInt(b[1].get_x()); d++)
					if(!a[c][d]) return !1;
			return !0
		},
		mergeSelected: function() {
			if(!this.canMerge()) throw Error("cannot merge the selected items");
			var a = this._getSelectedMatrixBounds$1(this._getAllCellsMatrix$1());
			if(null == a) throw Error("Internal error - call LEAD (1024)");
			var b = parseInt(a[1].get_x() - a[0].get_x() + 1),
				c = parseInt(a[1].get_y() - a[0].get_y() + 1),
				d = this.layout.get_selectedItems().get_item(0);
			null == d && (d = this.get_emptyDivs().get_selectedItems().get_item(0));
			d._rowPosition = parseInt(a[0].get_y());
			d._columnsPosition = parseInt(a[0].get_x());
			d.set_numberOfRows(c);
			d.set_numberOfColumns(b);
			a = 1;
			a = this.layout.get_selectedItems().get_count();
			for(a -= 1; 0 < a; a--) this._removeCell$1(this.layout.get_selectedItems().get_item(a), this.layout);
			a = this.get_emptyDivs().get_selectedItems().get_count();
			for(a -= 1; 0 < a; a--) this._removeCell$1(this.get_emptyDivs().get_selectedItems().get_item(a), this.get_emptyDivs());
			this.layoutCells()
		},
		_removeCell$1: function(a, b) {
			-1 !== b.get_selectedItems().indexOf(a) && b.get_selectedItems().remove(a); - 1 !== b.get_items().indexOf(a) && b.get_items().remove(a);
			Type.canCast(a, lt.Controls.Medical.Cell) ? a.dispose() : Type.canCast(a, lt.Controls.Medical.EmptyCell) && a.dispose()
		},
		get_multipleSelection: function() {
			return this._multipleSelection$1
		},
		set_multipleSelection: function(a) {
			return this._multipleSelection$1 =
				a
		},
		add_selectionChanged: function(a) {
			this.__selectionChanged$1 = ss.Delegate.combine(this.__selectionChanged$1, a)
		},
		remove_selectionChanged: function(a) {
			this.__selectionChanged$1 = ss.Delegate.remove(this.__selectionChanged$1, a)
		},
		__selectionChanged$1_handler_get: function() {
			null == this.__selectionChanged$1_handler && (this.__selectionChanged$1_handler = ss.EventHandler.create(this, this.add_selectionChanged, this.remove_selectionChanged));
			return this.__selectionChanged$1_handler
		},
		__selectionChanged$1: null,
		__selectionChanged$1_handler: null,
		_selectThisCell: function(a, b) {
			var c;
			c = Type.canCast(a, lt.Controls.Medical.EmptyCell) ? this.get_emptyDivs() : this.layout;
			if(!this.get_multipleSelection() && !b) {
				var d = 0,
					e = this.layout.get_selectedItems().get_count();
				if(1 === e && -1 !== this.layout.get_selectedItems().indexOf(a)) return;
				for(d = 0; d < e; d++) this.layout.get_selectedItems().get_item(d).set_selected(!1);
				this.layout.get_selectedItems().clear();
				this.get_emptyDivs().get_selectedItems().clear();
				c.set_selectedItem(a)
			} else -1 === c.get_selectedItems().indexOf(a) ?
				(c.get_selectedItems().add(a), Type.canCast(a, lt.Controls.Medical.Cell) && a.set_selected(!0)) : (c.get_selectedItems().remove(a), Type.canCast(a, lt.Controls.Medical.Cell) && a.set_selected(!1));
			null != this.__selectionChanged$1 && this.__selectionChanged$1(this, lt.LeadEventArgs.Empty)
		},
		layout: null,
		refreshReferenceLine: function() {
			this._recalculate()
		},
		_recalculate: function() {
			var a = this.layout.get_selectedItem();
			null != a && (this._findReferenceLine$1(a, !0), this._invalidateReferenceLine$1(a))
		},
		_createDropDown$1: function() {
			this._menuItemSelected$1 =
				ss.Delegate.create(this, this._menuItemSelected_Clicked$1);
			this._mouseOverMenu$1 = ss.Delegate.create(this, this._mouseOverMenuItem$1);
			this._mouseLeaveMenu$1 = ss.Delegate.create(this, this._mouseLeaveMenuItem$1);
			var a = document.getElementById(this.get_divId()),
				b = document.createElement("div");
			b.id = this.get__dropDownName$1();
			b.className = "dropdown";
			b.style.visibility = "hidden";
			b.style.zIndex = 400;
			a.appendChild(b);
			a = document.createElement("div");
			a.id = "menuBody" + this.get_divId();
			a.style.cssText = "background: #101010; padding: 0px 0 2px;";
			b.appendChild(a);
			b = document.createElement("span");
			b.style.cssText = "background: #707070; color: #010101; display: block; font-family: arial; font-weight: bold;    padding: 6px 15px;    cursor: pointer; text-decoration:none;";
			b.innerText = "Select Series";
			a.appendChild(b);
			b = document.createElement("ul");
			b.id = "menuList" + this.get_divId();
			a.appendChild(b);
			b.style.listStyle = "none";
			b.style.margin = "0px";
			b.style.padding = "0px";
			b.style.fontSize = "11px";
			b.style.padding = "4px 0 0 0px";
			b.style.borderTop = "1px solid #dedede"
		},
		_showDropDown$1: function(a, b, c) {
			var d = document.getElementById(this.get_divId()),
				e = document.getElementById(this.get__dropDownName$1());
			if(null != e) {
				d.removeChild(e);
				d.appendChild(e);
				var f = document.getElementById("menuList" + this.get_divId()),
					d = document.getElementById(this.get__dropDownName$1()),
					e = document.getElementById("menuBody" + this.get_divId()),
					b = b + a.get_div().offsetLeft,
					c = c + a.get_div().offsetTop;
				d.style.left = b.toString() + "px";
				d.style.top = c.toString() + "px";
				d.style.position = "absolute";
				var a = Object.getKeyCount(this._rightClickMenu$1),
					g = 0,
					h, i = 0,
					j = "";
				f.innerHTML = "";
				var k = this._viewerCanvasElement$1.getContext("2d");
				k.save();
				for(k.font = "14px Arial"; g < a; g++) h = this._rightClickMenu$1[Object.keys(this._rightClickMenu$1)[g]].name, j = g !== a - 1 ? "border-bottom: 1px solid rgb(122, 122, 122); " : "", f.innerHTML += "<li><a id='dropdownmenuitem" + this.get_divId() + g + "' style='color: white; " + j + "      display: block;       font-family: arial;           padding: 6px 15px;       cursor: pointer;       text-decoration:none;'>" + h + "</a> </li>", i < k.measureText(h).width &&
					(i = k.measureText(h).width);
				k.restore();
				d.style.width = (i + 16).toString() + "px";
				f = b + d.clientWidth;
				e = c + e.clientHeight;
				f > this._viewerDivElement$1.clientWidth && (d.style.left = b - (f - this._viewerDivElement$1.clientWidth) + "px");
				e > this._viewerDivElement$1.clientHeight && (d.style.top = c - (e - this._viewerDivElement$1.clientHeight) + "px");
				for(g = 0; g < a; g++) b = document.getElementById("dropdownmenuitem" + this.get_divId() + g.toString()), b.setAttribute("itemIndex", g), b.addEventListener("touchstart", this._menuItemSelected$1, !1),
					b.addEventListener(lt.Controls.Medical.Tools.pointerdown, this._menuItemSelected$1, !1), b.addEventListener("mousedown", this._menuItemSelected$1, !1), b.addEventListener("mouseover", this._mouseOverMenu$1, !1), b.addEventListener("mouseleave", this._mouseLeaveMenu$1, !1);
				d.style.visibility = "visible"
			}
		},
		_swapEmptyWithCell$1: function(a, b) {
			var c;
			if(a.get_rowPosition() === b.get_rowPosition() && a.get_columnsPosition() === b.get_columnsPosition()) return !1;
			this.layout.beginUpdate();
			this._emptyDivLayout$1.beginUpdate();
			c = a.get_rowPosition();
			a.set_rowPosition(b.get_rowPosition());
			b.set_rowPosition(c);
			c = a.get_position();
			a.set_position(b.get_position());
			b.set_position(c);
			c = a.get_columnsPosition();
			a.set_columnsPosition(b.get_columnsPosition());
			b.set_columnsPosition(c);
			c = a.get_bounds();
			a.set_bounds(b.get_bounds());
			b.set_bounds(c);
			this._emptyDivLayout$1.endUpdate();
			this.layout.endUpdate();
			return !0
		},
		_menuItemSelected_Clicked$1: function(a) {
			if(this._dropDownVisible$1()) {
				this._hideDropDown$1();
				a = a.currentTarget.getAttribute("itemIndex");
				this.layout.get_items().get_count();
				a = this._rightClickMenu$1[Object.keys(this._rightClickMenu$1)[a]].itemCell;
				a.get_parent().get_highlightedItems().clear();
				var b = this._emptyDivLayout$1.get_selectedItem();
				null == b && (b = this.layout.get_selectedItem());
				this._swapEmptyWithCell$1(a, b) && (a.onSizeChanged(), this.layout.get_selectedItems().add(a), -1 !== this._emptyDivLayout$1.get_selectedItems().indexOf(b) && this._emptyDivLayout$1.get_selectedItems().remove(b), this.layoutCells())
			}
		},
		_layoutEmptyDiv$1: function() {
			for(var a =
					0, b = this._emptyDivs$1.get_count(); a < b; a++) {
				var c = this._emptyDivs$1.get_item(a);
				c.set_divID(this._getEmptyDivName$1());
				c.onSizeChanged()
			}
		},
		_mouseOverMenuItem$1: function(a) {
			a = a.currentTarget.getAttribute("itemIndex");
			this.layout.get_items().get_count();
			a = this._rightClickMenu$1[Object.keys(this._rightClickMenu$1)[a]].itemCell;
			a.get_parent().get_highlightedItems().clear();
			a.get_parent().get_highlightedItems().add(a)
		},
		_mouseLeaveMenuItem$1: function(a) {
			a = a.currentTarget.getAttribute("itemIndex");
			this._rightClickMenu$1[Object.keys(this._rightClickMenu$1)[a]].itemCell.get_parent().get_highlightedItems().clear()
		},
		get__dropDownName$1: function() {
			return "dropDownMenu" + this.get_divId()
		},
		_dropDownVisible$1: function() {
			return "visible" === document.getElementById(this.get__dropDownName$1()).style.visibility
		},
		_hideDropDown$1: function() {
			document.getElementById(this.get__dropDownName$1()).style.visibility = "hidden"
		},
		_createRightClickMenu$1: function() {
			var a = document.createElement("div");
			a.id = this.get__dropDownName$1();
			a.className = "dropdown";
			a.style.display = "none";
			a.style.zIndex = 100;
			a.style.textDecoration = "none";
			a = document.createElement("div");
			a.id = "submenu";
			a.style.display = "none";
			a = document.createElement("span");
			a.id = "dropDownMenuTitle";
			a.innerText = "Select Series";
			a = document.createElement("ul");
			a.style.listStyle = "none";
			a.style.margin = "0px";
			a.style.padding = "0px";
			a.style.fontSize = "11px";
			a.style.padding = "11px 0 0 0px";
			a.style.borderTop = "1px solid #dedede"
		},
		_showSeriesDropDown: function(a, b, c) {
			this._showDropDown$1(a, b, c)
		},
		_hideSeriesDropDown: function() {
			this._hideDropDown$1()
		},
		get_totalCells: function() {
			return this._totalCells$1
		},
		set_totalCells: function(a) {
			this._totalCells$1 =
				a;
			this.layout.canUpdate() && 1 === this.get_cellsArrangement() ? this.layoutCells() : this._updateEmptyDiv$1();
			return a
		},
		_alignTwoCell$1: function(a, b, c, d) {
			a = a.get_frames().get_item(a.get__activeFrameIndex());
			b = lt.Controls.Medical.StackSynchronization.alignFrames(a, b[0], c, d[0]); - 1 !== b && c.set_currentOffset(b)
		},
		synchronizeSeries: function(a) {
			this._enumerateLinkedSeries(a, ss.Delegate.create(this, this._alignTwoCell$1), null)
		},
		get_emptyDivs: function() {
			return this._emptyDivLayout$1
		},
		_createEmptyDiv$1: function(a, b,
			c) {
			this._emptyDivs$1 = this._emptyDivLayout$1.get_items();
			this._emptyDivs$1.get_count() > a ? (a = this._emptyDivs$1.get_item(a), a._rowPosition = b, a._columnsPosition = c) : this._emptyDivs$1.add(new lt.Controls.Medical.EmptyCell(this._emptyDivLayout$1, this, this._getEmptyDivName$1(), b, c))
		},
		_fillCellInMatrix$1: function(a, b) {
			var c = a.get_numberOfRows(),
				d = a.get_numberOfColumns(),
				e, f, g, h;
			if(null != b)
				for(e = 0; e < d; e++)
					for(f = 0; f < c; f++) g = Math.min(a.get_columnsPosition() + e, b[e].length), h = Math.min(a.get_rowPosition() + f, b.length),
						g >= b[0].length || h >= b.length || (b[h][g] = !0)
		},
		_initializeAMatrix$1: function(a, b, c) {
			for(var d = 0, e = Array(a), d = 0; d < a; d++) e[d] = Array(b);
			for(var f, d = 0; d < a; d++)
				for(f = 0; f < b; f++) e[d][f] = null == c ? !1 : c[d][f];
			return e
		},
		_getCellsMatrix$1: function(a) {
			var b = 0,
				c = 0,
				d = 0,
				e = this.layout.get_items().get_count();
			if(a) {
				c = this._gridLayout$1.get_rows() - 1;
				for(d = this._gridLayout$1.get_columns() - 1; b < e; b++) a = this.layout.get_items().get_item(b), a.get_rowPosition() > c && (c = a.get_rowPosition()), a.get_columnsPosition() > d && (d = a.get_columnsPosition());
				c += 1;
				d += 1
			} else c = this._gridLayout$1.get_rows(), d = this._gridLayout$1.get_columns();
			for(var f = this._initializeAMatrix$1(c, d, null), b = 0; b < e; b++) a = this.layout.get_items().get_item(b), 0 <= a.get_rowPosition() && a.get_rowPosition() < c && 0 <= a.get_columnsPosition() && a.get_columnsPosition() < d && this._fillCellInMatrix$1(a, f);
			return f
		},
		_getEmptyDivName$1: function() {
			return "emptyCell_div " + lt.Controls.Medical.Tools.get__nameCounter().toString()
		},
		_updateEmptyDiv$1: function() {
			var a = 0,
				b = 0;
			if(this._cellsArrangement$1) {
				var c =
					this._getArrangedCells$1(),
					a = 0,
					b = c.length,
					d = 0,
					e = 0,
					f = 0,
					g = 0;
				for(this._emptyDivs$1 = this._emptyDivLayout$1.get_items(); a < b; a++) {
					e = c[a].get_position();
					for(f = d; f < e; f++) g >= this._emptyDivs$1.get_count() && this._emptyDivs$1.add(new lt.Controls.Medical.EmptyCell(this._emptyDivLayout$1, this, this._getEmptyDivName$1(), 0, 0)), this._emptyDivs$1.get_item(g).set_position(f), g++;
					d = e + 1
				}
				for(a = d; a < this._totalCells$1; a++) g >= this._emptyDivs$1.get_count() && this._emptyDivs$1.add(new lt.Controls.Medical.EmptyCell(this._emptyDivLayout$1,
					this, this._getEmptyDivName$1(), 0, 0)), this._emptyDivs$1.get_item(g).set_position(d), g++, d++;
				for(a = this._emptyDivs$1.get_count() - 1; a >= g; a--) b = this._emptyDivs$1.get_item(g), this._emptyDivs$1.removeAt(g), b.dispose()
			} else {
				c = this._getCellsMatrix$1(!1);
				b = g = 0;
				g = this._gridLayout$1.get_rows();
				b = this._gridLayout$1.get_columns();
				a = 0;
				c = this._initializeAMatrix$1(g, b, c);
				if(null != this._emptyDivs$1)
					for(a = 0; a < this._emptyDivs$1.get_count(); a++) d = this._emptyDivs$1.get_item(a), e = !1, 0 <= d.get_rowPosition() && d.get_rowPosition() <
						g && 0 <= d.get_columnsPosition() && d.get_columnsPosition() < b ? c[d.get_rowPosition()][d.get_columnsPosition()] ? e = !0 : this._fillCellInMatrix$1(d, c) : e = !0, e && (this._emptyDivs$1.removeAt(a), d.dispose(), a--);
				for(d = 0; d < g; d++)
					for(e = 0; e < b; e++) c[d][e] || (this._createEmptyDiv$1(a, d, e), a++)
			}
			this._emptyDivs$1 = this._emptyDivLayout$1.get_items();
			a = 0;
			for(b = this._emptyDivs$1.get_count(); a < b; a++) g = this._emptyDivs$1.get_item(a), g.set_divID(this._getEmptyDivName$1())
		},
		_getArrangedCells$1: function() {
			for(var a = this.layout.get_items().get_count(),
					b = 0, c = []; b < a; b++) c.add(this.layout.get_items().get_item(b));
			for(var d = []; c.length;) {
				for(var e = 1E6, f = -1, b = 0, a = c.length; b < a; b++) c[b].get_position() < e && (e = c[b].get_position(), f = b);
				d.add(c[f]);
				c.removeAt(f)
			}
			return d
		},
		_synchronizeAllSeries$1: function() {
			for(var a = 0, b, c = this.layout.get_selectedItems().get_count(); a < c; a++) b = this.layout.get_selectedItems().get_item(a), this.synchronizeSeries(b)
		},
		_addSeriesToMenu: function(a) {
			var b = a.get_patientName() + "( " + a.get_seriesNumber().toString() + " )";
			Type.canCast(a,
				lt.Controls.Medical.MPRCell) && (b += String.format(" ({0})", lt.Controls.Medical.Tools.getMPRText(a.get_mprType())));
			b = new lt.Controls.Medical._rightClickMenuItem(b, a);
			this._rightClickMenu$1[a.get_divID()] = b
		},
		_addSeriesToDictionary: function(a) {
			if(null != a.get_frames() && a.get_frames().get_count()) {
				a.get_frames().get_item(0);
				var b = a.get_frameOfReferenceUID();
				b || (b = "nil");
				if(!Object.keyExists(this._dictionary, b)) {
					var c = new lt.Controls.Medical._matchedSeries;
					c.studies.add(a.get_studyInstanceUID());
					var d = [new lt.Controls.Medical.LeadPoint3D(0,
						0, 0)];
					c.fidutialPoints.add(d);
					this._dictionary[b] = c
				}
				a.get_selected() && (this._findReferenceLine$1(a, !0), this._invalidateReferenceLine$1(a))
			}
		},
		invalidate: function() {
			for(var a = 0, b = this.layout.get_items().get_count(), c; a < b; a++) c = this.layout.get_items().get_item(a), c.invalidate()
		},
		_invalidateSeries$1: function(a, b, c) {
			c._isPresentationInformationReady() && c.invalidate()
		},
		_invalidateReferenceLine$1: function(a) {
			this._enumerateLinkedSeries(a, ss.Delegate.create(this, this._invalidateSeries$1), null)
		},
		_findRLSeries$1: function(a,
			b, c) {
			this._findReferenceLineForSeries$1(a, c, this._showFirstAndLastReferenceLine$1)
		},
		_findReferenceLine$1: function(a) {
			this._enumerateLinkedSeries(a, ss.Delegate.create(this, this._findRLSeries$1), null)
		},
		_getReferenceLineValue$1: function(a, b) {
			return lt.Controls.Medical.ReferenceLine.find(a.get_imageOrientation(), a.get_imagePosition(), lt.LeadPointD.create(a.get_columnSpacing(), a.get_rowSpacing()), a.get_width(), a.get_height(), b.get_imageOrientation(), b.get_imagePosition(), lt.LeadPointD.create(b.get_columnSpacing(),
				b.get_rowSpacing()), b.get_width(), b.get_height())
		},
		_enumerateSubCellsImages$1: function(a, b, c) {
			if(null != a)
				for(var d = 0, b = Math.min(b, a.get_imageViewer().get_items().get_count()), e, d = 0; d < b; d++) e = a.get_imageViewer().get_items().get_item(d), c(e, d)
		},
		_enumerateFrames$1: function(a, b) {
			if(!(null == a || null == b)) {
				var c = a.get_frames();
				if(null != c)
					for(var d = 0, e = c.get_count(), d = 0; d < e; d++) b(c.get_item(d), d)
			}
		},
		synchronizeStudies: function(a, b, c) {
			this._dictionary[a] = new lt.Controls.Medical._matchedSeries;
			this._dictionary[a].studies =
				b;
			this._dictionary[a].fidutialPoints = c
		},
		removeKey: function(a) {
			delete this._dictionary[a]
		},
		_findFrameReferenceLine$1: function(a, b, c, d) {
			var e, f, g = a.get__activeFrameIndex();
			e = a.get_frames().get_item(g);
			f = b.get_frames().get_item(b.get_currentOffset() + c);
			b = b.get__cellReferenceLine().frames[c];
			b.line.line = this._getReferenceLineValue$1(e, f);
			b.line.text = (g + 1).toString();
			e = a.get_frames().get_count();
			if((d || !b.firstAndLastLineCaluclated) && 1 < e) d = a.get_frames().get_item(0), b.firstLine.line = this._getReferenceLineValue$1(d,
				f), b.firstLine.text = "1", a = a.get_frames().get_item(a.get_frames().get_count() - 1), b.lastLine.line = this._getReferenceLineValue$1(a, f), b.lastLine.text = e.toString(), b.firstAndLastLineCaluclated = !0;
			return !1
		},
		_findReferenceLineForSeries$1: function(a, b, c) {
			if(b._isPresentationInformationReady()) {
				b.get_currentOffset();
				a.get_currentOffset();
				b.get__cellReferenceLine().show = !0;
				for(var d = 0, e = Math.min(b.get_frames().get_count(), b.get_imageViewer().get_items().get_count()), d = 0; d < e; d++) this._findFrameReferenceLine$1(a,
					b, d, c)
			}
		},
		_enumerateSubCells$1: function(a, b) {
			if(null != a)
				for(var c = 0, d = a.get_imageViewer().get_items().get_count(), e, c = 0; c < d; c++) e = a.get_imageViewer().get_items().get_item(c), b(e, c)
		},
		get_matchedCells: function() {
			for(var a = {}, b = [], c, d = ss.IEnumerator.getEnumerator(Object.keys(this._dictionary)); d.moveNext();) {
				for(var e = d.current, f = ss.IEnumerator.getEnumerator(this.layout.get_items()); f.moveNext();) c = f.current, -1 !== this._dictionary[e].studies.indexOf(c.get_studyInstanceUID()) && b.add(c);
				a[e] = b
			}
			return a
		},
		_getSeriesListFromDictionary$1: function(a) {
			for(var b = [], c, d = [], e = ss.IEnumerator.getEnumerator(Object.keys(this._dictionary)); e.moveNext();) c = this._dictionary[e.current], -1 !== c.studies.indexOf(a.get_studyInstanceUID()) && d.addRange(c.studies);
			a = 0;
			c = this.layout.get_items().get_count();
			for(a = 0; a < c; a++) e = this.layout.get_items().get_item(a), -1 !== d.indexOf(e.get_studyInstanceUID()) && b.add(e);
			return b
		},
		_enumerateMatchedSeries$1: function(a, b) {
			if(null == a.get_frames() || null == a.get_frames().get_item(0)) return !1;
			var c = a.get_frameOfReferenceUID();
			if(null == c || !c) return !1;
			c = this._getSeriesListFromDictionary$1(a);
			if(null == c) return !1;
			for(var d = 0, e = c.length, f; d < e; d++)
				if(f = c[d], f !== a && (f = b(a, f))) return f;
			return !1
		},
		_enumerateLinkedSeries: function(a, b, c) {
			var d = a.get_viewer(),
				e;
			a.get_studyInstanceUID();
			for(var f, g = d.layout.get_items().indexOf(a), h, i = ss.IEnumerator.getEnumerator(Object.keys(d._dictionary)); i.moveNext();) {
				e = d._dictionary[i.current];
				var j = e.studies.indexOf(a.get_studyInstanceUID());
				if(-1 !== j)
					for(var k =
							0, l = d.layout.get_items().get_count(), k = 0; k < l; k++) k !== g && (h = d.layout.get_items().get_item(k), f = e.studies.indexOf(h.get_studyInstanceUID()), -1 !== f && b(a, e.fidutialPoints[j], h, e.fidutialPoints[f], c))
			}
		},
		_isMatchedSeriesSelected$1: function(a) {
			return a._isPresentationInformationReady() && a.get_selected() ? !0 : !1
		},
		get_emptyCellColor: function() {
			return this._emptyCellColor$1
		},
		set_emptyCellColor: function(a) {
			this._emptyCellColor$1 = a;
			this.renderViewer();
			return a
		},
		get_selectedSeries: function() {
			return this._selectedSeries$1
		},
		get_activeSeries: function() {
			return this._activeSeries$1
		},
		set_activeSeries: function(a) {
			this._activeSeries$1 !== a && (this._activeSeries$1 = a, a.invalidate(), this._activeSeries$1.invalidate());
			return a
		},
		_repaintCells$1: function() {},
		get_showReferenceLine: function() {
			return this._showReferenceLine$1
		},
		set_showReferenceLine: function(a) {
			this._showReferenceLine$1 !== a && ((this._showReferenceLine$1 = a) && this._recalculate(), this._repaintCells$1());
			return a
		},
		get_showFirstAndLastReferenceLine: function() {
			return this._showFirstAndLastReferenceLine$1
		},
		set_showFirstAndLastReferenceLine: function(a) {
			this._showFirstAndLastReferenceLine$1 !== a && (this._showFirstAndLastReferenceLine$1 = a, this._recalculate(), this._repaintCells$1());
			return a
		},
		get_enableSynchronization: function() {
			return this._enableSynchronization$1
		},
		set_enableSynchronization: function(a) {
			(this._enableSynchronization$1 = a) && this._synchronizeAllSeries$1();
			return a
		},
		_oldArrangement$1: 0,
		_oldRow$1: 0,
		_oldCol$1: 0,
		_bounds$1: null,
		_oldVisiblity$1: !1,
		_previousSubCellIndex$1: 0,
		_saveBounds$1: function(a) {
			var a =
				a.get_imageViewer().get_items(),
				b = 0,
				c = a.get_count(),
				d;
			null == this._bounds$1 ? this._bounds$1 = new lt.LeadCollection : this._bounds$1.clear();
			for(b = 0; b < c; b++) d = a.get_item(b), this._bounds$1.add(d.get_bounds())
		},
		_restoreBounds$1: function(a) {
			var b = a.get_imageViewer().get_items(),
				c = 0,
				d = this._bounds$1.get_count();
			a.updateSubCellCount(d);
			for(c = 0; c < d; c++) a = b.get_item(c), a.set_bounds(this._bounds$1.get_item(c))
		},
		explode: function(a, b) {
			if(this._exploded$1 !== b) {
				this._exploded$1 = b;
				this._explodedCell$1 = a;
				this._explodedCell$1.beginUpdate();
				this.onBeforeCellExploded(a);
				if(this._exploded$1) {
					this._oldBounds$1 = this._explodedCell$1.get_bounds();
					this._oldArrangement$1 = this._explodedCell$1.get_arrangement();
					this._oldRow$1 = this._explodedCell$1.get_gridLayout().get_rows();
					this._oldCol$1 = this._explodedCell$1.get_gridLayout().get_columns();
					this._explodedCell$1.set_bounds(lt.LeadRectD.create(0, 0, 1, 1));
					this._saveBounds$1(this._explodedCell$1);
					var c = this._explodedCell$1.get_imageViewer().get_items().indexOf(this._explodedCell$1.get_selectedItem());
					this._explodedCell$1.set_arrangement(0);
					this._explodedCell$1.get_gridLayout().set_rows(1);
					this._explodedCell$1.get_gridLayout().set_columns(1);
					(this._previousSubCellIndex$1 = c) && this._explodedCell$1.set_currentOffset(this._explodedCell$1.get_currentOffset() + c);
					this._explodedCell$1.set_selectedItem(this._explodedCell$1.get_imageViewer().get_items().get_item(0))
				} else this._explodedCell$1.set_currentOffset(Math.min(Math.max(0, this._explodedCell$1.get_currentOffset() - this._previousSubCellIndex$1), Math.max(0,
					this._explodedCell$1.get_frames().get_count() - this._bounds$1.get_count() - this._previousSubCellIndex$1))), this._restoreBounds$1(this._explodedCell$1), this._explodedCell$1.set_arrangement(this._oldArrangement$1), this._explodedCell$1.get_gridLayout().set_rows(this._oldRow$1), this._explodedCell$1.get_gridLayout().set_columns(this._oldCol$1), this._explodedCell$1.set_bounds(this._oldBounds$1), this._explodedCell$1.set_selectedItem(this._explodedCell$1.get_imageViewer().get_items().get_item(this._previousSubCellIndex$1));
				this.onAfterCellExploded(a);
				this._switchCellsVisibilty$1();
				this.renderViewer();
				this.layoutCells();
				this._explodedCell$1.endUpdate()
			}
		},
		_switchCellsVisibilty$1: function() {
			for(var a = 0, b = this.layout.get_items().get_count(), c = null; a < b; a++) c = this.layout.get_items().get_item(a), c.get_div().clientWidth && c.get_div().clientHeight && c !== this._explodedCell$1 && (this._exploded$1 ? (c.get_div().style.visibility = "hidden", this._oldVisiblity$1 = c.get_overlayTextVisible(), c.set_overlayTextVisible(!1)) : (c.get_div().style.visibility =
				"visible", c.set_overlayTextVisible(this._oldVisiblity$1)))
		},
		get_exploded: function() {
			return this._exploded$1
		},
		get_explodedCell: function() {
			return this._explodedCell$1
		},
		emptyCellClicked: null,
		add_beforeCellExploded: function(a) {
			this.__beforeCellExploded$1 = ss.Delegate.combine(this.__beforeCellExploded$1, a)
		},
		remove_beforeCellExploded: function(a) {
			this.__beforeCellExploded$1 = ss.Delegate.remove(this.__beforeCellExploded$1, a)
		},
		__beforeCellExploded$1_handler_get: function() {
			null == this.__beforeCellExploded$1_handler &&
				(this.__beforeCellExploded$1_handler = ss.EventHandler.create(this, this.add_beforeCellExploded, this.remove_beforeCellExploded));
			return this.__beforeCellExploded$1_handler
		},
		__beforeCellExploded$1: null,
		__beforeCellExploded$1_handler: null,
		add_afterCellExploded: function(a) {
			this.__afterCellExploded$1 = ss.Delegate.combine(this.__afterCellExploded$1, a)
		},
		remove_afterCellExploded: function(a) {
			this.__afterCellExploded$1 = ss.Delegate.remove(this.__afterCellExploded$1, a)
		},
		__afterCellExploded$1_handler_get: function() {
			null ==
				this.__afterCellExploded$1_handler && (this.__afterCellExploded$1_handler = ss.EventHandler.create(this, this.add_afterCellExploded, this.remove_afterCellExploded));
			return this.__afterCellExploded$1_handler
		},
		__afterCellExploded$1: null,
		__afterCellExploded$1_handler: null,
		onAfterCellExploded: function(a) {
			null != this.__afterCellExploded$1 && this.__afterCellExploded$1(this, new lt.Controls.Medical.CellExplodedEventArgs(a))
		},
		onBeforeCellExploded: function(a) {
			null != this.__beforeCellExploded$1 && this.__beforeCellExploded$1(this,
				new lt.Controls.Medical.CellExplodedEventArgs(a))
		},
		_createCanvas$1: function() {
			var a = document.createElement("canvas"),
				b = this._viewerDivElement$1.parentNode;
			a.style.zIndex = 3;
			a.style.backgroundColor = "rgba(200, 200, 200, 0.5)";
			a.style.left = "100px";
			a.style.top = "0px";
			a.style.width = "400px";
			a.style.height = "100px";
			a.style.position = "absolute";
			a.style.visibility = "hidden";
			b.appendChild(a);
			return a
		},
		_divId$1: null,
		get_divId: function() {
			return this._divId$1
		},
		get_cellsArrangement: function() {
			return this._cellsArrangement$1
		},
		set_cellsArrangement: function(a) {
			this._cellsArrangement$1 = a;
			this.layoutCells();
			this.renderViewer();
			return a
		},
		get_gridLayout: function() {
			return this._gridLayout$1
		},
		_getUpperBound$1: function(a, b, c, d) {
			return b >= a.length - 1 ? parseInt(d) - this._lightPart$1 : parseInt(a[b + 1] * d) - this._gridLayout$1.get_splitterSize()
		},
		_getLowerBound$1: function(a, b, c, d) {
			return !b ? this._shadowPart$1 : parseInt(a[b - 1] * d) + this._gridLayout$1.get_splitterSize()
		},
		_xPosition$1: 0,
		_yPosition$1: 0,
		_drawShadowCanvas$1: function(a, b, c, d, e) {
			a.style.left =
				b.toString() + "px";
			a.style.top = c.toString() + "px";
			a.style.width = (d - b).toString() + "px";
			a.style.height = (e - c).toString() + "px"
		},
		_findSplitterInPosition$1: function(a, b, c) {
			for(var d = a.length, e, f = 3 * this._shadowPart$1 / 2, g = 0; g < d; g++)
				if(e = parseInt(a[g] * c), Math.abs(e - b) <= f) return g;
			return -1
		},
		_horizontalIndex$1: 0,
		_verticalIndex$1: 0,
		_checkSplitter$1: function(a, b) {
			var c = this._viewerCanvasElement$1,
				d = this.get_gridLayout().get_horizontalSplitters(),
				e = this.get_gridLayout().get_verticalSplitters();
			if(this._cellsArrangement$1) return this._verticalIndex$1 =
				this._horizontalIndex$1 = -1, !1;
			null != e && (this._verticalIndex$1 = this._findSplitterInPosition$1(e, a, c.width));
			null != d && (this._horizontalIndex$1 = this._findSplitterInPosition$1(d, b, c.height));
			return !1
		},
		_isStarted$1: !1,
		_updateSplittersPosition$1: function(a, b) {
			for(var c = this.get_gridLayout().get_horizontalSplitters(), d = this.get_gridLayout().get_verticalSplitters(), e = 1; e < a; e++) c[e - 1] = e / a;
			for(e = 1; e < b; e++) d[e - 1] = e / b
		},
		onDragStarted: function(a) {
			lt.Controls.Medical.MedicalViewer.callBaseMethod(this, "onDragStarted", [a]);
			this._checkSplitter$1(parseInt(a.get_position().get_x()), parseInt(a.get_position().get_y()));
			this._isStarted$1 = !1;
			if(-1 !== this._horizontalIndex$1 || -1 !== this._verticalIndex$1) {
				this._isStarted$1 = !0;
				var a = this._viewerDivElement$1.clientWidth,
					b = this._viewerDivElement$1.clientHeight,
					c = this.get_gridLayout().get_horizontalSplitters(),
					d = this.get_gridLayout().get_verticalSplitters();
				this._yPosition$1 = parseInt(c[this._horizontalIndex$1] * b);
				this._xPosition$1 = parseInt(d[this._verticalIndex$1] * a); - 1 !== this._horizontalIndex$1 &&
					this._drawShadowCanvas$1(this._horizontalSplitterShadow$1, 0, this._yPosition$1 - this._lightPart$1, a, this._yPosition$1 + this._shadowPart$1); - 1 !== this._verticalIndex$1 && this._drawShadowCanvas$1(this._verticalSplitterShadow$1, this._xPosition$1 - this._lightPart$1, 0, this._xPosition$1 + this._shadowPart$1, b);
				this._horizontalSplitterShadow$1.style.visibility = -1 !== this._horizontalIndex$1 ? "visible" : "hidden";
				this._verticalSplitterShadow$1.style.visibility = -1 !== this._verticalIndex$1 ? "visible" : "hidden"
			}
		},
		onDragDelta: function(a) {
			lt.Controls.Medical.MedicalViewer.callBaseMethod(this,
				"onDragDelta", [a]);
			if(this._isStarted$1) {
				var b = this._viewerDivElement$1.clientWidth,
					c = this._viewerDivElement$1.clientHeight,
					d = this.get_gridLayout().get_horizontalSplitters(),
					e = this.get_gridLayout().get_verticalSplitters();
				if(-1 !== this._horizontalIndex$1) {
					var f = this._getUpperBound$1(d, this._horizontalIndex$1, a.get_position().get_y(), c),
						g = this._getLowerBound$1(d, this._horizontalIndex$1, a.get_position().get_y(), c);
					this._yPosition$1 = Math.max(Math.min(a.get_position().get_y(), f), g);
					this._drawShadowCanvas$1(this._horizontalSplitterShadow$1,
						0, this._yPosition$1 - 4, b, this._yPosition$1 + this._shadowPart$1);
					d[this._horizontalIndex$1] = this._yPosition$1 / c
				} - 1 !== this._verticalIndex$1 && (f = this._getUpperBound$1(e, this._verticalIndex$1, a.get_position().get_x(), b), g = this._getLowerBound$1(e, this._verticalIndex$1, a.get_position().get_x(), b), this._xPosition$1 = Math.max(Math.min(a.get_position().get_x(), f), g), this._drawShadowCanvas$1(this._verticalSplitterShadow$1, this._xPosition$1 - 4, 0, this._xPosition$1 + this._shadowPart$1, c), e[this._verticalIndex$1] = this._xPosition$1 /
					b)
			}
		},
		onDragCompleted: function(a) {
			lt.Controls.Medical.MedicalViewer.callBaseMethod(this, "onDragCompleted", [a]);
			if(this._isStarted$1) {
				this._isStarted$1 = !1;
				var a = this._viewerDivElement$1.clientWidth,
					b = this._viewerDivElement$1.clientHeight,
					c = this.get_gridLayout().get_horizontalSplitters(),
					d = this.get_gridLayout().get_verticalSplitters(); - 1 !== this._horizontalIndex$1 && (c[this._horizontalIndex$1] = this._yPosition$1 / b); - 1 !== this._verticalIndex$1 && (d[this._verticalIndex$1] = this._xPosition$1 / a);
				this._horizontalSplitterShadow$1.style.visibility =
					"hidden";
				this._verticalSplitterShadow$1.style.visibility = "hidden";
				this.renderViewer();
				this.layoutCells()
			}
		},
		_setBestPosition$1: function(a) {
			var b = this._getCellsMatrix$1(!0),
				c, d, e = b.length,
				f = b[0].length;
			for(c = 0; c < e; c++)
				for(d = 0; d < f; d++)
					if(!b[c][d]) {
						a.set_rowPosition(c);
						a.set_columnsPosition(d);
						return
					}
			a.set_rowPosition(e + 1);
			a.set_columnsPosition(0)
		},
		_items_CollectionChanged$1: function(a, b) {
			for(var c = 0, d = b.get_newItems().length; c < d; c++) {
				var e = b.get_newItems()[c];
				if(b.get_action() === lt.NotifyLeadCollectionChangedAction.add) {
					e.set_parent(this.layout);
					this._emptyDivs$1 = this._emptyDivLayout$1.get_items();
					if(Type.canCast(e, lt.Controls.Medical.Cell)) {
						var f = e;
						f.set_cinePlayer(new lt.Controls.Medical.CinePlayer(f))
					} - 1 === e.get_position() && e.set_position(this.layout.get_items().indexOf(e));
					if(-1 === e.get_rowPosition() || -1 === e.get_columnsPosition())
						if(this._cellsArrangement$1) {
							for(var g = 0, f = 1; f < this._emptyDivs$1.get_count(); f++)
								if(e.get_position() === this._emptyDivs$1.get_item(f).get_position()) {
									g = f;
									break
								}
							f = this._emptyDivs$1.get_item(g);
							e.set_rowPosition(f.get_rowPosition());
							e.set_columnsPosition(f.get_columnsPosition());
							e.set_position(f.get_position());
							e.set_bounds(f.get_bounds());
							this._emptyDivs$1.removeAt(g)
						} else this._setBestPosition$1(e);
					this._updateEmptyDiv$1();
					null != e.get_frameOfReferenceUID() && this._addSeriesToDictionary(e);
					null != e.get_seriesInstanceUID() && this._addSeriesToMenu(e);
					e.get_selected() && this.layout.selectItem(e, !0);
					this._viewerDivElement$1.appendChild(e.get_div());
					this.layoutCells()
				} else b.get_action() === lt.NotifyLeadCollectionChangedAction.remove &&
					(this._deleteSeriesFromLoadedArray$1(e), this._deleteSeriesFromDictionary$1(e), e.get_selected() && this.layout.selectItem(e, !1), this._exploded$1 && this._explodedCell$1 === e && (this._explodedCell$1.set_bounds(this._oldBounds$1), this._explodedCell$1 = null, this._exploded$1 = !1), this._substituteWithEmptyDiv$1(e), this._emptyDivLayout$1.onSizeChanged())
			}
		},
		_substituteWithEmptyDiv$1: function(a) {
			var b = new lt.Controls.Medical.EmptyCell(this._emptyDivLayout$1, this, this._getEmptyDivName$1(), 0, 0);
			b.set_position(a.get_position());
			b.set_rowPosition(a.get_rowPosition());
			b.set_columnsPosition(a.get_columnsPosition());
			b.set_bounds(a.get_bounds());
			for(var a = 0, c = this._emptyDivs$1.get_count(), a = 0; a < c; a++)
				if(this._emptyDivs$1.get_item(a).get_position() > b.get_position()) return this._emptyDivs$1.insert(a, b), b;
			this._emptyDivs$1.add(b);
			return b
		},
		_deleteSeriesFromDictionary$1: function(a) {
			a.get_frameOfReferenceUID()
		},
		_deleteSeriesFromLoadedArray$1: function(a) {
			a.get_divID();
			delete this._rightClickMenu$1[a.get_divID()]
		},
		_initialize$1: function(a,
			b, c) {
			this._gridLayout$1 = new lt.Controls.Medical.GridLayout(this, b, c);
			this._dictionary = {};
			this._rightClickMenu$1 = {};
			this.layout = new lt.Controls.Medical.LayoutManager(a, this);
			this._emptyDivLayout$1 = new lt.Controls.Medical.LayoutManager(a, this);
			this.layout.get_items().add_collectionChanged(ss.Delegate.create(this, this._items_CollectionChanged$1));
			this.layout.get_selectedItems().add_collectionChanged(ss.Delegate.create(this, this._selectedItems_CollectionChanged$1));
			this._emptyDivLayout$1.get_selectedItems().add_collectionChanged(ss.Delegate.create(this,
				this._emptySelectedItems_CollectionChanged$1));
			this._viewerDivElement$1 = document.createElement("div");
			this._divId$1 = a.id + "_MedicalViewer";
			this._viewerDivElement$1.id = this._divId$1;
			this._viewerCanvasElement$1 = document.createElement("canvas");
			a.appendChild(this._viewerDivElement$1);
			this._viewerDivElement$1.appendChild(this._viewerCanvasElement$1);
			lt.Controls.Medical.MedicalViewer.callBaseMethod(this, "createControl", [this._viewerDivElement$1, this._viewerDivElement$1.parentNode, this._viewerCanvasElement$1]);
			lt.Controls.Medical.MedicalViewer.callBaseMethod(this, "startListening");
			this._horizontalSplitterShadow$1 = this._createCanvas$1();
			this._verticalSplitterShadow$1 = this._createCanvas$1();
			this.onSizeChanged();
			this._updateSplittersPosition$1(b, c);
			this._createDropDown$1()
		},
		_clearReferenceLineData$1: function(a, b, c) {
			c.get__cellReferenceLine().show = !1;
			c.invalidate()
		},
		_clearReferenceLine$1: function(a) {
			this._enumerateLinkedSeries(a, ss.Delegate.create(this, this._clearReferenceLineData$1), null)
		},
		_emptySelectedItems_CollectionChanged$1: function(a,
			b) {
			for(var c = ss.IEnumerator.getEnumerator(b.get_newItems()); c.moveNext();) {
				var d = c.current;
				if(null != d)
					if(b.get_action() === lt.NotifyLeadCollectionChangedAction.add) d.get_div().style.backgroundColor = "rgba(128, 128, 128, 1)";
					else if(b.get_action() === lt.NotifyLeadCollectionChangedAction.remove || b.get_action() === lt.NotifyLeadCollectionChangedAction.reset) d.get_div().style.backgroundColor = d.get_backgroundColor()
			}
		},
		_selectedItems_CollectionChanged$1: function(a, b) {
			if(b.get_action() === lt.NotifyLeadCollectionChangedAction.remove ||
				b.get_action() === lt.NotifyLeadCollectionChangedAction.reset)
				for(var c = ss.IEnumerator.getEnumerator(b.get_newItems()); c.moveNext();) {
					var d = c.current;
					d.set_selected(!1);
					this._clearReferenceLine$1(d);
					d.invalidate()
				} else if(b.get_action() === lt.NotifyLeadCollectionChangedAction.add) {
					this._findReferenceLine$1(this.layout.get_selectedItem(), !0);
					this._invalidateReferenceLine$1(this.layout.get_selectedItem());
					for(c = ss.IEnumerator.getEnumerator(b.get_newItems()); c.moveNext();) d = c.current, d.set_selected(!0),
						1 > d.get_selectedItems().get_count() && d.get_selectedItems().add(d.get_imageViewer().get_items().get_item(0)), d.invalidate()
				}
		},
		onSizeChanged: function() {
			lt.Controls.Medical.MedicalViewer.callBaseMethod(this, "onSizeChanged");
			this._parentDiv$1 = this._viewerDivElement$1.parentNode;
			this._viewerDivElement$1.style.left = "0px";
			this._viewerDivElement$1.style.top = "0px";
			this._viewerDivElement$1.style.width = this._parentDiv$1.clientWidth + "px";
			this._viewerDivElement$1.style.height = this._parentDiv$1.clientHeight + "px";
			this._viewerDivElement$1.style.position = "relative";
			this._viewerCanvasElement$1.width = this._parentDiv$1.clientWidth;
			this._viewerCanvasElement$1.height = this._parentDiv$1.clientHeight;
			this._viewerCanvasElement$1.style.position = "relative";
			this.layoutCells();
			this.layout.onSizeChanged();
			this._emptyDivLayout$1.onSizeChanged();
			this.renderViewer()
		},
		_medicalViewer_CanvasSizeChanged$1: function() {
			this.renderViewer()
		},
		_drawVerticalSplitter$1: function(a, b, c) {
			var d = a.getContext("2d"),
				a = a.height;
			d.beginPath();
			d.lineWidth =
				2;
			d.strokeStyle = "#e7e7e7";
			d.moveTo(b - this._lightPart$1 + 1, 0);
			d.lineTo(b - this._lightPart$1 + 1, a);
			d.stroke();
			d.beginPath();
			d.lineWidth = c - 1;
			d.strokeStyle = "#e7e7e7";
			d.moveTo(b - 1, 0);
			d.lineTo(b - 1, a);
			d.stroke();
			d.beginPath();
			d.lineWidth = 2;
			d.strokeStyle = "#e7e7e7";
			d.moveTo(b + this._shadowPart$1 - 1, 0);
			d.lineTo(b + this._shadowPart$1 - 1, a);
			d.stroke();
			d.beginPath();
			d.lineWidth = 1;
			d.strokeStyle = "#e7e7e7";
			d.moveTo(b + this._shadowPart$1, 0);
			d.lineTo(b + this._shadowPart$1, a);
			d.stroke()
		},
		_drawHorizontalSplitter$1: function(a,
			b, c) {
			var d = a.getContext("2d"),
				a = a.width;
			d.beginPath();
			d.lineWidth = 2;
			d.strokeStyle = "#e7e7e7";
			d.moveTo(0, b - this._lightPart$1 + 1);
			d.lineTo(a, b - this._lightPart$1 + 1);
			d.stroke();
			d.beginPath();
			d.lineWidth = c - 1;
			d.strokeStyle = "#e7e7e7";
			d.moveTo(0, b - 1);
			d.lineTo(a, b - 1);
			d.stroke();
			d.beginPath();
			d.lineWidth = 2;
			d.strokeStyle = "#e7e7e7";
			d.moveTo(0, b + this._shadowPart$1 - 1);
			d.lineTo(a, b + this._shadowPart$1 - 1);
			d.stroke();
			d.beginPath();
			d.lineWidth = 1;
			d.strokeStyle = "#e7e7e7";
			d.moveTo(0, b + this._shadowPart$1 + 0.5);
			d.lineTo(a,
				b + this._shadowPart$1 + 0.5);
			d.stroke()
		},
		renderViewer: function() {
			var a = this.get_gridLayout().get_horizontalSplitters(),
				b = this.get_gridLayout().get_verticalSplitters();
			this._gridLayout$1.get_splitterSize();
			var c = this._viewerCanvasElement$1,
				d = this._viewerDivElement$1.clientWidth,
				e = this._viewerDivElement$1.clientHeight,
				f = c.getContext("2d");
			f.setTransform(1, 0, 0, 1, 0, 0);
			f.fillStyle = this._emptyCellColor$1;
			f.clearRect(0, 0, c.width, c.height);
			if(!(1 === this.get_cellsArrangement() || this._exploded$1 || 1 === this.get_cellsArrangement())) {
				for(var g =
						a.length, f = 0; f < g; f++) this._drawHorizontalSplitter$1(c, parseInt(a[f] * e), this.get_gridLayout().get_splitterSize());
				a = b;
				b = a.length;
				for(f = 0; f < b; f++) e = parseInt(a[f] * d), this._drawVerticalSplitter$1(c, e, this.get_gridLayout().get_splitterSize())
			}
		},
		_setGridRowColumnNormalized$1: function(a, b, c) {
			var d = this.get_gridLayout().get_horizontalSplitters(),
				e = this.get_gridLayout().get_verticalSplitters(),
				f = this._viewerCanvasElement$1;
			if(b > d.length || c > e.length) return lt.LeadRectD.create(0, 0, 0, 0);
			var g = a.get_numberOfRows(),
				h = a.get_numberOfColumns(),
				a = 1 / f.height,
				i = 1 / f.width,
				f = c ? e[c - 1] + i * this._shadowPart$1 : 0,
				e = c - 1 + h === e.length ? 1 - i : e[c - 1 + h] - i * this._lightPart$1,
				c = b ? d[b - 1] + a * this._shadowPart$1 : 0,
				b = b - 1 + g === d.length ? 1 - a : d[b - 1 + g] - a * this._lightPart$1;
			return lt.LeadRectD.create(f, c, Math.max(0, e - f), Math.max(0, b - c))
		},
		_layoutCellInGrid$1: function(a, b, c) {
			return this._setGridRowColumnNormalized$1(a, b, c)
		},
		_layoutGridSequentialCells$1: function() {
			var a = 0,
				b = this.layout.get_items().get_count();
			this.layout.beginUpdate();
			for(a = 0; a < b; a++) {
				var c =
					this.layout.get_items().get_item(a),
					d = this._layoutCellInGrid$1(c, c.get_rowPosition(), c.get_columnsPosition());
				c.set_bounds(lt.LeadRectD.create(d.get_left(), d.get_top(), d.get_width(), d.get_height()))
			}
			this.layout.endUpdate();
			this._emptyDivLayout$1.beginUpdate();
			this._emptyDivs$1 = this._emptyDivLayout$1.get_items();
			a = 0;
			for(b = this._emptyDivs$1.get_count(); a < b; a++) c = this._emptyDivs$1.get_item(a), d = this._layoutCellInGrid$1(c, c.get_rowPosition(), c.get_columnsPosition()), c.set_bounds(lt.LeadRectD.create(d.get_left(),
				d.get_top(), d.get_width(), d.get_height()));
			this._emptyDivLayout$1.endUpdate()
		},
		_lightPart$1: 0,
		_shadowPart$1: 0,
		_oldBounds$1: null,
		_layoutExplodedCell$1: function(a) {
			var b = this._viewerCanvasElement$1.width,
				c = this._viewerCanvasElement$1.height;
			this._explodedCell$1.set_displayRectangle(lt.LeadRectD.create(a.get_left() * b, a.get_top() * c, a.get_width() * b, a.get_height() * c));
			this._explodedCell$1.onSizeChanged()
		},
		layoutCells: function() {
			this._updateEmptyDiv$1();
			var a = this._gridLayout$1.get_splitterSize();
			this._lightPart$1 =
				(a >> 1) + 1;
			this._shadowPart$1 = a - this._lightPart$1 + 1;
			if(this._exploded$1) this._layoutExplodedCell$1(this._explodedCell$1.get_bounds());
			else switch(this._cellsArrangement$1) {
				case 0:
					this._layoutGridSequentialCells$1()
			}
		}
	};
	Object.defineProperty(lt.Controls.Medical.MedicalViewer.prototype, "multipleSelection", {
		get: lt.Controls.Medical.MedicalViewer.prototype.get_multipleSelection,
		set: lt.Controls.Medical.MedicalViewer.prototype.set_multipleSelection,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MedicalViewer.prototype,
		"selectionChanged", {
			get: lt.Controls.Medical.MedicalViewer.prototype.__selectionChanged$1_handler_get,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.MedicalViewer.prototype, "totalCells", {
		get: lt.Controls.Medical.MedicalViewer.prototype.get_totalCells,
		set: lt.Controls.Medical.MedicalViewer.prototype.set_totalCells,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MedicalViewer.prototype, "emptyDivs", {
		get: lt.Controls.Medical.MedicalViewer.prototype.get_emptyDivs,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MedicalViewer.prototype, "matchedCells", {
		get: lt.Controls.Medical.MedicalViewer.prototype.get_matchedCells,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MedicalViewer.prototype, "emptyCellColor", {
		get: lt.Controls.Medical.MedicalViewer.prototype.get_emptyCellColor,
		set: lt.Controls.Medical.MedicalViewer.prototype.set_emptyCellColor,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MedicalViewer.prototype,
		"selectedSeries", {
			get: lt.Controls.Medical.MedicalViewer.prototype.get_selectedSeries,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.MedicalViewer.prototype, "activeSeries", {
		get: lt.Controls.Medical.MedicalViewer.prototype.get_activeSeries,
		set: lt.Controls.Medical.MedicalViewer.prototype.set_activeSeries,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MedicalViewer.prototype, "showReferenceLine", {
		get: lt.Controls.Medical.MedicalViewer.prototype.get_showReferenceLine,
		set: lt.Controls.Medical.MedicalViewer.prototype.set_showReferenceLine,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MedicalViewer.prototype, "showFirstAndLastReferenceLine", {
		get: lt.Controls.Medical.MedicalViewer.prototype.get_showFirstAndLastReferenceLine,
		set: lt.Controls.Medical.MedicalViewer.prototype.set_showFirstAndLastReferenceLine,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MedicalViewer.prototype, "enableSynchronization", {
		get: lt.Controls.Medical.MedicalViewer.prototype.get_enableSynchronization,
		set: lt.Controls.Medical.MedicalViewer.prototype.set_enableSynchronization,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MedicalViewer.prototype, "exploded", {
		get: lt.Controls.Medical.MedicalViewer.prototype.get_exploded,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MedicalViewer.prototype, "explodedCell", {
		get: lt.Controls.Medical.MedicalViewer.prototype.get_explodedCell,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MedicalViewer.prototype,
		"beforeCellExploded", {
			get: lt.Controls.Medical.MedicalViewer.prototype.__beforeCellExploded$1_handler_get,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.MedicalViewer.prototype, "afterCellExploded", {
		get: lt.Controls.Medical.MedicalViewer.prototype.__afterCellExploded$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MedicalViewer.prototype, "divId", {
		get: lt.Controls.Medical.MedicalViewer.prototype.get_divId,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MedicalViewer.prototype, "cellsArrangement", {
		get: lt.Controls.Medical.MedicalViewer.prototype.get_cellsArrangement,
		set: lt.Controls.Medical.MedicalViewer.prototype.set_cellsArrangement,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MedicalViewer.prototype, "gridLayout", {
		get: lt.Controls.Medical.MedicalViewer.prototype.get_gridLayout,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.CellGridLayout = function(a, b, c) {
		this._value1 = 1;
		this._value4 =
			this._value3 = this._value2 = 0;
		this._rows = b;
		this._columns = c;
		this._cell = a
	};
	lt.Controls.Medical.CellGridLayout.prototype = {
		_rows: 0,
		_columns: 0,
		_value1: 0,
		_value2: 0,
		_value3: 0,
		_value4: 0,
		_cell: null,
		get_value1: function() {
			return this._value1
		},
		set_value1: function(a) {
			this._value1 = a;
			if(2 === this._cell.get_arrangement() || 3 === this._cell.get_arrangement()) this._cell.updateSubCellCount(this._value1 + this._value2 + this._value3 + this._value4), this._cell.get_viewer().onSizeChanged();
			return a
		},
		get_value2: function() {
			return this._value2
		},
		set_value2: function(a) {
			this._value2 = a;
			if(2 === this._cell.get_arrangement() || 3 === this._cell.get_arrangement()) this._cell.updateSubCellCount(this._value1 + this._value2 + this._value3 + this._value4), this._cell.get_viewer().onSizeChanged();
			return a
		},
		get_value3: function() {
			return this._value3
		},
		set_value3: function(a) {
			this._value3 = a;
			if(2 === this._cell.get_arrangement() || 3 === this._cell.get_arrangement()) this._cell.updateSubCellCount(this._value1 + this._value2 + this._value3 + this._value4), this._cell.get_viewer().onSizeChanged();
			return a
		},
		get_value4: function() {
			return this._value4
		},
		set_value4: function(a) {
			this._value4 = a;
			if(2 === this._cell.get_arrangement() || 3 === this._cell.get_arrangement()) this._cell.updateSubCellCount(this._value1 + this._value2 + this._value3 + this._value4), this._cell.get_viewer().onSizeChanged();
			return a
		},
		get_rows: function() {
			return this._rows
		},
		set_rows: function(a) {
			if(Type.canCast(this, lt.Controls.Medical.MPRCell)) throw Error("You can't change the rows of the MPR Cell");
			this._rows = a;
			this._cell.get_arrangement() ||
				(this._cell.updateSubCellCount(this._rows * this._columns), this._cell.onSizeChanged());
			return a
		},
		get_columns: function() {
			return this._columns
		},
		set_columns: function(a) {
			if(Type.canCast(this, lt.Controls.Medical.MPRCell)) throw Error("You can't change the columns of the MPR Cell");
			this._columns = a;
			this._cell.get_arrangement() || (this._cell.updateSubCellCount(this._rows * this._columns), this._cell.onSizeChanged());
			return a
		}
	};
	Object.defineProperty(lt.Controls.Medical.CellGridLayout.prototype, "value1", {
		get: lt.Controls.Medical.CellGridLayout.prototype.get_value1,
		set: lt.Controls.Medical.CellGridLayout.prototype.set_value1,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.CellGridLayout.prototype, "value2", {
		get: lt.Controls.Medical.CellGridLayout.prototype.get_value2,
		set: lt.Controls.Medical.CellGridLayout.prototype.set_value2,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.CellGridLayout.prototype, "value3", {
		get: lt.Controls.Medical.CellGridLayout.prototype.get_value3,
		set: lt.Controls.Medical.CellGridLayout.prototype.set_value3,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.CellGridLayout.prototype, "value4", {
		get: lt.Controls.Medical.CellGridLayout.prototype.get_value4,
		set: lt.Controls.Medical.CellGridLayout.prototype.set_value4,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.CellGridLayout.prototype, "rows", {
		get: lt.Controls.Medical.CellGridLayout.prototype.get_rows,
		set: lt.Controls.Medical.CellGridLayout.prototype.set_rows,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.CellGridLayout.prototype,
		"columns", {
			get: lt.Controls.Medical.CellGridLayout.prototype.get_columns,
			set: lt.Controls.Medical.CellGridLayout.prototype.set_columns,
			enumerable: !0,
			configurable: !0
		});
	lt.Controls.Medical.EmptyCell = function(a, b, c, d, e) {
		lt.Controls.Medical.EmptyCell.initializeBase(this);
		this.set_parent(a);
		this._viewer$1 = b;
		this._rowPosition = d;
		this._columnsPosition = e;
		this.get_div().id = c;
		this.get_div().style.backgroundColor = "rgba(0, 0, 0, 1)";
		this._emptyCellClicked$1 = ss.Delegate.create(this, this._emptyCell_Clicked$1);
		this._divContextMenu$1 =
			ss.Delegate.create(this, this._divContext_Show$1);
		this._emptyDivLostfocus$1 = ss.Delegate.create(this, this._emptyCell_LostFocus$1);
		this.get_div().addEventListener("blur", this._emptyDivLostfocus$1, !1);
		this.get_div().addEventListener("contextmenu", this._divContextMenu$1, !1);
		lt.LTHelper.supportsTouch && !lt.LTHelper.msPointerEnabled ? this.get_div().addEventListener("touchstart", this._emptyCellClicked$1, !1) : lt.LTHelper.msPointerEnabled ? this.get_div().addEventListener(lt.Controls.Medical.Tools.pointerdown, this._emptyCellClicked$1, !1) : this.get_div().addEventListener("mousedown", this._emptyCellClicked$1, !1);
		a = document.getElementById(this._viewer$1.get_divId());
		null != a && a.appendChild(this.get_div())
	};
	lt.Controls.Medical.EmptyCell.prototype = {
		_viewer$1: null,
		_emptyCellClicked$1: null,
		_divContextMenu$1: null,
		_emptyDivLostfocus$1: null,
		_backgroundColor$1: "rgba(0, 0, 0, 1)",
		get_backgroundColor: function() {
			return this._backgroundColor$1
		},
		set_backgroundColor: function(a) {
			this._backgroundColor$1 = a;
			this._update$1();
			return a
		},
		_update$1: function() {
			this.get_div().style.backgroundColor =
				this._backgroundColor$1
		},
		_emptyCell_Clicked$1: function(a) {
			this._viewer$1._selectThisCell(this, a.ctrlKey);
			a.button === lt.Controls.MouseButtons.right ? this._viewer$1._showSeriesDropDown(this, a.offsetX, a.offsetY) : this._viewer$1._hideSeriesDropDown()
		},
		dispose: function() {
			var a = document.getElementById(this._viewer$1.get_divId());
			null != a && a.removeChild(this.get_div());
			this.get_div().id = ""
		},
		_divContext_Show$1: function(a) {
			a.preventDefault();
			a.stopImmediatePropagation()
		},
		_emptyCell_LostFocus$1: function() {
			this._viewer$1.get_emptyDivs().get_selectedItems().get_count() ||
				this._viewer$1._hideSeriesDropDown()
		}
	};
	Object.defineProperty(lt.Controls.Medical.EmptyCell.prototype, "backgroundColor", {
		get: lt.Controls.Medical.EmptyCell.prototype.get_backgroundColor,
		set: lt.Controls.Medical.EmptyCell.prototype.set_backgroundColor,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.ImageURLChangedEventArgs = function(a) {
		lt.Controls.Medical.ImageURLChangedEventArgs.initializeBase(this, [a])
	};
	lt.Controls.Medical.ImageProcessingReadyEventArgs = function(a, b) {
		lt.Controls.Medical.ImageProcessingReadyEventArgs.initializeBase(this);
		this._frame$1 = a;
		this._imageProcessing$1 = b
	};
	lt.Controls.Medical.ImageProcessingReadyEventArgs.prototype = {
		_imageProcessing$1: null,
		_frame$1: null,
		get_imageProcessing: function() {
			return this._imageProcessing$1
		},
		get_frame: function() {
			return this._frame$1
		}
	};
	Object.defineProperty(lt.Controls.Medical.ImageProcessingReadyEventArgs.prototype, "imageProcessing", {
		get: lt.Controls.Medical.ImageProcessingReadyEventArgs.prototype.get_imageProcessing,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.ImageProcessingReadyEventArgs.prototype,
		"frame", {
			get: lt.Controls.Medical.ImageProcessingReadyEventArgs.prototype.get_frame,
			enumerable: !0,
			configurable: !0
		});
	lt.Controls.Medical.CellEventArgs = function(a) {
		lt.Controls.Medical.CellEventArgs.initializeBase(this);
		this._frame$1 = a
	};
	lt.Controls.Medical.CellEventArgs.prototype = {
		_frame$1: null,
		get_frame: function() {
			return this._frame$1
		}
	};
	Object.defineProperty(lt.Controls.Medical.CellEventArgs.prototype, "frame", {
		get: lt.Controls.Medical.CellEventArgs.prototype.get_frame,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.CellExplodedEventArgs = function(a) {
		lt.Controls.Medical.CellExplodedEventArgs.initializeBase(this);
		this._Cell$1 = a
	};
	lt.Controls.Medical.CellExplodedEventArgs.prototype = {
		_Cell$1: null,
		get_cell: function() {
			return this._Cell$1
		}
	};
	Object.defineProperty(lt.Controls.Medical.CellExplodedEventArgs.prototype, "cell", {
		get: lt.Controls.Medical.CellExplodedEventArgs.prototype.get_cell,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.FrameAttachedEventArgs = function(a, b) {
		lt.Controls.Medical.FrameAttachedEventArgs.initializeBase(this);
		this._SubCell$1 = a;
		this._Frame$1 = b
	};
	lt.Controls.Medical.FrameAttachedEventArgs.prototype = {
		_SubCell$1: null,
		get_subCell: function() {
			return this._SubCell$1
		},
		_Frame$1: null,
		get_frame: function() {
			return this._Frame$1
		}
	};
	Object.defineProperty(lt.Controls.Medical.FrameAttachedEventArgs.prototype, "subCell", {
		get: lt.Controls.Medical.FrameAttachedEventArgs.prototype.get_subCell,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.FrameAttachedEventArgs.prototype, "frame", {
		get: lt.Controls.Medical.FrameAttachedEventArgs.prototype.get_frame,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.MPRCell = function(a, b, c) {
		lt.Controls.Medical.MPRCell.initializeBase(this, [a.get_viewer(), c, 1, 1]);
		this.add_dispoing(ss.Delegate.create(this, this._mprCell_Dispose$2));
		this.set_mprType(b);
		this.add_scrollChanged(ss.Delegate.create(this, this._cell_scrollChanged$2));
		this._generatorSet$2(a)
	};
	lt.Controls.Medical.MPRCell.canDoMPR = function(a) {
		if(Type.canCast(a, lt.Controls.Medical.MPRCell)) return -4;
		if(3 > a.get_frames().get_count()) return -1;
		var b = a.get_frames().get_item(0),
			c = a.get_frames().get_item(1);
		if(null == b.get_imagePosition() || null == c.get_imagePosition()) return -2;
		b = 0;
		c = a.get_frames().get_count();
		if(!c) return -3;
		var d;
		d = a.get_frames().get_item(0);
		for(var e = d.get_imageOrientation(); b < c; b++) {
			d = a.get_frames().get_item(b);
			if(!lt.Controls.Medical.Tools._compareArrays(d.get_imageOrientation(), e)) return -5;
			if(null == d.lowResImage) return -3
		}
		return 0
	};
	lt.Controls.Medical.MPRCell.prototype = {
		_originalMPRType$2: 0,
		_generator$2: null,
		get_generator: function() {
			return this._generator$2
		},
		set_generator: function(a) {
			this._generator$2 = a;
			this._generatorSet$2(a);
			return a
		},
		_generator_Dispose$2: function() {
			this.dispose()
		},
		_mprCell_Dispose$2: function() {
			this._generator$2.remove_dispoing(ss.Delegate.create(this, this._generator_Dispose$2));
			this._generator$2.get_derivatives().remove(this);
			this.remove_dispoing(ss.Delegate.create(this, this._mprCell_Dispose$2));
			this.remove_scrollChanged(ss.Delegate.create(this, this._cell_scrollChanged$2))
		},
		_generatorSet$2: function(a) {
			null != a && (this._generator$2 = a, -1 === this._generator$2.get_derivatives().indexOf(this) && this._generator$2.get_derivatives().add(this), 100 !== this._generator$2.get_progress().get_progressPercent() ? this._generator$2.add_progressCompleted(ss.Delegate.create(this, this._generator_ProgressCompleted$2)) : (this._generator$2.add_dispoing(ss.Delegate.create(this, this._generator_Dispose$2)), null == this._mprImage && (this._originalMPRType$2 = this._generator$2.get_mprType(), this._initializeMPRCell$2(), this.get_progress().set_progressPercent(100),
				lt.Controls.Medical.CrossHairInteractiveMode.scrollCrossHair(this._generator$2, this._generator$2.get__crossHairPosition().get_x(), this._generator$2.get__crossHairPosition().get_y()), this._renderOverlay$2())))
		},
		_renderOverlay$2: function() {
			for(var a = 0, b = this.get_imageViewer().get_items().get_count(), a = 0; a < b; a++) {
				var c = this.get_imageViewer().get_items().get_item(a);
				c.onSizeChanged();
				c._reRenderOverlay()
			}
		},
		_generator_ProgressCompleted$2: function() {
			this._generator$2.remove_progressCompleted(ss.Delegate.create(this,
				this._generator_ProgressCompleted$2));
			this._generatorSet$2(this._generator$2)
		},
		_cell_scrollChanged$2: function(a, b) {
			b.get_previousScrollOffset() !== b.get_scrollOffset() && (this.get_frames().get_item(b.get_previousScrollOffset()), this.get_frames().get_item(b.get_scrollOffset()), this._generateMPRFrame(b.get_scrollOffset(), b.get_scrollOffset()))
		},
		reloadMPR: function() {
			this.get_frames().clear();
			switch(this.get_mprType()) {
				case 2:
					switch(this._originalMPRType$2) {
						case 0:
							this._initializeMPRCell$2()
					}
					break;
				case 1:
					switch(this._originalMPRType$2) {
						case 0:
							this._initializeMPRCell$2()
					}
			}
		},
		_getOneImage$2: function() {
			for(var a = 0, b = this._generator$2.get_frames().get_count(), c; a < b; a++)
				if(c = this._generator$2.get_frames().get_item(a), null != c.lowResImage._image && c.lowResImage._image.naturalWidth) return c.lowResImage._image;
			return null
		},
		_originalFrameWidth$2: 0,
		_originalFrameHeight$2: 0,
		_frameWidth$2: 0,
		_frameHeight$2: 0,
		_copyFrameInformation$2: function(a, b) {
			var c = new lt.Controls.Medical.DICOMImageInformation;
			a.set_width(this._frameWidth$2);
			a.set_height(this._frameHeight$2);
			a.set_bitPerpixel(b.get_bitPerpixel());
			a.set_information(c);
			a.get_information().set_minValue(b.get_information().get_minValue());
			a.get_information().set_maxValue(b.get_information().get_maxValue());
			a.get_information().set_lowBit(b.get_information().get_lowBit());
			a.get_information().set_highBit(b.get_information().get_highBit());
			a.get_information().set_bitsPerPixel(b.get_information().get_bitsPerPixel());
			a.get_information().set_photometricInterpretation("");
			a.set_imagePosition(b.get_imagePosition());
			a.set_imageOrientation(b.get_imageOrientation());
			a.set_rowSpacing(b.get_rowSpacing());
			a.set_columnSpacing(b.get_columnSpacing());
			a.get_information().set_width(this._frameWidth$2);
			a.get_information().set_height(this._frameHeight$2);
			a.get_information().set_photometricInterpretation(b.get_information().get_photometricInterpretation());
			a.set_photometricInterpretation(b.get_photometricInterpretation());
			a.set_isDataReady(b.get_isDataReady());
			a.set_isDataReady(b.get_isDataReady());
			a.set_isDataReady(b.get_isDataReady());
			a.get_information().set_windowWidth(b.get_information().get_windowWidth());
			a.get_information().set_windowCenter(b.get_information().get_windowCenter());
			this.set_seriesInstanceUID(this._generator$2.get_seriesInstanceUID() + "_Sagittal")
		},
		_rescaleValue$2: 0,
		_widthRescaleValue$2: 0,
		_getRescaleValue$2: function() {
			var a = this._generator$2.get_frames().get_item(0).get_imagePosition(),
				b = this._generator$2.get_frames().get_item(1).get_imagePosition();
			return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2) + Math.pow(a[2] - b[2], 2))
		},
		_getFrameWithOrientationAndPosition$2: function(a) {
			for(var b =
					0, c = a.get_frames().get_count(), d, b = 0; b < c; b++)
				if(d = a.get_frames().get_item(b), null != d.get_imageOrientation() && null != d.get_imagePosition()) return b;
			return 0
		},
		_getMPRInfo$2: function(a, b) {
			var c = this._getFrameWithOrientationAndPosition$2(a),
				d = a.get_frames().get_item(c),
				e = a.get_frames().get_item(c).get_imagePosition(),
				c = a.get_frames().get_item(c + 1).get_imagePosition(),
				e = lt.Controls.Medical.ReferenceLine._set3OrthogonalOrientation(null == d.get_imageOrientation() ? [1, 0, 0, 0, 1, 0] : d.get_imageOrientation(), new lt.Controls.Medical._d3DXVECTOR3(e[0],
					e[1], e[2]), new lt.Controls.Medical._d3DXVECTOR3(c[0], c[1], c[2])),
				d = b;
			switch(this._originalMPRType$2) {
				default: d = b;
				break;
				case 1:
						d = b ? 1 : 0
			}
			c = 0;
			switch(d) {
				default: c = e.axial_DICOMTage.map3DOrthMPRToItsConventionalNames[4];
				break;
				case 1:
						c = e.axial_DICOMTage.map3DOrthMPRToItsConventionalNames[2];
					break;
				case 2:
						c = e.axial_DICOMTage.map3DOrthMPRToItsConventionalNames[1]
			}
			d = null;
			switch(c) {
				case 1:
					d = e.coro_DICOMTage;
					break;
				case 2:
					d = e.sag_DICOMTage;
					break;
				case 4:
					d = e.axial_DICOMTage
			}
			e = Array(6);
			e[0] = d.xOrientation[0];
			e[1] =
				d.xOrientation[1];
			e[2] = d.xOrientation[2];
			e[3] = d.yOrientation[0];
			e[4] = d.yOrientation[1];
			e[5] = d.yOrientation[2];
			c = new lt.Controls.Medical._mprOrientationInfo;
			c.mprType = b;
			c.orientation = e;
			c.transform = d.flip;
			return c
		},
		_mprImage: null,
		_mprTransform$2: null,
		_updateMPRCanvas$2: function() {
			var a = this.get_imageViewer().get_items().get_item(0);
			(a.get_imageSize().get_width() !== this._frameWidth$2 || a.get_imageSize().get_height() !== this._frameHeight$2) && a.set_imageSize(lt.LeadSizeD.create(this._frameWidth$2, this._frameHeight$2));
			null == this._mprImage && (this._mprImage = document.createElement("canvas"));
			this._mprImage.width !== this._frameWidth$2 && (this._mprImage.width = this._frameWidth$2);
			this._mprImage.height !== this._frameHeight$2 && (this._mprImage.height = this._frameHeight$2)
		},
		_mprDicomInfo$2: null,
		_initializeMPRCell$2: function() {
			this._rescaleValue$2 = this._getRescaleValue$2();
			var a = this._getMPRInfo$2(this._generator$2, this.get_mprType());
			this._mprTransform$2 = a.transform;
			this._MPRReverse$2 = -1 !== a.transform.indexOf(3);
			this._MPRFlip$2 = -1 !== a.transform.indexOf(2);
			var b = this._getOneImage$2();
			this._originalFrameWidth$2 = b.naturalHeight;
			this._originalFrameHeight$2 = this._generator$2.get_frames().get_count();
			var c = null,
				c = this._generator$2.get_frames().get_item(0),
				d = parseInt(c.get_width().toString());
			this._widthRescaleValue$2 = d ? d / this._originalFrameWidth$2 : 1;
			this._rescaleValue$2 ? (this._frameWidth$2 = Math.floor(this._originalFrameWidth$2 * this._widthRescaleValue$2 * (1 === this.get_mprType() ? c.get_columnSpacing() : c.get_rowSpacing()) + 0.5), this._frameHeight$2 =
				Math.floor(this._originalFrameHeight$2 * this._rescaleValue$2 + 0.5)) : (this._frameWidth$2 = Math.floor(this._originalFrameWidth$2 * this._widthRescaleValue$2 + 0.5), this._frameHeight$2 = Math.floor(this._originalFrameHeight$2), this._rescaleValue$2 = 1);
			b = b.naturalWidth;
			this._mprDicomInfo$2 = new lt.Controls.Medical.DICOMImageInformation;
			Date.get_now().getTime();
			var e = 0,
				f = this._generator$2.get_frames().get_count();
			this._generator$2.get_frames().get_item(0);
			this.set_patientName(this._generator$2.get_patientName());
			this.set_seriesNumber(this._generator$2.get_seriesNumber());
			for(e = 0; e < b; e++) c = new lt.Controls.Medical.Frame(this), this._copyFrameInformation$2(c, this._generator$2.get_frames().get_item(0)), c.set_rowSpacing(1), c.set_columnSpacing(1), null == this._mprRenderer && (this._mprRenderer = new lt.Controls.Medical.DICOMImageInformationRenderer(c.get_information())), e < f && (d = this._generator$2.get_frames().get_item(e), this._mprDicomInfo$2.get_maxValue() - this._mprDicomInfo$2.get_minValue() < d.get_information().get_maxValue() -
					d.get_information().get_minValue() && (this._mprDicomInfo$2.set_minValue(c.get_information().get_minValue()), this._mprDicomInfo$2.set_maxValue(c.get_information().get_maxValue()), this._mprDicomInfo$2.set_lowBit(c.get_information().get_lowBit()), this._mprDicomInfo$2.set_highBit(c.get_information().get_highBit()), this._mprDicomInfo$2.set_highBit(c.get_information().get_highBit()), this._mprDicomInfo$2.set_bitsPerPixel(c.get_information().get_bitsPerPixel()), this._mprDicomInfo$2.set_signed(c.get_information().get_signed()))),
				c.set_imageOrientation(a.orientation), c.set_width(this._frameWidth$2), c.set_height(this._frameHeight$2), c._updateWidthCenterValue(this._mprRenderer.get_windowLevelWidth(), this._mprRenderer.get_windowLevelCenter()), c.set_wlRenderer(this._mprRenderer), c.get_wlData().set_renderer(this._mprRenderer), this.get_frames().add(c);
			Date.get_now().getTime();
			this._updateMPRCanvas$2();
			this.set_currentOffset(this.get_frames().get_count() >> 1)
		},
		_isVertical$2: function() {
			var a = !0;
			switch(this._originalMPRType$2) {
				case -1:
				case 0:
					a =
						1 === this.get_mprType();
					break;
				case 1:
					a = 2 === this.get_mprType()
			}
			return a
		},
		_getRenderCanvas$2: function(a) {
			this.get_frames().get_item(a);
			this._updateMPRCanvas$2();
			a = document.createElement("canvas");
			this._isVertical$2() ? (a.width = this._originalFrameHeight$2, a.height = this._originalFrameWidth$2) : (a.width = this._originalFrameWidth$2, a.height = this._originalFrameHeight$2);
			a.style.position = "absolute";
			a.style.width = a.width + "px";
			a.style.height = a.height + "px";
			a.style.left = "0px";
			a.style.top = "0px";
			return a
		},
		_MPRReverse$2: !1,
		_MPRFlip$2: !1,
		_mprRenderer: null,
		_generateMPRFrame: function(a, b) {
			var c = this._getRenderCanvas$2(b),
				d = c.getContext("2d"),
				e = null;
			this._generator$2.get_frames().get_item(0);
			Date.get_now().getTime();
			var f = 0,
				g = this.get_frames().get_item(b),
				h = this._mprImage.getContext("2d"),
				i = document.createElement("canvas");
			i.width = this._originalFrameWidth$2;
			i.height = 1;
			for(var j = i.getContext("2d"), k = null, l = lt.Controls.Medical.Tools.createCanvas(this._originalFrameWidth$2, this._originalFrameHeight$2), m = l.getContext("2d"),
					f = 0; f < this._originalFrameHeight$2; f++)
				if(e = this._generator$2.get_frames().get_item(f), null != e.lowResImage ? k = e.lowResImage._image : null != e.thumbnailImage && (k = e.thumbnailImage._image), null != k)
					if(!e.get_windowWidth() && null == e.get_wlRenderer() && (e.get_information().set_canvas(l), e.lowResImage.set_backCanvas(l), m.drawImage(e.lowResImage._image, 0, 0), e._getWLRenderer(), e.get_information().set_canvas(null), e.lowResImage.set_backCanvas(null)), !e._autoScaleValuesRetreived) 8 === e.get_bitPerpixel() && (e.get_information().set_maxValue(255),
						e.get_information().set_minValue(0), e.get_information().set_autoScaleSlope(1), e.get_information().set_autoScaleIntercept(0), e._autoScaleValuesRetreived = !0), j.drawImage(k, 0, 0), e._getAutoScaleValue(i);
			lt.Controls.Medical.Tools._disposeCanvas(l);
			if(j = this._isVertical$2()) {
				for(f = 0; f < this._originalFrameHeight$2; f++) e = this._generator$2.get_frames().get_item(f), null != e.lowResImage ? k = e.lowResImage._image : null != e.thumbnailImage && (k = e.thumbnailImage._image), d.drawImage(k, a, 0, 1, k.naturalHeight, f, 0, 1, k.naturalHeight);
				this._mprRenderer._renderMPR(c, this._generator$2.get_frames(), this._originalFrameHeight$2, j);
				g._updateWidthCenterValue(this._mprRenderer.get_windowLevelWidth(), this._mprRenderer.get_windowLevelCenter());
				this.get_imageViewer().get_items().get_item(0)._updateTag(0);
				h.save();
				h.translate(c.height, 0);
				h.rotate(Math.PI / 2);
				h.translate(0, c.height);
				h.scale(1, -1);
				this._MPRFlip$2 && (h.translate(this._mprImage.height, 0), h.scale(-1, 1));
				this._MPRReverse$2 && (h.translate(0, c.height), h.scale(1, -1));
				h.drawImage(c, 0,
					0, this._mprImage.height, this._mprImage.width);
				h.restore()
			} else {
				for(f = l = 0; f < this._generator$2.get_frames().get_count(); f++)
					if(e = this._generator$2.get_frames().get_item(f), null != e.lowResImage ? k = e.lowResImage._image : null != e.thumbnailImage && (k = e.thumbnailImage._image), null != k) l = k.naturalWidth, d.drawImage(k, 0, a, l, 1, 0, f, l, 1);
				this._mprRenderer._renderMPR(c, this._generator$2.get_frames(), l, j);
				g._updateWidthCenterValue(this._mprRenderer.get_windowLevelWidth(), this._mprRenderer.get_windowLevelCenter());
				this.get_imageViewer().get_items().get_item(0)._updateTag(0);
				this._MPRReverse$2 && (h.translate(this._mprImage.width, 0), h.scale(-1, 1));
				h.drawImage(c, 0, 0, this._mprImage.width, this._mprImage.height)
			}
			lt.Controls.Medical.Tools._disposeCanvas(i);
			lt.Controls.Medical.Tools._disposeCanvas(c);
			Date.get_now().getTime()
		}
	};
	Object.defineProperty(lt.Controls.Medical.MPRCell.prototype, "generator", {
		get: lt.Controls.Medical.MPRCell.prototype.get_generator,
		set: lt.Controls.Medical.MPRCell.prototype.set_generator,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.ScrollChangedEventArgs =
		function(a, b) {
			lt.Controls.Medical.ScrollChangedEventArgs.initializeBase(this);
			this._previousScrollOffset$1 = a;
			this._scrollOffset$1 = b
		};
	lt.Controls.Medical.ScrollChangedEventArgs.prototype = {
		_previousScrollOffset$1: 0,
		_scrollOffset$1: 0,
		get_scrollOffset: function() {
			return this._scrollOffset$1
		},
		get_previousScrollOffset: function() {
			return this._previousScrollOffset$1
		}
	};
	Object.defineProperty(lt.Controls.Medical.ScrollChangedEventArgs.prototype, "scrollOffset", {
		get: lt.Controls.Medical.ScrollChangedEventArgs.prototype.get_scrollOffset,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.ScrollChangedEventArgs.prototype, "previousScrollOffset", {
		get: lt.Controls.Medical.ScrollChangedEventArgs.prototype.get_previousScrollOffset,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.TickBox = function(a) {
		this._div = document.createElement("div");
		this._cell = a;
		this._cell.get_div().appendChild(this._div);
		this._tickBoxClicked = ss.Delegate.create(this, this._tickBox_Clicked);
		lt.LTHelper.supportsTouch && !lt.LTHelper.msPointerEnabled ?
			this._div.addEventListener("touchstart", this._tickBoxClicked, !1) : lt.LTHelper.msPointerEnabled ? this._div.addEventListener(lt.Controls.Medical.Tools.pointerdown, this._tickBoxClicked, !1) : this._div.addEventListener("mousedown", this._tickBoxClicked, !1)
	};
	lt.Controls.Medical.TickBox.prototype = {
		_div: null,
		_checked: !1,
		_size: 24,
		_position: null,
		_cell: null,
		_tickBoxClicked: null,
		get_parent: function() {
			return this._cell
		},
		add_tickBoxClicked: function(a) {
			this.__tickBoxClicked = ss.Delegate.combine(this.__tickBoxClicked,
				a)
		},
		remove_tickBoxClicked: function(a) {
			this.__tickBoxClicked = ss.Delegate.remove(this.__tickBoxClicked, a)
		},
		__tickBoxClicked_handler_get: function() {
			null == this.__tickBoxClicked_handler && (this.__tickBoxClicked_handler = ss.EventHandler.create(this, this.add_tickBoxClicked, this.remove_tickBoxClicked));
			return this.__tickBoxClicked_handler
		},
		__tickBoxClicked: null,
		__tickBoxClicked_handler: null,
		_tickBox_Clicked: function() {
			this.set_checked(!this.get_checked());
			null != this.__tickBoxClicked && this.__tickBoxClicked(this,
				lt.LeadEventArgs.Empty)
		},
		get_div: function() {
			return this._div
		},
		get_checked: function() {
			return this._checked
		},
		set_checked: function(a) {
			this._checked = a;
			this._div.style.background = this._checked ? "#dfdfdf" : "rgba(0, 0, 0, 0)";
			return a
		},
		get__position: function() {
			return this._position
		},
		set__position: function(a) {
			this._position = a;
			this.onSizeChanged();
			return a
		},
		onSizeChanged: function() {
			if(null != this._div.parentNode) {
				var a = this._div.parentNode.clientWidth - 2,
					b = this._div.parentNode.clientHeight - 2,
					c = Math.max(2, parseInt(this._position.get_x() *
						a)),
					d = Math.max(2, parseInt(this._position.get_y() * b));
				c + this._size > a && (c = a - this._size);
				d + this._size > b && (d = b - this._size);
				b = a = this._size;
				this._div.style.left = c + "px";
				this._div.style.top = d + "px";
				this._div.style.width = a + "px";
				this._div.style.height = b + "px";
				this._div.style.position = "absolute";
				this._div.style.zIndex = 5E3;
				this._div.style.border = "2px solid red"
			}
		}
	};
	Object.defineProperty(lt.Controls.Medical.TickBox.prototype, "parent", {
		get: lt.Controls.Medical.TickBox.prototype.get_parent,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.TickBox.prototype, "tickBoxClicked", {
		get: lt.Controls.Medical.TickBox.prototype.__tickBoxClicked_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.TickBox.prototype, "div", {
		get: lt.Controls.Medical.TickBox.prototype.get_div,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.TickBox.prototype, "checked", {
		get: lt.Controls.Medical.TickBox.prototype.get_checked,
		set: lt.Controls.Medical.TickBox.prototype.set_checked,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.Cell = function(a, b, c, d) {
		this._mprType$1 = -1;
		this._Arrangement$1 = 0;
		this._scrollType$1 = 1;
		lt.Controls.Medical.Cell.initializeBase(this);
		var e = a.get_divId();
		null != a && this.set_parent(a.layout);
		this._gridLayout$1 = new lt.Controls.Medical.CellGridLayout(this, c, d);
		this._commandDictionary$1 = {};
		this._progress$1 = new lt.Controls.Medical.ProgressLoading(this);
		this._derivatives$1 = new lt.LeadCollection;
		this._selectedItems$1 = new lt.LeadCollection;
		this._selectedItems$1.add_collectionChanged(ss.Delegate.create(this,
			this._selectedItems_CollectionChanged$1));
		this._firstData$1 = !1;
		this._tickBoxes$1 = [];
		this._previewLoader = new lt.Controls.Medical._imagesLoader(6);
		this._tagVisiblity$1 = !0;
		this._position = this._columnsPosition = this._rowPosition = -1;
		this._lineProfileObject$1 = new lt.Controls.Medical.LineProfileObject;
		this._medicalViewer$1 = a;
		this._initialize$1(e, b, c, d);
		a = this.get_div();
		this._subCellClickedFunction$1 = ss.Delegate.create(this, this._subCell_Clicked$1);
		this._subCellMouseUpFunction$1 = ss.Delegate.create(this, this._subCell_MouseUp$1);
		this._subCellKeyDownFunction$1 = ss.Delegate.create(this, this._subCell_KeyDown$1);
		this._doubleClickFunction$1 = ss.Delegate.create(this, this._subCell_DoubleClicked$1);
		lt.LTHelper.supportsTouch && !lt.LTHelper.msPointerEnabled && a.addEventListener("touchstart", this._subCellClickedFunction$1, !1);
		lt.LTHelper.msPointerEnabled ? a.addEventListener(lt.Controls.Medical.Tools.pointerdown, this._subCellClickedFunction$1, !1) : a.addEventListener("mousedown", this._subCellClickedFunction$1, !1);
		lt.LTHelper.supportsMouse &&
			a.addEventListener("dblclick", this._doubleClickFunction$1, !1);
		lt.LTHelper.msPointerEnabled ? a.addEventListener(lt.Controls.Medical.Tools.pointerup, this._subCellMouseUpFunction$1, !1) : a.addEventListener("mouseup", this._subCellMouseUpFunction$1, !1);
		a = new lt.Controls.Medical.TickBox(this);
		a.set__position(lt.LeadPointD.create(1, 1));
		this._tickBoxes$1.add(a)
	};
	lt.Controls.Medical.Cell.prototype = {
		_commandDictionary$1: null,
		_progress$1: null,
		_gridLayout$1: null,
		_seriesInstanceUID$1: null,
		_patientName$1: null,
		_frameOfReferenceUID$1: null,
		_seriesNumber$1: 0,
		_currentActiveCommand$1: null,
		_selectedBorderColor$1: "#bfbf00",
		_unselectedBorderColor$1: "#ffffff",
		_selectedSubCellBorderColor$1: "#7f7f00",
		_highlightedSubCellBorderColor$1: "#ffff00",
		_beginUpdate$1: !1,
		_beginUpdateCounter$1: 0,
		add_outOfBounds: function(a) {
			this.__outOfBounds$1 = ss.Delegate.combine(this.__outOfBounds$1, a)
		},
		remove_outOfBounds: function(a) {
			this.__outOfBounds$1 = ss.Delegate.remove(this.__outOfBounds$1, a)
		},
		__outOfBounds$1_handler_get: function() {
			null == this.__outOfBounds$1_handler &&
				(this.__outOfBounds$1_handler = ss.EventHandler.create(this, this.add_outOfBounds, this.remove_outOfBounds));
			return this.__outOfBounds$1_handler
		},
		__outOfBounds$1: null,
		__outOfBounds$1_handler: null,
		add_currentOffsetChanged: function(a) {
			this.__currentOffsetChanged$1 = ss.Delegate.combine(this.__currentOffsetChanged$1, a)
		},
		remove_currentOffsetChanged: function(a) {
			this.__currentOffsetChanged$1 = ss.Delegate.remove(this.__currentOffsetChanged$1, a)
		},
		__currentOffsetChanged$1_handler_get: function() {
			null == this.__currentOffsetChanged$1_handler &&
				(this.__currentOffsetChanged$1_handler = ss.EventHandler.create(this, this.add_currentOffsetChanged, this.remove_currentOffsetChanged));
			return this.__currentOffsetChanged$1_handler
		},
		__currentOffsetChanged$1: null,
		__currentOffsetChanged$1_handler: null,
		add_cellClicked: function(a) {
			this.__cellClicked$1 = ss.Delegate.combine(this.__cellClicked$1, a)
		},
		remove_cellClicked: function(a) {
			this.__cellClicked$1 = ss.Delegate.remove(this.__cellClicked$1, a)
		},
		__cellClicked$1_handler_get: function() {
			null == this.__cellClicked$1_handler &&
				(this.__cellClicked$1_handler = ss.EventHandler.create(this, this.add_cellClicked, this.remove_cellClicked));
			return this.__cellClicked$1_handler
		},
		__cellClicked$1: null,
		__cellClicked$1_handler: null,
		add_firstFrameReady: function(a) {
			this.__firstFrameReady$1 = ss.Delegate.combine(this.__firstFrameReady$1, a)
		},
		remove_firstFrameReady: function(a) {
			this.__firstFrameReady$1 = ss.Delegate.remove(this.__firstFrameReady$1, a)
		},
		__firstFrameReady$1_handler_get: function() {
			null == this.__firstFrameReady$1_handler && (this.__firstFrameReady$1_handler =
				ss.EventHandler.create(this, this.add_firstFrameReady, this.remove_firstFrameReady));
			return this.__firstFrameReady$1_handler
		},
		__firstFrameReady$1: null,
		__firstFrameReady$1_handler: null,
		add_imageURLChanged: function(a) {
			this.__imageURLChanged$1 = ss.Delegate.combine(this.__imageURLChanged$1, a)
		},
		remove_imageURLChanged: function(a) {
			this.__imageURLChanged$1 = ss.Delegate.remove(this.__imageURLChanged$1, a)
		},
		__imageURLChanged$1_handler_get: function() {
			null == this.__imageURLChanged$1_handler && (this.__imageURLChanged$1_handler =
				ss.EventHandler.create(this, this.add_imageURLChanged, this.remove_imageURLChanged));
			return this.__imageURLChanged$1_handler
		},
		__imageURLChanged$1: null,
		__imageURLChanged$1_handler: null,
		add_postRender: function(a) {
			this.__postRender$1 = ss.Delegate.combine(this.__postRender$1, a)
		},
		remove_postRender: function(a) {
			this.__postRender$1 = ss.Delegate.remove(this.__postRender$1, a)
		},
		__postRender$1_handler_get: function() {
			null == this.__postRender$1_handler && (this.__postRender$1_handler = ss.EventHandler.create(this, this.add_postRender,
				this.remove_postRender));
			return this.__postRender$1_handler
		},
		__postRender$1: null,
		__postRender$1_handler: null,
		add_sizeChanged: function(a) {
			this.__sizeChanged$1 = ss.Delegate.combine(this.__sizeChanged$1, a)
		},
		remove_sizeChanged: function(a) {
			this.__sizeChanged$1 = ss.Delegate.remove(this.__sizeChanged$1, a)
		},
		__sizeChanged$1_handler_get: function() {
			null == this.__sizeChanged$1_handler && (this.__sizeChanged$1_handler = ss.EventHandler.create(this, this.add_sizeChanged, this.remove_sizeChanged));
			return this.__sizeChanged$1_handler
		},
		__sizeChanged$1: null,
		__sizeChanged$1_handler: null,
		add_scrollChanged: function(a) {
			this.__scrollChanged$1 = ss.Delegate.combine(this.__scrollChanged$1, a)
		},
		remove_scrollChanged: function(a) {
			this.__scrollChanged$1 = ss.Delegate.remove(this.__scrollChanged$1, a)
		},
		__scrollChanged$1_handler_get: function() {
			null == this.__scrollChanged$1_handler && (this.__scrollChanged$1_handler = ss.EventHandler.create(this, this.add_scrollChanged, this.remove_scrollChanged));
			return this.__scrollChanged$1_handler
		},
		__scrollChanged$1: null,
		__scrollChanged$1_handler: null,
		add_progressCompleted: function(a) {
			this.__progressCompleted$1 = ss.Delegate.combine(this.__progressCompleted$1, a)
		},
		remove_progressCompleted: function(a) {
			this.__progressCompleted$1 = ss.Delegate.remove(this.__progressCompleted$1, a)
		},
		__progressCompleted$1_handler_get: function() {
			null == this.__progressCompleted$1_handler && (this.__progressCompleted$1_handler = ss.EventHandler.create(this, this.add_progressCompleted, this.remove_progressCompleted));
			return this.__progressCompleted$1_handler
		},
		__progressCompleted$1: null,
		__progressCompleted$1_handler: null,
		add_imageProcessingReady: function(a) {
			this.__imageProcessingReady$1 = ss.Delegate.combine(this.__imageProcessingReady$1, a)
		},
		remove_imageProcessingReady: function(a) {
			this.__imageProcessingReady$1 = ss.Delegate.remove(this.__imageProcessingReady$1, a)
		},
		__imageProcessingReady$1_handler_get: function() {
			null == this.__imageProcessingReady$1_handler && (this.__imageProcessingReady$1_handler = ss.EventHandler.create(this, this.add_imageProcessingReady, this.remove_imageProcessingReady));
			return this.__imageProcessingReady$1_handler
		},
		__imageProcessingReady$1: null,
		__imageProcessingReady$1_handler: null,
		add_imageDownloaded: function(a) {
			this.__imageDownloaded$1 = ss.Delegate.combine(this.__imageDownloaded$1, a)
		},
		remove_imageDownloaded: function(a) {
			this.__imageDownloaded$1 = ss.Delegate.remove(this.__imageDownloaded$1, a)
		},
		__imageDownloaded$1_handler_get: function() {
			null == this.__imageDownloaded$1_handler && (this.__imageDownloaded$1_handler = ss.EventHandler.create(this, this.add_imageDownloaded, this.remove_imageDownloaded));
			return this.__imageDownloaded$1_handler
		},
		__imageDownloaded$1: null,
		__imageDownloaded$1_handler: null,
		_derivatives$1: null,
		_referenceLines$1: null,
		_medicalViewer$1: null,
		_showFrameBorder$1: !0,
		_currentOffset$1: 0,
		_frames$1: null,
		_preview$1: null,
		_overlays$1: null,
		_parentDivID$1: null,
		_linked$1: !0,
		_automation$1: null,
		_automationManager$1: null,
		_selectedItems$1: null,
		_suspednedCalculation$1: !1,
		_tagVisiblity$1: !1,
		_useBackCanvas$1: !1,
		_cinePlayer$1: null,
		_tickBoxes$1: null,
		_studyInstanceUID$1: null,
		get_studyInstanceUID: function() {
			return this._studyInstanceUID$1
		},
		set_studyInstanceUID: function(a) {
			return this._studyInstanceUID$1 = a
		},
		get_tickBoxes: function() {
			return this._tickBoxes$1
		},
		_fullDownload$1: !0,
		get_fullDownload: function() {
			return this._fullDownload$1
		},
		set_fullDownload: function(a) {
			if(this._fullDownload$1 !== a) return this._fullDownload$1 = a, this.get_progress().set_visible(this._fullDownload$1), this._fullDownload$1 && this._rearrangeRequestedFrame$1(), a
		},
		_marginFramesCount$1: 2,
		get_marginFramesCount: function() {
			return this._marginFramesCount$1
		},
		set_marginFramesCount: function(a) {
			this._marginFramesCount$1 =
				parseInt(a.toString());
			return a
		},
		_sortingOperationsSequence$1: null,
		get_sortingOperationsSequence: function() {
			return this._sortingOperationsSequence$1
		},
		set_sortingOperationsSequence: function(a) {
			this._sortingOperationsSequence$1 = a;
			this._sort$1(this._sortingOperationsSequence$1);
			return a
		},
		_sort$1: function(a) {
			for(var b = [], c = 0, d = this._frames$1.get_count(), e, c = 0; c < d; c++) e = this._frames$1.get_item(c), b.add(new lt.Controls.Medical._dicomDataSetItem(new lt.Controls.Medical._dicomDataSetJson(e.get_JSON()), e));
			a = lt.Controls.Medical._sortDicom.sort(b, a);
			this._frames$1.remove_collectionChanged(ss.Delegate.create(this, this._frames_CollectionChanged$1));
			this._frames$1.clear();
			for(c = 0; c < d; c++) this._frames$1.add(a[c].get_userData());
			this._frames$1.add_collectionChanged(ss.Delegate.create(this, this._frames_CollectionChanged$1));
			this._scroll$1(0)
		},
		get_scrollType: function() {
			return this._scrollType$1
		},
		set_scrollType: function(a) {
			return this._scrollType$1 = a
		},
		get_cinePlayer: function() {
			return this._cinePlayer$1
		},
		set_cinePlayer: function(a) {
			return this._cinePlayer$1 =
				a
		},
		_lineProfileObject$1: null,
		get_lineProfile: function() {
			return this._lineProfileObject$1
		},
		set_lineProfile: function(a) {
			return this._lineProfileObject$1 = a
		},
		get_mprType: function() {
			if(this._frames$1.get_count()) {
				var a = this._frames$1.get_item(0);
				if(null != a.get__orientationOverlay()) return a.get__orientationOverlay().mprType
			}
			return this._mprType$1
		},
		set_mprType: function(a) {
			void 0 != a && (this._mprType$1 = a);
			return a
		},
		get_derivatives: function() {
			return this._derivatives$1
		},
		beginUpdate: function() {
			this._beginUpdate$1 = !0;
			this._beginUpdateCounter$1++
		},
		_canUpdate: function() {
			return !this._beginUpdate$1
		},
		endUpdate: function() {
			this._beginUpdateCounter$1--;
			this._beginUpdateCounter$1 || (this._beginUpdate$1 = !1, this.onSizeChanged())
		},
		get_selectedItems: function() {
			return this._selectedItems$1
		},
		set_selectedItems: function(a) {
			return this._selectedItems$1 = a
		},
		get_selectedItem: function() {
			return this._selectedItems$1.get_item(0)
		},
		set_selectedItem: function(a) {
			null == this._selectedItems$1 && (this._selectedItems$1 = new lt.LeadCollection,
				this._selectedItems$1.add(a));
			this._selectedItems$1.get_count() && this._selectedItems$1.clear();
			this._selectedItems$1.add(a);
			return a
		},
		get_automationManager: function() {
			return this._automationManager$1
		},
		get_automation: function() {
			return this._automation$1
		},
		get_selectedBorderColor: function() {
			return this._selectedBorderColor$1
		},
		set_selectedBorderColor: function(a) {
			this._selectedBorderColor$1 = a;
			this._canUpdate() && this.invalidate();
			return a
		},
		get_unselectedBorderColor: function() {
			return this._unselectedBorderColor$1
		},
		set_unselectedBorderColor: function(a) {
			this._unselectedBorderColor$1 !== a && (this._unselectedBorderColor$1 = a, this._canUpdate() && this.invalidate());
			return a
		},
		get_selectedSubCellBorderColor: function() {
			return this._selectedSubCellBorderColor$1
		},
		set_selectedSubCellBorderColor: function(a) {
			this._selectedSubCellBorderColor$1 !== a && (this._selectedSubCellBorderColor$1 = a, this._canUpdate() && this.invalidate());
			return a
		},
		get_highlightedSubCellBorderColor: function() {
			return this._highlightedSubCellBorderColor$1
		},
		set_highlightedSubCellBorderColor: function(a) {
			this._highlightedSubCellBorderColor$1 !==
				a && (this._highlightedSubCellBorderColor$1 = a, this._canUpdate() && this.invalidate());
			return a
		},
		_subCellsEnumeration$1: function() {
			return !1
		},
		get_useBackCanvas: function() {
			return this._useBackCanvas$1
		},
		set_useBackCanvas: function(a) {
			this._useBackCanvas$1 = a;
			this._enumerateSubCells$1(this, ss.Delegate.create(this, this._subCellsEnumeration$1));
			return a
		},
		get__activeFrameIndex: function() {
			var a = this._imageViewer$1.get_items().indexOf(this.get_selectedItem());
			0 > a && (a = 0);
			return this.get_currentOffset() + a
		},
		get_overlayTextVisible: function() {
			return this._tagVisiblity$1
		},
		set_overlayTextVisible: function(a) {
			this._tagVisiblity$1 = a;
			for(var b, c = 0, d = this._imageViewer$1.get_items().get_count(); c < d; c++) b = this._imageViewer$1.get_items().get_item(c), b.get_overlayCanvas().style.visibility = this._tagVisiblity$1 ? "visible" : "hidden";
			return a
		},
		suspendCalculation: function() {
			this._suspednedCalculation$1 = !0
		},
		resumeCalcuation: function() {
			this._suspednedCalculation$1 = !1;
			this._medicalViewer$1._recalculate()
		},
		_windowLevelAction$1: null,
		setCommand: function(a, b) {
			Type.canCast(b, lt.Controls.Medical.WindowLevelAction) &&
				(this._windowLevelAction$1 = b);
			b.set_viewer(this._imageViewer$1);
			b.set_parent(this);
			var c = b.init();
			this._commandDictionary$1[a] = new lt.Controls.Medical._actionInfo(b, c);
			null != c && (c.SubCellAttached = this)
		},
		stopCommand: function(a) {
			a = this._commandDictionary$1[a];
			a.action.set_isStarted(!1);
			Type.canCast(a.actionObject, lt.Controls.ImageViewerInteractiveMode) && a.actionObject.set_isEnabled(!1)
		},
		getCommandInteractiveMode: function(a) {
			return this._commandDictionary$1[a].actionObject
		},
		getCommand: function(a) {
			return this._commandDictionary$1[a].action
		},
		runCommand: function(a) {
			var b = this._commandDictionary$1[a];
			this._currentActiveCommand$1 = b;
			b.action.set_isStarted(!0);
			this._commandDictionary$1[a].action.start(this._commandDictionary$1[a].actionObject)
		},
		get_seriesNumber: function() {
			return this._seriesNumber$1
		},
		set_seriesNumber: function(a) {
			this._seriesNumber$1 = a;
			this._medicalViewer$1._addSeriesToMenu(this);
			return a
		},
		get_patientName: function() {
			return this._patientName$1
		},
		set_patientName: function(a) {
			this._patientName$1 = a;
			this._medicalViewer$1._addSeriesToMenu(this);
			return a
		},
		get_seriesInstanceUID: function() {
			return this._seriesInstanceUID$1
		},
		set_seriesInstanceUID: function(a) {
			this._seriesInstanceUID$1 = a;
			this._medicalViewer$1._addSeriesToMenu(this);
			return a
		},
		get_frameOfReferenceUID: function() {
			return this._frameOfReferenceUID$1
		},
		set_frameOfReferenceUID: function(a) {
			this._frameOfReferenceUID$1 = a;
			this._medicalViewer$1._addSeriesToDictionary(this);
			return a
		},
		_firstData$1: !1,
		_fireEvent: function(a, b, c) {
			switch(b) {
				case 5:
					null != this.__firstFrameReady$1 && !this._firstData$1 &&
						(this._firstData$1 = !0, this.__firstFrameReady$1(this, new lt.Controls.Medical.CellEventArgs(a)));
					break;
				case 0:
					null != this.__imageURLChanged$1 && this.__imageURLChanged$1(this, new lt.Controls.Medical.ImageURLChangedEventArgs(a));
					break;
				case 1:
					null != this.__cellClicked$1 && this.__cellClicked$1(this, c);
					break;
				case 2:
					null != this.__progressCompleted$1 && this.__progressCompleted$1(this, lt.LeadEventArgs.Empty);
					this._medicalViewer$1._recalculate();
					break;
				case 3:
					null != this.__imageProcessingReady$1 && this.__imageProcessingReady$1(this,
						c);
					break;
				case 4:
					null != this.__imageDownloaded$1 && this.__imageDownloaded$1(this, new lt.Controls.Medical.CellEventArgs(a))
			}
		},
		get__cellReferenceLine: function() {
			return this._referenceLines$1
		},
		_getActiveSubCellIndex: function() {
			return this.get_currentOffset() + this._imageViewer$1.get_items().indexOf(this.get_selectedItem())
		},
		get_linked: function() {
			return this._linked$1
		},
		set_linked: function(a) {
			return this._linked$1 = a
		},
		_calculateOffset$1: function(a) {
			return a.get_scrollOffset()
		},
		_getScaleFactor$1: function(a) {
			return a.get_transform().get_m11()
		},
		_calculateZoom$1: function(a, b) {
			var c = 0;
			switch(b) {
				case lt.Controls.ControlSizeMode.fit:
				case lt.Controls.ControlSizeMode.fitAlways:
				case lt.Controls.ControlSizeMode.fitWidth:
				case lt.Controls.ControlSizeMode.fitHeight:
					c = this._getScaleFactor$1(a);
					break;
				case lt.Controls.ControlSizeMode.actualSize:
					c = this._getScaleFactor$1(a)
			}
			return c
		},
		_isPresentationInformationReady: function() {
			return !0
		},
		_enumerateSubCellsImages$1: function(a, b, c) {
			if(null != a)
				for(var d = 0, b = Math.min(b, a.get_imageViewer().get_items().get_count()),
						e, d = 0; d < b; d++) e = a.get_imageViewer().get_items().get_item(d), c(e, d)
		},
		_enumerateFrames$1: function(a, b) {
			if(!(null == a || null == b)) {
				var c = a.get_frames();
				if(null != c)
					for(var d = 0, e = c.get_count(), d = 0; d < e; d++) b(c.get_item(d), d)
			}
		},
		_enumerateSubCells$1: function(a, b) {
			if(null != a)
				for(var c = 0, d = a.get_imageViewer().get_items().get_count(), e, c = 0; c < d; c++) e = a.get_imageViewer().get_items().get_item(c).get_userData(), b(e, c)
		},
		_findSelectedCell$1: function(a) {
			for(var b = 0, c = a.length; b < c; b++)
				if(a[b].get_selected()) return b;
			return -1
		},
		_synchronizeAllSeries$1: function() {
			for(var a = {}, b = -1, c, d = ss.IEnumerator.getEnumerator(Object.keys(a)); d.moveNext();) c = a[d.current], 1 < c.length && (b = this._findSelectedCell$1(c), -1 !== b ? this._medicalViewer$1.synchronizeSeries(c[b]) : this._medicalViewer$1.synchronizeSeries(c[0]))
		},
		withinVisibleRange: function(a) {
			var b = this.get_currentOffset(),
				c = Math.min(this.get_frames().get_count(), b + this.get_imageViewer().get_items().get_count());
			if(null != this._framesMappingIndex) {
				for(var d = 0, d = b; d < c; d++)
					if(this._framesMappingIndex[d] ===
						a) return !0;
				return !1
			}
			return a >= b && a < c
		},
		_registerMouseScrollInteractiveMode$1: function() {
			var a = new lt.Controls.Medical.StackAction;
			a.set_enableWheel(!0);
			this.setCommand(10001, a);
			a.set_button(lt.Controls.MouseButtons.none);
			this.runCommand(10001)
		},
		_registerPinchInteractiveMode$1: function() {
			if(lt.LTHelper.supportsMultiTouch) {
				var a = new lt.Controls.Medical._pinchAction;
				this.setCommand(1E4, a);
				a.set_button(lt.Controls.MouseButtons.left);
				this.runCommand(1E4)
			}
		},
		_annRenderingEngine$1: null,
		_automation_Draw$1: function(a,
			b) {
			Type.canCast(b.get_object(), lt.Annotations.Core.AnnPolyRulerObject) && (b.get_object().set_measurementUnit(lt.Annotations.Core.AnnUnit.centimeter), this._calibrateUltraSoundRuler$1(b.get_object()));
			b.get_object().set_fixedStateOperations(b.get_object().get_fixedStateOperations() | lt.Annotations.Core.AnnFixedStateOperations.strokeWidth | lt.Annotations.Core.AnnFixedStateOperations.fontSize)
		},
		_initialize$1: function(a, b, c, d) {
			var e = new lt.Controls.ImageViewerCreateOptions(this.get_div()),
				f = new lt.Controls.Medical._imageViewerGridViewLayout(this);
			e.set_viewLayout(f);
			this._imageViewer$1 = new lt.Controls.Medical.AutomationImageViewer(e, b);
			this._imageViewer$1.add_itemChanged(ss.Delegate.create(this, this._imageViewer_ItemChanged$1));
			this._imageViewer$1.set_resizeOnTransform(!1);
			this._imageViewer$1.set_imageHorizontalAlignment(lt.Controls.ControlAlignment.near);
			this._imageViewer$1.set_imageVerticalAlignment(lt.Controls.ControlAlignment.near);
			this._imageViewer$1.add_postRenderItem(ss.Delegate.create(this, this._imageViewer_PostRender$1));
			this._imageViewer$1.add_preRenderItem(ss.Delegate.create(this,
				this._imageViewer_PreRenderItem$1));
			if(null == this._automationManager$1) {
				this._annRenderingEngine$1 = new lt.Annotations.Rendering.AnnHtml5RenderingEngine;
				this._annRenderingEngine$1.add_loadPicture(ss.Delegate.create(this, this._annRenderingEngine_LoadPicture$1));
				this._automationManager$1 = lt.Annotations.Automation.AnnAutomationManager.create(this._annRenderingEngine$1);
				this._automationManager$1.createDefaultObjects();
				this._automationManager$1.findObjectById(lt.Annotations.Core.AnnObject.textObjectId).get_objectTemplate().set_fixedStateOperations(lt.Annotations.Core.AnnFixedStateOperations.fontSize);
				this._automationManager$1.findObjectById(lt.Annotations.Core.AnnObject.polyRulerObjectId).get_objectTemplate().set_measurementUnit(lt.Annotations.Core.AnnUnit.millimeter);
				this._automationManager$1.findObjectById(lt.Annotations.Core.AnnObject.textPointerObjectId).get_objectTemplate().set_font(new lt.Annotations.Core.AnnFont("Arial", 12));
				this._automationManager$1.findObjectById(lt.Annotations.Core.AnnObject.textPointerObjectId).get_objectTemplate().set_font(new lt.Annotations.Core.AnnFont("Arial", 12));
				this._automationManager$1.findObjectById(lt.Annotations.Core.AnnObject.noteObjectId).get_objectTemplate().set_font(new lt.Annotations.Core.AnnFont("Arial", 12));
				this._automationManager$1.findObjectById(lt.Annotations.Core.AnnObject.pointerObjectId).get_objectTemplate().set_rotateGripper(lt.LeadLengthD.create(10));
				e = this._automationManager$1.findObjectById(lt.Annotations.Core.AnnObject.protractorObjectId).get_objectTemplate();
				e.set_measurementUnit(lt.Annotations.Core.AnnUnit.millimeter);
				e.set_showTickMarks(!1);
				e.set_showGauge(!1);
				this._automation$1 = new lt.Annotations.Automation.AnnAutomation(this._automationManager$1, this._imageViewer$1);
				this._automation$1.set_active(!0);
				this._automation$1.add_draw(ss.Delegate.create(this, this._automation_Draw$1));
				this._automation$1.add_edit(ss.Delegate.create(this, this._automation_Edit$1));
				this._automation$1.get_containers().clear();
				this._imageViewer$1.set_scrollMode(lt.Controls.ControlScrollMode.hidden);
				this._referenceLines$1 = new lt.Controls.Medical._seriesReferenceLines;
				this.set_divID(b);
				this._imageViewer$1.get_items().add_collectionChanged(ss.Delegate.create(this, this._items_CollectionChanged$1));
				this._frames$1 = new lt.LeadCollection;
				this._frames$1.add_collectionChanged(ss.Delegate.create(this, this._frames_CollectionChanged$1));
				this._preview$1 = [];
				this._overlays$1 = new lt.LeadCollection;
				this._overlays$1.add_collectionChanged(ss.Delegate.create(this, this._overlays_CollectionChanged$1));
				this._parentDivID$1 = a;
				a = document.getElementById(this._parentDivID$1);
				null != a && a.appendChild(this.get_div());
				if(c && d) {
					a = 0;
					b = c * d;
					this._imageViewer$1.beginUpdate();
					this._imageViewer$1.beginRender();
					for(a = 0; a < b; a++) e = this._setGridNormalized$1(c, d, a), this._addSubCell$1(e.get_left(), e.get_top(), e.get_width(), e.get_height());
					this._imageViewer$1.endUpdate();
					this._imageViewer$1.endRender()
				}
				this._imageViewer$1.beginUpdate();
				for(c = ss.IEnumerator.getEnumerator(this._imageViewer$1.get_items()); c.moveNext();) c.current.onSizeChanged();
				this._imageViewer$1.endUpdate();
				this._registerPinchInteractiveMode$1();
				this._registerMouseScrollInteractiveMode$1();
				this._ipadWorkAround$1()
			}
		},
		_getActiveSubCell$1: function() {
			return null == this._imageViewer$1 || null == this._imageViewer$1.get_items() || null == this._selectedItems$1 ? null : this.get_selectedItem()
		},
		_calibrateUltraSoundRuler$1: function(a) {
			if(Type.canCast(a, lt.Annotations.Core.AnnPolyRulerObject)) {
				var b = this._getActiveSubCell$1();
				if(null != b) {
					var b = b.get_attachedFrame(),
						c = b.get_container(),
						d = a.get_bounds(),
						e = 0,
						f = b.get__ultraSoundCalibrationRegion().length,
						g, h = c.get_size().get_width() / b.get_mrtiInfo().get_fullSize().get_width(),
						i = c.get_size().get_height() / b.get_mrtiInfo().get_fullSize().get_height(),
						j = !1,
						k = b.get_mrtiInfo().get_fullSize().get_width() + 1,
						l = b.get_mrtiInfo().get_fullSize().get_height() + 1;
					c.get_size().clone();
					for(e = 0; e < f; e++) g = b.get__ultraSoundCalibrationRegion()[e], c = lt.LeadRectD.create(g.get_rect().get_left() * h, g.get_rect().get_top() * i, g.get_rect().get_width() * h, g.get_rect().get_height() * i), c.containsRect(d) && (j = !0, g.get_rect().get_width() * g.get_rect().get_height() < k * l && (k = g.get_rect().get_width(), l = g.get_rect().get_height(),
						a.get_calibrationScale() !== g.get_calibrationScaleX() && a.calibrate(lt.LeadLengthD.create(1), lt.Annotations.Core.AnnUnit.centimeter, lt.LeadLengthD.create(g.get_calibrationScaleX()), lt.Annotations.Core.AnnUnit.centimeter)));
					l = k = 0;
					if(!j)
						for(e = 0; e < f; e++) g = b.get__ultraSoundCalibrationRegion()[e], c = lt.LeadRectD.create(g.get_rect().get_left() * h, g.get_rect().get_top() * i, g.get_rect().get_width() * h, g.get_rect().get_height() * i), c.intersect(d), c.get_isEmpty() || (c.get_width() * c.get_height() > k * l && (k = g.get_rect().get_width(),
							l = g.get_rect().get_height()), a.calibrate(lt.LeadLengthD.create(1), lt.Annotations.Core.AnnUnit.centimeter, lt.LeadLengthD.create(c.intersectsWith(d) ? g.get_calibrationScaleX() : 1), lt.Annotations.Core.AnnUnit.centimeter))
				}
			}
		},
		_automation_Edit$1: function(a, b) {
			this._calibrateUltraSoundRuler$1(b.get_object())
		},
		_annRenderingEngine_LoadPicture$1: function() {
			this._automation$1.invalidate(lt.LeadRectD.get_empty())
		},
		_imageViewer_ItemChanged$1: function(a, b) {
			switch(b.get_reason()) {
				case lt.Controls.ImageViewerItemChangedReason.url:
					var c =
						b.get_item();
					break;
				case lt.Controls.ImageViewerItemChangedReason.transform:
					Type.canCast(b.get_item(), lt.Controls.Medical.MRTISubCell) && (c = b.get_item(), c._onTransformChanged())
			}
		},
		_imageViewer_PreRenderItem$1: function(a, b) {
			var c = b.get_item(),
				d = this._imageViewer$1.getItemViewBounds(c, lt.Controls.ImageViewerItemPart.view, !1);
			d.get_isEmpty() || (b.get_context().save(), b.get_context().fillStyle = c.get_backColor(), b.get_context().fillRect(d.get_left(), d.get_top(), d.get_width(), d.get_height()), b.get_context().restore())
		},
		_overlays_CollectionChanged$1: function() {
			for(var a = 0, b = this._imageViewer$1.get_items().get_count(), a = 0; a < b; a++) {
				var c = this._imageViewer$1.get_items().get_item(a);
				c.onSizeChanged();
				c._reRenderOverlay()
			}
		},
		_getRealFrameIndex$1: function(a) {
			a = this._frames$1.indexOf(a);
			if(null == this._framesMappingIndex) return a;
			for(var b = 0, c = this._framesMappingIndex.length, b = 0; b < c; b++)
				if(this._framesMappingIndex[b] === a) return b;
			return -1
		},
		_frames_CollectionChanged$1: function(a, b) {
			if(b.get_action() === lt.NotifyLeadCollectionChangedAction.add) {
				for(var c =
						0, d = b.get_newItems().length, e, f, g; c < d; c++) f = b.get_newItems()[c], g = this._getRealFrameIndex$1(f), e = this._frames$1.indexOf(f), this.withinVisibleRange(e) && (e = this._imageViewer$1.get_items().get_item(g - this._currentOffset$1), f._attach(e));
				null != this._progress$1 && this._progress$1.set_totalFrames(this._frames$1.get_count());
				for(c = c = 0; c < this._imageViewer$1.get_items().get_count(); c++) d = this._imageViewer$1.get_items().get_item(c), d._updateTag(4)
			} else if(b.get_action() === lt.NotifyLeadCollectionChangedAction.remove ||
				b.get_action() === lt.NotifyLeadCollectionChangedAction.reset) {
				c = 0;
				for(d = b.get_newItems().length; c < d; c++) f = b.get_newItems()[c], f._attach(null), f.dispose();
				null != this._progress$1 && this._progress$1.set_totalFrames(this._frames$1.get_count());
				for(c = 0; c < this._imageViewer$1.get_items().get_count(); c++) d = this._imageViewer$1.get_items().get_item(c), d._updateTag(4)
			}
			this._updateCinePlayerData$1()
		},
		_layoutGrid$1: function() {
			for(var a = 0, b = this._imageViewer$1.get_items().get_count(), a = 0; a < b; a++) {
				var c = this._setGridNormalized$1(this._gridLayout$1.get_rows(),
					this._gridLayout$1.get_columns(), a);
				this._imageViewer$1.get_items().get_item(a).set__internalBounds(c)
			}
		},
		_fromLRTB$1: function(a, b, c, d) {
			return lt.LeadRectD.create(a, b, c - a, d - b)
		},
		_createCustomLayout$1: function(a) {
			this._imageViewer$1.beginUpdate();
			var b = [];
			this._gridLayout$1.get_value1() && b.add(this._gridLayout$1.get_value1());
			this._gridLayout$1.get_value2() && b.add(this._gridLayout$1.get_value2());
			this._gridLayout$1.get_value3() && b.add(this._gridLayout$1.get_value3());
			this._gridLayout$1.get_value4() &&
				b.add(this._gridLayout$1.get_value4());
			for(var c = b.length, d = 0, e = 0, f = 0, g; e < c; e++)
				for(var h = b[e], d = 0; d < h; d++) g = 2 === a ? this._fromLRTB$1(d / h, e / c, (d + 1) / h, (e + 1) / c) : this._fromLRTB$1(e / c, d / h, (e + 1) / c, (d + 1) / h), this._imageViewer$1.get_items().get_item(f).set__internalBounds(g), f++;
			this._imageViewer$1.endUpdate()
		},
		_layoutCell: function(a, b) {
			switch(this._Arrangement$1) {
				case 0:
					this._layoutGrid$1();
					break;
				case 2:
				case 3:
					this._createCustomLayout$1(this._Arrangement$1)
			}
			for(var c = 0, d = this._borderThickness$1 + 2, c = 0; c < this._imageViewer$1.get_items().get_count(); c++) {
				var e =
					this._imageViewer$1.get_items().get_item(c);
				b[c] = lt.LeadRectD.create(e.get_bounds().get_left() * a.get_width() + d, e.get_bounds().get_top() * a.get_height() + d, Math.max(1, e.get_bounds().get_width() * a.get_width() - (d << 1)), Math.max(1, e.get_bounds().get_height() * a.get_height() - (d << 1)))
			}
		},
		updateSubCellCount: function(a) {
			var b = this._imageViewer$1.get_items().get_count();
			this._imageViewer$1.beginUpdate();
			this.set_currentOffset(Math.min(Math.max(0, this.get_currentOffset()), Math.max(0, this.get_frames().get_count() -
				a)));
			if(a > b)
				for(; b < a; b++) this._addSubCell$1(0, 0, 0, 0);
			else
				for(; b > a; b--) this._deleteSubCell$1(b - 1);
			if(a) this.get_viewer().onSizeChanged();
			this._imageViewer$1.endUpdate()
		},
		_setGridNormalized$1: function(a, b, c) {
			var d = parseInt(c / b >> 0),
				c = c - d * b,
				e = c / b,
				f = d / a,
				a = (d + 1) / a;
			return lt.LeadRectD.create(e, f, Math.max(0, (c + 1) / b - e), Math.max(0, a - f))
		},
		_divElementW$1: null,
		_dummySubCell$1: null,
		_ipadOnSizeChanged$1: function() {
			this._divElementW$1.style.left = "0px";
			this._divElementW$1.style.top = "0px";
			this._divElementW$1.style.width =
				"0px";
			this._divElementW$1.style.height = "0px" === this._divElementW$1.style.height ? "1px" : "0px";
			this._divElementW$1.style.position = "absolute";
			this._dummySubCell$1.onSizeChanged()
		},
		_ipadWorkAround$1: function() {
			this._divElementW$1 = document.createElement("div");
			this.get_div().appendChild(this._divElementW$1);
			this.get_div().style.zIndex = 2;
			this._divElementW$1.id = this.get_div().id + "_dummy_subCell_Div";
			this._dummySubCell$1 = new lt.Controls.Medical.SubCell(this, "dummySubCell")
		},
		_imageViewer$1: null,
		get_imageViewer: function() {
			return this._imageViewer$1
		},
		set_imageViewer: function(a) {
			return this._imageViewer$1 = a
		},
		_updateViewerIndexes$1: function() {
			for(var a = 0, b = ss.IEnumerator.getEnumerator(this._imageViewer$1.get_items()); b.moveNext();) b.current.get_div().setAttribute("viewerIndex", a++)
		},
		_items_CollectionChanged$1: function(a, b) {
			this._updateViewerIndexes$1();
			if(b.get_action() === lt.NotifyLeadCollectionChangedAction.add) {
				for(var c = 0, d = b.get_newItems().length; c < d; c++) {
					var e = b.get_newItems()[c],
						f = this._imageViewer$1.get_items().indexOf(e),
						g = e.get_div();
					this.get_div().appendChild(g);
					this._onSubCellAdded$1(e);
					this._referenceLines$1.frames.add(new lt.Controls.Medical._frameReferenceLines);
					f = null == this._framesMappingIndex ? this._currentOffset$1 + f : this._framesMappingIndex[this._currentOffset$1 + f];
					f < this._frames$1.get_count() && (f = this._frames$1.get_item(f), null != f && (null != f.get_subCell() && f._attach(null), null != e.get_attachedFrame() && e.get_attachedFrame()._attach(null), f._attach(e)))
				}
				this._imageViewer$1.onSizeChanged()
			} else {
				c = 0;
				for(d = b.get_newItems().length; c < d; c++) e = b.get_newItems()[c],
					null != e.get_attachedFrame() && e.get_attachedFrame()._attach(null)
			}
			this._updateCinePlayerData$1()
		},
		_updateCinePlayerData$1: function() {
			null != this._cinePlayer$1 && (this._cinePlayer$1.set__totalFrames(lt.Controls.Medical.Tools._getMaxAllowed(this)), this._cinePlayer$1.set_currentFrame(this.get_currentOffset()), this._cinePlayer$1.add__frameUpdating(ss.Delegate.create(this, this._cinePlayer_FrameUpdating$1)))
		},
		_cinePlayer_FrameUpdating$1: function(a, b) {
			var c = this._frames$1.get_item(b.get_newFrameIndex());
			b.set_update(!1);
			c.get_isDataReady() && b.set_update(!0)
		},
		_refresh$1: function() {
			this._canUpdate() && this.invalidate()
		},
		get_viewer: function() {
			return this._medicalViewer$1
		},
		get_gridLayout: function() {
			return this._gridLayout$1
		},
		get_progress: function() {
			return this._progress$1
		},
		set_progress: function(a) {
			return this._progress$1 = a
		},
		_windowLevel$1: null,
		_subCellClickedFunction$1: null,
		_subCellMouseUpFunction$1: null,
		_doubleClickFunction$1: null,
		_subCellKeyDownFunction$1: null,
		_cellOffset$1: null,
		_selectedItems_CollectionChanged$1: function(a,
			b) {
			var c;
			switch(b.get_action()) {
				case lt.NotifyLeadCollectionChangedAction.add:
					c = !0;
					break;
				default:
					c = !1
			}
			if(b.get_action() === lt.NotifyLeadCollectionChangedAction.add)
				for(var d = 0, e = b.get_newItems().length; d < e; d++) b.get_newItems()[d].set_selected(c)
		},
		_hitTestItem$1: function(a, b) {
			for(var c, d = null, e = null, f = lt.LeadPointD.create(a, b), g = 0; g < this._imageViewer$1.get_items().get_count(); g++)
				if(d = this._imageViewer$1.get_items().get_item(g), c = this._imageViewer$1.getItemViewBounds(d, lt.Controls.ImageViewerItemPart.view, !1), c.containsPoint(f)) {
					e = d;
					break
				}
			return e
		},
		_deselectOthers$1: function() {
			this.get_parent().get_selectedItems().clear()
		},
		_getPosition$1: function(a) {
			var b = 0,
				c = 0;
			void 0 != a.targetTouches ? (b = a.targetTouches[0].pageX, c = a.targetTouches[0].pageY) : (b = a.clientX, c = a.clientY);
			return lt.LeadPointD.create(b - this._cellOffset$1.get_x(), c - this._cellOffset$1.get_y())
		},
		_touchCount$1: 0,
		_mouseButton$1: 0,
		_firstClickTime$1: 0,
		_doubleTapInterval$1: 400,
		_mousePosX$1: 0,
		_mousePosY$1: 0,
		_hitTestBuffer$1: 50,
		_checkDoubleTouch$1: function(a,
			b) {
			var c = 1;
			void 0 != a.touches ? c = a.touches.length : void 0 != a.targetTouches && (c = a.targetTouches.length);
			if(1 === c)
				if(c = Date.get_now().getTime(), this._touchCount$1++, 1 < this._touchCount$1)
					if(c - this._firstClickTime$1 < this._doubleTapInterval$1 && this._mouseButton$1 === a.button) {
						var d = c = this._touchCount$1 = 0,
							c = Math.abs(this._mousePosX$1 - b.get_x()),
							d = Math.abs(this._mousePosY$1 - b.get_y());
						if(c < this._hitTestBuffer$1 && d < this._hitTestBuffer$1) return this._doubleClicked$1(a), !0
					} else this._touchCount$1 = 1, this._firstClickTime$1 =
						c, this._mouseButton$1 = a.button, this._mousePosX$1 = parseInt(b.get_x()), this._mousePosY$1 = parseInt(b.get_y());
			else this._touchCount$1++, this._firstClickTime$1 = Date.get_now().getTime(), this._mouseButton$1 = a.button, this._mousePosX$1 = parseInt(b.get_x()), this._mousePosY$1 = parseInt(b.get_y());
			return !1
		},
		_subCell_TouchUp$1: function() {},
		_isOverRetakeButton$1: function(a, b) {
			if(null == a) return !1;
			var c = this._imageViewer$1.getItemViewBounds(a, lt.Controls.ImageViewerItemPart.view, !1),
				d = Math.max(20, Math.min(c.get_width(),
					c.get_height()) / 10);
			return lt.LeadRectD.create(c.get_width() - d, c.get_height() - d, d, d).containsPoint(b) ? !0 : !1
		},
		_subCell_MouseUp$1: function(a) {
			if(a.button === lt.Controls.MouseButtons.right) {
				var b = this._getPosition$1(a),
					c = Math.abs(this._mousePosX$1 - b.get_x()),
					b = Math.abs(this._mousePosY$1 - b.get_y());
				2 > c && 2 > b && this._medicalViewer$1._showSeriesDropDown(this, a.offsetX, a.offsetY)
			} else this._medicalViewer$1._hideSeriesDropDown()
		},
		_subCell_KeyDown$1: function(a) {
			40 == a.keyCode && alert("up");
			39 == a.keyCode && alert("up")
		},
		_subCell_Clicked$1: function(a) {
			var b = this._getPosition$1(a),
				c = !1,
				d = this._hitTestItem$1(parseInt(b.get_x()), parseInt(b.get_y()));
			this._medicalViewer$1._hideSeriesDropDown();
			if(null != d && (null != d.get_attachedFrame() && d.get_attachedFrame().get_container().set_isEnabled(!0), (c = this._isOverRetakeButton$1(d, b)) || !this._checkDoubleTouch$1(a, b))) {
				this._medicalViewer$1._selectThisCell(this, a.ctrlKey);
				for(var a = this.get_selectedItem(), e = 0, f = this._imageViewer$1.get_items().get_count(), g, e = 0; e < f; e++) g = this._imageViewer$1.get_items().get_item(e),
					g !== d && null != g.get_attachedFrame() && g.get_attachedFrame().get_container().get_isEnabled() && g.get_attachedFrame().get_container().set_isEnabled(!1);
				e = !0;
				a === d && (e = !1);
				null != d && (null != this.get_selectedItems() && this.get_selectedItems().clear(), this.set_selectedItem(d), a = d.get_attachedFrame(), null != a && (this._automation$1.set_activeContainer(d.get_attachedFrame().get_container()), c && a.set_retakeIndex(a.get_retakeIndex() + 1)));
				c = new lt.Controls.InteractiveEventArgs;
				c.set_mouseButton(lt.Controls.MouseButtons.left);
				c.set_origin(c.set_position(b));
				this._fireEvent(null, 1, c);
				e && this.get_imageViewer().invalidate(lt.LeadRectD.get_empty())
			}
		},
		_subCell_DoubleClicked$1: function(a) {
			a.preventDefault();
			a.stopImmediatePropagation()
		},
		_doubleClicked$1: function(a) {
			var a = this._getPosition$1(a),
				b = this._hitTestItem$1(parseInt(a.get_x()), parseInt(a.get_y()));
			null != b && (b = b.get_attachedFrame(), null != b && (this._automation$1.get_currentDesigner(), b = b.get_container(), a = lt.LeadPointD.create(parseInt(a.get_x()), parseInt(a.get_y())), a =
				b.hitTestPoint(b.get_mapper().pointToContainerCoordinates(a)), (null == a || 1 > a.length) && this._medicalViewer$1.explode(this, !this._medicalViewer$1.get_exploded())))
		},
		get_windowLevel: function() {
			return this._windowLevel$1
		},
		set_windowLevel: function(a) {
			return this._windowLevel$1 = a
		},
		_layoutFrames$1: function() {},
		_deleteSubCell$1: function(a) {
			var b = this._imageViewer$1.get_items().get_item(a);
			null != b.get_attachedFrame() && b.get_attachedFrame()._attach(null);
			this._onSubCellDeleted$1(b, a + this.get_currentOffset());
			try {
				this._imageViewer$1.get_items().remove(b)
			} catch(c) {}
			try {
				b.dispose()
			} catch(d) {}
		},
		_addSubCell$1: function(a, b, c, d) {
			var e = this._imageViewer$1.get_items().get_count(),
				e = new lt.Controls.Medical.MRTISubCell(this, this.get_div().id + "_div_" + e.toString());
			e.set_imageHorizontalAlignment(lt.Controls.ControlAlignment.near);
			e.set_imageVerticalAlignment(lt.Controls.ControlAlignment.near);
			e.set_resizeOnTransform(!1);
			e.get_div().setAttribute("draggable", !0);
			e.get_div().setAttribute("draggable", !0);
			e.set_bounds(lt.LeadRectD.create(a,
				b, c, d));
			this._imageViewer$1.set_enableRequestAnimationFrame(lt.LTHelper.device !== lt.LTDevice.desktop);
			this._imageViewer$1.get_items().insert(this._imageViewer$1.get_items().get_count(), e);
			e.get_overlayCanvas().style.visibility = this._tagVisiblity$1 ? "visible" : "hidden";
			e.onSizeChanged()
		},
		_onSubCellAdded$1: function() {},
		_onSubCellDeleted$1: function() {},
		_drawCrossHairLines$1: !0,
		get_drawCrossHairLines: function() {
			return this._drawCrossHairLines$1
		},
		set_drawCrossHairLines: function(a) {
			return this._drawCrossHairLines$1 =
				a
		},
		_drawVertical$1: function(a, b, c, d, e, f, g) {
			var h = Math.min(a.get_height(), a.get_width()) / 12,
				f = (parseInt(f) >> 0) * b.get_width() / c.get_width() + b.get_left(),
				g = (parseInt(g) >> 0) * b.get_height() / c.get_height() + b.get_top();
			d.save();
			d.beginPath();
			d.strokeStyle = "yellow";
			d.moveTo(f, e);
			d.lineTo(f, g - h / 2);
			d.moveTo(f, g + h / 2);
			d.lineTo(f, a.get_bottom());
			d.stroke();
			d.restore()
		},
		_drawHorizontal$1: function(a, b, c, d, e, f, g) {
			f = (parseInt(f) >> 0) * b.get_width() / c.get_width() + b.get_left();
			g = (parseInt(g) >> 0) * b.get_height() / c.get_height() +
				b.get_top();
			b = Math.min(a.get_height(), a.get_width()) / 12;
			d.save();
			d.beginPath();
			d.strokeStyle = "yellow";
			d.moveTo(e, g);
			d.lineTo(parseInt(f - b / 2) >> 0, g);
			d.moveTo(parseInt(f) + b / 2 >> 0, g);
			d.lineTo(a.get_width(), g);
			d.stroke();
			d.restore()
		},
		_drawCrossHair$1: function(a, b) {
			var c = this._imageViewer$1.getItemViewBounds(a, lt.Controls.ImageViewerItemPart.view, !1),
				d = lt.Controls.Medical.MRTISubCell.getFloatImageRect(this._imageViewer$1, a),
				e = a.get_attachedFrame();
			this._drawVertical$1(c, d, e, b, c.get_left(), this._crossHairPosition$1.get_x(),
				this._crossHairPosition$1.get_y());
			this._drawHorizontal$1(c, d, e, b, c.get_left(), this._crossHairPosition$1.get_x(), this._crossHairPosition$1.get_y())
		},
		_imageViewer_PostRender$1: function(a, b) {
			var c = b.get_item();
			if(null != c) {
				var d = this._imageViewer$1.getItemViewBounds(c, lt.Controls.ImageViewerItemPart.image, !1),
					e = c.get_imageViewer().get_items().indexOf(c),
					f = this._imageViewer$1.getItemViewBounds(c, lt.Controls.ImageViewerItemPart.view, !1),
					g = this._imageViewer$1.getViewBounds(!1, !1),
					h = b.get_context(),
					i = this._imageViewer$1.get_items().get_item(e);
				if(null != i) {
					if(Type.canCast(i.get_parentCell(), lt.Controls.Medical.MPRCell)) {
						h.save();
						var j = i.get_parentCell();
						h.clearRect(0, 0, f.get_width(), f.get_height());
						h.setTransform(1, 0, 0, 1, 0, 0);
						var k = this._imageViewer$1.getItemImageFloatingPointTransform(i);
						h.transform(k.get_m11(), k.get_m12(), k.get_m21(), k.get_m22(), k.get_offsetX(), k.get_offsetY());
						null != j._mprImage && h.drawImage(j._mprImage, 0, 0, j._mprImage.width, j._mprImage.height);
						h.setTransform(1, 0, 0, 1, 0, 0);
						h.restore()
					} else if(Type.canCast(i, lt.Controls.Medical.MRTISubCell)) {
						Date.get_now().getTime();
						h.save();
						h.rect(f.get_x(), f.get_y(), f.get_width() - 1, f.get_height() - 1);
						h.clip();
						h.translate(f.get_x(), f.get_y());
						try {
							i._clearUnnecessaryChunks(), i._paintTiles(h, !1)
						} catch(l) {}
						h.restore();
						lt.Controls.Medical.Tools._forDebug && (h.beginPath(), h.strokeStyle = "blue", h.rect((f.get_right() + f.get_left()) / 2 - 10, (f.get_bottom() + f.get_top()) / 2 - 10, 20, 20), h.stroke());
						Date.get_now().getTime()
					}
					d.get_isEmpty() || this._drawReferenceLine$1(c, h, f, d, e);
					(this._showFrameBorder$1 || -1 !== this.get_selectedItems().indexOf(c)) &&
					this._drawCellBorder$1(c, h, f, parseInt(f.get_left()), parseInt(f.get_top()));
					this._drawCrossHairLines$1 && (Type.canCast(this, lt.Controls.Medical.MPRCell) || this.get_derivatives().get_count()) && this._drawCrossHair$1(c, h, parseInt(f.get_left()), parseInt(f.get_top()));
					(null == i.get_attachedFrame() || i.get_attachedFrame().get_enableDraw()) && null != this._progress$1 && this._progress$1.draw(h, g);
					null != this.__postRender$1 && this.__postRender$1(c, new lt.Controls.ImageViewerRenderEventArgs(h, d))
				}
			}
		},
		_getBorderColor$1: function(a) {
			var b =
				"",
				a = this.get_selectedItems().indexOf(a);
			return b = this.get_selected() ? 1 < this._imageViewer$1.get_items().get_count() ? -1 !== a ? this._highlightedSubCellBorderColor$1 : this._selectedSubCellBorderColor$1 : this._selectedBorderColor$1 : this._unselectedBorderColor$1
		},
		_drawCellBorder$1: function(a, b, c, d, e) {
			a = this._getBorderColor$1(a);
			b.beginPath();
			b.strokeStyle = a;
			b.lineWidth = this._borderThickness$1;
			b.rect(d - (this._borderThickness$1 >> 1), e - (this._borderThickness$1 >> 1), c.get_width() + this._borderThickness$1, c.get_height() +
				this._borderThickness$1);
			b.stroke()
		},
		_borderThickness$1: 2,
		get_borderThickness: function() {
			return this._borderThickness$1
		},
		set_borderThickness: function(a) {
			if(1 === (a & 1)) throw Error("the border thickness value must be an even number (2, 4, 6....etc)");
			return this._borderThickness$1 = a
		},
		_applyReferenceLineTransformation$1: function(a, b) {
			var c = lt.Controls.Medical.ReferenceLine.rotate(b, parseInt(a.get_rotateAngle()), parseInt(a.get_imageSize().get_width()), parseInt(a.get_imageSize().get_height()));
			a.get_flip() &&
				(c = lt.Controls.Medical.ReferenceLine.flip(c, parseInt(a.get_imageSize().get_width()), parseInt(a.get_imageSize().get_height())));
			a.get_reverse() && (c = lt.Controls.Medical.ReferenceLine.reverse(c, parseInt(a.get_imageSize().get_width()), parseInt(a.get_imageSize().get_height())));
			return c
		},
		_createViewLine$1: function(a, b, c, d) {
			return new lt.Controls.Medical.LeadLine(a.point1.get_x() * c + b.get_left(), a.point1.get_y() * d + b.get_top(), a.point2.get_x() * c + b.get_left(), a.point2.get_y() * d + b.get_top())
		},
		_doDrawLine$1: function(a,
			b, c, d, e, f, g, h) {
			if(b.point2.get_x() - b.point1.get_x() || b.point2.get_y() - b.point1.get_y()) a.save(), a.beginPath(), a.lineWidth = 2, a.strokeStyle = h, a.font = "9pt Arial", a.fillStyle = "white", b = this._createViewLine$1(b, e, f, g), lt.Controls.Medical.ReferenceLine.draw(a, d, e, b, c), a.stroke(), a.restore()
		},
		_drawReferenceLine$1: function(a, b, c, d, e) {
			if(this._referenceLines$1.show) {
				var e = this._referenceLines$1.frames[e],
					f = d.get_width() / a.get_imageSize().get_width(),
					g = d.get_height() / a.get_imageSize().get_height(),
					h = this._medicalViewer$1.get_showReferenceLine();
				if(this._medicalViewer$1.get_showFirstAndLastReferenceLine()) {
					if(e.line.text !== e.firstLine.text || !h) {
						var i = this._applyReferenceLineTransformation$1(a, e.firstLine.line);
						this._doDrawLine$1(b, i, e.firstLine.text, c, d, f, g, "#0000e7")
					}
					if(e.line.text !== e.lastLine.text || !h) i = this._applyReferenceLineTransformation$1(a, e.lastLine.line), this._doDrawLine$1(b, i, e.lastLine.text, c, d, f, g, "#0000e7")
				}
				h && (i = this._applyReferenceLineTransformation$1(a, e.line.line), this._doDrawLine$1(b, i, e.line.text, c, d, f, g, "#e7e7e7"))
			}
		},
		_scrollToTop$1: function() {
			$(window).scrollTop(0)
		},
		_getCurrentStackIndex$1: function() {
			return this.get_currentOffset()
		},
		_onViewerSizeChanged$1: function(a) {
			a.get_imageViewer().get_items().indexOf(a);
			a.get_imageViewer().get_foreCanvas();
			this._scrollToTop$1();
			this._getCurrentStackIndex$1()
		},
		get_arrangement: function() {
			return this._Arrangement$1
		},
		set_arrangement: function(a) {
			if(this._Arrangement$1 !== a)
				if(this._Arrangement$1 = a) {
					if(2 === this.get_arrangement() || 3 === this.get_arrangement()) this.get_imageViewer().beginUpdate(),
						this.updateSubCellCount(this._gridLayout$1.get_value1() + this._gridLayout$1.get_value2() + this._gridLayout$1.get_value3() + this._gridLayout$1.get_value4()), this.get_viewer().onSizeChanged(), this.get_imageViewer().endUpdate()
				} else this.updateSubCellCount(this._gridLayout$1.get_rows() * this._gridLayout$1.get_columns()), this.get_viewer().onSizeChanged();
			return a
		},
		get_showFrameBorder: function() {
			return this._showFrameBorder$1
		},
		set_showFrameBorder: function(a) {
			this._showFrameBorder$1 = a;
			this._refresh$1();
			return a
		},
		_crossHairPosition$1: null,
		get__crossHairPosition: function() {
			return this._crossHairPosition$1
		},
		set__crossHairPosition: function(a) {
			return this._crossHairPosition$1 = a
		},
		_allowUpdateCrossHair$1: !0,
		get__allowUpdateCrossHair: function() {
			return this._allowUpdateCrossHair$1
		},
		set__allowUpdateCrossHair: function(a) {
			return this._allowUpdateCrossHair$1 = a
		},
		_updateCrossHair$1: function() {
			if(Type.canCast(this, lt.Controls.Medical.MPRCell)) this.get_generator();
			else if(!this.get_derivatives().get_count()) return;
			null !=
				this._crossHairPosition$1 && lt.Controls.Medical.CrossHairInteractiveMode.scrollCrossHair(this, this._crossHairPosition$1.get_x(), this._crossHairPosition$1.get_y())
		},
		_previewLoader: null,
		get__previewLoader: function() {
			return this._previewLoader
		},
		set__previewLoader: function(a) {
			return this._previewLoader = a
		},
		_rearrangeRequestedFrame$1: function() {
			var a = this._previewLoader;
			if(null != a) {
				a.get_imageElements().clear();
				var b = this._currentOffset$1 - 1,
					c = this._currentOffset$1 + 1;
				if(!(this._currentOffset$1 >= this._frames$1.get_count())) {
					var d =
						this._frames$1.get_item(this._currentOffset$1);
					null == d.lowResImage && (null != d.get_subCell() && d.get_subCell()._clearChunks(), d.set_mrtiInfo(d.get_mrtiInfo()));
					for(; !(c < this._frames$1.get_count() && (d = this._frames$1.get_item(c), c++, null != d.get_subCell() && d.get_subCell()._clearChunks(), null == d.lowResImage && d.set_mrtiInfo(d.get_mrtiInfo())), 0 <= b && (d = this._frames$1.get_item(b), b--, null != d.get_subCell() && d.get_subCell()._clearChunks(), null == d.lowResImage && d.set_mrtiInfo(d.get_mrtiInfo())), 0 > b && c >= this._frames$1.get_count()););
					a.startLoading()
				}
			}
		},
		get_currentOffset: function() {
			return this._currentOffset$1
		},
		set_currentOffset: function(a) {
			var b = Math.min(this._maximumAllowed$1(), Math.max(0, a));
			if(b === a) {
				if(this._currentOffset$1 === b) return;
				var c = this._currentOffset$1;
				this._currentOffset$1 = b;
				this._updateCrossHair$1();
				this._updateOffset$1(c)
			} else this._currentOffset$1 = a, null != this.__outOfBounds$1 && this.__outOfBounds$1(this, lt.LeadEventArgs.Empty);
			null != this.__currentOffsetChanged$1 && this.__currentOffsetChanged$1(this, lt.LeadEventArgs.Empty);
			100 !== this._progress$1.get_progressPercent() && this._rearrangeRequestedFrame$1();
			return a
		},
		_findWindowLevelInteractiveMode$1: function(a) {
			for(var b = 0, c = a.get_imageViewer().get_interactiveModes().get_count(); b < c; b++)
				if(Type.canCast(a.get_imageViewer().get_interactiveModes().get_item(b), lt.Controls.Medical.WindowLevelInteractiveMode)) return a.get_imageViewer().get_interactiveModes().get_item(b);
			return null
		},
		_maximumAllowed$1: function() {
			return Math.max(0, this._frames$1.get_count() - this._imageViewer$1.get_items().get_count())
		},
		_scroll$1: function() {
			for(var a = 0, b, c, d = this._imageViewer$1.get_items().get_count(), a = 0; a < d; a++) b = this._imageViewer$1.get_items().get_item(a), c = b.get_attachedFrame(), null != c && c._attach(null);
			for(a = 0; a < d; a++) b = this._imageViewer$1.get_items().get_item(a), c = null == this._framesMappingIndex ? this._currentOffset$1 + a : this._framesMappingIndex[this._currentOffset$1 + a], c = this._frames$1.get_item(c), null != c && this._updateFrameWithSubCell(c, b)
		},
		_updateOrientation$1: function(a) {
			var b, c, d;
			null != a.get__orientationOverlay() ?
				(b = (a.get_rotateAngle() + a.get__orientationOverlay().projectionRrotateAngle) % 360, c = 1 === (a.get_flipped() ^ a.get__orientationOverlay().projectionIsFlipped), d = 1 === (a.get_reversed() ^ a.get__orientationOverlay().projectionIsReversed)) : (b = a.get_rotateAngle() % 360, c = a.get_flipped(), d = a.get_reversed());
			null != a.get__orientationOverlay() && (a.get__orientationOverlay().set_rotateAngle(b), a.get__orientationOverlay().set_flip(c), a.get__orientationOverlay().set_reverse(d))
		},
		_updateFrameWithSubCell: function(a, b) {
			b.get_imageViewer().beginTransform();
			a._attach(b);
			this._updateOrientation$1(a);
			this._suspednedCalculation$1 || this._medicalViewer$1.get_showReferenceLine() && this._medicalViewer$1._recalculate();
			b.updateOverlay();
			b.invalidate();
			a._updateAnnotationContainerSize();
			this.get_automation().set_activeContainer(a.get_container());
			b.get_imageViewer().endTransform()
		},
		_updateOffset$1: function(a) {
			this._imageViewer$1.get_items().get_count();
			this._scroll$1(a);
			this._medicalViewer$1.get_enableSynchronization() && this._medicalViewer$1.synchronizeSeries(this);
			null != this.__scrollChanged$1 && this.__scrollChanged$1(this, new lt.Controls.Medical.ScrollChangedEventArgs(a, this._currentOffset$1))
		},
		_framesMappingIndex: null,
		get_framesMappingIndex: function() {
			return this._framesMappingIndex
		},
		set_framesMappingIndex: function(a) {
			this._framesMappingIndex = a;
			this._frames$1.get_count() && this._scroll$1(0);
			return a
		},
		get_frames: function() {
			return this._frames$1
		},
		get_overlays: function() {
			return this._overlays$1
		},
		invalidate: function() {
			this._imageViewer$1.invalidate(lt.LeadRectD.get_empty())
		},
		add_dispoing: function(a) {
			this.__dispoing$1 = ss.Delegate.combine(this.__dispoing$1, a)
		},
		remove_dispoing: function(a) {
			this.__dispoing$1 = ss.Delegate.remove(this.__dispoing$1, a)
		},
		__dispoing$1_handler_get: function() {
			null == this.__dispoing$1_handler && (this.__dispoing$1_handler = ss.EventHandler.create(this, this.add_dispoing, this.remove_dispoing));
			return this.__dispoing$1_handler
		},
		__dispoing$1: null,
		__dispoing$1_handler: null,
		dispose: function() {
			null != this.__dispoing$1 && this.__dispoing$1(this, lt.LeadEventArgs.Empty);
			var a = this.get_div();
			null != this._cinePlayer$1 && (this._cinePlayer$1.stop(), this._cinePlayer$1.dispose(), this._cinePlayer$1 = null);
			!lt.LTHelper.supportsMouse && !lt.LTHelper.msPointerEnabled && a.removeEventListener("touchstart", this._subCellClickedFunction$1, !1);
			lt.LTHelper.msPointerEnabled ? a.removeEventListener("MSPointerDown", this._subCellClickedFunction$1, !1) : a.removeEventListener("mousedown", this._subCellClickedFunction$1, !1);
			lt.LTHelper.supportsMouse && a.removeEventListener("dblclick", this._doubleClickFunction$1, !1);
			try {
				-1 !== this._medicalViewer$1.layout.get_items().indexOf(this) && this._medicalViewer$1.layout.get_items().remove(this)
			} catch(b) {}
			this._selectedItems$1.remove_collectionChanged(ss.Delegate.create(this, this._selectedItems_CollectionChanged$1));
			this._automationManager$1 = null;
			null != this._automation$1 && (this._automation$1.detach(), this._automation$1.get_containers().clear(), this._automation$1.remove_draw(ss.Delegate.create(this, this._automation_Draw$1)), this._automation$1.remove_edit(ss.Delegate.create(this,
				this._automation_Edit$1)), this._automation$1 = null);
			this._frames$1.clear();
			a = 0;
			for(a = this._imageViewer$1.get_items().get_count() - 1; 0 <= a; a--) this._imageViewer$1.get_items().get_item(a), this._deleteSubCell$1(a);
			a = document.getElementById(this.get_divID());
			null != a && (a.style.visibility = "hidden");
			this._parentDivID$1 && (a = document.getElementById(this._parentDivID$1), null != a && a.removeChild(this.get_div()), this._parentDivID$1 = "");
			null != this.get_div() && (this.get_div().id = "");
			this._imageViewer$1.get_items().remove_collectionChanged(ss.Delegate.create(this,
				this._items_CollectionChanged$1))
		},
		_diposeItem$1: function(a) {
			delete a
		},
		_getNumberOfViewers: function() {
			return this._imageViewer$1.get_items().get_count()
		},
		_getViewer: function(a) {
			return this._imageViewer$1.get_items().get_item(a)
		},
		_clearImage$1: function() {
			for(var a, b = 0, c = this._imageViewer$1.get_items().get_count(), b = 0; b < c && !(a = this._imageViewer$1.get_items().get_item(b), a = a.get_userData(), null != a && (a = a.get_imageSize(), 0 >= a.get_width() || 0 >= a.get_height())); b++);
		},
		_invertCanvas$1: function(a, b, c) {
			for(var d =
					a.getImageData(0, 0, b, c), e = d.data, b = 4 * b * c, c = 0; c < b; c += 4) e[c] = 255 - e[c], e[c + 1] = 255 - e[c + 1], e[c + 2] = 255 - e[c + 2];
			a.putImageData(d, 0, 0)
		},
		supportWindowLevel: function(a) {
			return null == this._frames$1 || 0 > a || a >= this._frames$1.get_count() ? !1 : this._frames$1.get_item(a)._supportWindowLevel()
		},
		onSizeChanged: function() {
			lt.Controls.Medical.Cell.callBaseMethod(this, "onSizeChanged");
			if(!this._beginUpdate$1) {
				if(null != this._imageViewer$1) this._imageViewer$1.onSizeChanged();
				this._imageViewer$1.beginRender();
				this._imageViewer$1.beginUpdate();
				this._imageViewer$1.endUpdate();
				this._imageViewer$1.endRender();
				this._imageViewer$1.beginRender();
				this._imageViewer$1.beginUpdate();
				for(var a = ss.IEnumerator.getEnumerator(this._imageViewer$1.get_items()); a.moveNext();) a.current.onSizeChanged();
				this._imageViewer$1.endUpdate();
				this._imageViewer$1.endRender();
				this._ipadOnSizeChanged$1();
				this._cellOffset$1 = lt.LTHelper.getPosition(this.get_div(), null);
				for(var a = 0, b = this._tickBoxes$1.length, a = 0; a < b; a++) this._tickBoxes$1[a].onSizeChanged();
				null != this.__sizeChanged$1 &&
					this.__sizeChanged$1(this, lt.LeadEventArgs.Empty)
			}
		}
	};
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "outOfBounds", {
		get: lt.Controls.Medical.Cell.prototype.__outOfBounds$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "currentOffsetChanged", {
		get: lt.Controls.Medical.Cell.prototype.__currentOffsetChanged$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "cellClicked", {
		get: lt.Controls.Medical.Cell.prototype.__cellClicked$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "firstFrameReady", {
		get: lt.Controls.Medical.Cell.prototype.__firstFrameReady$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "imageURLChanged", {
		get: lt.Controls.Medical.Cell.prototype.__imageURLChanged$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "postRender", {
		get: lt.Controls.Medical.Cell.prototype.__postRender$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "sizeChanged", {
		get: lt.Controls.Medical.Cell.prototype.__sizeChanged$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "scrollChanged", {
		get: lt.Controls.Medical.Cell.prototype.__scrollChanged$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "progressCompleted", {
		get: lt.Controls.Medical.Cell.prototype.__progressCompleted$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "imageProcessingReady", {
		get: lt.Controls.Medical.Cell.prototype.__imageProcessingReady$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "imageDownloaded", {
		get: lt.Controls.Medical.Cell.prototype.__imageDownloaded$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "studyInstanceUID", {
		get: lt.Controls.Medical.Cell.prototype.get_studyInstanceUID,
		set: lt.Controls.Medical.Cell.prototype.set_studyInstanceUID,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "tickBoxes", {
		get: lt.Controls.Medical.Cell.prototype.get_tickBoxes,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "fullDownload", {
		get: lt.Controls.Medical.Cell.prototype.get_fullDownload,
		set: lt.Controls.Medical.Cell.prototype.set_fullDownload,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype,
		"marginFramesCount", {
			get: lt.Controls.Medical.Cell.prototype.get_marginFramesCount,
			set: lt.Controls.Medical.Cell.prototype.set_marginFramesCount,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "sortingOperationsSequence", {
		get: lt.Controls.Medical.Cell.prototype.get_sortingOperationsSequence,
		set: lt.Controls.Medical.Cell.prototype.set_sortingOperationsSequence,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "scrollType", {
		get: lt.Controls.Medical.Cell.prototype.get_scrollType,
		set: lt.Controls.Medical.Cell.prototype.set_scrollType,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "cinePlayer", {
		get: lt.Controls.Medical.Cell.prototype.get_cinePlayer,
		set: lt.Controls.Medical.Cell.prototype.set_cinePlayer,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "lineProfile", {
		get: lt.Controls.Medical.Cell.prototype.get_lineProfile,
		set: lt.Controls.Medical.Cell.prototype.set_lineProfile,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "mprType", {
		get: lt.Controls.Medical.Cell.prototype.get_mprType,
		set: lt.Controls.Medical.Cell.prototype.set_mprType,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "derivatives", {
		get: lt.Controls.Medical.Cell.prototype.get_derivatives,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "selectedItems", {
		get: lt.Controls.Medical.Cell.prototype.get_selectedItems,
		set: lt.Controls.Medical.Cell.prototype.set_selectedItems,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "selectedItem", {
		get: lt.Controls.Medical.Cell.prototype.get_selectedItem,
		set: lt.Controls.Medical.Cell.prototype.set_selectedItem,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "automationManager", {
		get: lt.Controls.Medical.Cell.prototype.get_automationManager,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype,
		"automation", {
			get: lt.Controls.Medical.Cell.prototype.get_automation,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "selectedBorderColor", {
		get: lt.Controls.Medical.Cell.prototype.get_selectedBorderColor,
		set: lt.Controls.Medical.Cell.prototype.set_selectedBorderColor,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "unselectedBorderColor", {
		get: lt.Controls.Medical.Cell.prototype.get_unselectedBorderColor,
		set: lt.Controls.Medical.Cell.prototype.set_unselectedBorderColor,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "selectedSubCellBorderColor", {
		get: lt.Controls.Medical.Cell.prototype.get_selectedSubCellBorderColor,
		set: lt.Controls.Medical.Cell.prototype.set_selectedSubCellBorderColor,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "highlightedSubCellBorderColor", {
		get: lt.Controls.Medical.Cell.prototype.get_highlightedSubCellBorderColor,
		set: lt.Controls.Medical.Cell.prototype.set_highlightedSubCellBorderColor,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "useBackCanvas", {
		get: lt.Controls.Medical.Cell.prototype.get_useBackCanvas,
		set: lt.Controls.Medical.Cell.prototype.set_useBackCanvas,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "overlayTextVisible", {
		get: lt.Controls.Medical.Cell.prototype.get_overlayTextVisible,
		set: lt.Controls.Medical.Cell.prototype.set_overlayTextVisible,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype,
		"seriesNumber", {
			get: lt.Controls.Medical.Cell.prototype.get_seriesNumber,
			set: lt.Controls.Medical.Cell.prototype.set_seriesNumber,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "patientName", {
		get: lt.Controls.Medical.Cell.prototype.get_patientName,
		set: lt.Controls.Medical.Cell.prototype.set_patientName,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "seriesInstanceUID", {
		get: lt.Controls.Medical.Cell.prototype.get_seriesInstanceUID,
		set: lt.Controls.Medical.Cell.prototype.set_seriesInstanceUID,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "frameOfReferenceUID", {
		get: lt.Controls.Medical.Cell.prototype.get_frameOfReferenceUID,
		set: lt.Controls.Medical.Cell.prototype.set_frameOfReferenceUID,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "linked", {
		get: lt.Controls.Medical.Cell.prototype.get_linked,
		set: lt.Controls.Medical.Cell.prototype.set_linked,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "imageViewer", {
		get: lt.Controls.Medical.Cell.prototype.get_imageViewer,
		set: lt.Controls.Medical.Cell.prototype.set_imageViewer,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "viewer", {
		get: lt.Controls.Medical.Cell.prototype.get_viewer,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "gridLayout", {
		get: lt.Controls.Medical.Cell.prototype.get_gridLayout,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "progress", {
		get: lt.Controls.Medical.Cell.prototype.get_progress,
		set: lt.Controls.Medical.Cell.prototype.set_progress,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "windowLevel", {
		get: lt.Controls.Medical.Cell.prototype.get_windowLevel,
		set: lt.Controls.Medical.Cell.prototype.set_windowLevel,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype,
		"drawCrossHairLines", {
			get: lt.Controls.Medical.Cell.prototype.get_drawCrossHairLines,
			set: lt.Controls.Medical.Cell.prototype.set_drawCrossHairLines,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "borderThickness", {
		get: lt.Controls.Medical.Cell.prototype.get_borderThickness,
		set: lt.Controls.Medical.Cell.prototype.set_borderThickness,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "arrangement", {
		get: lt.Controls.Medical.Cell.prototype.get_arrangement,
		set: lt.Controls.Medical.Cell.prototype.set_arrangement,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "showFrameBorder", {
		get: lt.Controls.Medical.Cell.prototype.get_showFrameBorder,
		set: lt.Controls.Medical.Cell.prototype.set_showFrameBorder,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "currentOffset", {
		get: lt.Controls.Medical.Cell.prototype.get_currentOffset,
		set: lt.Controls.Medical.Cell.prototype.set_currentOffset,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "framesMappingIndex", {
		get: lt.Controls.Medical.Cell.prototype.get_framesMappingIndex,
		set: lt.Controls.Medical.Cell.prototype.set_framesMappingIndex,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "frames", {
		get: lt.Controls.Medical.Cell.prototype.get_frames,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "overlays", {
		get: lt.Controls.Medical.Cell.prototype.get_overlays,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cell.prototype, "dispoing", {
		get: lt.Controls.Medical.Cell.prototype.__dispoing$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical._overlayInfo = function(a, b, c) {
		this.alignment = a;
		this.rect = b;
		this.weight = c;
		this.visible = !0
	};
	lt.Controls.Medical._overlayInfo.prototype = {
		alignment: 0,
		rect: null,
		weight: 0,
		visible: !1
	};
	lt.Controls.Medical._actionInfo = function(a, b) {
		this.action = a;
		this.actionObject = b
	};
	lt.Controls.Medical._actionInfo.prototype = {
		action: null,
		actionObject: null
	};
	lt.Controls.Medical.SubCell = function(a, b) {
		lt.Controls.Medical.SubCell.initializeBase(this);
		this._cell$1 = a;
		this._parentDivId$1 = a.get_divID();
		this._div$1 = document.createElement("div");
		this._div$1.style.backgroundColor = "#FFFFFF";
		this.set_divID(b);
		this._commandDictionary$1 = {};
		this._prepareImageViewer$1();
		this._prepareOverlayCanvas$1();
		this._initializeAnnotationCanvas$1(this._cell$1.get_imageViewer(), b)
	};
	lt.Controls.Medical.SubCell.prototype = {
		_parentDivId$1: null,
		_cell$1: null,
		_overlayCanvas$1: null,
		_frame: null,
		_info$1: null,
		_commandDictionary$1: null,
		_backColor$1: "#0",
		get_backColor: function() {
			return this._backColor$1
		},
		set_backColor: function(a) {
			this._backColor$1 = a;
			this.invalidate();
			return a
		},
		_updateFieldOfView: function() {
			if(null == this._frame) this._fieldOfView = null;
			else {
				var a = this.get_imageViewer().getItemViewBounds(this, lt.Controls.ImageViewerItemPart.image, !1),
					b = this.get_imageViewer().getItemViewBounds(this, lt.Controls.ImageViewerItemPart.image, !0);
				if(!b.get_isEmpty() && 0 <
					a.get_width() && 0 < a.get_height()) {
					var c = b.get_width() / a.get_width();
					1 < c && (c = 1);
					a = b.get_height() / a.get_height();
					1 < a && (a = 1);
					c *= this._frame.get_width() * (this._frame.get_columnSpacing() ? this._frame.get_columnSpacing() : 1);
					a *= this._frame.get_height() * (this._frame.get_rowSpacing() ? this._frame.get_rowSpacing() : 1);
					this._fieldOfView = lt.LeadPointD.create(c, a)
				} else this._fieldOfView = lt.LeadPointD.create(0, 0);
				this._updateTag(12)
			}
		},
		_fieldOfView: null,
		get_fieldOfView: function() {
			return this._fieldOfView
		},
		_bounds$1: null,
		_selected$1: !1,
		_div$1: null,
		_divID$1: null,
		get__internalBounds: function() {
			return this._bounds$1
		},
		set__internalBounds: function(a) {
			return this._bounds$1 = a
		},
		get_bounds: function() {
			return this._bounds$1
		},
		set_bounds: function(a) {
			this._bounds$1 = a;
			this.onSizeChanged();
			return a
		},
		get_selected: function() {
			return this._selected$1
		},
		set_selected: function(a) {
			if(this._selected$1 !== a) return this._selected$1 = a
		},
		get_div: function() {
			return this._div$1
		},
		get_divID: function() {
			null != this._div$1 && (this._divID$1 = this._div$1.id);
			return this._divID$1
		},
		set_divID: function(a) {
			this._divID$1 = a;
			null != this._div$1 && (this._div$1.id = a);
			return a
		},
		get_overlayCanvas: function() {
			return this._overlayCanvas$1
		},
		get_parentCell: function() {
			return this._cell$1
		},
		_forecolor$1: "#FFFFFF",
		_overlayPadding$1: 0,
		_clearOffset$1: 0,
		_fontSize$1: 0,
		_clearAttachedCanvases$1: function() {
			this._clearCanvas$1(this._overlayCanvas$1);
			this._clearCanvas$1(this._annotationCanvas$1)
		},
		_clearCanvas$1: function(a) {
			a = a.getContext("2d");
			a.scale(1, 1);
			a.clearRect(0, 0, this._overlayCanvas$1.width,
				this._overlayCanvas$1.height)
		},
		get_foreColor: function() {
			return this._forecolor$1
		},
		set_foreColor: function(a) {
			this._forecolor$1 = a;
			this._renderOverlay$1();
			return a
		},
		add_frameAttached: function(a) {
			this.__frameAttached$1 = ss.Delegate.combine(this.__frameAttached$1, a)
		},
		remove_frameAttached: function(a) {
			this.__frameAttached$1 = ss.Delegate.remove(this.__frameAttached$1, a)
		},
		__frameAttached$1_handler_get: function() {
			null == this.__frameAttached$1_handler && (this.__frameAttached$1_handler = ss.EventHandler.create(this,
				this.add_frameAttached, this.remove_frameAttached));
			return this.__frameAttached$1_handler
		},
		__frameAttached$1: null,
		__frameAttached$1_handler: null,
		_onFrameAttached: function(a, b) {
			var c = this.__frameAttached$1;
			null != c && c(this, new lt.Controls.Medical.FrameAttachedEventArgs(a, b))
		},
		_reRenderOverlay: function() {
			this._clearCanvas$1(this._overlayCanvas$1);
			this._renderOverlay$1()
		},
		invalidate: function() {
			if(null != this.get_imageViewer()) {
				Type.canCast(this, lt.Controls.Medical.MRTISubCell) && this._isPaintScheduled() &&
					this._cancelPaintSchedule();
				var a = this.get_imageViewer().getItemViewBounds(this, lt.Controls.ImageViewerItemPart.view, !1);
				this.get_imageViewer().invalidate(a)
			}
		},
		_updateOverlaySize$1: function(a, b) {
			this._overlayCanvas$1.width = a;
			this._overlayCanvas$1.height = b;
			this._calculateOverlayTextSize$1(a, b);
			this._findOverlayRectangles$1();
			this._renderOverlay$1()
		},
		_getOpposite$1: function(a) {
			switch(a) {
				case 0:
					return 2;
				case 1:
					return 3;
				case 2:
					return 0;
				case 3:
					return 1;
				default:
					return -1
			}
		},
		_overlappedOverlayTags$1: function(a,
			b, c) {
			b = a[b].rect;
			a = a[c].rect;
			return b.get_top() >= a.get_top() && b.get_top() <= a.get_bottom() || a.get_top() >= b.get_top() && a.get_top() <= b.get_bottom() ? !0 : !1
		},
		_hideOverlappedTags$1: function(a, b, c) {
			b = a[b];
			a = a[c];
			b.weight > a.weight ? a.visible = !1 : b.weight < a.weight ? b.visible = !1 : a.visible = !1
		},
		_findOverlayTag$1: function() {
			var a = this._cell$1.get_overlays().get_count(),
				b, c;
			for(b = 0; b < a; b++)
				if(c = this._cell$1.get_overlays().get_item(b), 5 === c.get_alignment()) return c;
			return null
		},
		_findOverlayRectangles$1: function() {
			var a =
				this._cell$1.get_overlays().get_count(),
				b = this._findOverlayTag$1(5);
			this._info$1 = Array(a);
			var c, d, e;
			for(c = 0; c < a; c++) e = this._cell$1.get_overlays().get_item(c), this._info$1[c] = new lt.Controls.Medical._overlayInfo(e.get_alignment(), this._calculateRect$1(e, b), e.get_weight());
			e = !1;
			for(c = 0; c < a; c++)
				if(d = this._info$1[c], b = this._getOpposite$1(d.alignment), d.visible)
					for(d = 0; d < a; d++) c !== d && this._info$1[d].visible && this._info$1[d].alignment === b && this._overlappedOverlayTags$1(this._info$1, c, d) && (this._hideOverlappedTags$1(this._info$1,
						c, d, e), e = !e)
		},
		_jumpOverCenter$1: function(a, b, c, d) {
			if(null != d) switch(a = this._getOverlayPosition$1(a, d, 0), c.get_alignment()) {
				case 0:
				case 1:
					b.get_y() + this._overlayPadding$1 >= a.get_y() && b.set_y(b.get_y() + (this._overlayPadding$1 << 1));
					break;
				case 2:
				case 3:
					b.get_y() <= a.get_y() + this._overlayPadding$1 && b.set_y(b.get_y() - (this._overlayPadding$1 << 1))
			}
			return b
		},
		_calculateRect$1: function(a, b) {
			var c = this._overlayCanvas$1.getContext("2d"),
				d = this._getOverlayPosition$1(c, a, 0),
				d = this._jumpOverCenter$1(c, d, a, b);
			return lt.LeadRectD.create(d.get_x(),
				d.get_y(), 0, this._overlayPadding$1)
		},
		_calculateOverlayTextSize$1: function(a, b) {
			var c = Math.min(a, b << 1);
			this._overlayPadding$1 = Math.min(24, Math.max(12, c / 25));
			this._clearOffset$1 = Math.min(5, Math.max(1, c / 133));
			this._fontSize$1 = Math.min(14, Math.max(6, c / 45))
		},
		_cellMargin$1: 8,
		_getOverlayPosition$1: function(a, b, c) {
			var d = this._cellMargin$1,
				e = this._cellMargin$1,
				f = this._overlayCanvas$1.width - d,
				g = this._overlayCanvas$1.height - e,
				c = c + b.get_positionIndex();
			switch(b.get_alignment()) {
				case 0:
					e = this._cellMargin$1 + c *
						this._overlayPadding$1;
					a.textAlign = "left";
					a.textBaseline = "top";
					break;
				case 1:
					d = f;
					e = this._cellMargin$1 + c * this._overlayPadding$1;
					a.textAlign = "right";
					a.textBaseline = "top";
					break;
				case 2:
					e = g - (c + 1) * this._overlayPadding$1;
					a.textAlign = "left";
					a.textBaseline = "top";
					break;
				case 3:
					d = f;
					e = g - (c + 1) * this._overlayPadding$1;
					a.textAlign = "right";
					a.textBaseline = "top";
					break;
				case 4:
					d = (f + d) / 2;
					a.textAlign = "center";
					a.textBaseline = "top";
					break;
				case 5:
					e = (g + e - this._overlayPadding$1) / 2;
					a.textAlign = "left";
					a.textBaseline = "top";
					break;
				case 6:
					d = f;
					e = (g + e - this._overlayPadding$1) / 2;
					a.textAlign = "right";
					a.textBaseline = "top";
					break;
				case 7:
					d = (f + d) / 2, e = g - this._overlayPadding$1, a.textAlign = "center", a.textBaseline = "top"
			}
			return lt.LeadPointD.create(d, e)
		},
		_canDisplayOrientation$1: function() {
			return null != this._frame.get__orientationOverlay() && !this._frame.get_isWaveForm()
		},
		_prepareOverlayText$1: function(a) {
			if(null != this._frame) {
				var b = this._cell$1.get_frames().indexOf(this._frame),
					c = a.get_text();
				switch(a.get_type()) {
					case 10:
						0 < this._frame.get_retakes().get_count() ?
							-1 === this._frame.get_retakeIndex() ? c = " N " : (c = String.format("O"), 1 < this._frame.get_retakes().get_count() && (c += (this._frame.get_retakeIndex() + 1).toString())) : c = "";
						break;
					case 9:
						b = this._cell$1;
						if(null != this._frame && null != this._frame.get__orientationOverlay()) {
							c = String.format("{0}", lt.Controls.Medical.Tools.getMPRText(this._frame.get__orientationOverlay().mprType));
							break
						}
						c = String.format("{0}", lt.Controls.Medical.Tools.getMPRText(b.get_mprType()));
						break;
					case 0:
						c = this._frame.get_isDataReady() ? String.format("W: {0} L: {1}",
							this._frame.get_windowWidth(), this._frame.get_windowCenter()) : "";
						break;
					case 4:
						c = String.format("{0} / {1}", b + 1, this._cell$1.get_frames().get_count());
						break;
					case 1:
						c = String.format("Instance: {0}", this._frame.get_instanceNumber());
						break;
					case 3:
						c = this._frame.get_imageQuality() ? this._frame.get_imageQuality() : "";
						break;
					case 5:
						c = this._canDisplayOrientation$1() ? this._frame.get__orientationOverlay().getLeft() : "";
						break;
					case 6:
						c = this._canDisplayOrientation$1() ? this._frame.get__orientationOverlay().getRight() :
							"";
						break;
					case 7:
						c = this._canDisplayOrientation$1() ? this._frame.get__orientationOverlay().getTop() : "";
						break;
					case 8:
						c = this._canDisplayOrientation$1() ? this._frame.get__orientationOverlay().getBottom() : "";
						break;
					case 11:
						c = "Laterality : " + this._frame.get_laterality();
						break;
					case 12:
						null != this.get_fieldOfView() && (c = String.format("DFOV : {0} X {1} mm", this.get_fieldOfView().get_x().toFixed(2), this.get_fieldOfView().get_y().toFixed(2)))
				}
				a.set__internalText(c)
			}
		},
		_clearPreviousOverlayText$1: function(a, b, c) {
			var d =
				a = 0;
			switch(b.get_alignment()) {
				case 1:
					a -= b.get__drawnTextWidth();
					break;
				case 2:
					d -= this._overlayPadding$1;
					break;
				case 3:
					a -= b.get__drawnTextWidth();
					d -= this._overlayPadding$1;
					break;
				case 4:
					a -= b.get__drawnTextWidth() / 2;
					break;
				case 5:
					d -= this._overlayPadding$1 / 2;
					break;
				case 6:
					a -= b.get__drawnTextWidth();
					d -= this._overlayPadding$1 / 2;
					break;
				case 7:
					a -= b.get__drawnTextWidth() / 2, d -= this._overlayPadding$1
			}
			b.set__clearRectangle(lt.LeadRectD.create(c.get_x() + a, c.get_y() + d, b.get__drawnTextWidth(), this._overlayPadding$1))
		},
		_createClearRect$1: function(a, b, c, d) {
			var e = 0,
				f = this._overlayPadding$1,
				e = "";
			switch(d.get_type()) {
				case 2:
					e = d.get_text();
					break;
				case 9:
					e = "Sagittal";
					break;
				case 0:
					e = String.format("W: 5653600000 C: 5653600000");
					break;
				case 1:
					e = String.format("Instance: 1000000");
					break;
				case 3:
					e = String.format(" ! ");
					break;
				case 4:
					e = String.format("1000 / 1000");
					break;
				case 11:
					e = String.format("Laterality : FFF");
					break;
				case 12:
					e = String.format("DFOV : XXXXXXX.XX X XXXXXXX.XX");
					break;
				case 10:
					e = String.format("N11");
					break;
				case 5:
				case 6:
				case 7:
				case 8:
					e =
						String.format("AAAAA")
			}
			e = a.measureText(e).width;
			switch(d.get_alignment()) {
				case 4:
				case 7:
					b -= e / 2;
					break;
				case 3:
				case 1:
				case 6:
					b -= e
			}
			return lt.LeadRectD.create(b, c, e, f)
		},
		_isOrientationOverlayText$1: function(a) {
			switch(a.get_type()) {
				case 7:
				case 8:
				case 6:
				case 5:
					return !0
			}
			return !1
		},
		_isOrientationModified$1: function(a) {
			if(null == this._frame) return !1;
			var b = this._frame.get_flipped(),
				c = this._frame.get_reversed();
			switch(a.get_type()) {
				case 7:
					return b;
				case 8:
					return b;
				case 6:
					return c;
				case 5:
					return c
			}
			return !1
		},
		_updateTag: function(a) {
			if(!(null ==
					this._frame || null == this._info$1) && this._frame.get_enableDraw()) {
				var b = 0,
					c = this._cell$1.get_overlays().get_count(),
					d = this._overlayCanvas$1.getContext("2d");
				d.save();
				for(var e, f, b = 0; b < c; b++)
					if(e = this._cell$1.get_overlays().get_item(b), f = this._info$1[b], a === e.get_type()) {
						this._getOverlayPosition$1(d, e, 0);
						d.fillStyle = e.get_color();
						d.font = 3 === e.get_type() ? this._fontSize$1 + 4 + "px Arial" : this._fontSize$1 + "px Arial";
						this._prepareOverlayText$1(e);
						d.fillStyle = e.get_color();
						if(this._isOrientationOverlayText$1(e) &&
							(this._isOrientationModified$1(e) && (d.fillStyle = "yellow"), !e.get_text())) d.fillStyle = "Red", d.font = this._fontSize$1 + "px Arial", e.set__internalText("N/A");
						var g = this._createClearRect$1(d, f.rect.get_left(), f.rect.get_top(), e);
						null != g && d.clearRect(g.get_left() - 4, g.get_top(), g.get_width() + 8, g.get_height());
						f.visible && e._draw(d, parseInt(f.rect.get_left()), parseInt(f.rect.get_top()))
					}
				d.restore()
			}
		},
		_renderOverlay$1: function() {
			if(!(null == this._frame || null == this._info$1) && this._frame.get_enableDraw()) {
				var a =
					0,
					b = this._cell$1.get_overlays().get_count(),
					c = this._overlayCanvas$1.getContext("2d");
				c.clearRect(0, 0, this._overlayCanvas$1.width, this._overlayCanvas$1.height);
				c.save();
				for(var d, a = 0; a < b; a++) {
					d = this._cell$1.get_overlays().get_item(a);
					this._getOverlayPosition$1(c, d, 0);
					c.fillStyle = d.get_color();
					c.font = 3 === d.get_type() ? this._fontSize$1 + 4 + "px Arial" : this._fontSize$1 + "px Arial";
					this._prepareOverlayText$1(d);
					if(this._isOrientationOverlayText$1(d) && (this._isOrientationModified$1(d) && (c.fillStyle = "yellow"), !d.get_text())) c.fillStyle = "Red", d.set__internalText("N/A");
					this._info$1[a].visible && d._draw(c, parseInt(this._info$1[a].rect.get_left()), parseInt(this._info$1[a].rect.get_top()))
				}
				c.restore()
			}
		},
		updateOverlay: function() {
			if(!(null == this._frame || null == this._info$1) && this._frame.get_enableDraw()) {
				var a = 0,
					b = this._cell$1.get_overlays().get_count(),
					c = this._overlayCanvas$1.getContext("2d");
				c.save();
				for(var d, e, a = 0; a < b; a++)
					if(d = this._cell$1.get_overlays().get_item(a), e = this._info$1[a], 2 !== d.get_type()) {
						this._getOverlayPosition$1(c,
							d, 0);
						c.fillStyle = d.get_color();
						c.font = 3 === d.get_type() ? this._fontSize$1 + 4 + "px Arial" : this._fontSize$1 + "px Arial";
						this._prepareOverlayText$1(d);
						c.fillStyle = d.get_color();
						if(this._isOrientationOverlayText$1(d) && (this._isOrientationModified$1(d) && (c.fillStyle = "yellow"), !d.get_text())) c.fillStyle = "Red", c.font = this._fontSize$1 + "px Arial", d.set__internalText("N/A");
						var f = this._createClearRect$1(c, e.rect.get_left(), e.rect.get_top(), d);
						null != f && c.clearRect(f.get_left() - 4, f.get_top(), f.get_width() + 8, f.get_height());
						e.visible && d._draw(c, parseInt(e.rect.get_left()), parseInt(e.rect.get_top()))
					}
				c.restore()
			}
		},
		_initializeFrameMappingIndex$1: function() {
			if(null == this._cell$1.get_framesMappingIndex()) {
				var a = 0,
					b = this._cell$1.get_frames().get_count();
				this._cell$1._framesMappingIndex = lt.Controls.Medical.Tools._l_AllocateInt32Array(b);
				for(a = 0; a < b; a++) this._cell$1._framesMappingIndex[a] = a
			}
		},
		_removeFrameFromMappingIndex$1: function(a) {
			for(var a = this._cell$1.get_frames().indexOf(a), b = 0, c = this._cell$1.get_frames().get_count(),
					b = 0; b < c; b++) this._cell$1.get_framesMappingIndex()[b] === a && (this._cell$1.get_framesMappingIndex()[b] = -1)
		},
		get_attachedFrame: function() {
			return this._frame
		},
		set_attachedFrame: function(a) {
			var b = -1;
			if(null != a && (b = this._cell$1.get_frames().indexOf(a), -1 === b)) throw Error("You must add to the frame to the cell frame list 'Cell.Frames'");
			if(null != this._frame) {
				var c = this._cell$1.get_imageViewer().get_items().indexOf(this);
				this._frame._attach(null);
				this._initializeFrameMappingIndex$1();
				this._removeFrameFromMappingIndex$1(this._frame)
			}
			this._frame =
				a;
			null != this._frame ? (c = this._cell$1.get_imageViewer().get_items().indexOf(this), this._initializeFrameMappingIndex$1(), this._removeFrameFromMappingIndex$1(this._frame), this._cell$1.get_framesMappingIndex()[c] = b, this._cell$1._updateFrameWithSubCell(this._frame, this), this._frame._assignRenderer()) : (this._clearAttachedCanvases$1(), this.invalidate());
			return a
		},
		_adjustViewerProperties$1: function() {},
		get__parentViewer: function() {
			return this._cell$1.get_imageViewer()
		},
		_prepareOverlayCanvas$1: function() {
			var a =
				this.get__parentViewer().get_foreCanvas();
			this._overlayCanvas$1 = document.createElement("canvas");
			this._overlayCanvas$1.id = this._subCellName$1 + "_overalyCanvas";
			this._overlayCanvas$1.style.zIndex = 99;
			this._overlayCanvas$1.width = parseInt(this.get_size().get_width());
			this._overlayCanvas$1.height = parseInt(this.get_size().get_height());
			a.parentNode.appendChild(this._overlayCanvas$1)
		},
		_annotationCanvas$1: null,
		_initializeAnnotationCanvas$1: function(a, b) {
			var c = a.get_foreCanvas(),
				d = b + "_annotationCanvas";
			this._annotationCanvas$1 =
				document.createElement("canvas");
			this._annotationCanvas$1.width = c.width;
			this._annotationCanvas$1.height = c.height;
			this._annotationCanvas$1.width = 1;
			this._annotationCanvas$1.height = 1;
			this._annotationCanvas$1.id = d;
			this._annotationCanvas$1.style.pixelLeft = 0;
			this._annotationCanvas$1.style.pixelTop = 0;
			this._annotationCanvas$1.style.marginTop = "0px";
			this._annotationCanvas$1.style.marginRight = "auto";
			this._annotationCanvas$1.style.marginBottom = "0px";
			this._annotationCanvas$1.style.marginLeft = "auto";
			this._annotationCanvas$1.style.position =
				"absolute";
			this._annotationCanvas$1.style.zIndex = 100;
			this.get__parentViewer().get_foreCanvas().parentNode.appendChild(this._annotationCanvas$1); - 1 === this.get__parentViewer().get_interactiveService().get_userControls().indexOf(this._annotationCanvas$1) && this.get__parentViewer().get_interactiveService().get_userControls().add(this._annotationCanvas$1)
		},
		get_annotationCanvas: function() {
			return this._annotationCanvas$1
		},
		set_annotationCanvas: function(a) {
			return this._annotationCanvas$1 = a
		},
		onSizeChanged: function() {
			if(this._cell$1._canUpdate() &&
				null != this.get_imageViewer()) {
				var a = this.get__parentViewer().getItemViewBounds(this, lt.Controls.ImageViewerItemPart.view, !1);
				if(!a.get_isEmpty()) {
					var b = a.get_width(),
						c = a.get_height();
					this._overlayCanvas$1.style.left = a.get_left() + "px";
					this._overlayCanvas$1.style.top = a.get_top() + "px";
					this._overlayCanvas$1.style.width = b + "px";
					this._overlayCanvas$1.style.height = c + "px";
					this._overlayCanvas$1.style.position = "absolute";
					this._overlayCanvas$1.width = parseInt(b);
					this._overlayCanvas$1.height = parseInt(c);
					this._annotationCanvas$1.style.left =
						a.get_left() + "px";
					this._annotationCanvas$1.style.top = a.get_top() + "px";
					this._annotationCanvas$1.style.width = b + "px";
					this._annotationCanvas$1.style.height = c + "px";
					this._annotationCanvas$1.style.position = "absolute";
					this._annotationCanvas$1.width = parseInt(b);
					this._annotationCanvas$1.height = parseInt(c);
					this._updateOverlaySize$1(this._overlayCanvas$1.width, this._overlayCanvas$1.height);
					null != this._frame && (this._frame.get_container().set_isEnabled(!0), this._frame._updateSubCellZoom(), this._frame.get_shutter().onSizeChanged(),
						this._frame._updateAlignment())
				}
			}
		},
		dispose: function() {
			this.set_flip(!1);
			this.set_reverse(!1);
			this.set_rotateAngle(0);
			var a = this.get__parentViewer().get_foreCanvas().parentNode;
			lt.Controls.Medical.Tools._disposeCanvas(this._annotationCanvas$1);
			this._annotationCanvas$1 = null;
			a.removeChild(this._overlayCanvas$1);
			lt.Controls.Medical.Tools._disposeCanvas(this._overlayCanvas$1);
			this._overlayCanvas$1 = null
		},
		_subCellName$1: null,
		_prepareImageViewer$1: function() {
			this._subCellName$1 = this.get_div().id + "_subCell";
			this.get_div();
			this.set_size(lt.LeadSizeD.create(10, 10))
		}
	};
	Object.defineProperty(lt.Controls.Medical.SubCell.prototype, "backColor", {
		get: lt.Controls.Medical.SubCell.prototype.get_backColor,
		set: lt.Controls.Medical.SubCell.prototype.set_backColor,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.SubCell.prototype, "fieldOfView", {
		get: lt.Controls.Medical.SubCell.prototype.get_fieldOfView,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.SubCell.prototype,
		"bounds", {
			get: lt.Controls.Medical.SubCell.prototype.get_bounds,
			set: lt.Controls.Medical.SubCell.prototype.set_bounds,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.SubCell.prototype, "selected", {
		get: lt.Controls.Medical.SubCell.prototype.get_selected,
		set: lt.Controls.Medical.SubCell.prototype.set_selected,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.SubCell.prototype, "div", {
		get: lt.Controls.Medical.SubCell.prototype.get_div,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.SubCell.prototype, "divID", {
		get: lt.Controls.Medical.SubCell.prototype.get_divID,
		set: lt.Controls.Medical.SubCell.prototype.set_divID,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.SubCell.prototype, "overlayCanvas", {
		get: lt.Controls.Medical.SubCell.prototype.get_overlayCanvas,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.SubCell.prototype, "parentCell", {
		get: lt.Controls.Medical.SubCell.prototype.get_parentCell,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.SubCell.prototype, "foreColor", {
		get: lt.Controls.Medical.SubCell.prototype.get_foreColor,
		set: lt.Controls.Medical.SubCell.prototype.set_foreColor,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.SubCell.prototype, "frameAttached", {
		get: lt.Controls.Medical.SubCell.prototype.__frameAttached$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.SubCell.prototype, "attachedFrame", {
		get: lt.Controls.Medical.SubCell.prototype.get_attachedFrame,
		set: lt.Controls.Medical.SubCell.prototype.set_attachedFrame,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.SubCell.prototype, "annotationCanvas", {
		get: lt.Controls.Medical.SubCell.prototype.get_annotationCanvas,
		set: lt.Controls.Medical.SubCell.prototype.set_annotationCanvas,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical._chunkList = function(a) {
		this.resolution = a;
		this.list = [];
		this.used = []
	};
	lt.Controls.Medical._chunkList.prototype = {
		list: null,
		used: null,
		resolution: null
	};
	lt.Controls.Medical.MRTISubCell = function(a, b) {
		this._thumbnailSize$2 = lt.LeadSizeD.create(64, 64);
		this._tileBackGroundResolution$2 = lt.LeadSizeD.create(0, 0);
		this._position$2 = lt.LeadPointD.create(0, 0);
		lt.Controls.Medical.MRTISubCell.initializeBase(this, [a, b]);
		this._initalizeMRTI$2()
	};
	lt.Controls.Medical.MRTISubCell.getFloatImageRect = function(a, b) {
		return a.getItemImageFloatingPointTransform(b).transformRect(lt.LeadRectD.create(0, 0, b.get_imageSize().get_width(), b.get_imageSize().get_height()))
	};
	lt.Controls.Medical.MRTISubCell.prototype = {
		getForground: function() {
			var a = document.createElement("canvas");
			a.width = this._fullScreenCanvas$2.width;
			a.height = this._fullScreenCanvas$2.height;
			var b = a.getContext("2d"),
				c = this.get_imageViewer().getItemViewBounds(this, lt.Controls.ImageViewerItemPart.view, !1);
			this.get_imageViewer().getViewBounds(!1, !1);
			b.save();
			b.rect(c.get_x(), c.get_y(), c.get_width() - 1, c.get_height() - 1);
			b.clip();
			b.translate(c.get_x(), c.get_y());
			try {
				this._clearUnnecessaryChunks(), this._paintTiles(b, !1)
			} catch(d) {}
			b.restore();
			return a
		},
		_clearChunks: function() {
			if(null != this._chunkList$2) {
				var a;
				a = this._chunkList$2.length;
				for(a -= 1; 0 <= a; a--) lt.Controls.Medical.Tools._removeChunk(this._chunkList$2, a)
			}
			if(null != this._frame && !(null == this._frame.get__mrtiRenderer() || null == this._frame.get__mrtiRenderer().get_alreadyRequested())) {
				var b = this._frame.get__mrtiRenderer().get_alreadyRequested();
				a = b.length;
				for(a -= 1; 0 <= a; a--) lt.Controls.Medical.Tools._removeChunk(b, a)
			}
		},
		_updateWindowlevel: function(a) {
			if(null !=
				this._chunkList$2) {
				for(var b = 0, c = this._chunkList$2.length, d, b = 0; b < c; b++) d = this._chunkList$2[b], (d._status.visible || a) && this._frame._applyImageProcessingOnChunk(d);
				null != this._frame.lowResImage && (this._frame.lowResImage._status.visible || a) && this._frame._applyImageProcessingOnChunk(this._frame.lowResImage);
				null != this._frame.thumbnailImage && (this._frame.thumbnailImage._status.visible || a) && this._frame._applyImageProcessingOnChunk(this._frame.thumbnailImage)
			}
		},
		_updateWindowlevelOnTheRest: function() {
			if(null !=
				this._chunkList$2) {
				for(var a = 0, b = this._chunkList$2.length, c, a = 0; a < b; a++) c = this._chunkList$2[a], c._status.visible || this._frame._applyImageProcessingOnChunk(c);
				null != this._frame.lowResImage && (this._frame.lowResImage._status.visible || this._frame._applyImageProcessingOnChunk(this._frame.lowResImage));
				null != this._frame.thumbnailImage && (this._frame.thumbnailImage._status.visible || this._frame._applyImageProcessingOnChunk(this._frame.thumbnailImage))
			}
		},
		_updateMRTIScale$2: function() {
			var a = lt.Controls.Medical.MRTISubCell.getFloatImageRect(this.get_imageViewer(),
				this);
			if(null != this._mrtiImage && !a.get_isEmpty()) {
				var b = this._mrtiImage.get_fullSize().get_width();
				this._mrtiImage.get_fullSize().get_height();
				a.get_height();
				this._scale$2 = 100 * (a.get_width() / b)
			}
		},
		_onTransformChanged: function() {
			this._updateFieldOfView();
			this._updateMRTIScale$2();
			null != this.get_parentCell() && this.get_parentCell().get_lineProfile().refresh();
			this._updateView(0, !1)
		},
		_mrtiImage: null,
		_chunkList$2: null,
		get_chunkList: function() {
			return this._chunkList$2
		},
		_enableMRTI$2: !1,
		get__enableMRTI: function() {
			return this._enableMRTI$2
		},
		set__enableMRTI: function(a) {
			(this._enableMRTI$2 = a) && this._connect(this._frame.get_mrtiInfo());
			return a
		},
		_fullScreenCanvas$2: null,
		_mrtiBackCanvas$2: null,
		_qualityFactor$2: 1,
		_updateMRTICanvasSize$2: function() {
			if(null != this.get_imageViewer()) {
				var a = this.get__parentViewer().getItemViewBounds(this, lt.Controls.ImageViewerItemPart.view, !1);
				this._updateMRTIScale$2();
				var b, c, d, e, f;
				null != this._frame ? (b = 90 === Math.abs(this._frame.get_rotateAngle()) || 270 === Math.abs(this._frame.get_rotateAngle()), c = a.get_left(),
					d = a.get_top(), e = b ? a.get_height() : a.get_width(), f = b ? a.get_width() : a.get_height()) : (d = c = 0, f = e = 1);
				1 < this._qualityFactor$2 ? (a = e, b = f) : (a = 4 * e / 3, b = 4 * f / 3);
				this._fullScreenCanvas$2.style.left = c + "px";
				this._fullScreenCanvas$2.style.top = d + "px";
				this._fullScreenCanvas$2.style.width = a + "px";
				this._fullScreenCanvas$2.style.height = b + "px";
				this._fullScreenCanvas$2.style.position = "absolute";
				this._fullScreenCanvas$2.width = parseInt(a);
				this._fullScreenCanvas$2.height = parseInt(b);
				this._mrtiBackCanvas$2.style.left = "0px";
				this._mrtiBackCanvas$2.style.top =
					"0px";
				this._mrtiBackCanvas$2.style.width = e + "px";
				this._mrtiBackCanvas$2.style.height = f + "px";
				this._mrtiBackCanvas$2.style.position = "absolute";
				this._mrtiBackCanvas$2.width = parseInt(e);
				this._mrtiBackCanvas$2.height = parseInt(f);
				this._updateView(0, !1)
			}
		},
		_initalizeMRTI$2: function() {
			var a = this.get_div().id + "_subCell";
			null == lt.Controls.Medical.Tools._recycledElements && (lt.Controls.Medical.Tools._recycledElements = []);
			this._qualityFactor$2 = lt.LTHelper.device === lt.LTDevice.tablet ? 2 : 1;
			this._fullScreenCanvas$2 =
				document.createElement("canvas");
			this._fullScreenCanvas$2.id = a + "_fullScreen_Canvas";
			this._mrtiBackCanvas$2 = document.createElement("canvas");
			this._mrtiBackCanvas$2.id = a + "_backCanvas_Canvas"
		},
		add_sizeChanged: function(a) {
			this.__sizeChanged$2 = ss.Delegate.combine(this.__sizeChanged$2, a)
		},
		remove_sizeChanged: function(a) {
			this.__sizeChanged$2 = ss.Delegate.remove(this.__sizeChanged$2, a)
		},
		__sizeChanged$2_handler_get: function() {
			null == this.__sizeChanged$2_handler && (this.__sizeChanged$2_handler = ss.EventHandler.create(this,
				this.add_sizeChanged, this.remove_sizeChanged));
			return this.__sizeChanged$2_handler
		},
		__sizeChanged$2: null,
		__sizeChanged$2_handler: null,
		onSizeChanged: function() {
			lt.Controls.Medical.MRTISubCell.callBaseMethod(this, "onSizeChanged");
			this._updateMRTICanvasSize$2();
			null != this.__sizeChanged$2 && this.__sizeChanged$2(this, lt.LeadEventArgs.Empty)
		},
		_applyTransform$2: function(a, b, c) {
			a.translate(b, c);
			this._frame.get_rotateAngle() && a.rotate(this._frame.get_rotateAngle() * Math.PI / 180);
			var d = !!(Math.abs(this._frame.get_rotateAngle()) %
					180),
				e = d ? -1 : 1,
				d = d ? 1 : -1;
			this._frame.get_flipped() && a.scale(e, d);
			this._frame.get_reversed() && a.scale(d, e);
			a.translate(-b, -c)
		},
		_drawFullImage$2: function(a, b, c, d) {
			if(null != this._frame) {
				c = !1;
				parseInt(this._mrtiImage.get_fullSize().get_width() / b.get_resolution().get_width() + 0.5);
				var e = b.get_rect().clone();
				e.offset(-this._position$2.get_x(), -this._position$2.get_y());
				var e = lt.LeadRectD.create(e.get_left(), e.get_top(), e.get_width() * this._scale$2 / 100, e.get_height() * this._scale$2 / 100),
					f = (e.get_right() + e.get_left()) /
					2,
					g = (e.get_bottom() + e.get_top()) / 2;
				if(c = this._frame.get_flipped() || this._frame.get_reversed() || !!this._frame.get_rotateAngle()) a.save(), this._applyTransform$2(a, f, g);
				a.drawImage(d ? b.get_backCanvas() : b.get_canvas(), e.get_left(), e.get_top(), e.get_width(), e.get_height());
				c && a.restore()
			}
		},
		_renderBackGroundImage$2: function(a, b, c) {
			null != this._frame.lowResImage && !(null != this._frame.thumbnailImage && b.get_width() <= 5 * this._frame.thumbnailImage._image.naturalWidth / 4) && null != this._frame.lowResImage._image && this._frame.lowResImage._status.visible ?
				this._drawFullImage$2(a, this._frame.lowResImage, this._position$2, c) : null != this._frame.thumbnailImage && null != this._frame.thumbnailImage._image && this._frame.thumbnailImage._status.visible && this._drawFullImage$2(a, this._frame.thumbnailImage, this._position$2, c)
		},
		_paintTiles: function(a, b) {
			var c = null,
				d = null;
			if(null == this._fullScreenCanvas$2 || null == this._mrtiBackCanvas$2 || null == this._mrtiImage) return this.get__enableMRTI();
			c = this._fullScreenCanvas$2.getContext("2d");
			c.clearRect(0, 0, this._fullScreenCanvas$2.width,
				this._fullScreenCanvas$2.height);
			d = this._mrtiBackCanvas$2.getContext("2d");
			d.clearRect(0, 0, this._mrtiBackCanvas$2.width, this._mrtiBackCanvas$2.height);
			if(!this.get__enableMRTI()) return this.get__enableMRTI();
			var e = this.get_imageViewer().getItemImageFloatingPointTransform(this),
				f;
			if(!this.get__enableMRTI() || null == this._frame) return !1;
			this._updateMRTIScale$2();
			var g = this._chunkList$2.length;
			if(0 < g || null != this._frame.lowResImage || null != this._frame.thumbnailImage) {
				var h = lt.Controls.Medical.MRTISubCell.getFloatImageRect(this.get_imageViewer(),
					this);
				if(h.get_isEmpty()) return this.get__enableMRTI();
				var i = this.get_imageViewer().getItemViewBounds(this, lt.Controls.ImageViewerItemPart.item, !0);
				if(i.get_isEmpty()) return this.get__enableMRTI();
				c.clearRect(0, 0, this._fullScreenCanvas$2.width, this._fullScreenCanvas$2.height);
				this._position$2.set_x(-e.get_offsetX() + i.get_x());
				this._position$2.set_y(-e.get_offsetY() + i.get_y());
				this._renderBackGroundImage$2(a, h, b);
				if(lt.Controls.Medical.Tools._noNeedForTiles(h, this._frame, this.get_tileResolution())) return this.get__enableMRTI();
				var j = 0;
				this._position$2.set_x(-e.get_offsetX() + i.get_x());
				this._position$2.set_y(-e.get_offsetY() + i.get_y());
				e = this._frame.get_flipped() || this._frame.get_reversed() || !!this._frame.get_rotateAngle();
				Date.get_now().getTime();
				lt.LeadRectD.create(0, 0, this._fullScreenCanvas$2.width, this._fullScreenCanvas$2.height);
				for(var k = this._getArrangedResolution$2(), l = lt.Controls.Medical.Tools._getTopLeftPoints(this._chunkList$2, k), m = 0, n = k.length, o, p, t, q, s = lt.LeadRectD.create(this._position$2.get_x(), this._position$2.get_y(),
						i.get_width(), i.get_height()), s = this._frame.get__mrtiRenderer().getTransformedRect(s, h.get_right() - h.get_left(), h.get_bottom() - h.get_top(), this._frame.get_flipped(), this._frame.get_reversed(), -this._frame.get_rotateAngle()), m = 0; m < n; m++) {
					c.clearRect(0, 0, this._fullScreenCanvas$2.width, this._fullScreenCanvas$2.height);
					j = this._mrtiImage.get_fullSize().get_width() / k[m].get_width();
					t = 100 * (s.get_x() / j) / this._scale$2;
					q = 100 * (s.get_y() / j) / this._scale$2;
					o = -((t - parseInt(t)) * j * this._scale$2 / 100);
					p = -((q - parseInt(q)) *
						j * this._scale$2 / 100);
					t = parseInt(t);
					q = parseInt(q);
					var r = 0,
						u = 0,
						u = 100 / (j * this._scale$2),
						r = lt.LeadRectD.create(h.get_x() * u, h.get_y() * u, h.get_width() * u, h.get_height() * u);
					r.get_right();
					r.get_left();
					r.get_bottom();
					r.get_top();
					r = lt.LeadPointD.create(0, 0);
					1 < u && (0 < l[m].get_x() - t && r.set_x(l[m].get_x() - t), 0 < l[m].get_y() - q && r.set_y(l[m].get_y() - q));
					for(var u = !1, v = 0; v < g; v++) f = this._chunkList$2[v].get_rect().clone(), k[m].get_width() === this._chunkList$2[v].get_resolution().get_width() && this._chunkList$2[v]._status.visible &&
						(u = !0, f.offset(-t - r.get_x(), -q - r.get_y()), lt.Controls.Medical.Tools._forDebug && (c.beginPath(), c.strokeStyle = "blue", c.rect(f.get_location().get_x(), f.get_location().get_y(), f.get_width(), f.get_height()), c.stroke()), c.drawImage(b ? this._chunkList$2[v].get_backCanvas() : this._chunkList$2[v].get_canvas(), f.get_location().get_x(), f.get_location().get_y()));
					t = this._fullScreenCanvas$2.width * j * this._scale$2 / 100;
					q = this._fullScreenCanvas$2.height * j * this._scale$2 / 100;
					f = r.get_x() * j * this._scale$2 / 100;
					j = r.get_y() *
						j * this._scale$2 / 100;
					t = Math.round(1E3 * t) / 1E3;
					q = Math.round(1E3 * q) / 1E3;
					u && (r = Math.round(1E3 * (o + f)) / 1E3, u = Math.round(1E3 * (p + j)) / 1E3, e ? d.drawImage(this._fullScreenCanvas$2, r, u, t, q) : a.drawImage(this._fullScreenCanvas$2, r, u, t, q))
				}
				e && this._mrtiBackCanvas$2.width && this._mrtiBackCanvas$2.height && (e && (a.translate(-this._mrtiBackCanvas$2.width / 2 + i.get_width() / 2, -this._mrtiBackCanvas$2.height / 2 + i.get_height() / 2), this._applyTransform$2(a, this._mrtiBackCanvas$2.width / 2, this._mrtiBackCanvas$2.height / 2)), a.drawImage(this._mrtiBackCanvas$2,
					0, 0));
				this._frame.get__mrtiRenderer().testDebug(this._chunkList$2.length, this._debug_time2$2, lt.Controls.Medical.Tools._recycledElements.length)
			} else this._updateView(0, !1);
			return this.get__enableMRTI()
		},
		_unRegisterRenderChunk: function() {
			null != this._frame.get__mrtiRenderer() && this._frame.get__mrtiRenderer().renderChunkCount && (this._frame.get__mrtiRenderer().remove_renderChunk(ss.Delegate.create(this, this._MRTIRenderer_RenderChunk$2)), this._frame.get__mrtiRenderer().renderChunkCount--)
		},
		_registerRenderChunk: function() {
			if(null !=
				this._mrtiImage && (null == this._frame.get__mrtiRenderer() && (this._frame.set__mrtiRenderer(new lt.Controls.Medical._mrtiRenderer(this._mrtiImage)), this._frame.get__mrtiRenderer().qualityFactor = this._qualityFactor$2, this._frame.set__magnifyMRTIRenderer(new lt.Controls.Medical._mrtiRenderer(this._mrtiImage))), 1 > this._frame.get__mrtiRenderer().renderChunkCount)) this._frame.get__mrtiRenderer().add_renderChunk(ss.Delegate.create(this, this._MRTIRenderer_RenderChunk$2)), this._frame.get__mrtiRenderer().renderChunkCount +=
				1
		},
		_connect: function(a) {
			this._mrtiImage = a;
			this._registerRenderChunk();
			null == this._chunkList$2 && (this._chunkList$2 = []);
			this._enableMRTI$2 = !0
		},
		_applyImageProcessingOnTiles: function() {
			for(var a = 0, b = this._chunkList$2.length, a = 0; a < b; a++) this._frame._applyImageProcessingOnChunk(this._chunkList$2[a]);
			this._frame._applyImageProcessingOnChunk(this._frame.thumbnailImage);
			this._frame._applyImageProcessingOnChunk(this._frame.lowResImage)
		},
		_MRTIRenderer_RenderChunk$2: function(a, b) {
			var c = new lt.Controls.Medical.ChunkData(b.get_chunkImage(),
				b.get_chunkRect(), b.get_resolution(), b.get_chunkCanvas());
			c.set_backCanvas(b.get_backCanvas());
			if(null != this._frame) {
				this._frame._applyImageProcessingOnChunk(c);
				for(var d = 0; d < this._chunkList$2.length; d++)
					if(c.equal(this._chunkList$2[d])) {
						lt.Controls.Medical.Tools._removeChunk(this._chunkList$2, d);
						break
					}
				this._chunkList$2.add(c);
				c = Date.get_now().getTime();
				this._clearUnnecessaryChunks();
				this._debug_time2$2 = Date.get_now().getTime() - c;
				this._frame.get__mrtiRenderer().testDebug(this._chunkList$2.length,
					this._debug_time2$2, lt.Controls.Medical.Tools._recycledElements.length);
				this._isPaintScheduled() || this._schedulePaint$2()
			}
		},
		_debug_time2$2: 0,
		_repaintTiles$2: function() {
			this._cancelPaintSchedule();
			this.invalidate()
		},
		_cancelPaintSchedule: function() {
			this._isPaintingSceduled$2 = !1;
			clearInterval(this._intervalId$2)
		},
		_isPaintScheduled: function() {
			return this._isPaintingSceduled$2
		},
		_isPaintingSceduled$2: !1,
		_intervalId$2: 0,
		_schedulePaint$2: function() {
			this._intervalId$2 = setInterval(ss.Delegate.create(this, this._repaintTiles$2),
				500);
			this._isPaintingSceduled$2 = !0
		},
		_MRTIRenderer_RenderCompleted$2: function() {
			this.get_imageViewer().invalidate(lt.LeadRectD.get_empty())
		},
		_tileResolution$2: null,
		get_tileResolution: function() {
			return this._tileResolution$2
		},
		set_tileResolution: function(a) {
			return this._tileResolution$2 = a
		},
		get__tileBackGroundResolution: function() {
			return this._tileBackGroundResolution$2
		},
		set__tileBackGroundResolution: function(a) {
			return this._tileBackGroundResolution$2 = a
		},
		_updateView: function(a, b) {
			var c, d, e = this.get_imageViewer().getItemBounds(this,
				lt.Controls.ImageViewerItemPart.view);
			c = -e.get_x();
			d = -e.get_y();
			var f = lt.Controls.Medical.MRTISubCell.getFloatImageRect(this.get_imageViewer(), this);
			if(!(null == this._mrtiImage || e.get_isEmpty()) && !f.get_isEmpty()) {
				e.offset(c, d);
				f.offset(c, d);
				e.clone();
				c = lt.LeadRectD.create(0, 0, e.get_width(), e.get_height());
				d = lt.LeadRectD.create(-f.get_x(), -f.get_y(), this._mrtiImage.get_fullSize().get_width() * this._scale$2 / 100, this._mrtiImage.get_fullSize().get_height() * this._scale$2 / 100);
				for(var g = 0, h = this._chunkList$2.length,
						e = [], g = 0; g < h; g++) e.add(this._chunkList$2[g]._getInfo());
				g = parseInt(d.get_width() * d.get_height());
				this.set_tileResolution(this._frame.get__mrtiRenderer().getNewResolution(g, this._mrtiImage, this._qualityFactor$2));
				this._frame.get__mrtiRenderer().tileResolution = this.get_tileResolution();
				this.set__tileBackGroundResolution(this._frame.get__mrtiRenderer().findBackGroundResolution(this._mrtiImage, this.get_tileResolution()));
				this._frame.get__mrtiRenderer().tileBackGroundResolution = this.get__tileBackGroundResolution();
				g = !1;
				lt.Controls.Medical.Tools._noNeedForTiles(f, this._frame, this.get_tileResolution()) && (g = !0);
				this._frame.get__mrtiRenderer().renderAsync(c, d, b ? null : e, null, a, lt.Controls.Medical.Tools._recycledElements, this._frame.get_flipped(), this._frame.get_reversed(), this._frame.get_rotateAngle(), g)
			}
		},
		_scale$2: 100,
		get__currentScale: function() {
			return this._scale$2
		},
		set__currentScale: function(a) {
			return this._scale$2 = a
		},
		_clearOverlappedChunks$2: function() {
			var a = this.get_imageViewer().getItemBounds(this, lt.Controls.ImageViewerItemPart.view),
				b = lt.Controls.Medical.MRTISubCell.getFloatImageRect(this.get_imageViewer(), this),
				c = -a.get_x(),
				d = -a.get_y();
			if(!a.get_isEmpty() && !b.get_isEmpty() && (a.offset(c, d), b.offset(c, d), a.clone(), a = lt.LeadRectD.create(0, 0, a.get_width(), a.get_height()), b = lt.LeadRectD.create(-b.get_x(), -b.get_y(), this._mrtiImage.get_fullSize().get_width() * this._scale$2 / 100, this._mrtiImage.get_fullSize().get_height() * this._scale$2 / 100), !(null == this.get_tileResolution() || this.get_tileResolution().get_isEmpty()))) {
				var b = this._frame.get__mrtiRenderer().findExpectedNumberOfChunks2(null,
						this._mrtiImage.get_tileSize(), a, b, this.get_tileResolution()),
					a = !1,
					c = b.length,
					d = !0,
					e, f;
				for(f = 0; f < this._chunkList$2.length; f++) this._chunkList$2[f]._status.visible = !0;
				for(d = 0; d < c; d++) {
					e = b[d];
					a = !1;
					for(f = 0; f < this._chunkList$2.length; f++)
						if(this._chunkList$2[f].equal(e)) {
							a = !0;
							break
						}
					if(!a) break
				}
				d = !a;
				null != this._frame.lowResImage && (this._frame.lowResImage._status.visible = d);
				null != this._frame.thumbnailImage && (this._frame.thumbnailImage._status.visible = d);
				if(a)
					for(f = this._chunkList$2.length - 1; 0 <= f; f--) null !=
						this.get_tileResolution() && !this.get_tileResolution().get_isEmpty() && this._chunkList$2[f].get_resolution().get_width() === this.get_tileResolution().get_width() || (this._chunkList$2[f]._status.visible = !1);
				else
					for(f = this._chunkList$2.length - 1; 0 <= f; f--) this._chunkList$2[f]._status.visible = !0
			}
		},
		_clearUnnecessaryChunks: function() {
			if(!(null == this._frame || null == this._frame.get__mrtiRenderer() || this._frame.get__mrtiRenderer()._dontRequest || null == this._mrtiImage)) {
				var a = this.get_imageViewer().getItemBounds(this,
					lt.Controls.ImageViewerItemPart.view);
				if(!a.get_isEmpty()) {
					var b = lt.Controls.Medical.MRTISubCell.getFloatImageRect(this.get_imageViewer(), this);
					if(!b.get_isEmpty()) {
						var c = -a.get_x(),
							d = -a.get_y();
						a.offset(c, d);
						b.offset(c, d);
						lt.Controls.Medical.Tools._clearOutsideChunks(b, a, this._frame.get__mrtiRenderer(), this._chunkList$2, this._frame, this._mrtiImage, this._scale$2);
						this._clearOverlappedChunks$2()
					}
				}
			}
		},
		_findResolutionInArray$2: function(a, b) {
			for(var c = 0, d = a.length, c = 0; c < d; c++)
				if(a[c].get_width() === b.get_width()) return c;
			return -1
		},
		_findResolution$2: function(a, b) {
			for(var c = 0, d = a.length, c = 0; c < d; c++)
				if(a[c].get_width() === b.get_width()) return c;
			return -1
		},
		_getArrangedResolution$2: function() {
			var a = [],
				b = 0,
				c = 0,
				d = this._chunkList$2.length,
				e = !1;
			lt.LeadPointD.create(1E6, 1E6);
			for(var f, b = 0; b < d; b++)
				if(f = this._chunkList$2[b].get_resolution(), this._chunkList$2[b]._status.visible && -1 === this._findResolution$2(a, f))
					if(f.get_width() === this.get_tileResolution().get_width()) e = !0;
					else {
						for(var g = !1, c = a.length - 1; 0 <= c; c--)
							if(f.get_width() <
								a[c].get_width()) {
								a.insert(c, f);
								g = !0;
								break
							}
						g || a.add(f)
					}
			e && a.add(this.get_tileResolution());
			return a
		}
	};
	Object.defineProperty(lt.Controls.Medical.MRTISubCell.prototype, "chunkList", {
		get: lt.Controls.Medical.MRTISubCell.prototype.get_chunkList,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MRTISubCell.prototype, "sizeChanged", {
		get: lt.Controls.Medical.MRTISubCell.prototype.__sizeChanged$2_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MRTISubCell.prototype,
		"tileResolution", {
			get: lt.Controls.Medical.MRTISubCell.prototype.get_tileResolution,
			set: lt.Controls.Medical.MRTISubCell.prototype.set_tileResolution,
			enumerable: !0,
			configurable: !0
		});
	lt.Controls.Medical._fullRes_Thumb_ImageInfo = function(a, b) {
		this.image = a;
		this.src = b
	};
	lt.Controls.Medical._fullRes_Thumb_ImageInfo.prototype = {
		image: null,
		src: null
	};
	lt.Controls.Medical._imagesLoader = function(a) {
		this._timerID = -1;
		this._imageElements = [];
		this._currentlyLoading = 0;
		this._imageCount = a
	};
	lt.Controls.Medical._imagesLoader.prototype = {
		_dummyImage: null,
		get_dummyImage: function() {
			null == this._dummyImage && (this._dummyImage = document.createElement("img"));
			return this._dummyImage
		},
		add_imageLoaded: function(a) {
			this.__imageLoaded = ss.Delegate.combine(this.__imageLoaded, a)
		},
		remove_imageLoaded: function(a) {
			this.__imageLoaded = ss.Delegate.remove(this.__imageLoaded, a)
		},
		__imageLoaded_handler_get: function() {
			null == this.__imageLoaded_handler && (this.__imageLoaded_handler = ss.EventHandler.create(this, this.add_imageLoaded, this.remove_imageLoaded));
			return this.__imageLoaded_handler
		},
		__imageLoaded: null,
		__imageLoaded_handler: null,
		_imageElements: null,
		get_imageElements: function() {
			return this._imageElements
		},
		_currentlyLoading: 0,
		_imageCount: 0,
		_loadAnotherImage: function() {
			clearInterval(this._timerID);
			this._timerID = -1;
			if(this._imageElements.length && this._currentlyLoading < this._imageCount) {
				var a = this._imageElements[0],
					b = ss.Delegate.create(this, this._imageLoadedSuccessfully);
				a.image.imageLoadedListener = b;
				a.image.addEventListener("load", b, !1);
				this._imageElements.removeAt(0);
				a.image.crossOrigin =
					"Anonymous";
				a.image.src = a.src;
				this._currentlyLoading++;
				this.startLoading()
			}
		},
		removeMyStuffFromTheList: function(a) {
			this.pauseLoading();
			for(var b = 0, c, b = this._imageElements.length - 1; 0 < b; b--) c = this._imageElements[b].image.Frame, c === a && this._imageElements.removeAt(b);
			this.resumeLoading()
		},
		_paused: !1,
		pauseLoading: function() {
			this._paused = !0
		},
		resumeLoading: function() {
			this._paused = !1
		},
		startLoading: function() {
			!this._paused && -1 === this._timerID && (this._timerID = setInterval(ss.Delegate.create(this, this._loadAnotherImage),
				1))
		},
		_imageLoadedSuccessfully: function(evt) {
			var img = evt.currentTarget;
			img.removeEventListener("load", img.imageLoadedListener, !1);
			this._currentlyLoading--;
			try {
				var frame = evt.currentTarget.Frame;
				null != frame ? frame._smallResolutionLoaded(evt) : null != this.__imageLoaded && this.__imageLoaded(this, lt.LeadEventArgs.Empty)
			} catch(d) {
				console.log(d.message)
			}
			this.startLoading()
		}
	};
	Object.defineProperty(lt.Controls.Medical._imagesLoader.prototype, "imageLoaded", {
		get: lt.Controls.Medical._imagesLoader.prototype.__imageLoaded_handler_get,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.Frame = function(a) {
		this._verticalAlignment = this._horizontalAlignment = 0;
		this._normalizedPosition = lt.LeadPointD.create(0, 0);
		this._backgroundSize = lt.LeadSizeD.create(640, 640);
		this._projectionOrientation = 0;
		this._parent = a;
		this._sizeMode = 2;
		this._zoom = 1;
		this._photometricInterpretation = "MONOCHROME2";
		this._maX_RESIZE_TOLERANCE = this._getMaxResize();
		this._retakes = new lt.LeadCollection;
		this._retakeIndex = -1;
		this._retakes.add_collectionChanged(ss.Delegate.create(this, this._retakes_CollectionChanged));
		this._originalRetakes = this._retakes;
		this._imageProcessingList = new lt.LeadCollection;
		this._imageProcessingList.add_collectionChanged(ss.Delegate.create(this, this._imageProcessingList_CollectionChanged));
		this._previewLoader = a.get__previewLoader();
		this._createWindowLevelInteractive()
	};
	lt.Controls.Medical.Frame.prototype = {
		_imagePosition: null,
		_imageOrientation: null,
		_orientationOverlay: null,
		_width: 0,
		_height: 0,
		_rowSpacing: 0,
		_columnSpacing: 0,
		_patientProjection: null,
		_instanceNumber: 0,
		_bitPerpixel: 0,
		_windowWidth: 0,
		_windowCenter: 0,
		_defaultWindowLevelWidth: 0,
		_defaultWindowLevelCenter: 0,
		_minValue: 0,
		_maxValue: 0,
		_lowBit: 0,
		_highBit: 0,
		_bitStored: 0,
		_rescaleintercept: 0,
		_rescaleSlope: 0,
		_voiLUTSequence: null,
		_imageType: null,
		_lossyCompression: !1,
		_imageQuality: null,
		_isWaveForm: !1,
		_frameOfReferenceID: null,
		_photometricInterpretation: null,
		_originalPhotometricInterpretation: null,
		_flipped: !1,
		_reversed: !1,
		_rotation: 0,
		_offsetX: 0,
		_offsetY: 0,
		_useDPI: !1,
		_userData: null,
		_parent: null,
		_information: null,
		_inverted: !1,
		_laterality: "",
		_deltaWidth: 0,
		_deltaCenter: 0,
		_container: null,
		_subCell: null,
		_shutterObject: null,
		_retakes: null,
		_originalRetakes: null,
		add_imageDataReady: function(a) {
			this.__imageDataReady = ss.Delegate.combine(this.__imageDataReady, a)
		},
		remove_imageDataReady: function(a) {
			this.__imageDataReady = ss.Delegate.remove(this.__imageDataReady, a)
		},
		__imageDataReady_handler_get: function() {
			null == this.__imageDataReady_handler && (this.__imageDataReady_handler = ss.EventHandler.create(this, this.add_imageDataReady, this.remove_imageDataReady));
			return this.__imageDataReady_handler
		},
		__imageDataReady: null,
		__imageDataReady_handler: null,
		_retakeIndex: 0,
		_viewPosition: null,
		_ultraSoundCalibrationRegion: null,
		get__ultraSoundCalibrationRegion: function() {
			return this._ultraSoundCalibrationRegion
		},
		set__ultraSoundCalibrationRegion: function(a) {
			return this._ultraSoundCalibrationRegion = a
		},
		get_laterality: function() {
			return this._laterality
		},
		set_laterality: function(a) {
			this._laterality = a;
			null != this._subCell && this._subCell._updateTag(11);
			return a
		},
		get_viewPosition: function() {
			return this._viewPosition
		},
		set_viewPosition: function(a) {
			this._viewPosition = a;
			this._updateOrientationBasedOnViewPosition();
			return a
		},
		_updateOrientationBasedOnViewPosition: function() {
			switch(this._viewPosition) {
				case "AP":
					this.set_patientProjection(["L", "F"]);
					break;
				case "PA":
					this.set_patientProjection(["R", "F"]);
					break;
				case "LL":
					this.set_patientProjection(["A", "F"]);
					break;
				case "RL":
					this.set_patientProjection(["P", "F"]);
					break;
				case "RLD":
					this.set_patientProjection(["F", "R"]);
					break;
				case "LLD":
					this.set_patientProjection(["H", "L"]);
					break;
				case "RLO":
					throw Error("not implemented yet");
				case "LLO":
					throw Error("not implemented yet");
			}
		},
		lowResImage: null,
		thumbnailImage: null,
		_normalizedPositionDelta: null,
		_json: null,
		get_JSON: function() {
			return this._json
		},
		set_JSON: function(a) {
			this._json = a;
			this._updateCalibrationRegion();
			return a
		},
		_getCalibrationScaleDirection: function(a, b) {
			switch(a) {
				case 3:
					return Math.abs(b)
			}
			return 1
		},
		_fillCalibrationScale: function(a, b) {
			var c, d, e, f;
			c = b.getDicomTag(1597476);
			d = b.getDicomTag(1597478);
			e = b.getDicomTag(1597484);
			f = b.getDicomTag(1597486);
			a.set_calibrationScaleX(this._getCalibrationScaleDirection(parseInt(c[0]), e[0]));
			a.set_calibrationScaleY(this._getCalibrationScaleDirection(parseInt(d[0]), f[0]));
			a.set_regionFlag(b.getDicomTag(1597462))
		},
		_updateCalibrationRegion: function() {
			null == this._ultraSoundCalibrationRegion && (this._ultraSoundCalibrationRegion = []);
			var a = (new lt.Controls.Medical._dicomDataSetJson(this._json)).getDicomTagObject(1597457);
			if(null != a) {
				var b = 0,
					c = a.length,
					d, e, f, g, h;
				if(c)
					for(b = 0; b < c; b++) h = new lt.Controls.Medical._dicomDataSetJson(a[b]),
						d = h.getDicomTag(1597464), f = h.getDicomTag(1597466), e = h.getDicomTag(1597468), g = h.getDicomTag(1597470), this._ultraSoundCalibrationRegion.add(new lt.Controls.Medical._ultraSoundCalibrationRegion(lt.LeadRectD.create(d[0], f[0], e[0] - d[0], g[0] - f[0]))), this._fillCalibrationScale(this._ultraSoundCalibrationRegion[this._ultraSoundCalibrationRegion.length - 1], h)
			}
		},
		_imageProcessingList: null,
		get_imageProcessingList: function() {
			return this._imageProcessingList
		},
		getPreviewCanvas: function() {
			var a = document.createElement("canvas"),
				b = null != this.lowResImage ? this.lowResImage : this.thumbnailImage;
			if(null != b) {
				a.width = b.get_canvas().width;
				a.height = b.get_canvas().height;
				var c = a.getContext("2d");
				1 === b.get_canvas().width ? c.drawImage(b._image, 0, 0) : c.drawImage(b.get_canvas(), 0, 0)
			}
			return a
		},
		_savePosition: function() {
			if(null != this._subCell) {
				var a = this._subCell.get__parentViewer().getItemViewBounds(this._subCell, lt.Controls.ImageViewerItemPart.view, !1),
					b = lt.Controls.Medical.MRTISubCell.getFloatImageRect(this._subCell.get__parentViewer(), this._subCell),
					c = (a.get_right() + a.get_left()) / 2,
					a = (a.get_bottom() + a.get_top()) / 2,
					d = (b.get_right() + b.get_left()) / 2,
					e = (b.get_bottom() + b.get_top()) / 2,
					c = d - c,
					a = e - a,
					c = Math.abs(c) < lt.Controls.Medical.Tools._epsilon ? 0 : c,
					a = Math.abs(a) < lt.Controls.Medical.Tools._epsilon ? 0 : a,
					c = c / (90 === this.get_rotateAngle() || 270 === this.get_rotateAngle() ? b.get_height() : b.get_width()),
					b = a / (90 === this.get_rotateAngle() || 270 === this.get_rotateAngle() ? b.get_width() : b.get_height());
				this._normalizedPositionDelta = lt.LeadPointD.create(c - this._normalizedPosition.get_x(),
					b - this._normalizedPosition.get_y());
				this._normalizedPosition = lt.LeadPointD.create(c, b)
			}
		},
		get_verticalAlignment: function() {
			return this._verticalAlignment
		},
		set_verticalAlignment: function(a) {
			this._verticalAlignment = a;
			this._offsetY = 0;
			if(null != this._subCell) return this._verticalAlignment || this._subCell.get_attachedFrame().set_offsetY(0), this._updateOffset(0, 0), this._updateAlignment(), a
		},
		get_horizontalAlignment: function() {
			return this._horizontalAlignment
		},
		set_horizontalAlignment: function(a) {
			this._horizontalAlignment =
				a;
			this._offsetX = 0;
			if(null != this._subCell) return this._horizontalAlignment || this._subCell.get_attachedFrame().set_offsetX(0), this._updateOffset(0, 0), this._updateAlignment(), a
		},
		_restorePosition: function() {
			if(null != this._subCell) {
				var a = this._subCell.get__parentViewer().getItemViewBounds(this._subCell, lt.Controls.ImageViewerItemPart.view, !1),
					b = lt.Controls.Medical.MRTISubCell.getFloatImageRect(this._subCell.get__parentViewer(), this._subCell),
					c = (a.get_right() + a.get_left()) / 2,
					a = (a.get_bottom() + a.get_top()) /
					2,
					d = (b.get_right() + b.get_left()) / 2,
					e = (b.get_bottom() + b.get_top()) / 2,
					c = d - c,
					e = e - a,
					a = this._normalizedPosition.get_x() * (90 === this.get_rotateAngle() || 270 === this.get_rotateAngle() ? b.get_height() : b.get_width()),
					b = this._normalizedPosition.get_y() * (90 === this.get_rotateAngle() || 270 === this.get_rotateAngle() ? b.get_width() : b.get_height()) - e,
					c = a - c,
					c = Math.abs(c) < lt.Controls.Medical.Tools._epsilon ? 0 : c,
					b = Math.abs(b) < lt.Controls.Medical.Tools._epsilon ? 0 : b;
				this._subCell.offsetBy(lt.LeadPointD.create(c, b))
			}
		},
		_MRTIRenderer: null,
		_magnifyMRTIRenderer: null,
		_mrtiImage: null,
		get__mrtiRenderer: function() {
			return this._MRTIRenderer
		},
		set__mrtiRenderer: function(a) {
			return this._MRTIRenderer = a
		},
		get__magnifyMRTIRenderer: function() {
			return this._magnifyMRTIRenderer
		},
		set__magnifyMRTIRenderer: function(a) {
			return this._magnifyMRTIRenderer = a
		},
		add__renderThumbnail: function(a) {
			this.__renderThumbnail = ss.Delegate.combine(this.__renderThumbnail, a)
		},
		remove__renderThumbnail: function(a) {
			this.__renderThumbnail = ss.Delegate.remove(this.__renderThumbnail,
				a)
		},
		__renderThumbnail_handler_get: function() {
			null == this.__renderThumbnail_handler && (this.__renderThumbnail_handler = ss.EventHandler.create(this, this.add__renderThumbnail, this.remove__renderThumbnail));
			return this.__renderThumbnail_handler
		},
		__renderThumbnail: null,
		add__renderLowResolution: function(a) {
			this.__renderLowResolution = ss.Delegate.combine(this.__renderLowResolution, a)
		},
		remove__renderLowResolution: function(a) {
			this.__renderLowResolution = ss.Delegate.remove(this.__renderLowResolution, a)
		},
		__renderLowResolution_handler_get: function() {
			null ==
				this.__renderLowResolution_handler && (this.__renderLowResolution_handler = ss.EventHandler.create(this, this.add__renderLowResolution, this.remove__renderLowResolution));
			return this.__renderLowResolution_handler
		},
		__renderLowResolution: null,
		_getAutoScaleValue: function(a) {
			var b = a.getContext("2d").getImageData(0, 0, a.width, a.height),
				a = 0,
				c = b.data.length,
				b = b.data,
				d, e = "";
			d = b[0];
			if(12 !== d) this.get_information().set_autoScaleSlope(1), this.get_information().set_autoScaleIntercept(0);
			else {
				for(a += 4; a < c; a += 4) {
					d = b[a];
					if(11 === d) d = ".";
					else if(12 === d) break;
					else if(13 === d) break;
					else d = 14 === d ? "-" : d;
					e += d
				}
				this.get_information().set_autoScaleIntercept(parseFloat(e));
				a += 4;
				for(e = ""; a < c; a += 4) {
					d = b[a];
					if(11 === d) d = ".";
					else if(12 === d) break;
					else if(13 === d) break;
					else d = 14 === d ? "-" : d;
					e += d
				}
				this.get_information().set_autoScaleSlope(parseFloat(e));
				a += 4;
				this.get_information().set_signed(1 === b[a] ? !0 : !1);
				a += 4;
				if(12 !== b[a]) {
					a += 4;
					for(e = ""; a < c; a += 4) {
						d = b[a];
						if(11 === d) d = ".";
						else if(12 === d) break;
						else if(13 === d) break;
						else d = 14 === d ? "-" : d;
						e +=
							d
					}
					e && this.get_information().set_minValue(parseInt(e));
					a += 4;
					for(e = ""; a < c; a += 4) {
						d = b[a];
						if(11 === d) d = ".";
						else if(12 === d) break;
						else if(13 === d) break;
						else d = 14 === d ? "-" : d;
						e += d
					}
					e && this.get_information().set_maxValue(parseInt(e));
					this._autoScaleValuesRetreived = !0
				}
			}
		},
		_autoScaleValuesRetreived: !1,
		_smallResolutionLoaded: function(evt) {
			var img = evt.currentTarget;
			lt.Controls.Medical._parser.parseString(img.getAttribute("fullSize"), 0);
			var b = img.Thumbnail,
				res = lt.LeadSizeD.create(img.ResWidth, img.ResHeight);
			this._updateAnnotationContainerSize();
			var rect = lt.LeadRectD.create(0, 0, this._mrtiImage.get_fullSize().get_width(), this._mrtiImage.get_fullSize().get_height()),
				chunkData = new lt.Controls.Medical.ChunkData(img, rect, res, null);
			
			if(b) {
				if(null != this.thumbnailImage) {
					lt.Controls.Medical.Tools._addChunkToRecycled(this.thumbnailImage), chunkData.set_backCanvas(this.thumbnailImage.get_backCanvas()), chunkData.set_canvas(this.thumbnailImage.get_canvas());
				};
				
				if(null != this._subCell){
					this.thumbnailImage = lt.Controls.Medical._rendererTools.drawChunkOnCanvas(this._mrtiImage, chunkData, img, lt.LeadSizeD.create(img.naturalWidth, img.naturalHeight), res);
				};
				
				if(null != this.__renderThumbnail)
					this.__renderThumbnail(this, new lt.Controls.Medical._mrtiRenderChunkEventArgs(null, null, null, rect, img, res, chunkData, chunkData.get_canvas(), chunkData.get_backCanvas()));
				
				this.remove__renderThumbnail(ss.Delegate.create(this, this._MRTIRenderer_RenderThumbnail));
			}else{
				if(null != this._subCell) {
					if(null != this.lowResImage) {
						lt.Controls.Medical.Tools._addChunkToRecycled(this.lowResImage);
						chunkData.set_backCanvas(this.lowResImage.get_backCanvas());
						chunkData.set_canvas(this.lowResImage.get_canvas());
					};
					this.lowResImage = lt.Controls.Medical._rendererTools.drawChunkOnCanvas(this._mrtiImage, chunkData, img, lt.LeadSizeD.create(img.naturalWidth, img.naturalHeight), res);
				};
				
				if(null != this.__renderLowResolution)
					this.__renderLowResolution(this, new lt.Controls.Medical._mrtiRenderChunkEventArgs(null, null, null, rect, img, res, chunkData, chunkData.get_canvas(), chunkData.get_backCanvas()));
				
				this.remove__renderLowResolution(ss.Delegate.create(this, this._mrtiRenderer_RenderLowResolution))
			};
			
			this._parent._fireEvent(this, 5, null);
		},
		_construct_fileName: function(a, b, c, d) {
			var e = this._mrtiImage.get_imageUri(),
				e = String.format("{0}&frame={1}&x={2}&y={3}&w={4}&h={5}&xr={6}&yr={7}&wldata={8}", this._mrtiImage.get_imageUri(), this._mrtiImage.get_frameIndex(), a.get_left(), a.get_top(), c ? 0 : a.get_width(), c ? 0 : a.get_height(), b.get_width(), b.get_height(), this._mrtiImage.get_supportWindowLevel());
			if(null != d) {
				var e = e + "&data=" + d.get_command(),
					f = d.get_arguments(),
					g = "";
				Object.keys(f).forEach(function(a) {
					g += "," + a + ":" + f[a]
				});
				e = e + (g + ";") + ("r=" + Date.get_now().getTime())
			}
			return e
		},
		_refreshLowRes: function() {
			this.add__renderLowResolution(ss.Delegate.create(this,
				this._mrtiRenderer_RenderLowResolution));
			this.add__renderThumbnail(ss.Delegate.create(this, this._MRTIRenderer_RenderThumbnail));
			null != this.lowResImage && this._requestFullImage(this.lowResImage._image, this.lowResImage.get_resolution(), !1);
			null != this.thumbnailImage && this._requestFullImage(this.thumbnailImage._image, this.thumbnailImage.get_resolution(), !0);
			this._previewLoader.startLoading()
		},
		_requestFullImage: function(img, res, c) {
			img.setAttribute("fullSize", lt.Controls.Medical._parser.convertToString(this._mrtiImage.get_fullSize()));
			img.Thumbnail = c;
			img.ResWidth = res.get_width();
			img.ResHeight = res.get_height();
			img.Frame = this;
			
			if(null != this.get_parentCell())
				this.get_parentCell().get__previewLoader().get_imageElements().add(new lt.Controls.Medical._fullRes_Thumb_ImageInfo(img, lt.Controls.Medical._imageLoader.temp_construct_fileName(lt.LeadRectD.create(0, 0, 0, 0), res, !0, this._mrtiImage, this._MRTIRenderer)));
		},
		get_backgroundSize: function() {
			return this._backgroundSize
		},
		set_backgroundSize: function(a) {
			return this._backgroundSize = a
		},
		_smallResolutionWholeImage: null,
		_thumbnailWholeImage: null,
		_isWithinRange: function(a) {
			var a = a.get_parentCell(),
				b = !0;
			if(a.get_fullDownload()) return b;
			var c = a.get_currentOffset(),
				b = Math.max(0, c - a.get_marginFramesCount()),
				c = Math.min(a.get_frames().get_count(), c + a.get_marginFramesCount() + a.get_imageViewer().get_items().get_count()),
				a = a.get_frames().indexOf(this);
			return a >= b && a < c
		},
		_requestLowRes: function() {
			var res = lt.LeadSizeD.get_empty();
			lt.LeadSizeD.get_empty();
			
			null == this._smallResolutionWholeImage && this.add__renderLowResolution(ss.Delegate.create(this, this._mrtiRenderer_RenderLowResolution));
			
			var resolutions = this._mrtiImage.get_resolutions();
			
			if(resolutions[0].get_width() < this._backgroundSize.get_width() && resolutions[0].get_height() < this._backgroundSize.get_height()) 
				res = resolutions[0];
			else
				for(var b = 0; b < resolutions.length; b++)
					if(resolutions[b].get_width() <= this._backgroundSize.get_width() && resolutions[b].get_height() <= this._backgroundSize.get_height()) {
						res = resolutions[b];
						break;
					}
			
			null == this._thumbnailWholeImage && this.add__renderThumbnail(ss.Delegate.create(this, this._MRTIRenderer_RenderThumbnail));
			
			for(b = 0; b < resolutions.length; b++)
				if(64 >= Math.max(resolutions[b].get_width(), resolutions[b].get_height())) {
					this._mrtiImage.get_resolutions();
					break;
				}
			
			null == this._smallResolutionWholeImage && (this._smallResolutionWholeImage = document.createElement("img"));
			
			this._isWithinRange(this) && this._requestFullImage(this._smallResolutionWholeImage, res, !1);
			
			this._previewLoader.startLoading()
		},
		get_mrtiInfo: function() {
			return this._mrtiImage
		},
		set_mrtiInfo: function(a) {
			if(null != a) {
				this._mrtiImage = a;
				this._requestLowRes();
				
				if(null != this._subCell) {
					this._subCell._mrtiImage = this._mrtiImage;
					this._subCell.set__enableMRTI(!0);
					
					if(null != this._mrtiImage){
						this._subCell.set_imageSize(this._mrtiImage.get_fullSize().clone());
						this._updateAnnotationContainerSize();
						this._subCell.set_offset(lt.LeadPointD.create(1, 1));
						this._updateSubCellZoom();
						this._updateOffset(0, 0);
					}
				}
				
				return a;
			}
		},
		get_retakeIndex: function() {
			return this._retakeIndex
		},
		set_retakeIndex: function(a) {
			this._updateRetakeFrame(a);
			return a
		},
		_NFrame: null,
		get_nFrame: function() {
			return this._NFrame
		},
		set_nFrame: function(a) {
			return this._NFrame = a
		},
		get_retakes: function() {
			return this._retakes
		},
		set_retakes: function(a) {
			return this._retakes = a
		},
		_updateRetakeFrame: function(a) {
			var b = this._subCell,
				c = null,
				d = null; - 1 !== this._retakeIndex && (c = this._retakes.get_item(this._retakeIndex));
			null != this._NFrame ? (d = this._NFrame, c.set_retakes(d.get_retakes()),
				c._retakeIndex = d.get_retakeIndex()) : (d = this, c = this);
			var e = this._parent.get_frames().indexOf(c);
			this._retakeIndex !== a && (c._attach(null), this._retakeIndex = a, this._retakeIndex >= this._retakes.get_count() && (this._retakeIndex = -1), -1 !== this._retakeIndex ? (c = this._retakes.get_item(this._retakeIndex), this._parent.get_frames().set_item(e, c), this._parent._updateFrameWithSubCell(c, b), c.set_retakes(this._retakes), c._retakeIndex = this._retakeIndex) : (this._parent.get_frames().set_item(e, d), this._parent._updateFrameWithSubCell(d,
				b), d._retakeIndex = this._retakeIndex), b.updateOverlay(), b._updateTag(10))
		},
		get_subCell: function() {
			return this._subCell
		},
		get_shutter: function() {
			return this._shutterObject
		},
		get_imageQuality: function() {
			return this._imageQuality
		},
		get_container: function() {
			null == this._container && (this._createAnnotationContainer(), this._updateAnnotationContainerSize());
			return this._container
		},
		_enableDraw: !0,
		get_enableDraw: function() {
			return this._enableDraw
		},
		set_enableDraw: function(a) {
			this._enableDraw !== a && (this._enableDraw =
				a, null != this._subCell && this._subCell.invalidate());
			return a
		},
		get_parentCell: function() {
			return this._parent
		},
		_drawWindowLevel: !1,
		_drawClientVersion: !0,
		_fullImageReceived: !1,
		get__drawClientVersion: function() {
			return this._drawClientVersion
		},
		set__drawClientVersion: function(a) {
			return this._drawClientVersion = a
		},
		_getRender: function() {
			return this._WLRenderer
		},
		_maX_RESIZE_TOLERANCE: 0,
		_getMaxResize: function() {
			return 225E4
		},
		_updateBasedOnTargetOrientation: function() {
			if(!(null == this._targetOrientation || null ==
					this._orientationOverlay)) {
				var a = this._orientationOverlay.getLeft(),
					b = this._orientationOverlay.getTop(),
					c = this._orientationOverlay.getRight(),
					d = this._orientationOverlay.getBottom(),
					e = this._targetOrientation[0],
					f = this._targetOrientation[1],
					g = 0,
					h = !1,
					i = !1;
				e === a ? f !== b && f === d && (h = !0) : e === b ? f === c ? g = 270 : f === a && (g = 270, i = !0) : e === c ? f === d ? g = 180 : f === b && (g = 180, h = !0) : e === d && (f === a ? g = 90 : f === c && (g = 90, i = !0));
				g && this.set_rotateAngle(this.get_rotateAngle() + g);
				h && this.set_flipped(1 === (this.get_flipped() ^ h));
				i && this.set_reversed(1 ===
					(this.get_reversed() ^ i))
			}
		},
		_initializeTargetOrientation: function() {
			null == this._orientationOverlay ? this._targetOrientation = null : (null == this._targetOrientation && (this._targetOrientation = Array(2)), this._targetOrientation[0] = this._orientationOverlay.getLeft(), this._targetOrientation[1] = this._orientationOverlay.getTop())
		},
		_targetOrientation: null,
		get_targetOrientation: function() {
			this._initializeTargetOrientation();
			return this._targetOrientation
		},
		set_targetOrientation: function(a) {
			this._targetOrientation =
				a;
			this._updateBasedOnTargetOrientation();
			return a
		},
		get__orientationOverlay: function() {
			return this._orientationOverlay
		},
		get__deltaWidth: function() {
			return this._deltaWidth
		},
		set__deltaWidth: function(a) {
			return this._deltaWidth = a
		},
		get__deltaCenter: function() {
			return this._deltaCenter
		},
		set__deltaCenter: function(a) {
			return this._deltaCenter = a
		},
		_invertPhotometric: function(a) {
			var b = this._subCell;
			this._supportWindowLevel() ? a ? this._originalPhotometricInterpretation === this._photometricInterpretation && (this._photometricInterpretation =
				"MONOCHROME1" === this._originalPhotometricInterpretation ? "MONOCHROME2" : "MONOCHROME1", this._originalPhotometricInterpretation || (this._originalPhotometricInterpretation = this._photometricInterpretation), null != b && b._applyImageProcessingOnTiles()) : this._originalPhotometricInterpretation && this._originalPhotometricInterpretation !== this._photometricInterpretation && (this._photometricInterpretation = this._originalPhotometricInterpretation, null != b && b._applyImageProcessingOnTiles()) : null != b && b._applyImageProcessingOnTiles()
		},
		get_inverted: function() {
			return this._inverted
		},
		set_inverted: function(a) {
			this._inverted = a;
			this._invertPhotometric(this._inverted);
			this._invertFrame(null);
			null != this._subCell && (this._subCell.invalidate(), this._rerenderWindowLevel(-1, -1), this._parent._fireEvent(this, 0, null));
			return a
		},
		_updatePanZoom: function(a) {
			a.zoom(this._getImageViewerSizeMode(this._sizeMode), this._zoom, a.get_defaultZoomOrigin());
			this._updateOffset(this.get_offsetX(), this.get_offsetY())
		},
		_setDisplayVersion: function() {},
		_clearFrame: function() {
			null !=
				this.lowResImage && (lt.Controls.Medical.Tools.resetCanvas(this.lowResImage.get_canvas()), lt.Controls.Medical.Tools.resetCanvas(this.lowResImage.get_backCanvas()));
			null != this.thumbnailImage && (lt.Controls.Medical.Tools.resetCanvas(this.thumbnailImage.get_canvas()), lt.Controls.Medical.Tools.resetCanvas(this.thumbnailImage.get_backCanvas()))
		},
		_prepareCanvas: function(a, b) {
			b.width = a.naturalWidth;
			b.height = a.naturalHeight;
			b.style.width = b.width + "px";
			b.style.height = b.height + "px"
		},
		_prepareFullImageChunk: function(a) {
			if(null !=
				a) {
				null == a.get_canvas() && a.set_canvas(document.createElement("canvas"));
				this._prepareCanvas(a._image, a.get_canvas());
				null == a.get_backCanvas() && a.set_backCanvas(document.createElement("canvas"));
				this._prepareCanvas(a._image, a.get_backCanvas());
				var b = a.get_backCanvas().getContext("2d");
				b.clearRect(0, 0, a.get_canvas().width, a.get_canvas().height);
				b.drawImage(a._image, 0, 0);
				this._applyImageProcessingOnChunk(a)
			}
		},
		_prepareMRTIChunkCanvas: function() {
			this._prepareFullImageChunk(this.lowResImage);
			this._prepareFullImageChunk(this.thumbnailImage);
			null != this._windowLevelData && null != this._information && this._windowLevelData.set_canvas(this._information.get_canvas())
		},
		_attachSutter: function() {
			null != this._parent && null == this._shutterObject && null != this._subCell && (this._shutterObject = new lt.Controls.Medical.ShutterObject(this, this._parent.get_automation()), null != this._shutterObject && this._shutterObject.attach(this._subCell))
		},
		_enableAnnotationContainer: function(a, b) {
			null != a && (a.set_isVisible(b), a.set_isEnabled(b), a.AttachedSubCell = b ? this._subCell :
				null, b && this._updateAnnotationContainerSize())
		},
		_attach: function(a) {
			var b = null,
				c = null;
			null != this._subCell && (b = null == this._subCell.get_attachedFrame() ? null : this._subCell.get_attachedFrame().get_container(), c = this._subCell);
			Type.canCast(this._subCell, lt.Controls.Medical.MRTISubCell) && (null != this._mrtiImage && (this._subCell._mrtiImage = null), this._subCell._clearChunks());
			this._subCell = a;
			null == this._subCell ? (null != c && (c._unRegisterRenderChunk(), c._frame = null), this._clearFrame()) : (this._subCell._frame = this,
				this._prepareMRTIChunkCanvas(), this._subCell._registerRenderChunk());
			this._attachSutter();
			null == this._subCell ? this._enableAnnotationContainer(b, !1) : (null != this._subCell._frame && this._subCell._frame._assignRenderer(), null != this._subCell && Type.canCast(this._subCell, lt.Controls.Medical.MRTISubCell) && null != this._mrtiImage && (this._subCell._mrtiImage = this._mrtiImage, this._subCell.set__enableMRTI(!0), null != this._mrtiImage && this._subCell.set_imageSize(this._mrtiImage.get_fullSize().clone())), null != this._subCell.get_attachedFrame() &&
				this._enableAnnotationContainer(this._subCell.get_attachedFrame().get_container(), !0), this._setImageDpi(), this.zoom(this.get_scaleMode(), this.get_scale()), this._updateBasedOnTargetOrientation(), this._subCell._onFrameAttached(this._subCell, this))
		},
		_setDpi: function() {
			var a, b;
			b = this._columnSpacing ? 25.4 / this._columnSpacing : 150;
			a = this._rowSpacing ? 25.4 / this._rowSpacing : 150;
			this._subCell.get_resolution().set_width(parseInt(a));
			this._subCell.get_resolution().set_height(parseInt(b))
		},
		_updateViewerPosition: function() {},
		_createAnnotationContainer: function() {
			this._container = new lt.Annotations.Core.AnnContainer;
			this._container.set_isEnabled(!1);
			this._container.set_isVisible(!1);
			this._container.AttachedSubCell = this._subCell;
			this._container.get_mapper().set_fontRelativeToDevice(!1);
			this._container.set_size(this._container.get_mapper().sizeToContainerCoordinates(lt.LeadSizeD.create(256, 256)));
			this._parent.get_automation().get_containers().add(this._container);
			this._parent.get_automation().get_automationControl().automationInvalidate(lt.LeadRectD.get_empty())
		},
		_dpiY: 0,
		_dpiX: 0,
		_dataReady: !1,
		_zoom: 0,
		_applyFilter: function(a, b) {
			if(!(null == a || null == a.get_canvas())) {
				var c = a.get_canvas().getContext("2d"),
					d = c.getImageData(0, 0, a.get_canvas().width, a.get_canvas().height);
				b.set_imageData(d);
				b.run();
				c.putImageData(d, 0, 0)
			}
		},
		_removeNonVisibleChunks: function() {
			if(null != this._subCell)
				for(var a = this._subCell.get_chunkList(), b = 0, c, b = a.length - 1; 0 <= b; b--) c = a[b], c._status.visible || lt.Controls.Medical.Tools._removeChunk(a, b)
		},
		_previewLoader: null,
		_imageProcessingList_CollectionChanged: function(a,
			b) {
			null != this._MRTIRenderer && (this._MRTIRenderer.imageProcessingList = this._imageProcessingList);
			if(b.get_action() === lt.NotifyLeadCollectionChangedAction.add) {
				var c = b.get_newItems()[0],
					d = this._subCell;
				c.set_runInMainThread(!0);
				c.ReadyToProcess = !!c.get_jsFilePath().trim();
				var e = 0,
					f = d.get_chunkList().length;
				if(c.ReadyToProcess) {
					for(e = 0; e < f; e++) this._applyFilter(d.get_chunkList()[e], c);
					this._applyFilter(this.lowResImage, c);
					this._applyFilter(this.thumbnailImage, c);
					this._refreshLowRes()
				} else null == this._previewLoader &&
					(this._previewLoader = new lt.Controls.Medical._imagesLoader(6)), this._MRTIRenderer.get_alreadyRequested().clear(), this._previewLoader.add_imageLoaded(ss.Delegate.create(this, this._previewLoader_ImageLoaded)), this._previewLoader.IP = c, this._previewLoader.get_imageElements().add(new lt.Controls.Medical._fullRes_Thumb_ImageInfo(this._previewLoader.get_dummyImage(), this._construct_fileName(lt.LeadRectD.create(0, 0, 1, 1), this._mrtiImage.get_resolutions()[this._mrtiImage.get_resolutions().length - 1], !1, c))),
					this._previewLoader.startLoading()
			} else b.get_action() === lt.NotifyLeadCollectionChangedAction.remove && this._updateImageProcessingList()
		},
		_previewLoader_ImageLoaded: function() {
			this._previewLoader.remove_imageLoaded(ss.Delegate.create(this, this._previewLoader_ImageLoaded));
			var a = this._previewLoader.IP;
			a.ReadyToProcess = !0;
			null != this._parent && this._parent._fireEvent(this, 3, new lt.Controls.Medical.ImageProcessingReadyEventArgs(this, a));
			this._updateImageProcessingList()
		},
		_retakes_CollectionChanged: function(a,
			b) {
			if(b.get_action() === lt.NotifyLeadCollectionChangedAction.add)
				for(var c = 0, d = b.get_newItems().length, e; c < d; c++) e = b.get_newItems()[c], e.set_nFrame(this);
			else if(b.get_action() === lt.NotifyLeadCollectionChangedAction.remove || b.get_action() === lt.NotifyLeadCollectionChangedAction.reset) {
				c = 0;
				for(d = b.get_newItems().length; c < d; c++) e = b.get_newItems()[c], e._attach(null), e.dispose();
				this._retakeIndex >= this._retakes.get_count() && this._updateRetakeFrame(this._retakes.get_count() - 1)
			}
		},
		_originalWindowLevelWidth: 0,
		_originalWindowLevelCenter: 0,
		_windowLevel_Started: function(a) {
			null == this._WLRenderer ? a.set_data(null) : (null != this._subCell && (this.set__drawClientVersion(!0), this._drawWindowLevel = !0, this._subCell.invalidate()), a.set_data(this._windowLevelData), this._originalWindowLevelWidth = this._WLRenderer.get_windowLevelWidth(), this._originalWindowLevelCenter = this._WLRenderer.get_windowLevelCenter())
		},
		_windowLevel_Delta: function(a, b) {
			var c = parseInt(b.get_change().get_x()),
				d = parseInt(b.get_change().get_y()),
				e = this._parent,
				f = this._subCell.get_attachedFrame();
			if(e.get_linked())
				for(var g = 0, h = e.get_frames().get_count(), i; g < h; g++) i = e.get_frames().get_item(g), i !== f && (i.set__deltaWidth(i.get__deltaWidth() + c), i.set__deltaCenter(i.get__deltaCenter() + d))
		},
		_windowLevel_Completed: function(a) {
			var b = this._parent;
			if(b.get_linked()) {
				var c = 0,
					d = b.get_frames().get_count(),
					e;
				for(b.get_imageViewer().beginUpdate(); c < d; c++)
					if(e = b.get_frames().get_item(c), e !== this && (e.get__deltaWidth() || e.get__deltaCenter()) && null != e.get_wlRenderer()) a.set_data(e.get_wlData()),
						e.setWindowLevel(e.get_windowWidth(), e.get_windowCenter());
				a.set_data(this.get_wlData());
				b.get_imageViewer().endUpdate()
			}
		},
		_clearWindowLevelInteractiveMode: function() {},
		_deleteWindowLevelInteractiveMode: function() {
			this._clearWindowLevelInteractiveMode()
		},
		get_wlData: function() {
			return this._windowLevelData
		},
		_windowLevelData: null,
		_createWindowLevelInteractive: function() {
			null == this._windowLevelData && (this._windowLevelData = new lt.Controls.Medical.WindowLevelData, this._windowLevelData.Frame = this, this._windowLevelData.set_enableWindowLevelSensitivity(!0),
				this._windowLevelData.set_dragDeltaSensitivity(3))
		},
		get_userData: function() {
			return this._userData
		},
		set_userData: function(a) {
			return this._userData = a
		},
		dispose: function() {
			if(null != this._NFrame)
				for(var a = this._retakes.get_count() - 1, b; - 1 < a; a--) b = this._retakes.get_item(a), this._retakes.removeAt(a), b.dispose();
			this._originalRetakes.remove_collectionChanged(ss.Delegate.create(this, this._retakes_CollectionChanged));
			this._disposeMRTIStuff();
			this._deleteWindowLevelInteractiveMode();
			null != this._previewLoader &&
				this._previewLoader.removeMyStuffFromTheList(this)
		},
		_disposeMRTIStuff: function() {
			null != this.get__mrtiRenderer() && this.set__mrtiRenderer(null);
			null != this.get__magnifyMRTIRenderer() && this.set__magnifyMRTIRenderer(null)
		},
		get_isDataReady: function() {
			return this._dataReady
		},
		set_isDataReady: function(a) {
			return this._dataReady = a
		},
		_updatePhotometric: function() {
			var a = this._inverted,
				b = this._information.get_photometricInterpretation();
			if("MONOCHROME2" === b || "MONOCHROME1" === b) {
				if(!a && this._photometricInterpretation ===
					this._information.get_photometricInterpretation() || a && this._photometricInterpretation !== this._information.get_photometricInterpretation()) return !1;
				if("MONOCHROME2" === this._information.get_photometricInterpretation()) return this._information.set_photometricInterpretation("MONOCHROME1"), !0;
				if("MONOCHROME1" === this._information.get_photometricInterpretation()) return this._information.set_photometricInterpretation("MONOCHROME2"), !0
			}
			return !1
		},
		_applyWindowLevelOnTiles: function() {
			this._WLRenderer = this._getWLRenderer();
			if(null != this._WLRenderer) {
				var a = this._subCell;
				if(null != a)
					for(var b = 0, c = a.get_chunkList().length, b = 0; b < c; b++) {
						var d = a.get_chunkList()[b].get_canvas().getContext("2d");
						d.clearRect(0, 0, a.get_chunkList()[b].get_backCanvas().width, a.get_chunkList()[b].get_backCanvas().height);
						d.drawImage(a.get_chunkList()[b].get_backCanvas(), 0, 0);
						this._WLRenderer._renderInPlace(a.get_chunkList()[b])
					}
			}
		},
		_mrti_renderer_Changed: function(a) {
			null != this._subCell && (this._windowWidth = a.get_windowLevelWidth(), this._windowCenter =
				a.get_windowLevelCenter(), this._deltaCenter = this._deltaWidth = 0, null == this._subCell.get_imageViewer() || null == this._subCell.get_imageViewer().get_foreCanvas() || (this._subCell._updateTag(0), this._subCell.invalidate()))
		},
		_mrti_renderer_UpdateImageData: function() {
			var a = this._subCell;
			null != a && !(null == a.get_imageViewer() || null == a.get_imageViewer().get_foreCanvas()) && this._subCell.invalidate()
		},
		_onWindowLevelRendererCreated: function() {
			this._checkImageQuality();
			var a = this._getWindowLevelValues();
			this._windowWidth ||
				(this._defaultWindowLevelWidth ? (this._windowWidth = this._defaultWindowLevelWidth, this._windowCenter = this._defaultWindowLevelCenter) : (this._windowWidth = a.width, this._windowCenter = a.center, this._defaultWindowLevelWidth = a.width, this._defaultWindowLevelCenter = a.center));
			this._dataReady = !0;
			this._incorporateDeltaIntoWindowLevel();
			null != this._subCell && (this._subCell._updateTag(0), this._subCell._updateTag(3));
			this._windowLevelData.set_canvas(this._information.get_canvas());
			this._windowLevelData.set_renderer(this._WLRenderer)
		},
		_isCanvasDispose: function(a, b) {
			return null == a ? !0 : null != this.get_information() ? a.width !== b.width : 1 === a.width && 1 === a.height
		},
		_getWLRenderer: function() {
			if(null != this._WLRenderer) return this._WLRenderer;
			if(null == this.get_information()) return null;
			var a = null != this.lowResImage ? this.lowResImage : this.thumbnailImage;
			if(null == a || null == a._image) return null;
			var b = null != a ? a.get_backCanvas() : null,
				c = !1;
			this._isCanvasDispose(b, a._image) && (c = !0, b = lt.Controls.Medical._rendererTools.prepareBackCanvas(b, a._image, a._image.naturalWidth,
				a._image.naturalHeight));
			this._supportWindowLevel() && (this._autoScaleValuesRetreived || this._getAutoScaleValue(b));
			null != b && this.get_information().set_canvas(b);
			this._WLRenderer = new lt.Controls.Medical.DICOMImageInformationRenderer(this.get_information());
			this._WLRenderer.add_updateImageData(ss.Delegate.create(this, this._mrti_renderer_UpdateImageData));
			this._WLRenderer.add_changed(ss.Delegate.create(this, this._mrti_renderer_Changed));
			this._onWindowLevelRendererCreated();
			c && lt.Controls.Medical.Tools._disposeCanvas(b);
			return this._WLRenderer
		},
		get_information: function() {
			return this._information
		},
		set_information: function(a) {
			null == this._information && (this._information = a);
			this._photometricInterpretation = this._information.get_photometricInterpretation();
			this._frameImageReady("info");
			this._supportWindowLevel() && null != this._mrtiImage && this._applyWindowLevelOnTiles();
			this._inverted && this._updatePhotometric();
			return a
		},
		get_imagePosition: function() {
			return this._imagePosition
		},
		set_imagePosition: function(a) {
			return this._imagePosition =
				a
		},
		get_imageOrientation: function() {
			return this._imageOrientation
		},
		set_imageOrientation: function(a) {
			this._imageOrientation = a;
			if(null != this._imageOrientation) return null == this.get_patientProjection() && (this._orientationOverlay = new lt.Controls.Medical._orientationLetters(this._imageOrientation)), this._orientationOverlay.updateImageProjection(this._projectionOrientation), this._updateBasedOnTargetOrientation(), null != this._subCell && this._subCell._reRenderOverlay(), a
		},
		_WLRenderer: null,
		_prepareRendererImageData: function(a) {
			this._WLRenderer =
				a
		},
		_withinVisibleRange: function(a) {
			if(null == this._parent) return !1;
			var b = this._parent.get_currentOffset(),
				c = Math.min(this._parent.get_frames().get_count(), b + this._parent.get_imageViewer().get_items().get_count());
			if(null != this._parent.get_framesMappingIndex()) {
				for(var d = 0, d = b; d < c; d++)
					if(this._parent.get_framesMappingIndex()[d] === a) return !0;
				return !1
			}
			return a >= b && a < c
		},
		_getFrameIndex: function() {
			return null != this._parent && null != this._parent.get_imageViewer() ? this._parent.get_frames().indexOf(this) : -1
		},
		_applyWindowLevel: function() {
			this._withinVisibleRange(this._getFrameIndex()) && this._parent.get_currentOffset();
			return !1
		},
		_supportWindowLevel: function() {
			var a = this.get_photometricInterpretation();
			null != this.get_information() && (a = this.get_information().get_photometricInterpretation());
			return "MONOCHROME2" === a || "MONOCHROME1" === a
		},
		_invertCanvas: function(a, b, c) {
			for(var d = a.getImageData(0, 0, b, c), e = d.data, b = 4 * b * c, c = 0; c < b; c += 4) e[c] = 255 - e[c], e[c + 1] = 255 - e[c + 1], e[c + 2] = 255 - e[c + 2];
			a.putImageData(d, 0, 0)
		},
		_updateAlignment: function() {
			switch(this._horizontalAlignment) {
				case 1:
					this._alignLeft();
					break;
				case 2:
					this._alignRight()
			}
			switch(this._verticalAlignment) {
				case 1:
					this._alignTop();
					break;
				case 2:
					this._alignBottom()
			}
		},
		_updateOffset: function() {
			if(null != this._subCell) {
				var a = this._getViewerImagePosition(this._subCell);
				if(!a.get_isEmpty()) {
					var b = lt.Controls.Medical.MRTISubCell.getFloatImageRect(this._subCell.get_imageViewer(), this._subCell),
						c = this._subCell.get_imageViewer().getItemViewBounds(this._subCell, lt.Controls.ImageViewerItemPart.item, !1);
					lt.LeadPointD.create(parseInt(0.1 + (a.get_x() - (b.get_left() -
						c.get_left()) + this.get_offsetX())), parseInt(0.1 + (a.get_y() - (b.get_top() - c.get_top()) + this.get_offsetY())));
					this._restorePosition();
					this._updateAlignment()
				}
			}
		},
		_getImageSize: function() {
			return null != this._mrtiImage ? this._mrtiImage.get_fullSize() : null != this._subCell && !this._subCell.get_imageSize().get_isEmpty() ? this._subCell.get_imageSize() : lt.LeadSizeD.create(this._width, this._height)
		},
		_updateAnnotationContainerSize: function() {
			if(null != this._subCell) {
				var a = this._getImageSize().clone();
				if(a.get_width() &&
					a.get_height()) {
					var b = this._container.get_mapper().get_transform().clone();
					this._container.get_mapper().updateTransform(lt.LeadMatrix.get_identity());
					this._columnSpacing && this._rowSpacing ? this._container.get_mapper().mapResolutions(this._container.get_mapper().get_sourceDpiX(), this._container.get_mapper().get_sourceDpiY(), 25.4 / this._columnSpacing, 25.4 / this._rowSpacing) : this._container.get_mapper().mapResolutions(this._container.get_mapper().get_sourceDpiX(), this._container.get_mapper().get_sourceDpiY(),
						150, 150);
					this._container.set_size(this._container.get_mapper().sizeToContainerCoordinates(a));
					this._container.get_mapper().updateTransform(b)
				}
			}
		},
		_setImageDpi: function() {
			var a = this,
				b = 0,
				c = 0;
			null == a && (a = this._parent.get_frames().get_item(0));
			a.get_rowSpacing() || (a = this._parent.get_frames().get_item(0));
			a.get_columnSpacing() || (a = this._parent.get_frames().get_item(0));
			b = a.get_columnSpacing();
			c = a.get_rowSpacing();
			a._dpiY = b ? 25.4 / b : 150;
			a._dpiX = c ? 25.4 / c : 150;
			!ss.isNull(a._dpiX) && !ss.isNull(a._dpiY) && null !=
				this._subCell && (this._subCell.get_imageViewer().beginTransform(), this._subCell.get_resolution().set_width(parseInt(a._dpiX)), this._subCell.get_resolution().set_height(parseInt(a._dpiY)), this._subCell.get_imageViewer().endTransform())
		},
		_checkImageQuality: function() {
			null != this._subCell && (null != this._imageType && 2 <= this._imageType.length && ("DERIVED" === this._imageType[0] || "SECONDARY" === this._imageType[0]) ? (this._imageQuality = "D", this._subCell._updateTag(3)) : this._lossyCompression && (this._imageQuality =
				"!", this._subCell._updateTag(3)))
		},
		_getWindowLevelValues: function() {
			var a = new lt.Controls.Medical._windowLevelValues;
			this.isImageDataAvailable() && null != this._WLRenderer && (a.width = this._WLRenderer.get_windowLevelWidth(), a.center = this._WLRenderer.get_windowLevelCenter());
			return a
		},
		isImageDataAvailable: function() {
			return this.get_isDataReady() || null != this._WLRenderer
		},
		_assignRenderer: function() {
			var a = this._getFrameIndex();
			this._checkImageQuality();
			null == this._mrtiImage && this._supportWindowLevel() && this.isImageDataAvailable() &&
				this._applyWindowLevel(a)
		},
		_onImageDataReady: function() {
			var a = this._getFrameIndex();
			this._assignRenderer();
			var b = this._getWindowLevelValues();
			this._windowWidth || (this._defaultWindowLevelWidth ? (this._windowWidth = this._defaultWindowLevelWidth, this._windowCenter = this._defaultWindowLevelCenter) : (this._windowWidth = b.width, this._windowCenter = b.center, this._defaultWindowLevelWidth = b.width, this._defaultWindowLevelCenter = b.center));
			this._dataReady = !0;
			this._rerenderWindowLevel(this._windowWidth + this._deltaWidth,
				this._windowCenter + this._deltaCenter);
			this._withinVisibleRange(a) && null != this._subCell && (this._subCell._updateTag(0), this._subCell._updateTag(3), this._subCell._updateFieldOfView());
			null != this.__imageDataReady && this.__imageDataReady(this, lt.LeadEventArgs.Empty)
		},
		_getViewerImagePosition: function(a) {
			var b = lt.Controls.Medical.MRTISubCell.getFloatImageRect(this._subCell.get_imageViewer(), this._subCell),
				c = b.get_width() / 2,
				b = b.get_height() / 2,
				d = a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.view, !1).get_size(),
				a = d.get_width() / 2,
				d = d.get_height() / 2;
			return lt.LeadPointD.create(a - c, d - b)
		},
		_invertFrame: function() {
			var a = !1,
				b = this._WLRenderer,
				c = "",
				d = null,
				e = this._inverted,
				d = null != b ? b.get_information() : this.get_information();
			null != d && (c = d.get_photometricInterpretation());
			var f = !1;
			if("MONOCHROME2" === c || "MONOCHROME1" === c) {
				if(!e && this._photometricInterpretation === d.get_photometricInterpretation() || e && this._photometricInterpretation !== d.get_photometricInterpretation()) return a;
				"MONOCHROME2" === d.get_photometricInterpretation() ?
					(d.set_photometricInterpretation("MONOCHROME1"), f = !0) : "MONOCHROME1" === d.get_photometricInterpretation() && (d.set_photometricInterpretation("MONOCHROME2"), f = !0)
			}
			null != b && f && (b._updateRenderer(), a = !0);
			return a
		},
		get_wlRenderer: function() {
			return this._WLRenderer
		},
		set_wlRenderer: function(a) {
			return this._WLRenderer = a
		},
		_updateWindowLevel: function() {
			if(null != this._subCell) {
				var a = this._getRender(),
					b = 0,
					c = 0,
					d = !1;
				null != this._subCell && (d = this._invertFrame(this._subCell));
				if(null != a) {
					var e = a.get_windowLevelWidth(),
						f = a.get_windowLevelCenter(),
						b = this._windowWidth + this._deltaWidth,
						c = this._windowCenter + this._deltaCenter;
					if(e !== b || f !== c) null != this._subCell && (d = 1 === (d | 1));
					this._windowWidth || (b = a.get_windowLevelWidth(), c = a.get_windowLevelCenter())
				}
				d && this._rerenderWindowLevel(b, c)
			}
		},
		_updateWidthCenterValue: function(a, b) {
			this._windowWidth = a;
			this._windowCenter = b
		},
		_rerenderWindowLevel: function(a, b) {
			var c = null;
			null == c && (c = this._WLRenderer);
			if(null != c) {
				if(-1 === a) {
					var d = this._getWindowLevelValues();
					c.updateWindowLevelLUT(d.width,
						d.center)
				} else c.updateWindowLevelLUT(a, b);
				null != this._subCell && (this._subCell._updateWindowlevel(!0), this._subCell.invalidate())
			}
		},
		get_width: function() {
			return this._width
		},
		set_width: function(a) {
			this._width = a;
			null != this._parent && this._parent.set__crossHairPosition(lt.LeadPointD.create(this._width / 2, this._height / 2));
			return a
		},
		get_height: function() {
			return this._height
		},
		set_height: function(a) {
			this._height = a;
			null != this._parent && this._parent.set__crossHairPosition(lt.LeadPointD.create(this._width / 2, this._height /
				2));
			return a
		},
		get_rowSpacing: function() {
			return this._rowSpacing
		},
		set_rowSpacing: function(a) {
			this._rowSpacing = a;
			this._updateAnnotationContainerSize();
			null != this._subCell && this._subCell._updateFieldOfView();
			return a
		},
		get_columnSpacing: function() {
			return this._columnSpacing
		},
		set_columnSpacing: function(a) {
			this._columnSpacing = a;
			this._updateAnnotationContainerSize();
			null != this._subCell && this._subCell._updateFieldOfView();
			return a
		},
		get_projectionOrientation: function() {
			return this._projectionOrientation
		},
		set_projectionOrientation: function(a) {
			this._projectionOrientation !== a && (this._projectionOrientation = a, null != this._orientationOverlay && this._orientationOverlay.updateImageProjection(this._projectionOrientation));
			return a
		},
		get_patientProjection: function() {
			return this._patientProjection
		},
		set_patientProjection: function(a) {
			this._patientProjection = a;
			null == this._imageOrientation && (this._orientationOverlay = new lt.Controls.Medical._orientationLetters([1, 0, 0, 0, 1, 0]));
			this._orientationOverlay.updateImageProjection(this._projectionOrientation);
			this._orientationOverlay.setProjectionRadiographOrientation(this._patientProjection);
			null != this._subCell && this._subCell._reRenderOverlay();
			return a
		},
		get_instanceNumber: function() {
			return this._instanceNumber
		},
		set_instanceNumber: function(a) {
			return this._instanceNumber = a
		},
		get_bitPerpixel: function() {
			return this._bitPerpixel
		},
		set_bitPerpixel: function(a) {
			return this._bitPerpixel = a
		},
		get_defaultWindowLevelWidth: function() {
			return this._defaultWindowLevelWidth
		},
		get_defaultWindowLevelCenter: function() {
			return this._defaultWindowLevelCenter
		},
		setWindowLevelDefaultValues: function(a, b) {
			null != this._subCell && (this._defaultWindowLevelWidth = a, this._defaultWindowLevelCenter = b, this._rerenderWindowLevel(this._defaultWindowLevelWidth + this._deltaWidth, this._defaultWindowLevelCenter + this._deltaCenter))
		},
		get_windowWidth: function() {
			return this._windowWidth + this._deltaWidth
		},
		get_windowCenter: function() {
			return this._windowCenter + this._deltaCenter
		},
		setWindowLevel: function(a, b) {
			this._windowWidth = a;
			this._windowCenter = b;
			this._deltaWidth = this._deltaCenter =
				0;
			this._rerenderWindowLevel(a, b);
			null != this._subCell && this._parent._fireEvent(this, 0, null)
		},
		get_minValue: function() {
			return this._minValue
		},
		set_minValue: function(a) {
			return this._minValue = a
		},
		get_maxValue: function() {
			return this._maxValue
		},
		set_maxValue: function(a) {
			return this._maxValue = a
		},
		get_lowBit: function() {
			return this._lowBit
		},
		set_lowBit: function(a) {
			return this._lowBit = a
		},
		get_highBit: function() {
			return this._highBit
		},
		set_highBit: function(a) {
			return this._highBit = a
		},
		get_bitStored: function() {
			return this._bitStored
		},
		set_bitStored: function(a) {
			return this._bitStored = a
		},
		get_rescaleintercept: function() {
			return this._rescaleintercept
		},
		set_rescaleintercept: function(a) {
			return this._rescaleintercept = a
		},
		get_rescaleSlope: function() {
			return this._rescaleSlope
		},
		set_rescaleSlope: function(a) {
			return this._rescaleSlope = a
		},
		get_voiLUTSequence: function() {
			return this._voiLUTSequence
		},
		set_voiLUTSequence: function(a) {
			return this._voiLUTSequence = a
		},
		get_imageType: function() {
			return this._imageType
		},
		set_imageType: function(a) {
			this._imageType =
				a;
			this._checkImageQuality();
			return a
		},
		get_lossyCompression: function() {
			return this._lossyCompression
		},
		set_lossyCompression: function(a) {
			this._lossyCompression = a;
			this._checkImageQuality();
			return a
		},
		get_isWaveForm: function() {
			return this._isWaveForm
		},
		set_isWaveForm: function(a) {
			return this._isWaveForm = a
		},
		_updateSubCell: function() {
			var a, b, c;
			null != this._orientationOverlay ? (a = (this._rotation + this._orientationOverlay.projectionRrotateAngle) % 360, b = 1 === (this._flipped ^ this._orientationOverlay.projectionIsFlipped),
				c = 1 === (this._reversed ^ this._orientationOverlay.projectionIsReversed)) : (a = this._rotation, b = this._flipped, c = this._reversed);
			null != this._orientationOverlay && (this._orientationOverlay.set_rotateAngle(a), this._orientationOverlay.set_flip(b), this._orientationOverlay.set_reverse(c), this._initializeTargetOrientation());
			null != this._subCell && (this._subCell._updateTag(8), this._subCell._updateTag(7), this._subCell._updateTag(6), this._subCell._updateTag(5))
		},
		get_frameOfReferenceID: function() {
			return this._frameOfReferenceID
		},
		set_frameOfReferenceID: function(a) {
			return this._frameOfReferenceID = a
		},
		get_photometricInterpretation: function() {
			return this._photometricInterpretation
		},
		set_photometricInterpretation: function(a) {
			this._photometricInterpretation = a;
			null != this._information && this._information.set_photometricInterpretation(this._photometricInterpretation);
			this._originalPhotometricInterpretation || (this._originalPhotometricInterpretation = a);
			return a
		},
		get_flipped: function() {
			return this._flipped
		},
		set_flipped: function(a) {
			if(this._flipped !==
				a) return this._flipped = a, this._normalizedPosition.set_y(-this._normalizedPosition.get_y()), this._updateSubCell(), this._updateSubCellZoom(), this._invalidateAnnotation(), a
		},
		get_reversed: function() {
			return this._reversed
		},
		set_reversed: function(a) {
			this._reversed = a;
			this._normalizedPosition.set_x(-this._normalizedPosition.get_x());
			this._updateSubCell();
			this._updateSubCellZoom();
			this._invalidateAnnotation();
			return a
		},
		_rotatePosition: function() {},
		_moveYourAss: function() {
			null != this._subCell && (this._subCell.offsetBy(lt.LeadPointD.create(1,
				0)), this._subCell.invalidate())
		},
		get_rotateAngle: function() {
			return this._rotation
		},
		set_rotateAngle: function(a) {
			var b = a,
				b = a % 360;
			0 > b && (b += 360);
			if(this._rotation !== b) {
				this._normalizedPosition = lt.Controls.Medical._mrtiRenderer.transformPoint(this._normalizedPosition, lt.LeadPointD.create(0, 0), !1, !1, b - this._rotation);
				this._rotation = b;
				if(null != this._subCell) this._subCell.onSizeChanged();
				this._updateSubCell();
				this._updateSubCellZoom();
				this._invalidateAnnotation();
				return a
			}
		},
		_invalidateAnnotation: function() {
			if(null !=
				this._subCell) {
				var a = this._subCell.get_imageViewer();
				a.automationInvalidate(a.getItemViewBounds(this._subCell, lt.Controls.ImageViewerItemPart.item, !1))
			}
		},
		get_offsetX: function() {
			return this._offsetX = this._normalizedPosition.get_x() * this._getFullSize().get_width()
		},
		set_offsetX: function(a) {
			if(this._offsetX = a) this._horizontalAlignment = 0;
			this._getFullSize().get_width() && (this._normalizedPosition.set_x(this._offsetX / this._getFullSize().get_width()), this._updateSubCell());
			return a
		},
		_getFullSize: function() {
			return null !=
				this._mrtiImage ? this._mrtiImage.get_fullSize() : lt.LeadSizeD.create(this._width, this._height)
		},
		get_offsetY: function() {
			return this._offsetY = this._normalizedPosition.get_y() * this._getFullSize().get_height()
		},
		set_offsetY: function(a) {
			if(this._offsetY = a) this._verticalAlignment = 0;
			this._getFullSize().get_height() && (this._normalizedPosition.set_y(this._offsetY / this._getFullSize().get_height()), this._updateSubCell());
			return a
		},
		_sizeMode: 0,
		_scaleFactor: 1,
		_getImageViewerSizeMode: function(a) {
			switch(a) {
				case 2:
					return lt.Controls.ControlSizeMode.none;
				case 1:
					return lt.Controls.ControlSizeMode.actualSize;
				case 3:
					return lt.Controls.ControlSizeMode.none;
				default:
					return lt.Controls.ControlSizeMode.none
			}
		},
		get_scale: function() {
			return this._scaleFactor
		},
		set_scale: function(a) {
			this._scaleFactor = a;
			this._updateFramePanZoom();
			return a
		},
		_updateFramePanZoom: function() {},
		zoom: function(a, b) {
			this._sizeMode = a;
			this._scaleFactor = b;
			this._updateSubCellZoom()
		},
		_getFrameImageRealSize: function() {
			return lt.LeadSizeD.create(this.get_width(), this.get_height())
		},
		_calculateScaleFactor: function(a) {
			var b =
				this._getFrameImageRealSize();
			if(3 === this._sizeMode) return this._scaleFactor * (this._subCell.get__parentViewer().get_screenDpi().get_width() / this._dpiX) * (b.get_height() / this._subCell.get_imageSize().get_height());
			if(2 === this._sizeMode) {
				b = a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.item, !1);
				if(b.get_isEmpty()) return 0;
				var c = 90 === this._rotation || 270 === this._rotation,
					d;
				null != this._mrtiImage ? (d = c ? this._mrtiImage.get_fullSize().get_height() : this._mrtiImage.get_fullSize().get_width(),
					a = c ? this._mrtiImage.get_fullSize().get_width() : this._mrtiImage.get_fullSize().get_height()) : (d = c ? a.get_imageSize().get_height() : a.get_imageSize().get_width(), a = c ? a.get_imageSize().get_width() : a.get_imageSize().get_height());
				a = b.get_height() / a;
				b = b.get_width() / d;
				return this._scaleFactor * Math.min(b, a)
			}
			return this._scaleFactor
		},
		_updateSubCellZoom: function() {
			if(null != this._subCell) {
				var a = this._getImageViewerSizeMode(this._sizeMode),
					b = this._scaleFactor;
				if(3 === this._sizeMode || 2 === this._sizeMode) b = this._calculateScaleFactor(this._subCell);
				b && (a === lt.Controls.ControlSizeMode.actualSize && 1 !== b ? this._subCell.zoom(lt.Controls.ControlSizeMode.none, b, this._subCell.get_defaultZoomOrigin()) : this._subCell.zoom(a, b, this._subCell.get_defaultZoomOrigin()), this._updateOffset(this.get_offsetX(), this.get_offsetY()))
			}
		},
		get_scaleMode: function() {
			return this._sizeMode
		},
		reset: function() {
			this._imageProcessingList.remove_collectionChanged(ss.Delegate.create(this, this._imageProcessingList_CollectionChanged));
			this._imageProcessingList.clear();
			this._imageProcessingList.add_collectionChanged(ss.Delegate.create(this,
				this._imageProcessingList_CollectionChanged));
			this._updateImageProcessingList();
			this._scaleFactor = 1;
			this._sizeMode = 2;
			this._deltaCenter = this._deltaWidth = this._offsetY = this._offsetX = 0;
			null != this._subCell && this._subCell.get__parentViewer().beginTransform();
			this.set_rotateAngle(0);
			this.set_flipped(!1);
			this.set_reversed(!1);
			this.set_inverted(!1);
			this.setWindowLevel(this._defaultWindowLevelWidth, this._defaultWindowLevelCenter);
			null != this._subCell && (this._subCell.set_flip(!1), this._subCell.set_reverse(!1),
				this._subCell.set_rotateAngle(0), this._updateSubCellZoom());
			null != this._subCell && this._subCell.get__parentViewer().endTransform()
		},
		_updateImageProcessingList: function() {
			this._removeNonVisibleChunks();
			null != this._subCell && this._subCell._updateView(0, !0);
			this._refreshLowRes()
		},
		get_useDPI: function() {
			return this._useDPI
		},
		set_useDPI: function(a) {
			return this._useDPI = a
		},
		_incorporateDeltaIntoWindowLevel: function() {
			if(this._deltaWidth || this._deltaCenter) this._windowWidth += this._deltaWidth, this._windowCenter +=
				this._deltaCenter, this._deltaCenter = this._deltaWidth = 0, this._WLRenderer.updateWindowLevelLUT(this._windowWidth, this._windowCenter)
		},
		_renderChunkWindowLevel: function(chunkData) {
			if(this._mrtiImage.get_supportWindowLevel() && (this._getWLRenderer(), !(null == this.get_wlRenderer() || null == chunkData)))
				if(this._incorporateDeltaIntoWindowLevel(), 32 === this._information.get_bitsPerPixel()) 
					this.get_wlRenderer()._render32BitGrayScale(chunkData);
				else {
					var ctx = chunkData.get_canvas().getContext("2d");
					ctx.clearRect(0, 0, chunkData.get_backCanvas().width, chunkData.get_backCanvas().height);
					ctx.drawImage(chunkData.get_backCanvas(), 0, 0);
					this.get_wlRenderer()._renderInPlace(chunkData)
				}
		},
		_frameDataReady: !1,
		_frameImageReady: function() {
			if(!this._frameDataReady && (null != this.lowResImage || null != this.thumbnailImage) && null != this.get_information()) lt.Controls.Medical.Tools._counter++, this.get_parentCell().get_progress().set_progress(this.get_parentCell().get_progress().get_progress() + 1), this._WLRenderer = this._getWLRenderer(), null != this._WLRenderer && (this._frameDataReady = !0, this._onImageDataReady())
		},
		_mrtiRenderer_RenderLowResolution: function(a,b) {
			null != this.lowResImage && (this.lowResImage = null);
			
			if(null == this.lowResImage) {
				this.lowResImage = new lt.Controls.Medical.ChunkData(
					b.get_chunkImage(),
					b.get_chunkRect(),
					b.get_resolution(),
					b.get_chunkCanvas());
					
				this.lowResImage.set_backCanvas(b.get_backCanvas());
				
				null != this._subCell && this._applyImageProcessingOnChunk(this.lowResImage);
			};
			
			null == this.thumbnailImage && (this._frameDataReady && null != this._subCell && this._subCell.invalidate(), this.get_parentCell()._fireEvent(this, 4, null), this._frameImageReady("low res"))
		},
		_MRTIRenderer_RenderThumbnail: function(a, b) {
			null != this.thumbnailImage && (this.thumbnailImage = null);
			null == this.thumbnailImage && (this.thumbnailImage = new lt.Controls.Medical.ChunkData(b.get_chunkImage(), b.get_chunkRect(), b.get_resolution(), b.get_chunkCanvas()), this.thumbnailImage.set_backCanvas(b.get_backCanvas()), null != this._subCell && this._applyImageProcessingOnChunk(this.thumbnailImage));
			null == this.lowResImage && (this.get_parentCell()._fireEvent(this, 4, null), this._frameImageReady("thumb"))
		},
		_applyImageProcessingOnChunk: function(chunkData) {
			if(null != chunkData){
				if(this._mrtiImage.get_supportWindowLevel()) 
					this._renderChunkWindowLevel(chunkData);
				else if(this._getWLRenderer(), null != this.get_wlRenderer()) {
					var inverted = this.get_inverted(),
						c = chunkData.get_canvas().getContext("2d");
						
					c.clearRect(0, 0, chunkData.get_backCanvas().width, chunkData.get_backCanvas().height);
					c.drawImage(chunkData.get_backCanvas(), 0, 0);
					
					this._incorporateDeltaIntoWindowLevel();
					
					if(128 !== this.get_wlRenderer().get_windowLevelCenter() || 256 !== this.get_wlRenderer().get_windowLevelWidth())
						this.get_wlRenderer()._renderColored(chunkData, this._information);
					
					if(inverted){
						this._invertCanvas(chunkData.get_canvas().getContext("2d"), chunkData.get_canvas().width, chunkData.get_canvas().height);
						chunkData._status.inverted = !chunkData._status.inverted;
					}
				}
			}
		},
		_alignLeft: function() {
			var a = this._subCell.get_imageViewer().getItemBounds(this._subCell, lt.Controls.ImageViewerItemPart.view),
				b = this._subCell.get_imageViewer().getItemBounds(this._subCell, lt.Controls.ImageViewerItemPart.image);
			!a.get_isEmpty() && !b.get_isEmpty() && this._subCell.offsetBy(lt.LeadPointD.create(a.get_x() - b.get_x(), 0))
		},
		_alignRight: function() {
			var a =
				this._subCell.get_imageViewer().getItemBounds(this._subCell, lt.Controls.ImageViewerItemPart.view),
				b = this._subCell.get_imageViewer().getItemBounds(this._subCell, lt.Controls.ImageViewerItemPart.image);
			!a.get_isEmpty() && !b.get_isEmpty() && this._subCell.offsetBy(lt.LeadPointD.create(a.get_right() - b.get_right(), 0))
		},
		_alignCenter: function() {
			var a = this._subCell.get_imageViewer().getItemBounds(this._subCell, lt.Controls.ImageViewerItemPart.view),
				b = this._subCell.get_imageViewer().getItemBounds(this._subCell,
					lt.Controls.ImageViewerItemPart.image);
			!a.get_isEmpty() && !b.get_isEmpty() && (a = (a.get_right() + a.get_left()) / 2, b = (b.get_right() + b.get_left()) / 2, this._subCell.offsetBy(lt.LeadPointD.create(Math.abs(b - a), 0)))
		},
		_alignTop: function() {
			var a = this._subCell.get_imageViewer().getItemBounds(this._subCell, lt.Controls.ImageViewerItemPart.view),
				b = this._subCell.get_imageViewer().getItemBounds(this._subCell, lt.Controls.ImageViewerItemPart.image);
			!a.get_isEmpty() && !b.get_isEmpty() && this._subCell.offsetBy(lt.LeadPointD.create(0,
				a.get_y() - b.get_y()))
		},
		_alignBottom: function() {
			var a = this._subCell.get_imageViewer().getItemBounds(this._subCell, lt.Controls.ImageViewerItemPart.view),
				b = this._subCell.get_imageViewer().getItemBounds(this._subCell, lt.Controls.ImageViewerItemPart.image);
			!a.get_isEmpty() && !b.get_isEmpty() && this._subCell.offsetBy(lt.LeadPointD.create(0, a.get_bottom() - b.get_bottom()))
		},
		_alignMiddle: function() {},
		add_imageDataError: function(a) {
			this.__imageDataError = ss.Delegate.combine(this.__imageDataError, a)
		},
		remove_imageDataError: function(a) {
			this.__imageDataError =
				ss.Delegate.remove(this.__imageDataError, a)
		},
		__imageDataError_handler_get: function() {
			null == this.__imageDataError_handler && (this.__imageDataError_handler = ss.EventHandler.create(this, this.add_imageDataError, this.remove_imageDataError));
			return this.__imageDataError_handler
		},
		__imageDataError: null,
		__imageDataError_handler: null,
		add_previewError: function(a) {
			this.__previewError = ss.Delegate.combine(this.__previewError, a)
		},
		remove_previewError: function(a) {
			this.__previewError = ss.Delegate.remove(this.__previewError,
				a)
		},
		__previewError_handler_get: function() {
			null == this.__previewError_handler && (this.__previewError_handler = ss.EventHandler.create(this, this.add_previewError, this.remove_previewError));
			return this.__previewError_handler
		},
		__previewError: null,
		__previewError_handler: null,
		add_previewLoaded: function(a) {
			this.__previewLoaded = ss.Delegate.combine(this.__previewLoaded, a)
		},
		remove_previewLoaded: function(a) {
			this.__previewLoaded = ss.Delegate.remove(this.__previewLoaded, a)
		},
		__previewLoaded_handler_get: function() {
			null ==
				this.__previewLoaded_handler && (this.__previewLoaded_handler = ss.EventHandler.create(this, this.add_previewLoaded, this.remove_previewLoaded));
			return this.__previewLoaded_handler
		},
		__previewLoaded: null,
		__previewLoaded_handler: null,
		add_imageDrawn: function(a) {
			this.__imageDrawn = ss.Delegate.combine(this.__imageDrawn, a)
		},
		remove_imageDrawn: function(a) {
			this.__imageDrawn = ss.Delegate.remove(this.__imageDrawn, a)
		},
		__imageDrawn_handler_get: function() {
			null == this.__imageDrawn_handler && (this.__imageDrawn_handler = ss.EventHandler.create(this,
				this.add_imageDrawn, this.remove_imageDrawn));
			return this.__imageDrawn_handler
		},
		__imageDrawn: null,
		__imageDrawn_handler: null,
		setPNGDataSrc: function() {
			if(!(null != window.self && (null != this.__imageDataError || null != this.__previewError || null != this.__previewLoaded || null != this.__imageDrawn))) throw Error("This method is deprecated, please use Frame.MRTIInfo instead");
		},
		get_isFullImageReceived: function() {
			return !1
		},
		get_isPNGDataReady: function() {
			return !1
		},
		get_preview16BitPNG: function() {
			return ""
		},
		set_preview16BitPNG: function(a) {
			if(null !=
				window.self) throw Error("This method is deprecated, please use Frame.MRTIInfo instead");
			return a
		},
		get_drawingCanvas: function() {
			return null
		},
		get_pngDataSrc: function() {
			return null
		},
		get_imageData: function() {
			return null
		},
		set_imageData: function(a) {
			return a
		},
		get_previewImage: function() {
			return null
		},
		set_previewImage: function(a) {
			return a
		},
		get_requestInterval: function() {
			return 0
		},
		set_requestInterval: function(a) {
			return a
		},
		get_dataSize: function() {
			return lt.LeadSizeD.get_empty()
		},
		set_dataSize: function(a) {
			return a
		},
		get_imageURL: function() {
			return null
		},
		set_imageURL: function(a) {
			return a
		},
		get_previewURI: function() {
			return null
		},
		set_previewURI: function(a) {
			return a
		}
	};
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "imageDataReady", {
		get: lt.Controls.Medical.Frame.prototype.__imageDataReady_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "laterality", {
		get: lt.Controls.Medical.Frame.prototype.get_laterality,
		set: lt.Controls.Medical.Frame.prototype.set_laterality,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "viewPosition", {
		get: lt.Controls.Medical.Frame.prototype.get_viewPosition,
		set: lt.Controls.Medical.Frame.prototype.set_viewPosition,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "JSON", {
		get: lt.Controls.Medical.Frame.prototype.get_JSON,
		set: lt.Controls.Medical.Frame.prototype.set_JSON,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype,
		"imageProcessingList", {
			get: lt.Controls.Medical.Frame.prototype.get_imageProcessingList,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "verticalAlignment", {
		get: lt.Controls.Medical.Frame.prototype.get_verticalAlignment,
		set: lt.Controls.Medical.Frame.prototype.set_verticalAlignment,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "horizontalAlignment", {
		get: lt.Controls.Medical.Frame.prototype.get_horizontalAlignment,
		set: lt.Controls.Medical.Frame.prototype.set_horizontalAlignment,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "backgroundSize", {
		get: lt.Controls.Medical.Frame.prototype.get_backgroundSize,
		set: lt.Controls.Medical.Frame.prototype.set_backgroundSize,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "mrtiInfo", {
		get: lt.Controls.Medical.Frame.prototype.get_mrtiInfo,
		set: lt.Controls.Medical.Frame.prototype.set_mrtiInfo,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype,
		"retakeIndex", {
			get: lt.Controls.Medical.Frame.prototype.get_retakeIndex,
			set: lt.Controls.Medical.Frame.prototype.set_retakeIndex,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "nFrame", {
		get: lt.Controls.Medical.Frame.prototype.get_nFrame,
		set: lt.Controls.Medical.Frame.prototype.set_nFrame,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "retakes", {
		get: lt.Controls.Medical.Frame.prototype.get_retakes,
		set: lt.Controls.Medical.Frame.prototype.set_retakes,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "subCell", {
		get: lt.Controls.Medical.Frame.prototype.get_subCell,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "shutter", {
		get: lt.Controls.Medical.Frame.prototype.get_shutter,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "imageQuality", {
		get: lt.Controls.Medical.Frame.prototype.get_imageQuality,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "container", {
		get: lt.Controls.Medical.Frame.prototype.get_container,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "enableDraw", {
		get: lt.Controls.Medical.Frame.prototype.get_enableDraw,
		set: lt.Controls.Medical.Frame.prototype.set_enableDraw,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "parentCell", {
		get: lt.Controls.Medical.Frame.prototype.get_parentCell,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "targetOrientation", {
		get: lt.Controls.Medical.Frame.prototype.get_targetOrientation,
		set: lt.Controls.Medical.Frame.prototype.set_targetOrientation,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "inverted", {
		get: lt.Controls.Medical.Frame.prototype.get_inverted,
		set: lt.Controls.Medical.Frame.prototype.set_inverted,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype,
		"wlData", {
			get: lt.Controls.Medical.Frame.prototype.get_wlData,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "userData", {
		get: lt.Controls.Medical.Frame.prototype.get_userData,
		set: lt.Controls.Medical.Frame.prototype.set_userData,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "isDataReady", {
		get: lt.Controls.Medical.Frame.prototype.get_isDataReady,
		set: lt.Controls.Medical.Frame.prototype.set_isDataReady,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "information", {
		get: lt.Controls.Medical.Frame.prototype.get_information,
		set: lt.Controls.Medical.Frame.prototype.set_information,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "imagePosition", {
		get: lt.Controls.Medical.Frame.prototype.get_imagePosition,
		set: lt.Controls.Medical.Frame.prototype.set_imagePosition,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "imageOrientation", {
		get: lt.Controls.Medical.Frame.prototype.get_imageOrientation,
		set: lt.Controls.Medical.Frame.prototype.set_imageOrientation,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "wlRenderer", {
		get: lt.Controls.Medical.Frame.prototype.get_wlRenderer,
		set: lt.Controls.Medical.Frame.prototype.set_wlRenderer,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "width", {
		get: lt.Controls.Medical.Frame.prototype.get_width,
		set: lt.Controls.Medical.Frame.prototype.set_width,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "height", {
		get: lt.Controls.Medical.Frame.prototype.get_height,
		set: lt.Controls.Medical.Frame.prototype.set_height,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "rowSpacing", {
		get: lt.Controls.Medical.Frame.prototype.get_rowSpacing,
		set: lt.Controls.Medical.Frame.prototype.set_rowSpacing,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype,
		"columnSpacing", {
			get: lt.Controls.Medical.Frame.prototype.get_columnSpacing,
			set: lt.Controls.Medical.Frame.prototype.set_columnSpacing,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "projectionOrientation", {
		get: lt.Controls.Medical.Frame.prototype.get_projectionOrientation,
		set: lt.Controls.Medical.Frame.prototype.set_projectionOrientation,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "patientProjection", {
		get: lt.Controls.Medical.Frame.prototype.get_patientProjection,
		set: lt.Controls.Medical.Frame.prototype.set_patientProjection,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "instanceNumber", {
		get: lt.Controls.Medical.Frame.prototype.get_instanceNumber,
		set: lt.Controls.Medical.Frame.prototype.set_instanceNumber,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "bitPerpixel", {
		get: lt.Controls.Medical.Frame.prototype.get_bitPerpixel,
		set: lt.Controls.Medical.Frame.prototype.set_bitPerpixel,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "defaultWindowLevelWidth", {
		get: lt.Controls.Medical.Frame.prototype.get_defaultWindowLevelWidth,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "defaultWindowLevelCenter", {
		get: lt.Controls.Medical.Frame.prototype.get_defaultWindowLevelCenter,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "windowWidth", {
		get: lt.Controls.Medical.Frame.prototype.get_windowWidth,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "windowCenter", {
		get: lt.Controls.Medical.Frame.prototype.get_windowCenter,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "minValue", {
		get: lt.Controls.Medical.Frame.prototype.get_minValue,
		set: lt.Controls.Medical.Frame.prototype.set_minValue,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "maxValue", {
		get: lt.Controls.Medical.Frame.prototype.get_maxValue,
		set: lt.Controls.Medical.Frame.prototype.set_maxValue,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "lowBit", {
		get: lt.Controls.Medical.Frame.prototype.get_lowBit,
		set: lt.Controls.Medical.Frame.prototype.set_lowBit,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "highBit", {
		get: lt.Controls.Medical.Frame.prototype.get_highBit,
		set: lt.Controls.Medical.Frame.prototype.set_highBit,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype,
		"bitStored", {
			get: lt.Controls.Medical.Frame.prototype.get_bitStored,
			set: lt.Controls.Medical.Frame.prototype.set_bitStored,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "rescaleintercept", {
		get: lt.Controls.Medical.Frame.prototype.get_rescaleintercept,
		set: lt.Controls.Medical.Frame.prototype.set_rescaleintercept,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "rescaleSlope", {
		get: lt.Controls.Medical.Frame.prototype.get_rescaleSlope,
		set: lt.Controls.Medical.Frame.prototype.set_rescaleSlope,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "voiLUTSequence", {
		get: lt.Controls.Medical.Frame.prototype.get_voiLUTSequence,
		set: lt.Controls.Medical.Frame.prototype.set_voiLUTSequence,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "imageType", {
		get: lt.Controls.Medical.Frame.prototype.get_imageType,
		set: lt.Controls.Medical.Frame.prototype.set_imageType,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "lossyCompression", {
		get: lt.Controls.Medical.Frame.prototype.get_lossyCompression,
		set: lt.Controls.Medical.Frame.prototype.set_lossyCompression,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "isWaveForm", {
		get: lt.Controls.Medical.Frame.prototype.get_isWaveForm,
		set: lt.Controls.Medical.Frame.prototype.set_isWaveForm,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype,
		"frameOfReferenceID", {
			get: lt.Controls.Medical.Frame.prototype.get_frameOfReferenceID,
			set: lt.Controls.Medical.Frame.prototype.set_frameOfReferenceID,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "photometricInterpretation", {
		get: lt.Controls.Medical.Frame.prototype.get_photometricInterpretation,
		set: lt.Controls.Medical.Frame.prototype.set_photometricInterpretation,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "flipped", {
		get: lt.Controls.Medical.Frame.prototype.get_flipped,
		set: lt.Controls.Medical.Frame.prototype.set_flipped,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "reversed", {
		get: lt.Controls.Medical.Frame.prototype.get_reversed,
		set: lt.Controls.Medical.Frame.prototype.set_reversed,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "rotateAngle", {
		get: lt.Controls.Medical.Frame.prototype.get_rotateAngle,
		set: lt.Controls.Medical.Frame.prototype.set_rotateAngle,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "offsetX", {
		get: lt.Controls.Medical.Frame.prototype.get_offsetX,
		set: lt.Controls.Medical.Frame.prototype.set_offsetX,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "offsetY", {
		get: lt.Controls.Medical.Frame.prototype.get_offsetY,
		set: lt.Controls.Medical.Frame.prototype.set_offsetY,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "scale", {
		get: lt.Controls.Medical.Frame.prototype.get_scale,
		set: lt.Controls.Medical.Frame.prototype.set_scale,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "scaleMode", {
		get: lt.Controls.Medical.Frame.prototype.get_scaleMode,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "useDPI", {
		get: lt.Controls.Medical.Frame.prototype.get_useDPI,
		set: lt.Controls.Medical.Frame.prototype.set_useDPI,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype,
		"imageDataError", {
			get: lt.Controls.Medical.Frame.prototype.__imageDataError_handler_get,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "previewError", {
		get: lt.Controls.Medical.Frame.prototype.__previewError_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "previewLoaded", {
		get: lt.Controls.Medical.Frame.prototype.__previewLoaded_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype,
		"imageDrawn", {
			get: lt.Controls.Medical.Frame.prototype.__imageDrawn_handler_get,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "isFullImageReceived", {
		get: lt.Controls.Medical.Frame.prototype.get_isFullImageReceived,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "isPNGDataReady", {
		get: lt.Controls.Medical.Frame.prototype.get_isPNGDataReady,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype,
		"preview16BitPNG", {
			get: lt.Controls.Medical.Frame.prototype.get_preview16BitPNG,
			set: lt.Controls.Medical.Frame.prototype.set_preview16BitPNG,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "drawingCanvas", {
		get: lt.Controls.Medical.Frame.prototype.get_drawingCanvas,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "pngDataSrc", {
		get: lt.Controls.Medical.Frame.prototype.get_pngDataSrc,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype,
		"imageData", {
			get: lt.Controls.Medical.Frame.prototype.get_imageData,
			set: lt.Controls.Medical.Frame.prototype.set_imageData,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "previewImage", {
		get: lt.Controls.Medical.Frame.prototype.get_previewImage,
		set: lt.Controls.Medical.Frame.prototype.set_previewImage,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "requestInterval", {
		get: lt.Controls.Medical.Frame.prototype.get_requestInterval,
		set: lt.Controls.Medical.Frame.prototype.set_requestInterval,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "dataSize", {
		get: lt.Controls.Medical.Frame.prototype.get_dataSize,
		set: lt.Controls.Medical.Frame.prototype.set_dataSize,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "imageURL", {
		get: lt.Controls.Medical.Frame.prototype.get_imageURL,
		set: lt.Controls.Medical.Frame.prototype.set_imageURL,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Frame.prototype, "previewURI", {
		get: lt.Controls.Medical.Frame.prototype.get_previewURI,
		set: lt.Controls.Medical.Frame.prototype.set_previewURI,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical._windowLevelValues = function() {};
	lt.Controls.Medical._windowLevelValues.prototype = {
		width: 0,
		center: 0
	};
	lt.Controls.Medical.OverlayText = function() {
		this._text = "";
		this._alignment = this._positionIndex = 0;
		this._type = 2
	};
	lt.Controls.Medical.OverlayText.prototype = {
		_text: null,
		_positionIndex: 0,
		_alignment: 0,
		_type: 0,
		_color: "#FFFFFF",
		_weight: 0,
		_previousWidth: 0,
		_rect: null,
		get__clearRectangle: function() {
			return this._rect
		},
		set__clearRectangle: function(a) {
			return this._rect = a
		},
		_draw: function(a, b, c) {
			null != this._text && (this._previousWidth = parseInt(a.measureText(this._text).width));
			a.fillText(this._text, b, c)
		},
		get__drawnTextWidth: function() {
			return this._previousWidth
		},
		get__internalText: function() {
			return this._text
		},
		set__internalText: function(a) {
			return this._text = a
		},
		get_text: function() {
			return this._text
		},
		set_text: function(a) {
			return this._text = a
		},
		get_positionIndex: function() {
			return this._positionIndex
		},
		set_positionIndex: function(a) {
			return this._positionIndex = a
		},
		get_alignment: function() {
			return this._alignment
		},
		set_alignment: function(a) {
			return this._alignment = a
		},
		get_type: function() {
			return this._type
		},
		set_type: function(a) {
			return this._type = a
		},
		get_color: function() {
			return this._color
		},
		set_color: function(a) {
			return this._color = a
		},
		get_weight: function() {
			return this._weight
		},
		set_weight: function(a) {
			return this._weight =
				a
		}
	};
	Object.defineProperty(lt.Controls.Medical.OverlayText.prototype, "text", {
		get: lt.Controls.Medical.OverlayText.prototype.get_text,
		set: lt.Controls.Medical.OverlayText.prototype.set_text,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.OverlayText.prototype, "positionIndex", {
		get: lt.Controls.Medical.OverlayText.prototype.get_positionIndex,
		set: lt.Controls.Medical.OverlayText.prototype.set_positionIndex,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.OverlayText.prototype,
		"alignment", {
			get: lt.Controls.Medical.OverlayText.prototype.get_alignment,
			set: lt.Controls.Medical.OverlayText.prototype.set_alignment,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.OverlayText.prototype, "type", {
		get: lt.Controls.Medical.OverlayText.prototype.get_type,
		set: lt.Controls.Medical.OverlayText.prototype.set_type,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.OverlayText.prototype, "color", {
		get: lt.Controls.Medical.OverlayText.prototype.get_color,
		set: lt.Controls.Medical.OverlayText.prototype.set_color,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.OverlayText.prototype, "weight", {
		get: lt.Controls.Medical.OverlayText.prototype.get_weight,
		set: lt.Controls.Medical.OverlayText.prototype.set_weight,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.Tools = function() {};
	lt.Controls.Medical.Tools.get__nameCounter = function() {
		lt.Controls.Medical.Tools._nameCounter++;
		return lt.Controls.Medical.Tools._nameCounter
	};
	lt.Controls.Medical.Tools._compareArrays =
		function(a, b) {
			if(null == a && null == b) return !0;
			if(null == a || null == b) return !1;
			for(var c = 0, d = a.length, c = 0; c < d; c++)
				if(a[c] !== b[c]) return !1;
			return !0
		};
	lt.Controls.Medical.Tools.getHexaString = function(a) {
		for(var a = a.toString(16), b = 8 - a.length, c = 0, d = "", c = 0; c < b; c++) d += "0";
		return d += a.toUpperCase()
	};
	lt.Controls.Medical.Tools.getMPRText = function(a) {
		switch(a) {
			case 0:
				return "Axial";
			case 2:
				return "Coronal";
			case 1:
				return "Sagittal"
		}
		return ""
	};
	lt.Controls.Medical.Tools._chunksWithSameValue3 = function(a, b) {
		var c, d;
		for(c = 0; c <
			a.length; c++)
			for(d = 0; d < b.length; d++)
				if(c !== d && a[c].backCanvas.backCanvasIndex === b[d].backCanvas.backCanvasIndex) return c.toString() + ", " + d.toString();
		return ""
	};
	lt.Controls.Medical.Tools._chunksWithSameValue2 = function(a, b) {
		var c, d;
		for(c = 0; c < a.length; c++)
			for(d = 0; d < b.length; d++)
				if(null != a[c].get_backCanvas() && null != b[d].backCanvas && a[c].get_backCanvas().backCanvasIndex === b[d].backCanvas.backCanvasIndex) return c.toString() + ", " + d.toString();
		return ""
	};
	lt.Controls.Medical.Tools._chunksWithSameValue = function(a,
		b, c) {
		var d, e;
		if(null == a || null == b) return "";
		for(d = 0; d < a.length; d++)
			for(e = 0; e < b.length; e++)
				if(!(c && d === e) && null != a[d].get_backCanvas() && null != b[e].get_backCanvas()) {
					var f = a[d].get_backCanvas().backCanvasIndex,
						g = b[e].get_backCanvas().backCanvasIndex;
					if(f === g) return d.toString() + ", " + e.toString()
				}
		return ""
	};
	lt.Controls.Medical.Tools._getMaxAllowed = function(a) {
		return null == a.get_frames() || null == a.get_imageViewer() || null == a.get_imageViewer().get_items() ? 1 : Math.max(1, a.get_frames().get_count() - a.get_imageViewer().get_items().get_count() +
			1)
	};
	lt.Controls.Medical.Tools._isGray = function(a) {
		return "MONOCHROME2" === a.get_photometricInterpretation() || "MONOCHROME1" === a.get_photometricInterpretation()
	};
	lt.Controls.Medical.Tools._calculateGrayValue = function(a, b, c) {
		return(a << 1) + 5 * b + c + 4 >> 3
	};
	lt.Controls.Medical.Tools._isGray16 = function(a) {
		return(16 === a.get_bitsPerPixel() || 12 === a.get_bitsPerPixel()) && "MONOCHROME2" === a.get_photometricInterpretation() || "MONOCHROME1" === a.get_photometricInterpretation()
	};
	lt.Controls.Medical.Tools._pointsAreTheSame =
		function(a, b) {
			return 0.001 > Math.abs(a.get_x() - b.get_x()) && 0.001 > Math.abs(a.get_y() - b.get_y())
		};
	lt.Controls.Medical.Tools._l_AllocateInt32Array = function(a) {
		var b = null;
		return b = lt.LTHelper.supportsTypedArray ? new Int32Array(a) : Array(a)
	};
	lt.Controls.Medical.Tools._l_AllocateUint32ArrayInit = function(a) {
		var b = null;
		if(lt.LTHelper.supportsTypedArray) b = new Uint32Array(a);
		else
			for(var b = Array(a), c = 0; c < a; c++) b[c] = 0;
		return b
	};
	lt.Controls.Medical.Tools.testData = function(a) {
		if(null == a) return !0;
		for(var b = a.getContext("2d").getImageData(0,
				0, a.width, a.height), a = b.data.length, b = b.data, c = 0; c < a; c += 4)
			if(b[c] || b[c + 1] || b[c + 2]) return !0;
		return !1
	};
	lt.Controls.Medical.Tools._clearOutsideChunks = function(a, b, c, d, e, f, g) {
		for(var h = 0, i, j = lt.Controls.Medical.Tools._noNeedForTiles(a, e, c.tileResolution), b = lt.LeadRectD.create(0, 0, b.get_width(), b.get_height()), k = 0, h = d.length - 1; 0 <= h; h--) 3 < d[h].get_resolution().get_width() / c.tileResolution.get_width() || j ? i = !0 : (k = parseInt(f.get_fullSize().get_width() / d[h].get_resolution().get_width() + 0.5), i = c.getTransformedRect(d[h].get_rect(),
			d[h].get_resolution().get_width(), d[h].get_resolution().get_height(), e.get_flipped(), e.get_reversed(), e.get_rotateAngle()), i.set_x(parseInt(i.get_left() * k * g / 100) + a.get_x()), i.set_y(parseInt(i.get_top() * k * g / 100) + a.get_y()), i.set_width(parseInt(i.get_width() * k * g / 100)), i.set_height(parseInt(i.get_height() * k * g / 100)), i = !b.intersectsWith(i)), i && lt.Controls.Medical.Tools._removeChunk(d, h)
	};
	lt.Controls.Medical.Tools._noNeedForTiles = function(a, b, c) {
		if(!(null == c || c.get_isEmpty()) && null != b.lowResImage) {
			if(b.lowResImage.get_resolution().get_width() >=
				c.get_width()) return !0
		} else return !0;
		return null != b.thumbnailImage && b.thumbnailImage.get_resolution().get_width() >= c.get_width() ? !0 : !1
	};
	lt.Controls.Medical.Tools._addChunkToRecycled = function(a) {
		if(!(null == a.get_canvas() || null == a.get_backCanvas())) {
			for(var b = !1, c = 0; c < lt.Controls.Medical.Tools._recycledElements.length; c++) {
				var d = lt.Controls.Medical.Tools._recycledElements[c].backCanvas.backCanvasIndex;
				null == a.get_backCanvas() && a.set_backCanvas(null);
				var e = a.get_backCanvas().backCanvasIndex;
				d === e && (b = !0)
			}
			b || lt.Controls.Medical.Tools._recycledElements.add(new lt.Controls.Medical._recycledData(a.get_canvas(), a.get_backCanvas()))
		}
		a.set_canvas(null);
		a.set_backCanvas(null);
		a._image = null
	};
	lt.Controls.Medical.Tools._removeChunk = function(a, b) {
		var c = a[b];
		lt.Controls.Medical.Tools._addChunkToRecycled(c);
		c.set_canvas(null);
		c.set_backCanvas(null);
		c._image = null;
		null != a && a.removeAt(b)
	};
	lt.Controls.Medical.Tools.get__useOldCode = function() {
		return !0
	};
	lt.Controls.Medical.Tools.logicalToPhysical = function(a, b) {
		var c,
			d;
		if(null == a || null == b) return lt.LeadPointD.get_empty();
		var e = a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.image, !1);
		a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.item, !1);
		d = lt.LeadRectD.create(0, 0, a.get_attachedFrame().get_mrtiInfo().get_fullSize().get_width(), a.get_attachedFrame().get_mrtiInfo().get_fullSize().get_height());
		c = e.get_width() / d.get_width();
		d = e.get_height() / d.get_height();
		c *= b.get_x();
		d *= b.get_y();
		return lt.LeadPointD.create(c + e.get_left(),
			d + e.get_top())
	};
	lt.Controls.Medical.Tools.physicalToLogical = function(a, b) {
		if(null == a || null == b) return lt.LeadPointD.get_empty();
		var c, d;
		d = a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.image, !1);
		var e = lt.LeadRectD.create(0, 0, a.get_attachedFrame().get_mrtiInfo().get_fullSize().get_width(), a.get_attachedFrame().get_mrtiInfo().get_fullSize().get_height());
		c = d.get_width() / e.get_width();
		e = d.get_height() / e.get_height();
		c = (b.get_x() - d.get_left()) / c;
		d = (b.get_y() - d.get_top()) / e;
		return lt.LeadPointD.create(c,
			d)
	};
	lt.Controls.Medical.Tools._parseColor = function(a) {
		null == lt.Controls.Medical.Tools._colorsByName && (lt.Controls.Medical.Tools._colorsByName = {});
		a = a.trim().toLowerCase();
		return null != a.match(/#/) ? (a = a.remove(0, 1), parseInt("0x" + a)) : 0
	};
	lt.Controls.Medical.Tools._unreferencedParameter = function() {};
	lt.Controls.Medical.Tools._getTopLeftPoints = function(a, b) {
		for(var c = 0, d = a.length, e = [], f = ss.IEnumerator.getEnumerator(b); f.moveNext();) {
			for(var g = f.current, h = lt.LeadPointD.create(1E6, 1E6), c = 0; c < d; c++) a[c].get_resolution().get_width() ===
				g.get_width() && h.get_x() >= a[c].get_rect().get_x() && h.get_y() >= a[c].get_rect().get_y() && (h.set_x(a[c].get_rect().get_x()), h.set_y(a[c].get_rect().get_y()));
			e.add(h)
		}
		return e
	};
	lt.Controls.Medical.Tools._updateLocationsThumb = function(a) {
		var b = new lt.Annotations.Rendering.AnnRectangleThumbStyle;
		lt.LTHelper.device === lt.LTDevice.desktop ? b.set_size(lt.LeadSizeD.create(72, 72)) : b.set_size(lt.LeadSizeD.create(144, 144));
		b.set_stroke(lt.Annotations.Core.AnnStroke.create(lt.Annotations.Core.AnnSolidColorBrush.create("black"),
			lt.LeadLengthD.create(1)));
		b.set_fill(lt.Annotations.Core.AnnSolidColorBrush.create("rgba(173, 216, 230, .4)"));
		var c = new lt.Annotations.Rendering.AnnEllipseThumbStyle;
		c.set_size(lt.LeadSizeD.create(54, 54));
		c.set_stroke(lt.Annotations.Core.AnnStroke.create(lt.Annotations.Core.AnnSolidColorBrush.create("black"), lt.LeadLengthD.create(1)));
		c.set_fill(lt.Annotations.Core.AnnSolidColorBrush.create("rgba(144, 238, 144, .4)"));
		var d = new lt.Annotations.Rendering.AnnEllipseThumbStyle;
		d.set_size(lt.LeadSizeD.create(108,
			108));
		d.set_stroke(lt.Annotations.Core.AnnStroke.create(lt.Annotations.Core.AnnSolidColorBrush.create("black"), lt.LeadLengthD.create(1)));
		d.set_fill(lt.Annotations.Core.AnnSolidColorBrush.create("rgba(144, 238, 144, .4)"));
		for(var e = ss.IEnumerator.getEnumerator(Object.keys(a)); e.moveNext();) {
			var f = a[e.current];
			f.set_locationsThumbStyle(b);
			f.set_rotateCenterThumbStyle(c);
			f.set_rotateGripperThumbStyle(d)
		}
	};
	lt.Controls.Medical.Tools._activateAutomation = function(a) {
		a.set_active(!0);
		lt.Controls.Medical.Tools._updateLocationsThumb(a.get_manager().get_renderingEngine().get_renderers())
	};
	lt.Controls.Medical.Tools.resetCanvas = function(a) {
		if(null != a) {
			var b = a.getContext("2d");
			a.width = 1;
			a.height = 1;
			a.style.width = "1px";
			a.style.height = "1px";
			b.clearRect(0, 0, a.width, a.height)
		}
	};
	lt.Controls.Medical.Tools.createCanvas = function(a, b) {
		var c = document.createElement("canvas"),
			d = c.getContext("2d");
		c.width = a;
		c.height = b;
		c.style.width = a + "px";
		c.style.height = b + "px";
		d.clearRect(0, 0, c.width, c.height);
		return c
	};
	lt.Controls.Medical.Tools._disposeCanvas = function(a) {
		if(null != a) {
			var b = a.getContext("2d");
			b.clearRect(0,
				0, a.width, a.height);
			a.width = 1;
			a.height = 1;
			a.style.width = "1px";
			a.style.height = "1px";
			b.clearRect(0, 0, a.width, a.height);
			delete a
		}
	};
	lt.Controls.Medical.ActionCommand = function() {
		this._mouseButton = lt.Controls.MouseButtons.left
	};
	lt.Controls.Medical.ActionCommand.prototype = {
		_parent: null,
		_startCommand: !1,
		_imageViewer: null,
		get_parent: function() {
			return this._parent
		},
		set_parent: function(a) {
			return this._parent = a
		},
		get_viewer: function() {
			return this._imageViewer
		},
		set_viewer: function(a) {
			return this._imageViewer = a
		},
		get_button: function() {
			return this._mouseButton
		},
		set_button: function(a) {
			return this._mouseButton = a
		},
		_items_CollectionChanged: function() {},
		dispose: function() {},
		get_isStarted: function() {
			return this._startCommand
		},
		set_isStarted: function(a) {
			return this._startCommand = a
		},
		_setInteractiveMode: function(a) {
			if(null != this._imageViewer) {
				this._imageViewer.get_interactiveModes().beginUpdate();
				for(var b = 0, c = this._imageViewer.get_interactiveModes().get_count(), d = !1, e, b = lt.LTHelper.supportsMultiTouch ? 1 : 0; b < c; b++) e =
					this._imageViewer.get_interactiveModes().get_item(b), e.get_mouseButtons() === this._mouseButton && e.set_isEnabled(!1), e === a && (d = !0);
				a.set_isEnabled(!0);
				d && this._imageViewer.get_interactiveModes().remove(a);
				a.set_mouseButtons(this._mouseButton);
				this._imageViewer.get_interactiveModes().add(a);
				this._imageViewer.get_interactiveModes().endUpdate()
			}
		}
	};
	Object.defineProperty(lt.Controls.Medical.ActionCommand.prototype, "parent", {
		get: lt.Controls.Medical.ActionCommand.prototype.get_parent,
		set: lt.Controls.Medical.ActionCommand.prototype.set_parent,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.ActionCommand.prototype, "viewer", {
		get: lt.Controls.Medical.ActionCommand.prototype.get_viewer,
		set: lt.Controls.Medical.ActionCommand.prototype.set_viewer,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.ActionCommand.prototype, "button", {
		get: lt.Controls.Medical.ActionCommand.prototype.get_button,
		set: lt.Controls.Medical.ActionCommand.prototype.set_button,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.ActionCommand.prototype,
		"isStarted", {
			get: lt.Controls.Medical.ActionCommand.prototype.get_isStarted,
			set: lt.Controls.Medical.ActionCommand.prototype.set_isStarted,
			enumerable: !0,
			configurable: !0
		});
	lt.Controls.Medical._pinchAction = function() {
		lt.Controls.Medical._pinchAction.initializeBase(this)
	};
	lt.Controls.Medical._pinchAction.prototype = {
		init: function() {
			var a = new lt.Controls.Medical._imageViewerTransformInteractiveMode(!1);
			a.isPinch = !0;
			a.set_workOnBounds(!1);
			a.add_pinchWorkStarted(ss.Delegate.create(this, this._panInteractiveMode_PinchStarted$1));
			a.add_pinchWorkCompleted(ss.Delegate.create(this, this._panInteractiveMode_PinchCompleted$1));
			this._workaroundScaleAction$1 = new lt.Controls.Medical.ScaleAction;
			return a
		},
		_workaroundScaleAction$1: null,
		_panInteractiveMode_PinchCompleted$1: function(a, b) {
			this._workaroundScaleAction$1._zoomToInteractiveMode_WorkCompleted(a, b)
		},
		_startOffsetX$1: 0,
		_startOffsetY$1: 0,
		_panInteractiveMode_PinchStarted$1: function(a, b) {
			this._workaroundScaleAction$1._zoomToInteractiveMode_WorkStarted(a, b)
		},
		_getViewerImagePosition$1: function(a) {
			var b =
				lt.Controls.Medical.MRTISubCell.getFloatImageRect(a.get_imageViewer(), a),
				c = b.get_width() / 2,
				b = b.get_height() / 2,
				d = a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.item, !1).get_size(),
				a = d.get_width() / 2,
				d = d.get_height() / 2;
			return lt.LeadPointD.create(a - c, d - b)
		},
		_calculateOffset$1: function(a) {
			var b = this._getViewerImagePosition$1(a);
			if(b.get_isEmpty()) return lt.LeadPointD.get_empty();
			var c = a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.image, !1),
				a = a.get_imageViewer().getItemViewBounds(a,
					lt.Controls.ImageViewerItemPart.item, !1);
			return lt.LeadPointD.create(b.get_x() - (c.get_left() - a.get_left()), b.get_y() - (c.get_top() - a.get_top()))
		},
		_offsetInteractiveMode_WorkCompleted$1: function(a) {
			var b = a.get_item();
			if(null != b) {
				var c = a.SubCellAttached,
					d = b.get_attachedFrame();
				if(null != d) {
					var e = a.get__cursorPoint();
					e.get_x();
					e.get_y();
					d._savePosition();
					if(c.get_linked()) {
						for(var e = c.get_frames().get_count(), f = 0, f = 0; f < e; f++) b = c.get_frames().get_item(f), b !== d && (b._normalizedPosition.set_x(b._normalizedPosition.get_x() +
							d._normalizedPositionDelta.get_x()), b._normalizedPosition.set_y(b._normalizedPosition.get_y() + d._normalizedPositionDelta.get_y()));
						e = c.get_imageViewer().get_items().get_count();
						for(f = 0; f < e; f++) b = c.get_imageViewer().get_items().get_item(f), b = b.get_attachedFrame(), b !== d && null != b && b._updateOffset(b.get_offsetX(), b.get_offsetY())
					} else d._updateOffset(d.get_offsetX(), d.get_offsetY());
					a.get_imageViewer().automationInvalidate(lt.LeadRectD.get_empty())
				}
			}
		},
		_offsetInteractiveMode_WorkStarted$1: function(a) {
			a.get_item();
			a = a.get__cursorPoint();
			this._startOffsetX$1 = a.get_x();
			this._startOffsetY$1 = a.get_y()
		},
		start: function(a) {
			this._setInteractiveMode(a)
		},
		dispose: function(a) {
			a.remove_pinchWorkStarted(ss.Delegate.create(this, this._panInteractiveMode_PinchStarted$1));
			a.remove_pinchWorkCompleted(ss.Delegate.create(this, this._panInteractiveMode_PinchCompleted$1))
		}
	};
	lt.Controls.Medical.OffsetAction = function() {
		lt.Controls.Medical.OffsetAction.initializeBase(this)
	};
	lt.Controls.Medical.OffsetAction.prototype = {
		init: function() {
			var a =
				new lt.Controls.Medical._imageViewerTransformInteractiveMode(!1);
			a.set_idleCursor("default");
			a.set_workingCursor("crosshair");
			a.enablePan = !0;
			a.enableZoom = !1;
			a.set_workOnBounds(!1);
			a.add_workCompleted(ss.Delegate.create(this, this._offsetInteractiveMode_WorkCompleted$1));
			a.add_workStarted(ss.Delegate.create(this, this._offsetInteractiveMode_WorkStarted$1));
			return a
		},
		_panInteractiveMode_PinchCompleted$1: function() {},
		_startOffsetX$1: 0,
		_startOffsetY$1: 0,
		_panInteractiveMode_PinchStarted$1: function() {},
		_getViewerImagePosition$1: function(a) {
			var b =
				lt.Controls.Medical.MRTISubCell.getFloatImageRect(a.get_imageViewer(), a),
				c = b.get_width() / 2,
				b = b.get_height() / 2,
				d = a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.item, !1).get_size(),
				a = d.get_width() / 2,
				d = d.get_height() / 2;
			return lt.LeadPointD.create(a - c, d - b)
		},
		_calculateOffset$1: function(a) {
			var b = this._getViewerImagePosition$1(a);
			if(b.get_isEmpty()) return lt.LeadPointD.get_empty();
			var c = a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.image, !1),
				a = a.get_imageViewer().getItemViewBounds(a,
					lt.Controls.ImageViewerItemPart.item, !1);
			return lt.LeadPointD.create(b.get_x() - (c.get_left() - a.get_left()), b.get_y() - (c.get_top() - a.get_top()))
		},
		_offsetInteractiveMode_WorkCompleted$1: function(a) {
			var b = a.get_item();
			if(null != b) {
				var c = a.SubCellAttached,
					d = b.get_attachedFrame();
				if(null != d) {
					var e = a.get__cursorPoint();
					e.get_x();
					e.get_y();
					d._savePosition();
					if(c.get_linked()) {
						for(var e = c.get_frames().get_count(), f = 0, f = 0; f < e; f++) b = c.get_frames().get_item(f), b !== d && (b._normalizedPosition.set_x(b._normalizedPosition.get_x() +
							d._normalizedPositionDelta.get_x()), b._normalizedPosition.set_y(b._normalizedPosition.get_y() + d._normalizedPositionDelta.get_y()));
						e = c.get_imageViewer().get_items().get_count();
						for(f = 0; f < e; f++) b = c.get_imageViewer().get_items().get_item(f), b = b.get_attachedFrame(), b !== d && null != b && b._updateOffset(b.get_offsetX(), b.get_offsetY())
					} else d._updateOffset(d.get_offsetX(), d.get_offsetY());
					a.get_imageViewer().automationInvalidate(lt.LeadRectD.get_empty())
				}
			}
		},
		_offsetInteractiveMode_WorkStarted$1: function(a) {
			a.get_item();
			a = a.get__cursorPoint();
			this._startOffsetX$1 = a.get_x();
			this._startOffsetY$1 = a.get_y()
		},
		start: function(a) {
			this._setInteractiveMode(a)
		},
		dispose: function(a) {
			a.remove_workCompleted(ss.Delegate.create(this, this._offsetInteractiveMode_WorkCompleted$1));
			a.remove_workStarted(ss.Delegate.create(this, this._offsetInteractiveMode_WorkStarted$1));
			a.remove_pinchWorkStarted(ss.Delegate.create(this, this._panInteractiveMode_PinchStarted$1));
			a.remove_pinchWorkCompleted(ss.Delegate.create(this, this._panInteractiveMode_PinchCompleted$1))
		}
	};
	lt.Controls.Medical.LineProfileAction = function() {
		lt.Controls.Medical.LineProfileAction.initializeBase(this)
	};
	lt.Controls.Medical.LineProfileAction.prototype = {
		init: function() {
			return new lt.Controls.Medical.LineProfileInteractiveMode
		},
		start: function(a) {
			this._setInteractiveMode(a)
		},
		dispose: function() {}
	};
	lt.Controls.Medical.TransformItemAction = function(a) {
		lt.Controls.Medical.TransformItemAction.initializeBase(this);
		this._cell$1 = a
	};
	lt.Controls.Medical.TransformItemAction.prototype = {
		_cell$1: null,
		init: function() {
			var a =
				new lt.Controls.Medical.TransformItemInteractiveMode(this._cell$1);
			a.set_idleCursor("default");
			a.set_workingCursor("crosshair");
			a.set_workOnBounds(!1);
			return a
		},
		start: function(a) {
			this._setInteractiveMode(a)
		},
		dispose: function() {}
	};
	lt.Controls.Medical.ScaleAction = function() {
		lt.Controls.Medical.ScaleAction.initializeBase(this)
	};
	lt.Controls.Medical.ScaleAction.prototype = {
		init: function() {
			var a = new lt.Controls.Medical._imageViewerTransformInteractiveMode(!0);
			a.set_idleCursor("default");
			a.set_workingCursor("crosshair");
			a.enablePan = !1;
			a.enableZoom = !0;
			a.set_scaleAtPosition(!0);
			a.set_workOnBounds(!1);
			a.add_workCompleted(ss.Delegate.create(this, this._zoomToInteractiveMode_WorkCompleted));
			a.add_workStarted(ss.Delegate.create(this, this._zoomToInteractiveMode_WorkStarted));
			return a
		},
		_getImageControlRectangle$1: function(a, b) {
			return a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.image, b)
		},
		_getViewerImagePosition$1: function(a) {
			var b = lt.Controls.Medical.MRTISubCell.getFloatImageRect(a.get_imageViewer(),
					a),
				c = b.get_width() / 2,
				b = b.get_height() / 2,
				d = a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.item, !1).get_size(),
				a = d.get_width() / 2,
				d = d.get_height() / 2;
			return lt.LeadPointD.create(a - c, d - b)
		},
		_calculateOffset$1: function(a) {
			var b = this._getViewerImagePosition$1(a);
			if(b.get_isEmpty()) return lt.LeadPointD.get_empty();
			var c = lt.Controls.Medical.MRTISubCell.getFloatImageRect(a.get_imageViewer(), a),
				a = a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.item, !1);
			return lt.LeadPointD.create(b.get_x() -
				(c.get_left() - a.get_left()), b.get_y() - (c.get_top() - a.get_top()))
		},
		_calculateZoom$1: function(a, b) {
			var c = 0;
			switch(b) {
				case lt.Controls.ControlSizeMode.fit:
				case lt.Controls.ControlSizeMode.fitAlways:
				case lt.Controls.ControlSizeMode.fitWidth:
				case lt.Controls.ControlSizeMode.fitHeight:
					c = a.get_scaleFactor();
					break;
				case lt.Controls.ControlSizeMode.actualSize:
					c = a.get_scaleFactor()
			}
			return c
		},
		_zoomToInteractiveMode_WorkCompleted: function(a) {
			var b = a.get_item();
			if(null != b) {
				var c = a.SubCellAttached,
					d = b.get_attachedFrame();
				if(null != d) {
					var e = b.get_scaleFactor() - this._startValue$1,
						e = e / (b.get_scaleFactor() - e),
						f = this._calculateOffset$1(b);
					f.get_x();
					f.get_y();
					d._savePosition();
					if(c.get_linked()) {
						for(var f = c.get_frames().get_count(), g = 0, h, g = 0; g < f; g++) b = c.get_frames().get_item(g), h = b.get_scale() + e * b.get_scale(), b !== d && (b._normalizedPosition.set_x(b._normalizedPosition.get_x() + d._normalizedPositionDelta.get_x()), b._normalizedPosition.set_y(b._normalizedPosition.get_y() + d._normalizedPositionDelta.get_y())), b.zoom(b.get_scaleMode(),
							h);
						f = c.get_imageViewer().get_items().get_count();
						for(g = 0; g < f; g++) b = c.get_imageViewer().get_items().get_item(g), b = b.get_attachedFrame(), b !== d && null != b && b._updateOffset(b.get_offsetX(), b.get_offsetY())
					} else d.set_scale(d.get_scale() + e * d.get_scale()), d.zoom(d.get_scaleMode(), d.get_scale());
					a.get_imageViewer().automationInvalidate(lt.LeadRectD.get_empty())
				}
			}
		},
		_startValue$1: 0,
		_startOffsetX$1: 0,
		_startOffsetY$1: 0,
		_zoomToInteractiveMode_WorkStarted: function(a) {
			var a = a.get_item(),
				b = this._calculateOffset$1(a);
			this._startOffsetX$1 = b.get_x();
			this._startOffsetY$1 = b.get_y();
			this._startValue$1 = a.get_scaleFactor()
		},
		start: function(a) {
			this._setInteractiveMode(a)
		},
		dispose: function(a) {
			a.remove_workCompleted(ss.Delegate.create(this, this._zoomToInteractiveMode_WorkCompleted));
			a.remove_workStarted(ss.Delegate.create(this, this._zoomToInteractiveMode_WorkStarted))
		}
	};
	lt.Controls.Medical.MagnifyAction = function() {
		lt.Controls.Medical.MagnifyAction.initializeBase(this)
	};
	lt.Controls.Medical.MagnifyAction.prototype = {
		init: function() {
			var a =
				new lt.Controls.ImageViewerMagnifyGlassInteractiveMode;
			a.set_idleCursor("default");
			a.set_workingCursor("none");
			a.set_backgroundColor("black");
			lt.LTHelper.supportsTouch && (a.set_offset(lt.LeadPointD.create(0, -1 * (a.get_size().get_height() / 2))), a.set_ensureVisible(!1));
			return a
		},
		start: function(a) {
			this._setInteractiveMode(a)
		}
	};
	lt.Controls.Medical.LeadPoint3D = function(a, b, c) {
		this._x = a;
		this._y = b;
		this._z = c
	};
	lt.Controls.Medical.LeadPoint3D.create = function(a, b, c) {
		return new lt.Controls.Medical.LeadPoint3D(a,
			b, c)
	};
	lt.Controls.Medical.LeadPoint3D.get_empty = function() {
		return new lt.Controls.Medical.LeadPoint3D(0, 0, 0)
	};
	lt.Controls.Medical.LeadPoint3D.prototype = {
		_x: 0,
		_y: 0,
		_z: 0,
		get_x: function() {
			return this._x
		},
		set_x: function(a) {
			return this._x = a
		},
		get_y: function() {
			return this._y
		},
		set_y: function(a) {
			return this._y = a
		},
		get_z: function() {
			return this._z
		},
		set_z: function(a) {
			return this._z = a
		}
	};
	Object.defineProperty(lt.Controls.Medical.LeadPoint3D.prototype, "x", {
		get: lt.Controls.Medical.LeadPoint3D.prototype.get_x,
		set: lt.Controls.Medical.LeadPoint3D.prototype.set_x,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LeadPoint3D.prototype, "y", {
		get: lt.Controls.Medical.LeadPoint3D.prototype.get_y,
		set: lt.Controls.Medical.LeadPoint3D.prototype.set_y,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LeadPoint3D.prototype, "z", {
		get: lt.Controls.Medical.LeadPoint3D.prototype.get_z,
		set: lt.Controls.Medical.LeadPoint3D.prototype.set_z,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LeadPoint3D, "empty", {
		get: lt.Controls.Medical.LeadPoint3D.get_empty,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.CrossHairInteractiveMode = function() {
		lt.Controls.Medical.CrossHairInteractiveMode.initializeBase(this);
		this.set_autoItemMode(lt.Controls.ImageViewerAutoItemMode.autoSet);
		this.set_itemPart(lt.Controls.ImageViewerItemPart.item);
		this.set_isDragMouseWheelEnabled(!1)
	};
	lt.Controls.Medical.CrossHairInteractiveMode.get3DCursor = function(a, b, c) {
		if(null == b || !b.get_frames().get_count() || null == a || !a.get_frames().get_count()) return lt.Controls.Medical.LeadPoint3D.get_empty();
		var d = -1,
			e = -1;
		Type.canCast(a, lt.Controls.Medical.MPRCell) && (d = a.get_mprType());
		Type.canCast(b, lt.Controls.Medical.MPRCell) && (e = b.get_mprType());
		if(d === e) return lt.Controls.Medical.LeadPoint3D.get_empty();
		if(-1 === d)
			if(b.get_generator() === a) d = 0;
			else return lt.Controls.Medical.LeadPoint3D.get_empty();
		if(-1 === e)
			if(a.get_generator() === b) e = 0;
			else return lt.Controls.Medical.LeadPoint3D.get_empty();
		var f = b.get_frames().get_item(0).get_width(),
			g = b.get_frames().get_item(0).get_height(),
			b = b.get_frames().get_count();
		if(0 > c.get_x() || c.get_x() > f || 0 > c.get_y() || c.get_y() > g || 0 > c.get_z() || c.get_z() > b) return lt.Controls.Medical.LeadPoint3D.get_empty();
		var h = a.get_frames().get_item(0).get_width(),
			i = a.get_frames().get_item(0).get_height(),
			a = a.get_frames().get_count(),
			j = 0,
			k = 0,
			l = 0,
			m = c.get_x(),
			n = c.get_y(),
			c = c.get_z();
		switch(e) {
			case 0:
				1 === d ? (j = n * h / g, k = c * i / b, l = m * a / f) : (j = m * h / f, k = c * i / b, l = n * a / g);
				break;
			case 1:
				d ? (j = c * h / b, k = n * i / g, l = m * a / f) : (j = c * h / b, k = m * i / f, l = n * a / g);
				break;
			case 2:
				d ? (j = c * h / b, k = n * i / g, l = m * a / f) : (j = m * h / f, k = c * i / b, l = n * a /
					g)
		}
		return lt.Controls.Medical.LeadPoint3D.create(j, k, l)
	};
	lt.Controls.Medical.CrossHairInteractiveMode._getMPRCell$1 = function(a, b) {
		for(var c = 0, d = a.get_derivatives().get_count(), e, c = 0; c < d; c++)
			if(e = a.get_derivatives().get_item(c), Type.canCast(e, lt.Controls.Medical.MPRCell) && e !== b) return e;
		return null
	};
	lt.Controls.Medical.CrossHairInteractiveMode.scrollCrossHair = function(a, b, c) {
		var d = a.get_imageViewer().get_items().get_item(0);
		lt.Controls.Medical.MRTISubCell.getFloatImageRect(d.get_imageViewer(), d);
		a.set__crossHairPosition(lt.LeadPointD.create(b,
			c));
		if(Type.canCast(a, lt.Controls.Medical.MPRCell)) {
			var d = a,
				a = d.get_generator(),
				e = lt.Controls.Medical.CrossHairInteractiveMode._getMPRCell$1(a, d),
				f;
			null != a && (f = lt.Controls.Medical.CrossHairInteractiveMode.get3DCursor(a, d, new lt.Controls.Medical.LeadPoint3D(b, c, d._getActiveSubCellIndex())), a.set__crossHairPosition(lt.LeadPointD.create(f.get_x(), f.get_y())), a.invalidate());
			null != e && (f = lt.Controls.Medical.CrossHairInteractiveMode.get3DCursor(e, d, new lt.Controls.Medical.LeadPoint3D(b, c, d._getActiveSubCellIndex())),
				e.set__crossHairPosition(lt.LeadPointD.create(f.get_x(), f.get_y())), e.invalidate())
		} else if(a.get_derivatives().get_count() && (d = lt.Controls.Medical.CrossHairInteractiveMode._getMPRCell$1(a, null), e = lt.Controls.Medical.CrossHairInteractiveMode._getMPRCell$1(a, d), null != d && (f = lt.Controls.Medical.CrossHairInteractiveMode.get3DCursor(d, a, new lt.Controls.Medical.LeadPoint3D(b, c, a._getActiveSubCellIndex())), d.set__crossHairPosition(lt.LeadPointD.create(f.get_x(), f.get_y())), d.invalidate()), null != e)) f = lt.Controls.Medical.CrossHairInteractiveMode.get3DCursor(e,
			a, new lt.Controls.Medical.LeadPoint3D(b, c, a._getActiveSubCellIndex())), e.set__crossHairPosition(lt.LeadPointD.create(f.get_x(), f.get_y())), e.invalidate()
	};
	lt.Controls.Medical.CrossHairInteractiveMode._updateCorssHair$1 = function(a, b, c) {
		var d = a.get_parentCell();
		a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.image, !1);
		d.set__crossHairPosition(lt.LeadPointD.create(b, c));
		if(Type.canCast(d, lt.Controls.Medical.MPRCell)) {
			var a = d.get_generator(),
				e = lt.Controls.Medical.CrossHairInteractiveMode._getMPRCell$1(a,
					d),
				f;
			null != a && (f = lt.Controls.Medical.CrossHairInteractiveMode.get3DCursor(a, d, new lt.Controls.Medical.LeadPoint3D(b, c, d._getActiveSubCellIndex())), a.set__crossHairPosition(lt.LeadPointD.create(f.get_x(), f.get_y())), a.get_currentOffset() !== parseInt(f.get_z() + 0.5) ? a.set_currentOffset(parseInt(f.get_z() + 0.5)) : a.invalidate());
			null != e && (f = lt.Controls.Medical.CrossHairInteractiveMode.get3DCursor(e, d, new lt.Controls.Medical.LeadPoint3D(b, c, d._getActiveSubCellIndex())), e.set__crossHairPosition(lt.LeadPointD.create(f.get_x(),
				f.get_y())), e.get_currentOffset() !== parseInt(f.get_z() + 0.5) ? e.set_currentOffset(parseInt(f.get_z() + 0.5)) : e.invalidate())
		} else if(d.get_derivatives().get_count() && (a = d, d = lt.Controls.Medical.CrossHairInteractiveMode._getMPRCell$1(a, null), e = lt.Controls.Medical.CrossHairInteractiveMode._getMPRCell$1(a, d), null != d && (f = lt.Controls.Medical.CrossHairInteractiveMode.get3DCursor(d, a, new lt.Controls.Medical.LeadPoint3D(b, c, a._getActiveSubCellIndex())), d.set__crossHairPosition(lt.LeadPointD.create(f.get_x(), f.get_y())),
				d.get_currentOffset() !== parseInt(f.get_z() + 0.5) ? d.set_currentOffset(parseInt(f.get_z() + 0.5)) : d.invalidate()), null != e)) f = lt.Controls.Medical.CrossHairInteractiveMode.get3DCursor(e, a, new lt.Controls.Medical.LeadPoint3D(b, c, a._getActiveSubCellIndex())), e.set__crossHairPosition(lt.LeadPointD.create(f.get_x(), f.get_y())), e.get_currentOffset() !== parseInt(f.get_z() + 0.5) ? e.set_currentOffset(parseInt(f.get_z() + 0.5)) : e.invalidate()
	};
	lt.Controls.Medical.CrossHairInteractiveMode.prototype = {
		_viewer$1: null,
		get_id: function() {
			return 104
		},
		start: function(a) {
			lt.Controls.Medical.CrossHairInteractiveMode.callBaseMethod(this, "start", [a]);
			this._viewer$1 = a;
			a = lt.Controls.Medical.CrossHairInteractiveMode.callBaseMethod(this, "get_interactiveService");
			a.add_dragStarted(ss.Delegate.create(this, this._service_DragStarted$1));
			a.add_dragDelta(ss.Delegate.create(this, this._service_DragDelta$1));
			a.add_dragCompleted(ss.Delegate.create(this, this._service_DragCompleted$1))
		},
		stop: function(a) {
			if(this.get_isStarted()) {
				var b = lt.Controls.Medical.CrossHairInteractiveMode.callBaseMethod(this,
					"get_interactiveService");
				b.remove_dragStarted(ss.Delegate.create(this, this._service_DragStarted$1));
				b.remove_dragDelta(ss.Delegate.create(this, this._service_DragDelta$1));
				b.remove_dragCompleted(ss.Delegate.create(this, this._service_DragCompleted$1));
				lt.Controls.Medical.CrossHairInteractiveMode.callBaseMethod(this, "stop", [a])
			}
		},
		_service_DragCompleted$1: function() {
			if(this.get_isWorking()) this.onWorkCompleted(lt.LeadEventArgs.Empty)
		},
		_updateMPRPositions$1: function(a, b, c) {
			var d = a.get_parentCell(),
				e =
				a.get_attachedFrame(),
				f = a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.image, !1),
				b = Math.max(0, Math.min(e.get_width(), (b - f.get_left()) * e.get_width() / f.get_width())),
				c = Math.max(0, Math.min(e.get_height(), (c - f.get_top()) * e.get_height() / f.get_height()));
			lt.Controls.Medical.CrossHairInteractiveMode._updateCorssHair$1(a, b, c);
			d.invalidate()
		},
		_service_DragDelta$1: function(a, b) {
			var c = lt.Controls.Medical.CrossHairInteractiveMode.callBaseMethod(this, "get_item");
			this.get_isWorking() &&
				this._updateMPRPositions$1(c, b.get_position().get_x(), b.get_position().get_y())
		},
		_service_DragStarted$1: function(a, b) {
			var c = lt.Controls.Medical.CrossHairInteractiveMode.callBaseMethod(this, "get_item");
			if(this.canStartWork(b) && (null == c && (c = this.get_item()), null != this.get_item() && (b.get_mouseButton() === this.get_mouseButtons() || b.get_nativeEvent().type === lt.LTHelper.mouseWheelEvent))) this._cells$1 = this._getAllCellsInvolved$1(c), this._updateMPRPositions$1(c, b.get_position().get_x(), b.get_position().get_y()),
				this.onWorkStarted(lt.LeadEventArgs.Empty)
		},
		_getAllCellsInvolved$1: function(a) {
			var b = [],
				a = a.get_parentCell();
			if(Type.canCast(a, lt.Controls.Medical.MPRCell)) {
				var c = a,
					a = c.get_generator(),
					d = lt.Controls.Medical.CrossHairInteractiveMode._getMPRCell$1(a, c);
				b.add(c);
				b.add(a);
				b.add(d)
			} else a.get_derivatives().get_count() && (c = lt.Controls.Medical.CrossHairInteractiveMode._getMPRCell$1(a, null), d = lt.Controls.Medical.CrossHairInteractiveMode._getMPRCell$1(a, c), b.add(a), b.add(c), b.add(d));
			return b
		},
		_cells$1: null,
		get_name: function() {
			return "Probe Tool"
		}
	};
	Object.defineProperty(lt.Controls.Medical.CrossHairInteractiveMode.prototype, "id", {
		get: lt.Controls.Medical.CrossHairInteractiveMode.prototype.get_id,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.CrossHairInteractiveMode.prototype, "name", {
		get: lt.Controls.Medical.CrossHairInteractiveMode.prototype.get_name,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.CrossHairAction = function() {
		lt.Controls.Medical.CrossHairAction.initializeBase(this)
	};
	lt.Controls.Medical.CrossHairAction.prototype = {
		init: function() {
			var a = new lt.Controls.Medical.CrossHairInteractiveMode;
			a.set_idleCursor("default");
			a.set_workingCursor("crosshair");
			return a
		},
		start: function(a) {
			this._setInteractiveMode(a)
		}
	};
	lt.Controls.Medical.ProbeToolAction = function() {
		lt.Controls.Medical.ProbeToolAction.initializeBase(this)
	};
	lt.Controls.Medical.ProbeToolAction.prototype = {
		add_probeToolUpdated: function(a) {
			this.__probeToolUpdated$1 = ss.Delegate.combine(this.__probeToolUpdated$1, a)
		},
		remove_probeToolUpdated: function(a) {
			this.__probeToolUpdated$1 =
				ss.Delegate.remove(this.__probeToolUpdated$1, a)
		},
		__probeToolUpdated$1_handler_get: function() {
			null == this.__probeToolUpdated$1_handler && (this.__probeToolUpdated$1_handler = ss.EventHandler.create(this, this.add_probeToolUpdated, this.remove_probeToolUpdated));
			return this.__probeToolUpdated$1_handler
		},
		__probeToolUpdated$1: null,
		__probeToolUpdated$1_handler: null,
		_magnifyInteractiveMode_WorkCompleted$1: function() {},
		_probeInteractiveMode$1: null,
		init: function() {
			this._probeInteractiveMode$1 = new lt.Controls.Medical.ProbeToolInteractiveMode(this.get_parent());
			this._probeInteractiveMode$1.add_probeToolUpdated(ss.Delegate.create(this, this._probeInteractiveMode_ProbeToolUpdated$1));
			this._probeInteractiveMode$1.set_idleCursor("default");
			this._probeInteractiveMode$1.set_workingCursor("default");
			return this._probeInteractiveMode$1
		},
		get_interactiveObject: function() {
			return this._probeInteractiveMode$1
		},
		_probeInteractiveMode_ProbeToolUpdated$1: function(a, b) {
			if(null != this.__probeToolUpdated$1) {
				var c = new lt.Controls.Medical.ProbeToolEventArgs(b.get_position(), b.get_target());
				this.__probeToolUpdated$1(a, c);
				b.set_pixelValue(c.get_pixelValue())
			}
		},
		_probeInteractiveMode_WorkCompleted$1: function() {},
		start: function(a) {
			this._setInteractiveMode(a)
		}
	};
	Object.defineProperty(lt.Controls.Medical.ProbeToolAction.prototype, "probeToolUpdated", {
		get: lt.Controls.Medical.ProbeToolAction.prototype.__probeToolUpdated$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.ProbeToolAction.prototype, "interactiveObject", {
		get: lt.Controls.Medical.ProbeToolAction.prototype.get_interactiveObject,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.SpyGlassAction = function() {
		lt.Controls.Medical.SpyGlassAction.initializeBase(this)
	};
	lt.Controls.Medical.SpyGlassAction.prototype = {
		add_imageRequested: function(a) {
			this.__imageRequested$2 = ss.Delegate.combine(this.__imageRequested$2, a)
		},
		remove_imageRequested: function(a) {
			this.__imageRequested$2 = ss.Delegate.remove(this.__imageRequested$2, a)
		},
		__imageRequested$2_handler_get: function() {
			null == this.__imageRequested$2_handler && (this.__imageRequested$2_handler =
				ss.EventHandler.create(this, this.add_imageRequested, this.remove_imageRequested));
			return this.__imageRequested$2_handler
		},
		__imageRequested$2: null,
		__imageRequested$2_handler: null,
		add_workCompleted: function(a) {
			this.__workCompleted$2 = ss.Delegate.combine(this.__workCompleted$2, a)
		},
		remove_workCompleted: function(a) {
			this.__workCompleted$2 = ss.Delegate.remove(this.__workCompleted$2, a)
		},
		__workCompleted$2_handler_get: function() {
			null == this.__workCompleted$2_handler && (this.__workCompleted$2_handler = ss.EventHandler.create(this,
				this.add_workCompleted, this.remove_workCompleted));
			return this.__workCompleted$2_handler
		},
		__workCompleted$2: null,
		__workCompleted$2_handler: null,
		add_positionChanged: function(a) {
			this.__positionChanged$2 = ss.Delegate.combine(this.__positionChanged$2, a)
		},
		remove_positionChanged: function(a) {
			this.__positionChanged$2 = ss.Delegate.remove(this.__positionChanged$2, a)
		},
		__positionChanged$2_handler_get: function() {
			null == this.__positionChanged$2_handler && (this.__positionChanged$2_handler = ss.EventHandler.create(this,
				this.add_positionChanged, this.remove_positionChanged));
			return this.__positionChanged$2_handler
		},
		__positionChanged$2: null,
		__positionChanged$2_handler: null,
		add_chunkLoaded: function(a) {
			this.__chunkLoaded$2 = ss.Delegate.combine(this.__chunkLoaded$2, a)
		},
		remove_chunkLoaded: function(a) {
			this.__chunkLoaded$2 = ss.Delegate.remove(this.__chunkLoaded$2, a)
		},
		__chunkLoaded$2_handler_get: function() {
			null == this.__chunkLoaded$2_handler && (this.__chunkLoaded$2_handler = ss.EventHandler.create(this, this.add_chunkLoaded, this.remove_chunkLoaded));
			return this.__chunkLoaded$2_handler
		},
		__chunkLoaded$2: null,
		__chunkLoaded$2_handler: null,
		tiling: !0,
		_subCell$2: null,
		init: function() {
			var a = new lt.Controls.Medical.MedicalSpyGlassInteractiveMode;
			a.set_idleCursor("default");
			a.set_workingCursor("none");
			a.set_backgroundColor("black");
			a.set_shape(lt.Controls.ImageViewerSpyGlassShape.ellipse);
			a.set_crosshair(lt.Controls.ImageViewerSpyGlassCrosshair.none);
			a.add_imageRequested(ss.Delegate.create(this, this._magnifyInteractiveMode_ImageRequested$2));
			a.add_workCompleted(ss.Delegate.create(this,
				this._magnifyInteractiveMode_WorkCompleted$2));
			a.add_positionChanged(ss.Delegate.create(this, this._magnifyInteractiveMode_PositionChanged$2));
			a.add__chunkLoaded(ss.Delegate.create(this, this._magnifyInteractiveMode_ChunkLoaded$2));
			a.tiling = this.tiling;
			lt.LTHelper.supportsTouch && (a.set_offset(lt.LeadPointD.create(0, -1 * (a.get_size().get_height() / 2))), a.set_ensureVisible(!1));
			return a
		},
		_magnifyInteractiveMode_ChunkLoaded$2: function(a, b) {
			null != this.__chunkLoaded$2 && this.__chunkLoaded$2(a, b)
		},
		_magnifyInteractiveMode_PositionChanged$2: function(a,
			b) {
			null != this.__positionChanged$2 && this.__positionChanged$2(a, b)
		},
		_magnifyInteractiveMode_WorkCompleted$2: function(a) {
			null != this.__workCompleted$2 && this.__workCompleted$2(a, new lt.Controls.Medical.SpyGlassEventArgs(null, null, this._subCell$2))
		},
		_magnifyInteractiveMode_ImageRequested$2: function(a, b) {
			this._subCell$2 = b.get_userData();
			null != this.__imageRequested$2 && this.__imageRequested$2(a, b)
		},
		start: function(a) {
			this._setInteractiveMode(a)
		}
	};
	Object.defineProperty(lt.Controls.Medical.SpyGlassAction.prototype,
		"imageRequested", {
			get: lt.Controls.Medical.SpyGlassAction.prototype.__imageRequested$2_handler_get,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.SpyGlassAction.prototype, "workCompleted", {
		get: lt.Controls.Medical.SpyGlassAction.prototype.__workCompleted$2_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.SpyGlassAction.prototype, "positionChanged", {
		get: lt.Controls.Medical.SpyGlassAction.prototype.__positionChanged$2_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.SpyGlassAction.prototype, "chunkLoaded", {
		get: lt.Controls.Medical.SpyGlassAction.prototype.__chunkLoaded$2_handler_get,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.StackAction = function() {
		lt.Controls.Medical.StackAction.initializeBase(this)
	};
	lt.Controls.Medical.StackAction.prototype = {
		_stackInteractiveMode$1: null,
		_enableWheel$1: !1,
		get_enableWheel: function() {
			return this._enableWheel$1
		},
		set_enableWheel: function(a) {
			return this._enableWheel$1 =
				a
		},
		init: function() {
			this._stackInteractiveMode$1 = new lt.Controls.Medical.StackInteractiveMode;
			this._stackInteractiveMode$1.loadImages(null);
			this._stackInteractiveMode$1.set_idleCursor("default");
			this._stackInteractiveMode$1.set_workingCursor("crosshair");
			this._stackInteractiveMode$1.add_workCompleted(ss.Delegate.create(this, this._stack_Started$1));
			this._stackInteractiveMode$1.set_enableWheel(this.get_enableWheel());
			return this._stackInteractiveMode$1
		},
		_stack_Started$1: function() {},
		start: function(a) {
			this._stackInteractiveMode$1.loadImages(this.get_parent());
			this._setInteractiveMode(a)
		}
	};
	Object.defineProperty(lt.Controls.Medical.StackAction.prototype, "enableWheel", {
		get: lt.Controls.Medical.StackAction.prototype.get_enableWheel,
		set: lt.Controls.Medical.StackAction.prototype.set_enableWheel,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.StackInteractiveMode = function() {
		lt.Controls.Medical.StackInteractiveMode.initializeBase(this)
	};
	lt.Controls.Medical.StackInteractiveMode.prototype = {
		_cell$1: null,
		loadImages: function(a) {
			this._cell$1 = a
		},
		get_id: function() {
			return 101
		},
		_enableWheel$1: !1,
		get_enableWheel: function() {
			return this._enableWheel$1
		},
		set_enableWheel: function(a) {
			return this._enableWheel$1 = a
		},
		start: function(a) {
			lt.Controls.Medical.StackInteractiveMode.callBaseMethod(this, "start", [a]);
			a = lt.Controls.Medical.StackInteractiveMode.callBaseMethod(this, "get_interactiveService");
			a.add_dragStarted(ss.Delegate.create(this, this._service_DragStarted$1));
			a.add_dragDelta(ss.Delegate.create(this, this._service_DragDelta$1));
			a.add_dragCompleted(ss.Delegate.create(this, this._service_DragCompleted$1))
		},
		stop: function(a) {
			if(this.get_isStarted()) {
				var b = lt.Controls.Medical.StackInteractiveMode.callBaseMethod(this, "get_interactiveService");
				b.remove_dragStarted(ss.Delegate.create(this, this._service_DragStarted$1));
				b.remove_dragDelta(ss.Delegate.create(this, this._service_DragDelta$1));
				b.remove_dragCompleted(ss.Delegate.create(this, this._service_DragCompleted$1));
				lt.Controls.Medical.StackInteractiveMode.callBaseMethod(this, "stop", [a])
			}
		},
		_selectedOnly: !1,
		_service_DragCompleted$1: function() {
			if(this.get_isWorking()) this.onWorkCompleted(lt.LeadEventArgs.Empty)
		},
		_resetIfOnEdge$1: function(a, b, c) {
			this._cell$1.get_currentOffset() === a - 1 ? 0 < b && (this._origin$1 = c.get_position().clone(), this._originalStackValue$1 = this._cell$1.get_currentOffset()) : !this._cell$1.get_currentOffset() && 0 > b && (this._origin$1 = c.get_position().clone(), this._originalStackValue$1 = this._cell$1.get_currentOffset())
		},
		_service_DragDelta$1: function(a, b) {
			if((this.get_enableWheel() || b.get_nativeEvent().type !== lt.LTHelper.mouseWheelEvent) && this.get_isWorking()) {
				this.get_imageViewer();
				var c = this._cell$1.get_currentOffset(),
					c = lt.LTHelper.device === lt.LTDevice.desktop ? 20 : 40,
					d = 0,
					d = b.get_nativeEvent().type === lt.LTHelper.mouseWheelEvent ? 0 < b.get_change().get_y() ? -1 : 1 : Math.round((b.get_position().get_y() - this._origin$1.get_y()) / c),
					c = this._cell$1.get_currentOffset() - this._originalStackValue$1,
					e = 0;
				switch(this._cell$1.get_scrollType()) {
					case 0:
						e = 0;
						break;
					case 1:
						e = 1;
						break;
					case 2:
						e = this._cell$1.get_gridLayout().get_columns();
						break;
					case 3:
						e = 1;
						break;
					case 4:
						e = this._cell$1.get_gridLayout().get_rows() * this._cell$1.get_gridLayout().get_columns()
				}
				c =
					this._cell$1.get_currentOffset() + (d * e - c);
				e = lt.Controls.Medical.Tools._getMaxAllowed(this._cell$1);
				this._resetIfOnEdge$1(e, d, b);
				c = Math.max(0, Math.min(e - 1, c));
				this._cell$1.set_currentOffset(c)
			}
		},
		_origin$1: null,
		_originalStackValue$1: 0,
		_service_DragStarted$1: function(a, b) {
			this.get_imageViewer();
			if(!this._selectedOnly || this._cell$1.get_selected())
				if(this._originalStackValue$1 = this._cell$1.get_currentOffset(), this._origin$1 = b.get_position().clone(), b.get_mouseButton() === this.get_mouseButtons() || b.get_nativeEvent().type ===
					lt.LTHelper.mouseWheelEvent) this.onWorkStarted(lt.LeadEventArgs.Empty)
		},
		get_name: function() {
			return "Stack mode"
		}
	};
	Object.defineProperty(lt.Controls.Medical.StackInteractiveMode.prototype, "id", {
		get: lt.Controls.Medical.StackInteractiveMode.prototype.get_id,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.StackInteractiveMode.prototype, "enableWheel", {
		get: lt.Controls.Medical.StackInteractiveMode.prototype.get_enableWheel,
		set: lt.Controls.Medical.StackInteractiveMode.prototype.set_enableWheel,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.StackInteractiveMode.prototype, "name", {
		get: lt.Controls.Medical.StackInteractiveMode.prototype.get_name,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.WindowLevelAction = function() {
		lt.Controls.Medical.WindowLevelAction.initializeBase(this)
	};
	lt.Controls.Medical.WindowLevelAction.prototype = {
		_windowLevel$1: null,
		init: function() {
			this._windowLevel$1 = new lt.Controls.Medical.WindowLevelInteractiveMode;
			this._windowLevel$1.add_workCompleted(ss.Delegate.create(this,
				this._windowLevel_Completed$1));
			this._windowLevel$1.add_workStarted(ss.Delegate.create(this, this._windowLevel_Started$1));
			this._windowLevel$1.add_workDelta(ss.Delegate.create(this, this._windowLevel_WorkDelta$1));
			this._windowLevel$1.add_render(ss.Delegate.create(this, this._windowLevel_Render$1));
			this._windowLevel$1.add_renderCompleted(ss.Delegate.create(this, this._windowLevel_RenderCompleted$1));
			return this._windowLevel$1
		},
		_windowLevel_WorkDelta$1: function(a, b) {
			var c = a.get_item().get_attachedFrame();
			a.set_data(c.get_wlData());
			c._windowLevel_Delta(a, b)
		},
		_windowLevel_RenderCompleted$1: function(a) {
			a = a.get_item();
			null != a && Type.canCast(a, lt.Controls.Medical.MRTISubCell) && a._updateWindowlevelOnTheRest()
		},
		_windowLevel_Render$1: function(a) {
		    a = a.get_item();
		    var t = Type.canCast(a.get_parentCell(), lt.Controls.Medical.MPRCell);
		    if(t){
		        a = a.get_parentCell();
		        a._generateMPRFrame(a.get_currentOffset(), a.get_currentOffset());
		        a.invalidate();
		    }
		    else{
		        if(Type.canCast(a, lt.Controls.Medical.MRTISubCell))
		            a._updateWindowlevel(!1);
		    }
		},
		_windowLevel_Started$1: function(a,
			b) {
			var c = a.get_item().get_attachedFrame();
			null != c ? c._windowLevel_Started(a, b) : a.set_data(null)
		},
		_windowLevel_Completed$1: function(a, b) {
			var c = a.get_item();
			null != c && (c = c.get_attachedFrame(), null != c && c._windowLevel_Completed(a, b))
		},
		dispose: function() {
			this._windowLevel$1.remove_workCompleted(ss.Delegate.create(this, this._windowLevel_Completed$1));
			this._windowLevel$1.remove_workStarted(ss.Delegate.create(this, this._windowLevel_Started$1))
		},
		start: function(a) {
			this._setInteractiveMode(a)
		}
	};
	lt.Controls.Medical.AutomationInteractiveAction =
		function(a) {
			lt.Controls.Medical.AutomationInteractiveAction.initializeBase(this);
			this._objectID$1 = a
		};
	lt.Controls.Medical.AutomationInteractiveAction.prototype = {
		_objectID$1: 0,
		init: function() {
			return new lt.Controls.Medical.AutomationInteractiveMode
		},
		get_objectID: function() {
			return this._objectID$1
		},
		set_objectID: function(a) {
			this._objectID$1 = a;
			this.get_parent().get_imageViewer().get_items().get_count();
			return a
		},
		start: function(a) {
			var b = this.get_parent().get_automation();
			this._setInteractiveMode(a);
			b.get_manager().get_currentObjectId() !==
				this._objectID$1 && b.get_manager().set_currentObjectId(this._objectID$1)
		}
	};
	Object.defineProperty(lt.Controls.Medical.AutomationInteractiveAction.prototype, "objectID", {
		get: lt.Controls.Medical.AutomationInteractiveAction.prototype.get_objectID,
		set: lt.Controls.Medical.AutomationInteractiveAction.prototype.set_objectID,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.CobbAngle = function(a, b, c) {
		this._automation = a;
		this._container = this._automation.get_container();
		this._line1 = b;
		this._line2 = c;
		this._backgroundColor =
			"rgba(255, 255, 255, 255)";
		this._borderColor = "rgba(0, 0, 255, 255)";
		this._automation.add_edit(ss.Delegate.create(this, this._automation_Edit));
		this._container.get_children().add_collectionChanged(ss.Delegate.create(this, this._children_CollectionChanged));
		this._calculate()
	};
	lt.Controls.Medical.CobbAngle.prototype = {
		_line1: null,
		_line2: null,
		_needsRecalculation: !1,
		_container: null,
		_automation: null,
		_backgroundColor: null,
		_borderColor: null,
		add_cobbAngleChanged: function(a) {
			this.__cobbAngleChanged = ss.Delegate.combine(this.__cobbAngleChanged,
				a)
		},
		remove_cobbAngleChanged: function(a) {
			this.__cobbAngleChanged = ss.Delegate.remove(this.__cobbAngleChanged, a)
		},
		__cobbAngleChanged_handler_get: function() {
			null == this.__cobbAngleChanged_handler && (this.__cobbAngleChanged_handler = ss.EventHandler.create(this, this.add_cobbAngleChanged, this.remove_cobbAngleChanged));
			return this.__cobbAngleChanged_handler
		},
		__cobbAngleChanged: null,
		__cobbAngleChanged_handler: null,
		dispose: function() {
			this._automation.remove_edit(ss.Delegate.create(this, this._automation_Edit))
		},
		_designer_Edit: function() {
			this._recalculate()
		},
		_synchLine: function(a) {
			return -1 === this._automation.get_container().get_children().indexOf(a) ? null : a
		},
		_children_CollectionChanged: function() {
			var a = this._line1,
				b = this._line2;
			this._line1 = this._synchLine(a);
			this._line2 = this._synchLine(b);
			(this._line1 !== a || this._line2 !== b) && null != this.__cobbAngleChanged && this.__cobbAngleChanged(this, lt.LeadEventArgs.Empty)
		},
		_automation_Edit: function() {
			this._calculate()
		},
		get_line1: function() {
			return this._line1
		},
		set_line1: function(a) {
			this._line1 =
				a;
			this._calculate();
			return a
		},
		get_line2: function() {
			return this._line2
		},
		set_line2: function(a) {
			this._line2 = a;
			this._calculate();
			return a
		},
		get_angle: function() {
			return 0
		},
		get_backgroundColor: function() {
			return this._backgroundColor
		},
		set_backgroundColor: function(a) {
			this._backgroundColor = a;
			this._repaint();
			return a
		},
		get_borderColor: function() {
			return this._borderColor
		},
		set_borderColor: function(a) {
			this._borderColor = a;
			this._repaint();
			return a
		},
		get__needsRecalculation: function() {
			return this._needsRecalculation
		},
		set__needsRecalculation: function(a) {
			return this._needsRecalculation = a
		},
		draw: function(a) {
			if(!(null == this._line1 || null == this._line2)) {
				a.save();
				var b = this._container.get_mapper(),
					c = b.pointFromContainerCoordinates(this._point1, lt.Annotations.Core.AnnFixedStateOperations.none),
					d = b.pointFromContainerCoordinates(this._point2, lt.Annotations.Core.AnnFixedStateOperations.none),
					b = b.pointFromContainerCoordinates(this._intersectionPoint, lt.Annotations.Core.AnnFixedStateOperations.none);
				a.beginPath();
				a.lineWidth =
					1;
				this._line1.get_stroke().get_stroke();
				a.strokeStyle = this._borderColor;
				a.moveTo(c.get_x(), c.get_y());
				a.lineTo(b.get_x(), b.get_y());
				this._line2.get_stroke().get_stroke();
				a.strokeStyle = this._borderColor;
				a.moveTo(d.get_x(), d.get_y());
				a.lineTo(b.get_x(), b.get_y());
				a.stroke();
				a.textAlign = "center";
				a.textBaseline = "middle";
				a.font = String.format("{0}px Arial", 12);
				c = String.format("{0} \u00b0", Math.round(100 * this._resultAngle) / 100);
				d = parseInt(a.measureText(c).width) + 10;
				a.beginPath();
				a.fillStyle = this._backgroundColor;
				a.fillRect(b.get_x(), b.get_y() - 9, d, 17);
				a.stroke();
				a.beginPath();
				a.strokeStyle = this._borderColor;
				a.rect(b.get_x(), b.get_y() - 9, d, 17);
				a.stroke();
				a.beginPath();
				a.fillStyle = "blue";
				a.strokeStyle = this._borderColor;
				a.fillText(c, b.get_x() + d / 2, b.get_y());
				a.stroke();
				a.restore()
			}
		},
		_calculate: function() {
			this._recalculate();
			return 1
		},
		_resultAngle: 0,
		_startPoint1: null,
		_endPoint1: null,
		_startPoint2: null,
		_endPoint2: null,
		_angle2: 0,
		_factor1: 0,
		_intersectionPoint: null,
		_point1: null,
		_point2: null,
		_annContainer: null,
		_repaint: function() {},
		_recalculate: function() {
			if(!(null == this._line1 || null == this._line2)) {
				this._startPoint1 = this._container.get_mapper().pointFromContainerCoordinates(this._line1.get_points().get_item(0), lt.Annotations.Core.AnnFixedStateOperations.none);
				this._endPoint1 = this._container.get_mapper().pointFromContainerCoordinates(this._line1.get_points().get_item(1), lt.Annotations.Core.AnnFixedStateOperations.none);
				this._startPoint2 = this._container.get_mapper().pointFromContainerCoordinates(this._line2.get_points().get_item(0),
					lt.Annotations.Core.AnnFixedStateOperations.none);
				this._endPoint2 = this._container.get_mapper().pointFromContainerCoordinates(this._line2.get_points().get_item(1), lt.Annotations.Core.AnnFixedStateOperations.none);
				var a = this._getLineAngle(this._startPoint1, this._endPoint1);
				this._angle2 = this._getLineAngle(this._startPoint2, this._endPoint2);
				var b, c, d;
				b = this._distance(this._startPoint1.get_x(), this._startPoint1.get_y(), this._startPoint2.get_x(), this._startPoint2.get_y());
				c = this._distance(this._startPoint1.get_x(),
					this._startPoint1.get_y(), this._endPoint2.get_x(), this._endPoint2.get_y());
				d = this._distance(this._endPoint1.get_x(), this._endPoint1.get_y(), this._startPoint2.get_x(), this._startPoint2.get_y());
				var e = this._distance(this._endPoint1.get_x(), this._endPoint1.get_y(), this._endPoint2.get_x(), this._endPoint2.get_y()),
					f = !1;
				b < c && (f = !0);
				this._factor1 = 1;
				switch(d < e ? f ? b < d ? 0 : 2 : c < d ? 1 : 2 : f ? b < e ? 0 : 3 : c < e ? 1 : 3) {
					case 0:
						this._factor1 = -1;
						b = this._startPoint1;
						c = this._startPoint2;
						break;
					case 1:
						this._factor1 = -1;
						b = this._startPoint1;
						c = this._endPoint2;
						break;
					case 2:
						b = this._endPoint1;
						c = this._startPoint2;
						break;
					default:
						b = this._endPoint1, c = this._endPoint2
				}
				d = this._getPointExtension(b, a, 40, this._factor1);
				this._point1 = this._container.get_mapper().pointToContainerCoordinates(b);
				this._point2 = this._container.get_mapper().pointToContainerCoordinates(c);
				this._intersectionPoint = this._container.get_mapper().pointToContainerCoordinates(d);
				0 > a && (a += Math.PI);
				0 > this._angle2 && (this._angle2 += Math.PI);
				this._resultAngle = 180 * (a - this._angle2) / Math.PI;
				0 > this._resultAngle && (this._resultAngle += 180);
				90 < this._resultAngle && (this._resultAngle = 180 - this._resultAngle);
				null != this.__cobbAngleChanged && this.__cobbAngleChanged(this, lt.LeadEventArgs.Empty)
			}
		},
		_removeLineIfAssigned: function() {},
		_getLineAngle: function(a, b) {
			return Math.atan2(b.get_y() - a.get_y(), b.get_x() - a.get_x())
		},
		_distance: function(a, b, c, d) {
			a -= c;
			b -= d;
			return Math.sqrt(a * a + b * b)
		},
		_getPointExtension: function(a, b, c, d) {
			var e = d * c * Math.cos(b),
				b = d * c * Math.sin(b);
			return lt.LeadPointD.create(a.get_x() + e,
				a.get_y() + b)
		}
	};
	Object.defineProperty(lt.Controls.Medical.CobbAngle.prototype, "cobbAngleChanged", {
		get: lt.Controls.Medical.CobbAngle.prototype.__cobbAngleChanged_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.CobbAngle.prototype, "line1", {
		get: lt.Controls.Medical.CobbAngle.prototype.get_line1,
		set: lt.Controls.Medical.CobbAngle.prototype.set_line1,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.CobbAngle.prototype, "line2", {
		get: lt.Controls.Medical.CobbAngle.prototype.get_line2,
		set: lt.Controls.Medical.CobbAngle.prototype.set_line2,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.CobbAngle.prototype, "angle", {
		get: lt.Controls.Medical.CobbAngle.prototype.get_angle,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.CobbAngle.prototype, "backgroundColor", {
		get: lt.Controls.Medical.CobbAngle.prototype.get_backgroundColor,
		set: lt.Controls.Medical.CobbAngle.prototype.set_backgroundColor,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.CobbAngle.prototype,
		"borderColor", {
			get: lt.Controls.Medical.CobbAngle.prototype.get_borderColor,
			set: lt.Controls.Medical.CobbAngle.prototype.set_borderColor,
			enumerable: !0,
			configurable: !0
		});
	lt.Controls.Medical.ProgressLoading = function(a) {
		this._cell = a;
		this._fillColorValues(this._red, this._green, this._blue)
	};
	lt.Controls.Medical.ProgressLoading.prototype = {
		_totalFrames: 0,
		_currentProgress: 0,
		_currentProgressPercent: 0,
		_cell: null,
		_lineWidth: 10,
		_red: 44,
		_green: 238,
		_blue: 252,
		_color: null,
		_darkColor: null,
		_visible: !0,
		get_visible: function() {
			return this._visible
		},
		set_visible: function(a) {
			this._visible = a;
			null != this._cell && this._cell.invalidate();
			return a
		},
		draw: function(a, b) {
			if(this._visible && !(this._currentProgress >= this._totalFrames)) {
				a.save();
				b.get_width();
				var c = b.get_height();
				this._lineWidth = 10;
				a.beginPath();
				a.strokeStyle = this._darkColor;
				a.fillStyle = this._darkColor;
				a.lineWidth = 2;
				a.fillRect(2 * this._lineWidth, 1 * c / 5, this._lineWidth, 3 * c / 5);
				var d = 3 * this._currentProgressPercent * c / 500,
					c = 4 * c / 5 - d;
				a.strokeStyle = "white";
				a.fillStyle = this._color;
				a.fillRect(2 * this._lineWidth,
					c, this._lineWidth, d);
				a.textAlign = "left";
				a.textBaseline = "top";
				a.font = "12px Arial";
				a.fillText(String.format("{0} of {1} Loaded", this._currentProgress, this._totalFrames), 10, c + d + 10);
				a.stroke();
				a.restore()
			}
		},
		_fillColorValues: function(a, b, c) {
			this._color = String.format("rgba({0}, {1}, {2}, 255)", a, b, c);
			this._red = a;
			this._green = b;
			this._blue = c;
			this._darkColor = String.format("rgba({0}, {1}, {2}, 0.7)", a >> 1, b >> 1, c >> 1)
		},
		setColor: function(a, b, c) {
			this._fillColorValues(a, b, c);
			null != this._cell && this._cell.invalidate()
		},
		get_totalFrames: function() {
			return this._totalFrames
		},
		set_totalFrames: function(a) {
			this._totalFrames = a;
			null != this._cell && this.get_progress() && this.get_progress() < this._totalFrames - 1 && this._cell.invalidate();
			return a
		},
		get_progressPercent: function() {
			return this._currentProgressPercent
		},
		set_progressPercent: function(a) {
			this._currentProgressPercent = a;
			this._currentProgress = this._totalFrames * this._currentProgressPercent / 100;
			null != this._cell && this._cell.invalidate();
			return a
		},
		get_progress: function() {
			return this._currentProgress
		},
		set_progress: function(a) {
			try {
				this._currentProgress = a, this._totalFrames && (this._currentProgressPercent = parseInt(100 * a / this._totalFrames)), null != this._cell && this._currentProgress === this._totalFrames && this._cell._fireEvent(null, 2, null), null != this._cell && this._cell.invalidate()
			} catch(b) {
				alert(b.message)
			}
			return a
		}
	};
	Object.defineProperty(lt.Controls.Medical.ProgressLoading.prototype, "visible", {
		get: lt.Controls.Medical.ProgressLoading.prototype.get_visible,
		set: lt.Controls.Medical.ProgressLoading.prototype.set_visible,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.ProgressLoading.prototype, "totalFrames", {
		get: lt.Controls.Medical.ProgressLoading.prototype.get_totalFrames,
		set: lt.Controls.Medical.ProgressLoading.prototype.set_totalFrames,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.ProgressLoading.prototype, "progressPercent", {
		get: lt.Controls.Medical.ProgressLoading.prototype.get_progressPercent,
		set: lt.Controls.Medical.ProgressLoading.prototype.set_progressPercent,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.ProgressLoading.prototype, "progress", {
		get: lt.Controls.Medical.ProgressLoading.prototype.get_progress,
		set: lt.Controls.Medical.ProgressLoading.prototype.set_progress,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.LineProfileObject = function() {
		this._histogramMarker = -1;
		this._histogramColorType = 2
	};
	lt.Controls.Medical.LineProfileObject._getLinePoints = function(a, b) {
		var c = null;
		if(a.get_isEmpty() || b.get_isEmpty() || a.get_x() === b.get_x() ||
			a.get_y() === b.get_y()) return null;
		var d = a.get_x(),
			c = a.get_y(),
			e = b.get_y(),
			f = b.get_x();
		if(Math.abs(d - c) > Math.abs(f - e))
			for(var g = (e - f) / (c - d), e = 0, h = Math.abs(d - c) + 1, c = Array(h), e = 0; e < h; e++) f = g * e + d, c[e] = lt.LeadPointD.create(d, f);
		else {
			g = (c - d) / (e - f);
			h = Math.abs(f - e) + 1;
			c = Array(h);
			for(e = 0; e < h; e++) d = g * e + f, c[e] = lt.LeadPointD.create(d, f)
		}
		return c
	};
	lt.Controls.Medical.LineProfileObject.prototype = {
		_logicalStartPoint: null,
		_logicalEndPoint: null,
		_physicalStartPoint: null,
		_physicalEndPoint: null,
		get_histogramMarker: function() {
			return this._histogramMarker
		},
		set_histogramMarker: function(a) {
			this._histogramMarker = a;
			if(!(null == this._frame || null == this._frame.get_parentCell())) return this._frame.get_parentCell().get_imageViewer().automationInvalidate(lt.LeadRectD.get_empty()), a
		},
		_context: null,
		_updateCounter: 0,
		_frame: null,
		_pointsValid: function(a) {
			for(var b = 0, c = a.length, b = 0; b < c; b++)
				if(null == a[b] || a[b].get_isEmpty()) return !1;
			return !0
		},
		end: function() {
			this._pointsValid([this.get_logicalStartPoint(), this.get_logicalEndPoint()]) && (this.get_logicalEndPoint().set_x(0),
				this.get_logicalEndPoint().set_y(0), this.get_logicalStartPoint().set_x(0), this.get_logicalStartPoint().set_y(0), null != this._frame && null != this._frame.get_subCell() && this._frame.get_subCell().get_parentCell().get_automation().invalidate(lt.LeadRectD.get_empty()), this._frame = null)
		},
		refresh: function() {
			this._canUpdate() && null != this.get__context() && this.draw(this.get__context());
			this.attachFrame(this._frame);
			this._updateHistogram()
		},
		beginUpdate: function() {
			this._updateCounter++
		},
		endUpdate: function() {
			this._updateCounter--;
			this._canUpdate() && null != this.get__context() && this.draw(this.get__context())
		},
		_canUpdate: function() {
			return !this._updateCounter
		},
		get_logicalStartPoint: function() {
			return this._logicalStartPoint
		},
		set_logicalStartPoint: function(a) {
			this._logicalStartPoint = a;
			if(!(null == this._frame || null == this._frame.get_subCell())) return this._physicalStartPoint = lt.Controls.Medical.Tools.logicalToPhysical(this._frame.get_subCell(), this._logicalStartPoint), this._canUpdate() && null != this.get__context() && this.draw(this.get__context()),
				a
		},
		get_logicalEndPoint: function() {
			return this._logicalEndPoint
		},
		set_logicalEndPoint: function(a) {
			this._logicalEndPoint = a;
			if(!(null == this._frame || null == this._frame.get_subCell())) return this._physicalEndPoint = lt.Controls.Medical.Tools.logicalToPhysical(this._frame.get_subCell(), this._logicalEndPoint), this._canUpdate() && null != this.get__context() && this.draw(this.get__context()), a
		},
		get_physicalStartPoint: function() {
			return lt.Controls.Medical.Tools.logicalToPhysical(this._frame.get_subCell(), this._logicalStartPoint)
		},
		set_physicalStartPoint: function(a) {
			this._physicalStartPoint = a;
			if(null != this._frame) return this._logicalStartPoint = lt.Controls.Medical.Tools.physicalToLogical(this._frame.get_subCell(), this._physicalStartPoint), this._canUpdate() && null != this.get__context() && this.draw(this.get__context()), a
		},
		get_physicalEndPoint: function() {
			return lt.Controls.Medical.Tools.logicalToPhysical(this._frame.get_subCell(), this._logicalEndPoint)
		},
		set_physicalEndPoint: function(a) {
			this._physicalEndPoint = a;
			if(null != this._frame) return this._logicalEndPoint =
				lt.Controls.Medical.Tools.physicalToLogical(this._frame.get_subCell(), this._physicalEndPoint), this._canUpdate() && null != this.get__context() && this.draw(this.get__context()), a
		},
		get__context: function() {
			return this._context
		},
		set__context: function(a) {
			return this._context = a
		},
		_lineProfileCanvas: null,
		_lineProfileData: null,
		_subCell: null,
		attachFrame: function(a) {
			this._frame = a;
			if(null != this._frame && (this._subCell = this._frame.get_subCell(), !(this.get_physicalEndPoint().get_isEmpty() || this.get_physicalEndPoint().get_isEmpty() ||
					this.get_physicalEndPoint().get_x() === this.get_physicalStartPoint().get_x() && this.get_physicalEndPoint().get_y() === this.get_physicalStartPoint().get_y())))
				if(null == this._lineProfileCanvas && (this._lineProfileCanvas = document.createElement("canvas")), !(null == this._subCell || null == this._subCell.get_imageViewer() || null == this._subCell.get_imageViewer().get_foreCanvas())) this._lineProfileCanvas.width = this._subCell.get_imageViewer().get_foreCanvas().width, this._lineProfileCanvas.height = this._subCell.get_imageViewer().get_foreCanvas().height,
					this._lineProfileCanvas.width && this._lineProfileCanvas.height && (a = this._lineProfileCanvas.getContext("2d"), this._subCell._paintTiles(a, !0), this._lineProfileData = a.getImageData(0, 0, this._lineProfileCanvas.width, this._lineProfileCanvas.height))
		},
		_updateHistogram: function() {
			if(!(null == this._subCell || null == this._frame)) {
				var a = this._subCell.get_parentCell(),
					b = this._subCell;
				null == b.get_attachedFrame() || null == b.get_attachedFrame().get_information() || null == b.get_attachedFrame() || null == a.get_lineProfile() ||
					null == a.get_lineProfile().get_physicalStartPoint() || null == a.get_lineProfile().get_physicalEndPoint() || (a = this._getLineHistogram(b, this._lineProfileData, a.get_lineProfile().get_physicalEndPoint(), a.get_lineProfile().get_physicalStartPoint(), this._histogramColorType), null != a && null != this.__histogramGenerated && this.__histogramGenerated(this, new lt.Controls.Medical.HistogramGeneratedEventArgs(a, b.get_attachedFrame(), lt.Controls.Medical.Tools._isGray16(b.get_attachedFrame().get_information()) || 2 === this._histogramColorType ?
						2 : 1)))
			}
		},
		add_histogramGenerated: function(a) {
			this.__histogramGenerated = ss.Delegate.combine(this.__histogramGenerated, a)
		},
		remove_histogramGenerated: function(a) {
			this.__histogramGenerated = ss.Delegate.remove(this.__histogramGenerated, a)
		},
		__histogramGenerated_handler_get: function() {
			null == this.__histogramGenerated_handler && (this.__histogramGenerated_handler = ss.EventHandler.create(this, this.add_histogramGenerated, this.remove_histogramGenerated));
			return this.__histogramGenerated_handler
		},
		__histogramGenerated: null,
		__histogramGenerated_handler: null,
		_getLineHistogram: function(a, b, c, d, e) {
			if(null == c || null == d || d.get_isEmpty() || c.get_isEmpty()) return [];
			var f = (c.get_y() - d.get_y()) / (c.get_x() - d.get_x()),
				g, h;
			h = g = parseInt(d.get_x());
			var i = lt.Controls.Medical.Tools._isGray(a.get_attachedFrame().get_information()),
				j = parseInt(c.get_x()),
				k = 0,
				l = d.get_y(),
				m = Math.abs(Math.round(j - g)),
				m = i || 2 === e ? Array(m) : Array(3 * m),
				k = a.get_attachedFrame().get_information(),
				a = 0,
				n = 1,
				o;
			o = k.get_highBit() ? k.get_highBit() : k.get_bitsPerPixel() - 1;
			var p =
				k.get_signed() ? 1 : 0,
				p = 1 << o + 1 >> p,
				e = i ? 8 === k.get_bitsPerPixel() ? 0 : 1 : 2 === e ? 3 : 2;
			if(Math.abs(c.get_y() - d.get_y()) < Math.abs(c.get_x() - d.get_x()))
				for(g > j && (n = -1); g !== j; g += n) switch(k = parseInt(f * (g - h) + l), c = parseInt(k * b.width + g) << 2, e) {
					case 0:
						m[a] = b.data[c + 2];
						a++;
						break;
					case 1:
						m[a] = b.data[c + 1] << 8 | b.data[c + 2];
						m[a] > p && (m[a] -= 1 << o + 1);
						a++;
						break;
					case 3:
						m[a] = lt.Controls.Medical.Tools._calculateGrayValue(b.data[c], b.data[c + 1], b.data[c + 2]);
						a++;
						break;
					case 2:
						m[a] = b.data[c], m[a + 1] = b.data[c + 1], m[a + 2] = b.data[c + 2], a += 3
				} else {
					k =
						parseInt(d.get_y());
					j = parseInt(c.get_y());
					for(k > j && (n = -1); k !== j; k += n) switch(g = (k - l) / f + h, c = parseInt(k * b.width + g) << 2, e) {
						case 0:
							m[a] = b.data[c + 2];
							a++;
							break;
						case 1:
							m[a] = b.data[c + 1] << 8 | b.data[c + 2];
							m[a] > p && (m[a] -= 1 << o + 1);
							a++;
							break;
						case 3:
							m[a] = lt.Controls.Medical.Tools._calculateGrayValue(b.data[c], b.data[c + 1], b.data[c + 2]);
							a++;
							break;
						case 2:
							m[a] = b.data[c], m[a + 1] = b.data[c + 1], m[a + 2] = b.data[c + 2], a += 3
					}
				}
			return m
		},
		draw: function(a) {
			if(null != this._frame) {
				var b = this._frame.get_subCell();
				if(null != b) {
					b.get_imageViewer().getItemViewBounds(b,
						lt.Controls.ImageViewerItemPart.image, !1);
					var c = b.get_imageViewer().getItemViewBounds(b, lt.Controls.ImageViewerItemPart.item, !1),
						b = this.get_physicalStartPoint(),
						d = this.get_physicalEndPoint(),
						e = b.get_x() - c.get_left(),
						f = b.get_y() - c.get_top(),
						b = d.get_x() - c.get_left(),
						c = d.get_y() - c.get_top();
					a.save();
					a.beginPath();
					a.strokeStyle = "black";
					a.moveTo(e + 1, f + 1);
					a.lineTo(b + 1, c + 1);
					a.stroke();
					a.beginPath();
					a.strokeStyle = "#e7e7a7";
					a.moveTo(e, f);
					a.lineTo(b, c);
					a.stroke(); - 1 !== this._histogramMarker && (d = this._histogramMarker /
						Math.max(Math.abs(b - e), Math.abs(c - f)), e += (b - e) * d, f += (c - f) * d, a.beginPath(), a.strokeStyle = "black", a.fillStyle = "#e7e7a7", a.arc(e, f, 4, 0, 2 * Math.PI, !1), a.fill(), a.stroke());
					a.restore()
				}
			}
		},
		get_histogramColorType: function() {
			return this._histogramColorType
		},
		set_histogramColorType: function(a) {
			this._histogramColorType = a;
			this._updateHistogram();
			return a
		},
		_freeCanvas: function() {
			lt.Controls.Medical.Tools._disposeCanvas(this._lineProfileCanvas);
			this._lineProfileData = null
		}
	};
	Object.defineProperty(lt.Controls.Medical.LineProfileObject.prototype,
		"histogramMarker", {
			get: lt.Controls.Medical.LineProfileObject.prototype.get_histogramMarker,
			set: lt.Controls.Medical.LineProfileObject.prototype.set_histogramMarker,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.LineProfileObject.prototype, "logicalStartPoint", {
		get: lt.Controls.Medical.LineProfileObject.prototype.get_logicalStartPoint,
		set: lt.Controls.Medical.LineProfileObject.prototype.set_logicalStartPoint,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LineProfileObject.prototype,
		"logicalEndPoint", {
			get: lt.Controls.Medical.LineProfileObject.prototype.get_logicalEndPoint,
			set: lt.Controls.Medical.LineProfileObject.prototype.set_logicalEndPoint,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.LineProfileObject.prototype, "physicalStartPoint", {
		get: lt.Controls.Medical.LineProfileObject.prototype.get_physicalStartPoint,
		set: lt.Controls.Medical.LineProfileObject.prototype.set_physicalStartPoint,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LineProfileObject.prototype,
		"physicalEndPoint", {
			get: lt.Controls.Medical.LineProfileObject.prototype.get_physicalEndPoint,
			set: lt.Controls.Medical.LineProfileObject.prototype.set_physicalEndPoint,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.LineProfileObject.prototype, "histogramGenerated", {
		get: lt.Controls.Medical.LineProfileObject.prototype.__histogramGenerated_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LineProfileObject.prototype, "histogramColorType", {
		get: lt.Controls.Medical.LineProfileObject.prototype.get_histogramColorType,
		set: lt.Controls.Medical.LineProfileObject.prototype.set_histogramColorType,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.ShutterObject = function(a, b) {
		this._frame = a;
		this._automation = b;
		this._initialize()
	};
	lt.Controls.Medical.ShutterObject.isValid = function(a) {
		return Type.canCast(a, lt.Annotations.Core.AnnSelectionObject) || Type.canCast(a, lt.Annotations.Core.AnnCurveObject) ? !1 : Type.canCast(a, lt.Annotations.Core.AnnRectangleObject) || Type.canCast(a, lt.Annotations.Core.AnnPolylineObject) && a.get_isClosed() ?
			!0 : !1
	};
	lt.Controls.Medical.ShutterObject.prototype = {
		_shutterArea: null,
		_canvasElement: null,
		_fillStyle: null,
		_visible: !1,
		_automation: null,
		_viewer: null,
		_frame: null,
		_objects: null,
		get_objects: function() {
			return this._objects
		},
		set_objects: function(a) {
			return this._objects = a
		},
		_initialize: function() {
			this._objects = new lt.LeadCollection;
			this._objects.add_collectionChanged(ss.Delegate.create(this, this._objects_CollectionChanged));
			this._fillStyle = "rgba(32, 32, 32, 0.8)"
		},
		_updateShutter: function() {
			for(var a = ss.IEnumerator.getEnumerator(this._objects); a.moveNext();) this._updateShutterBorder(a.current);
			this.onSizeChanged();
			this._automation.invalidate(null)
		},
		_restoreStrokes: function(a) {
			for(var b = 0, c = a.length, d, e, f, b = 0; b < c; b++) d = a[b], e = d.OldColor, f = d.OldStroke, d.set_stroke(lt.Annotations.Core.AnnStroke.create(lt.Annotations.Core.AnnSolidColorBrush.create(e), lt.LeadLengthD.create(f)))
		},
		_objects_CollectionChanged: function(a, b) {
			switch(b.get_action()) {
				case lt.NotifyLeadCollectionChangedAction.add:
					this._updateShutter();
					break;
				case lt.NotifyLeadCollectionChangedAction.remove:
				case lt.NotifyLeadCollectionChangedAction.reset:
					this._restoreStrokes(b.get_newItems()),
						this._updateShutter()
			}
		},
		_dispose: function() {
			this._deattach();
			lt.Controls.Medical.Tools._disposeCanvas(this._canvasElement)
		},
		get_visible: function() {
			return this._visible
		},
		set_visible: function(a) {
			this._visible = a;
			this._shutterArea.style.visibility = this._visible ? "visible" : "hidden";
			this._canvasElement.style.visibility = this._visible ? "visible" : "hidden";
			return a
		},
		_createShutterArea: function(a) {
			null == this._shutterArea && (this._shutterArea = document.createElement("div"), this._shutterArea.style.zIndex = 98);
			a.appendChild(this._shutterArea);
			null == this._canvasElement && (this._canvasElement = document.createElement("canvas"), this._canvasElement.width = 1, this._canvasElement.height = 1, this._canvasElement.style.zIndex = 99);
			this._shutterArea.appendChild(this._canvasElement)
		},
		_synchShutterObjects: function() {
			for(var a = 0, b = this._objects.get_count(), c, d = !1, a = 0; a < b; a++) c = this._objects.get_item(a), -1 === this._automation.get_container().get_children().indexOf(c) && (this._objects.remove(c), a--, b--, d = !0);
			d && this.updateView()
		},
		_children_CollectionChanged: function() {
			this._synchShutterObjects()
		},
		_deattach: function() {
			null != this._viewer && null != this._viewer.get_imageViewer() && (this._viewer.get_imageViewer().get_interactiveService().get_userControls().remove(this._canvasElement), this._viewer.get_imageViewer().get_interactiveService().get_userControls().remove(this._shutterArea), this._viewer.get_imageViewer().get_foreCanvas().parentNode.removeChild(this._shutterArea), this._shutterArea.removeChild(this._canvasElement));
			null != this._automation && (this._automation.remove_edit(ss.Delegate.create(this,
				this._automation_Edit)), this._frame.get_container().get_children().remove_collectionChanged(ss.Delegate.create(this, this._children_CollectionChanged)));
			null != this._objects && this._objects.remove_collectionChanged(ss.Delegate.create(this, this._objects_CollectionChanged));
			null != this._canvasElement && (this._canvasElement.style.width = "1px", this._canvasElement.style.height = "1px");
			this._viewer = null
		},
		attach: function(a) {
			this._deattach();
			this._viewer = a;
			null != this._viewer && (this._automation.add_edit(ss.Delegate.create(this,
					this._automation_Edit)), this._frame.get_container().get_children().add_collectionChanged(ss.Delegate.create(this, this._children_CollectionChanged)), this._objects.add_collectionChanged(ss.Delegate.create(this, this._objects_CollectionChanged)), this._createShutterArea(this._viewer.get_imageViewer().get_foreCanvas().parentNode), null != this._viewer && (this._viewer.get_imageViewer().get_interactiveService().get_userControls().add(this._canvasElement), this._viewer.get_imageViewer().get_interactiveService().get_userControls().add(this._shutterArea)),
				this._updateShutter(), this.onSizeChanged())
		},
		_saveStrokeValue: function(a) {
			if(void 0 == a.OldColor) {
				var b = null;
				Type.canCast(a.get_stroke().get_stroke(), lt.Annotations.Core.AnnSolidColorBrush) && (b = a.get_stroke().get_stroke());
				null != b && (a.OldColor = b.get_color(), a.OldStroke = a.get_stroke().get_strokeThickness())
			}
		},
		_updateShutterBorder: function(a) {
			this._saveStrokeValue(a);
			a.set_stroke(lt.Annotations.Core.AnnStroke.create(lt.Annotations.Core.AnnSolidColorBrush.create("rgba(255, 255, 255, 0)"), lt.LeadLengthD.create(1)))
		},
		_automation_Edit: function() {
			this.updateView()
		},
		onSizeChanged: function() {
			var a = this._frame.get_subCell();
			if(!(null == a || null == this._objects)) {
				if(this._objects.get_count()) {
					var a = a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.view, !1),
						b = a.get_width(),
						c = a.get_height();
					this._shutterArea.style.left = a.get_left() + "px";
					this._shutterArea.style.top = a.get_top() + "px";
					this._shutterArea.style.width = b + "px";
					this._shutterArea.style.height = c + "px";
					this._shutterArea.style.position = "absolute";
					this._canvasElement.style.left = "0px";
					this._canvasElement.style.top = "0px";
					this._canvasElement.style.width = b + "px";
					this._canvasElement.style.height = c + "px";
					this._canvasElement.style.position = "absolute";
					this._canvasElement.width = parseInt(b);
					this._canvasElement.height = parseInt(c)
				} else this._canvasElement.style.left = "0px", this._canvasElement.style.top = "0px", this._canvasElement.style.width = "1px", this._canvasElement.style.height = "1px", this._canvasElement.width = 1, this._canvasElement.height = 1;
				this.updateView()
			}
		},
		_getAngle: function(a) {
			if(Type.canCast(a, lt.Annotations.Core.AnnRectangleObject)) return a.get_angle();
			Type.canCast(a, lt.Annotations.Core.AnnPolylineObject);
			return 0
		},
		updateView: function() {
			var a = this._canvasElement.getContext("2d"),
				b = this._frame.get_subCell();
			if(null != b) {
				b.get_imageViewer().getItemViewBounds(b, lt.Controls.ImageViewerItemPart.view, !1);
				a.save();
				var b = this._objects.get_count(),
					c = 0;
				a.clearRect(0, 0, this._canvasElement.width, this._canvasElement.height);
				if(b) {
					a.fillStyle = this._fillStyle;
					a.fillRect(0,
						0, this._canvasElement.width, this._canvasElement.height);
					a.fillStyle = "rgba(255, 255, 255, 1)";
					a.globalCompositeOperation = "destination-out";
					for(c = 0; c < b; c++) {
						var d = this._objects.get_item(c);
						Type.canCast(d.get_parent(), lt.Annotations.Core.AnnGroupObject) && d.get_parent();
						if(Type.canCast(this._objects.get_item(c), lt.Annotations.Core.AnnRectangleObject) || Type.canCast(this._objects.get_item(c), lt.Annotations.Core.AnnPolylineObject)) {
							var e = this._objects.get_item(c),
								f = this._getAngle(e),
								g = e.get_rotateCenter();
							e.get_rotateCenter().get_isEmpty() && (g = lt.LeadPointD.create((e.get_points().get_item(0).get_x() + e.get_points().get_item(2).get_x()) / 2, (e.get_points().get_item(0).get_y() + e.get_points().get_item(2).get_y()) / 2));
							e.rotate(-f, g);
							var h = this._frame.get_container().get_mapper(),
								i = d = null,
								j = null;
							if(Type.canCast(this._objects.get_item(c), lt.Annotations.Core.AnnPolylineObject))
								for(var k = this._objects.get_item(c), j = Array(k.get_points().get_count()), l = 0; l < j.length; l++) j[l] = h.pointFromContainerCoordinates(k.get_points().get_item(l),
									lt.Annotations.Core.AnnFixedStateOperations.none);
							else d = h.pointFromContainerCoordinates(e.get_points().get_item(0), lt.Annotations.Core.AnnFixedStateOperations.none), i = h.pointFromContainerCoordinates(e.get_points().get_item(2), lt.Annotations.Core.AnnFixedStateOperations.none);
							h = h.pointFromContainerCoordinates(g, lt.Annotations.Core.AnnFixedStateOperations.none);
							a.translate(h.get_x(), h.get_y());
							a.rotate(f * Math.PI / 180);
							a.translate(-h.get_x(), -h.get_y());
							e.rotate(f, g);
							if(Type.canCast(this._objects.get_item(c),
									lt.Annotations.Core.AnnEllipseObject)) e = (i.get_y() - d.get_y()) / (i.get_x() - d.get_x()), f = (d.get_x() + i.get_x()) / 2, g = (d.get_y() + i.get_y()) / 2, a.beginPath(), a.translate(f, g), a.scale(1, e), a.translate(-f, -g), a.arc(f, g, Math.abs(i.get_x() - d.get_x()) / 2, 0, 2 * Math.PI, !1), a.fill(), a.stroke();
							else if(Type.canCast(this._objects.get_item(c), lt.Annotations.Core.AnnRectangleObject)) a.fillRect(d.get_x(), d.get_y(), i.get_x() - d.get_x(), i.get_y() - d.get_y());
							else if(Type.canCast(this._objects.get_item(c), lt.Annotations.Core.AnnPolylineObject)) {
								a.beginPath();
								a.moveTo(j[0].get_x(), j[0].get_y());
								for(l = 0; l < j.length - 1; l++) a.lineTo(j[l + 1].get_x(), j[l + 1].get_y());
								a.lineTo(j[0].get_x(), j[0].get_y());
								a.closePath();
								a.fill();
								a.stroke()
							}
						}
					}
				}
				a.restore()
			}
		},
		get_fillStyle: function() {
			return this._fillStyle
		},
		set_fillStyle: function(a) {
			if(this._fillStyle !== a) return this._fillStyle = a, this.updateView(), a
		}
	};
	Object.defineProperty(lt.Controls.Medical.ShutterObject.prototype, "objects", {
		get: lt.Controls.Medical.ShutterObject.prototype.get_objects,
		set: lt.Controls.Medical.ShutterObject.prototype.set_objects,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.ShutterObject.prototype, "visible", {
		get: lt.Controls.Medical.ShutterObject.prototype.get_visible,
		set: lt.Controls.Medical.ShutterObject.prototype.set_visible,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.ShutterObject.prototype, "fillStyle", {
		get: lt.Controls.Medical.ShutterObject.prototype.get_fillStyle,
		set: lt.Controls.Medical.ShutterObject.prototype.set_fillStyle,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.SpyGlassPositionChangedEventArgs =
		function(a, b, c, d, e) {
			lt.Controls.Medical.SpyGlassPositionChangedEventArgs.initializeBase(this);
			this._displayRect$1 = c;
			this._canvas$1 = a;
			this._inputCanvas$1 = b;
			this._subCell$1 = d;
			this._chunkList$1 = e
		};
	lt.Controls.Medical.SpyGlassPositionChangedEventArgs.prototype = {
		_inputCanvas$1: null,
		_canvas$1: null,
		_displayRect$1: null,
		_subCell$1: null,
		_chunkList$1: null,
		get_chunkList: function() {
			return this._chunkList$1
		},
		get_displayRect: function() {
			return this._displayRect$1
		},
		get_canvas: function() {
			return this._canvas$1
		},
		get_inputCanvas: function() {
			return this._inputCanvas$1
		},
		get_subCell: function() {
			return this._subCell$1
		}
	};
	Object.defineProperty(lt.Controls.Medical.SpyGlassPositionChangedEventArgs.prototype, "chunkList", {
		get: lt.Controls.Medical.SpyGlassPositionChangedEventArgs.prototype.get_chunkList,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.SpyGlassPositionChangedEventArgs.prototype, "displayRect", {
		get: lt.Controls.Medical.SpyGlassPositionChangedEventArgs.prototype.get_displayRect,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.SpyGlassPositionChangedEventArgs.prototype,
		"canvas", {
			get: lt.Controls.Medical.SpyGlassPositionChangedEventArgs.prototype.get_canvas,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.SpyGlassPositionChangedEventArgs.prototype, "inputCanvas", {
		get: lt.Controls.Medical.SpyGlassPositionChangedEventArgs.prototype.get_inputCanvas,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.SpyGlassPositionChangedEventArgs.prototype, "subCell", {
		get: lt.Controls.Medical.SpyGlassPositionChangedEventArgs.prototype.get_subCell,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.SpyGlassEventArgs = function(a, b, c) {
		lt.Controls.Medical.SpyGlassEventArgs.initializeBase(this);
		this._inputCanvas$1 = a;
		this._canvas$1 = b;
		this._userData$1 = c
	};
	lt.Controls.Medical.SpyGlassEventArgs.prototype = {
		_inputCanvas$1: null,
		_canvas$1: null,
		_userData$1: null,
		get_inputCanvas: function() {
			return this._inputCanvas$1
		},
		set_inputCanvas: function(a) {
			return this._inputCanvas$1 = a
		},
		get_canvas: function() {
			return this._canvas$1
		},
		set_canvas: function(a) {
			return this._canvas$1 =
				a
		},
		get_userData: function() {
			return this._userData$1
		},
		set_userData: function(a) {
			return this._userData$1 = a
		}
	};
	Object.defineProperty(lt.Controls.Medical.SpyGlassEventArgs.prototype, "inputCanvas", {
		get: lt.Controls.Medical.SpyGlassEventArgs.prototype.get_inputCanvas,
		set: lt.Controls.Medical.SpyGlassEventArgs.prototype.set_inputCanvas,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.SpyGlassEventArgs.prototype, "canvas", {
		get: lt.Controls.Medical.SpyGlassEventArgs.prototype.get_canvas,
		set: lt.Controls.Medical.SpyGlassEventArgs.prototype.set_canvas,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.SpyGlassEventArgs.prototype, "userData", {
		get: lt.Controls.Medical.SpyGlassEventArgs.prototype.get_userData,
		set: lt.Controls.Medical.SpyGlassEventArgs.prototype.set_userData,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.MedicalSpyGlassInteractiveMode = function() {
		lt.Controls.Medical.MedicalSpyGlassInteractiveMode.initializeBase(this);
		this._chunkList$3 = [];
		this.set_autoItemMode(lt.Controls.ImageViewerAutoItemMode.autoSet);
		this.set_itemPart(lt.Controls.ImageViewerItemPart.item);
		this.set_isDragMouseWheelEnabled(!1);
		this.set_backgroundColor("black");
		this.set_scaleFactor(1);
		this._window_MouseWheelListener$3 = ss.Delegate.create(this, this._window_MouseWheel$3);
		window.addEventListener(lt.LTHelper.mouseWheelEvent, this._window_MouseWheelListener$3, !1)
	};
	lt.Controls.Medical.MedicalSpyGlassInteractiveMode.prototype = {
		_canvas$3: null,
		_window_MouseWheelListener$3: null,
		_oldEnableMouseWheel$3: !1,
		_text$3: "",
		_showOverlayText$3: !0,
		_positionScale$3: "",
		_userElementCanvas$3: null,
		_topTextCanvas$3: null,
		_bottomTextCanvas$3: null,
		add_imageRequested: function(a) {
			this.__imageRequested$3 = ss.Delegate.combine(this.__imageRequested$3, a)
		},
		remove_imageRequested: function(a) {
			this.__imageRequested$3 = ss.Delegate.remove(this.__imageRequested$3, a)
		},
		__imageRequested$3_handler_get: function() {
			null == this.__imageRequested$3_handler && (this.__imageRequested$3_handler = ss.EventHandler.create(this, this.add_imageRequested, this.remove_imageRequested));
			return this.__imageRequested$3_handler
		},
		__imageRequested$3: null,
		__imageRequested$3_handler: null,
		add_positionChanged: function(a) {
			this.__positionChanged$3 = ss.Delegate.combine(this.__positionChanged$3, a)
		},
		remove_positionChanged: function(a) {
			this.__positionChanged$3 = ss.Delegate.remove(this.__positionChanged$3, a)
		},
		__positionChanged$3_handler_get: function() {
			null == this.__positionChanged$3_handler && (this.__positionChanged$3_handler = ss.EventHandler.create(this, this.add_positionChanged, this.remove_positionChanged));
			return this.__positionChanged$3_handler
		},
		__positionChanged$3: null,
		__positionChanged$3_handler: null,
		add__chunkLoaded: function(a) {
			this.__chunkLoaded$3 = ss.Delegate.combine(this.__chunkLoaded$3, a)
		},
		remove__chunkLoaded: function(a) {
			this.__chunkLoaded$3 = ss.Delegate.remove(this.__chunkLoaded$3, a)
		},
		__chunkLoaded$3_handler_get: function() {
			null == this.__chunkLoaded$3_handler && (this.__chunkLoaded$3_handler = ss.EventHandler.create(this, this.add__chunkLoaded, this.remove__chunkLoaded));
			return this.__chunkLoaded$3_handler
		},
		__chunkLoaded$3: null,
		tiling: !0,
		refresh: function() {
			if(null !=
				this._userElementCanvas$3) {
				var a = lt.Controls.Medical.MedicalSpyGlassInteractiveMode.callBaseMethod(this, "get_item");
				null != this._canvas$3 && this._drawElement$3(a, this._canvas$3);
				this.invalidate()
			}
		},
		dispose: function() {
			this.get_imageViewer();
			window.removeEventListener(lt.LTHelper.mouseWheelEvent, this._window_MouseWheelListener$3);
			var a = this.get_interactiveModeCanvas().parentNode;
			a.removeChild(this._topTextCanvas$3);
			a.removeChild(this._bottomTextCanvas$3);
			lt.Controls.Medical.Tools._disposeCanvas(this._topTextCanvas$3);
			lt.Controls.Medical.Tools._disposeCanvas(this._bottomTextCanvas$3)
		},
		_window_MouseWheel$3: function(a) {
			if(this.get_isWorking()) {
				var b = 0;
				a.wheelDelta ? b = a.wheelDelta / 120 : a.detail && (b = -a.detail / 3);
				b = parseInt(b);
				0 < b ? (a = this.get_scale() + 0.05, this.set_scale(a)) : (a = this.get_scale() - 0.05, this.set_scale(Math.max(1, a)));
				this.tiling || this.set_scaleFactor(this.get_scale());
				this._sendPositionChanged$3(this);
				this.invalidate();
				this._calculatePositionScale$3();
				this._updateBottomText$3()
			}
		},
		_frame$3: null,
		_createBackCanvas$3: function(a) {
			null ==
				a.get_backCanvas() && a.set_backCanvas(document.createElement("canvas"));
			a.get_backCanvas().width = a.get_canvas().width;
			a.get_backCanvas().height = a.get_canvas().height;
			var b = a.get_backCanvas().getContext("2d");
			b.clearRect(0, 0, a.get_backCanvas().width, a.get_backCanvas().height);
			b.drawImage(a.get_canvas(), 0, 0)
		},
		_magnifyMRTIRenderer_RenderChunk$3: function(a, b) {
			var c = new lt.Controls.Medical.ChunkData(b.get_chunkImage(), b.get_chunkRect(), b.get_resolution(), b.get_chunkCanvas());
			c.set_backCanvas(b.get_backCanvas());
			if(null != this._frame$3) {
				this._frame$3._applyImageProcessingOnChunk(c);
				for(var d = 0; d < this._chunkList$3.length; d++)
					if(c.equal(this._chunkList$3[d])) {
						lt.Controls.Medical.Tools._removeChunk(this._chunkList$3, d);
						break
					}
				this._createBackCanvas$3(c);
				this._chunkList$3.add(c)
			} else lt.Controls.Medical.Tools._addChunkToRecycled(c);
			null != this.__chunkLoaded$3 && this.__chunkLoaded$3(this, new lt.Controls.Medical.ChunkLoadedEventArgs(c));
			this.refresh()
		},
		_createUserCanvasElement$3: function(a) {
			if(null == this._userElementCanvas$3) {
				var b =
					a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.item, !1);
				b.get_width();
				b.get_height();
				this._userElementCanvas$3 = document.createElement("canvas");
				this._userElementCanvas$3.style.zIndex = 100;
				this._userElementCanvas$3.style.left = "0px";
				this._userElementCanvas$3.style.top = "0px";
				this._userElementCanvas$3.style.width = a.get_imageViewer().get_foreCanvas().width.toString() + "px";
				this._userElementCanvas$3.style.height = a.get_imageViewer().get_foreCanvas().height.toString() + "px";
				this._userElementCanvas$3.width =
					a.get_imageViewer().get_foreCanvas().width;
				this._userElementCanvas$3.height = a.get_imageViewer().get_foreCanvas().height;
				this._userElementCanvas$3.style.position = "absolute";
				this._userElementCanvas$3.style.visibility = "visible";
				b = this._userElementCanvas$3.getContext("2d");
				b.fillStyle = "black";
				b.fillRect(0, 0, this._userElementCanvas$3.width, this._userElementCanvas$3.height);
				b = lt.Controls.Medical.MedicalSpyGlassInteractiveMode.callBaseMethod(this, "get_interactiveModeCanvas").parentNode;
				this._topTextCanvas$3 =
					document.createElement("canvas");
				this._topTextCanvas$3.style.left = "0px";
				this._topTextCanvas$3.style.top = "0px";
				this._topTextCanvas$3.style.width = "100px";
				this._topTextCanvas$3.style.height = "100px";
				this._topTextCanvas$3.style.zIndex = 5;
				this._topTextCanvas$3.style.position = "absolute";
				this._topTextCanvas$3.style.visibility = this._showOverlayText$3 ? "visible" : "hidden";
				b.appendChild(this._topTextCanvas$3);
				this._bottomTextCanvas$3 = document.createElement("canvas");
				this._bottomTextCanvas$3.style.left = "0px";
				this._bottomTextCanvas$3.style.top =
					"0px";
				this._bottomTextCanvas$3.style.width = "100px";
				this._bottomTextCanvas$3.style.height = "100px";
				this._bottomTextCanvas$3.style.zIndex = 5;
				this._bottomTextCanvas$3.style.position = "absolute";
				this._bottomTextCanvas$3.style.visibility = this._showOverlayText$3 ? "visible" : "hidden";
				b.appendChild(this._bottomTextCanvas$3)
			}
			this._addCanvasAsUserElement$3(a.get_imageViewer())
		},
		_removeCanvasAsUserElement$3: function(a) {
			null != this._userElementCanvas$3 && -1 !== a.get_interactiveService().get_userControls().indexOf(this._userElementCanvas$3) &&
				a.get_interactiveService().get_userControls().remove(this._userElementCanvas$3)
		},
		_addCanvasAsUserElement$3: function(a) {
			null != this._userElementCanvas$3 && -1 === a.get_interactiveService().get_userControls().indexOf(this._userElementCanvas$3) && a.get_interactiveService().get_userControls().add(this._userElementCanvas$3)
		},
		_chunkList$3: null,
		_tileResolution$3: null,
		_enlargeImageRect$3: function(a) {
			var b = this.get_interactiveModeCanvas(),
				c = b.offsetLeft + b.width / 2,
				b = b.offsetTop + b.height / 2,
				c = c + (a.get_x() - c) * this.get_scale(),
				b = b + (a.get_y() - b) * this.get_scale(),
				d = a.get_width() * this.get_scale(),
				a = a.get_height() * this.get_scale();
			return lt.LeadRectD.create(c, b, d, a)
		},
		_clearUneccessaryChunks$3: function(a) {
			var b, c, d = a.get_imageViewer().getItemBounds(a, lt.Controls.ImageViewerItemPart.view);
			b = -d.get_x();
			c = -d.get_y();
			var e = lt.Controls.Medical.MRTISubCell.getFloatImageRect(this.get_imageViewer(), a),
				e = this._enlargeImageRect$3(e),
				a = a.get_attachedFrame(),
				f = a.get_mrtiInfo(),
				g = a.get_mrtiInfo().get_fullSize().get_width(),
				g = e.get_width() /
				g;
			if(!(null == f || d.get_isEmpty()) && !e.get_isEmpty()) d.offset(b, c), e.offset(b, c), d.clone(), b = this.get_interactiveModeCanvas(), b = lt.LeadRectD.create(b.offsetLeft, b.offsetTop, b.width, b.height), e = lt.LeadRectD.create(-e.get_x(), -e.get_y(), e.get_width(), e.get_height()), lt.Controls.Medical.Tools._clearOutsideChunks(b, e, a.get__magnifyMRTIRenderer(), this._chunkList$3, a, a.get_mrtiInfo(), g)
		},
		_updateView$3: function(a) {
			if(this.tiling) {
				var b = a.get_attachedFrame();
				if(null != b.get__magnifyMRTIRenderer()) {
					var c, d, e =
						a.get_imageViewer().getItemBounds(a, lt.Controls.ImageViewerItemPart.view);
					c = -e.get_x();
					d = -e.get_y();
					var a = lt.Controls.Medical.MRTISubCell.getFloatImageRect(this.get_imageViewer(), a),
						a = this._enlargeImageRect$3(a),
						f = b.get_mrtiInfo();
					if(!(null == f || e.get_isEmpty()) && !a.get_isEmpty()) {
						e.offset(c, d);
						a.offset(c, d);
						e.clone();
						e = this.get_interactiveModeCanvas();
						c = lt.LeadRectD.create(e.offsetLeft + c, e.offsetTop + d, e.width, e.height);
						d = lt.LeadRectD.create(-a.get_x(), -a.get_y(), a.get_width(), a.get_height());
						for(var g =
								0, h = this._chunkList$3.length, e = [], g = 0; g < h; g++) e.add(this._chunkList$3[g]._getInfo());
						g = parseInt(d.get_width() * d.get_height());
						this._tileResolution$3 = b.get__magnifyMRTIRenderer().getNewResolution(g * this.get_scale(), f, 1);
						b.get__magnifyMRTIRenderer().tileResolution = this._tileResolution$3;
						f = !1;
						lt.Controls.Medical.Tools._noNeedForTiles(a, b, this._tileResolution$3) && (b.get__magnifyMRTIRenderer().tileResolution = this._tileResolution$3, f = !0);
						b.get__magnifyMRTIRenderer().renderAsync(c, d, e, null, 0, lt.Controls.Medical.Tools._recycledElements,
							b.get_flipped(), b.get_reversed(), b.get_rotateAngle(), f)
					}
				}
			}
		},
		start: function(a) {
			lt.Controls.Medical.MedicalSpyGlassInteractiveMode.callBaseMethod(this, "start", [a]);
			a = lt.Controls.Medical.MedicalSpyGlassInteractiveMode.callBaseMethod(this, "get_interactiveService");
			a.add_dragStarted(ss.Delegate.create(this, this._service_DragStarted$3));
			a.add_dragDelta(ss.Delegate.create(this, this._service_DragDelta$3));
			a.add_dragCompleted(ss.Delegate.create(this, this._service_DragCompleted$3))
		},
		stop: function(a) {
			if(this.get_isStarted()) {
				var b =
					lt.Controls.Medical.MedicalSpyGlassInteractiveMode.callBaseMethod(this, "get_interactiveService");
				b.remove_dragStarted(ss.Delegate.create(this, this._service_DragStarted$3));
				b.remove_dragDelta(ss.Delegate.create(this, this._service_DragDelta$3));
				b.remove_dragCompleted(ss.Delegate.create(this, this._service_DragCompleted$3));
				lt.Controls.Medical.MedicalSpyGlassInteractiveMode.callBaseMethod(this, "stop", [a])
			}
		},
		_service_DragCompleted$3: function() {
			null != this._userElementCanvas$3 && (this._frame$3 = lt.Controls.Medical.MedicalSpyGlassInteractiveMode.callBaseMethod(this,
				"get_item").get_attachedFrame(), null != this._frame$3 && null != this._frame$3.get__magnifyMRTIRenderer() && this._frame$3.get__magnifyMRTIRenderer().remove_renderChunk(ss.Delegate.create(this, this._magnifyMRTIRenderer_RenderChunk$3)), this._spyDone$3(), this.onWorkCompleted(lt.LeadEventArgs.Empty), lt.Controls.Medical.MedicalSpyGlassInteractiveMode.callBaseMethod(this, "get_interactiveService").set_enableMouseWheel(this._oldEnableMouseWheel$3), this._removeCanvasAsUserElement$3(lt.Controls.Medical.MedicalSpyGlassInteractiveMode.callBaseMethod(this,
				"get_imageViewer")), lt.Controls.Medical.Tools.resetCanvas(this._userElementCanvas$3), this._canvas$3 = null, this._topTextCanvas$3.style.visibility = "hidden", this._bottomTextCanvas$3.style.visibility = "hidden")
		},
		_updateTopText$3: function() {
			var a = this.get_interactiveModeCanvas();
			null != this._topTextCanvas$3 && (this._topTextCanvas$3.style.left = a.style.left, this._topTextCanvas$3.style.top = (a.offsetTop - 100).toString() + "px", this._topTextCanvas$3.style.width = a.style.width, this._topTextCanvas$3.style.height = "100px",
				this._topTextCanvas$3.style.visibility = this._showOverlayText$3 ? "visible" : "hidden", this._topTextCanvas$3.width = a.width, this._topTextCanvas$3.height = 100, a = this._topTextCanvas$3.getContext("2d"), a.textAlign = "center", a.textBaseline = "bottom", a.font = "8pt Arial", a.fillStyle = "yellow", a.fillText(this._text$3, this._topTextCanvas$3.width / 2, this._topTextCanvas$3.height - 4), a.stroke())
		},
		_updateBottomText$3: function() {
			if(null != this._topTextCanvas$3) {
				this._calculatePositionScale$3();
				var a = this.get_interactiveModeCanvas();
				this._bottomTextCanvas$3.style.left = a.style.left;
				this._bottomTextCanvas$3.style.top = (a.offsetTop + a.height).toString() + "px";
				this._bottomTextCanvas$3.style.width = a.style.width;
				this._bottomTextCanvas$3.style.height = "100px";
				this._bottomTextCanvas$3.style.visibility = this._showOverlayText$3 ? "visible" : "hidden";
				this._bottomTextCanvas$3.width = a.width;
				this._bottomTextCanvas$3.height = 100;
				a = this._bottomTextCanvas$3.getContext("2d");
				a.textAlign = "center";
				a.textBaseline = "top";
				a.font = "8pt Arial";
				a.fillStyle = "yellow";
				a.fillText(this._positionScale$3, this._topTextCanvas$3.width / 2, 4);
				a.stroke()
			}
		},
		_getDisplayedRect$3: function(a) {
			var b = this.get_interactiveModeCanvas(),
				b = lt.LeadRectD.create(b.offsetLeft, b.offsetTop, b.width, b.height),
				a = a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.image, !1),
				c = b.get_width();
			b.set_width(b.get_width() / this.get_scale());
			b.set_height(b.get_height() / this.get_scale());
			b.offset((c - b.get_width()) / 2, (c - b.get_width()) / 2);
			b.intersect(a);
			return b
		},
		_sendPositionChanged$3: function(a) {
			if(null !=
				this.__positionChanged$3) {
				var b = lt.Controls.Medical.MedicalSpyGlassInteractiveMode.callBaseMethod(this, "get_item"),
					c = this._getDisplayedRect$3(b),
					d = this._getInputCanvas$3(b),
					c = new lt.Controls.Medical.SpyGlassPositionChangedEventArgs(this._canvas$3, d, c, b, this._chunkList$3);
				this.__positionChanged$3(a, c);
				this._updateView$3(b);
				this.refresh()
			}
		},
		_service_DragDelta$3: function(a) {
			this.get_isWorking() && (this._sendPositionChanged$3(a), this._updateTopText$3(), this._updateBottomText$3())
		},
		_updateUserCanvasSize$3: function(a) {
			var b =
				a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.view, !1);
			b.get_width();
			b.get_height();
			null != this._userElementCanvas$3 && (this._userElementCanvas$3.style.left = "0px", this._userElementCanvas$3.style.top = "0px", this._userElementCanvas$3.style.width = a.get_imageViewer().get_foreCanvas().width.toString() + "px", this._userElementCanvas$3.style.height = a.get_imageViewer().get_foreCanvas().height.toString() + "px", this._userElementCanvas$3.width = a.get_imageViewer().get_foreCanvas().width, this._userElementCanvas$3.height =
				a.get_imageViewer().get_foreCanvas().height)
		},
		_mContext$3: null,
		_mMatrix$3: null,
		_magnifedCanvas$3: null,
		_spyStarted$3: function(a) {
			this._mContext$3 = this._userElementCanvas$3.getContext("2d");
			this._mContext$3.setTransform(1, 0, 0, 1, 0, 0);
			this._mMatrix$3 = a.get_imageViewer().getItemImageTransform(a);
			this._mContext$3.transform(this._mMatrix$3.get_m11(), this._mMatrix$3.get_m12(), this._mMatrix$3.get_m21(), this._mMatrix$3.get_m22(), this._mMatrix$3.get_offsetX(), this._mMatrix$3.get_offsetY());
			this.tiling || this.set_scaleFactor(this.get_scale());
			var b = this.get_interactiveModeCanvas();
			if(null != this._frame$3.get_mrtiInfo() && (null == this._magnifedCanvas$3 && (this._magnifedCanvas$3 = document.createElement("canvas")), a = 4 + Math.round(b.width / this._frame$3.get_mrtiInfo().get_tileSize().get_width()), b = 4 + Math.round(b.height / this._frame$3.get_mrtiInfo().get_tileSize().get_height()), a *= this._frame$3.get_mrtiInfo().get_tileSize().get_width(), b *= this._frame$3.get_mrtiInfo().get_tileSize().get_height(), this._magnifedCanvas$3.width !== a && (this._magnifedCanvas$3.width =
					a), this._magnifedCanvas$3.height !== b)) this._magnifedCanvas$3.height = b
		},
		_clearChunks$3: function(a) {
			if(null != a) {
				var b;
				for(b = a.length - 1; 0 <= b; b--) lt.Controls.Medical.Tools._removeChunk(a, b)
			}
		},
		_spyDone$3: function() {
			this._clearChunks$3(this._chunkList$3);
			null != this._frame$3.get__magnifyMRTIRenderer() && this._clearChunks$3(this._frame$3.get__magnifyMRTIRenderer().get_alreadyRequested());
			this.set_scaleFactor(1);
			null != this._magnifedCanvas$3 && lt.Controls.Medical.Tools.resetCanvas(this._magnifedCanvas$3);
			this._mContext$3.setTransform(1,
				0, 0, 1, 0, 0)
		},
		_drawElement$3: function(a) {
			var b = a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.view, !1),
				c = lt.Controls.Medical.MRTISubCell.getFloatImageRect(this.get_imageViewer(), a);
			a.get_attachedFrame();
			this._mContext$3.setTransform(1, 0, 0, 1, 0, 0);
			this._mContext$3.fillRect(0, 0, b.get_width(), b.get_height());
			if(null != this._chunkList$3) {
				a = [];
				a.add(this._tileResolution$3);
				var a = lt.Controls.Medical.Tools._getTopLeftPoints(this._chunkList$3, a),
					d = 0,
					e, f, g = this.get_interactiveModeCanvas(),
					h = g.offsetLeft + g.width / 2 - c.get_left(),
					d = g.offsetTop + g.height / 2 - c.get_top(),
					h = h - h * this.get_scale() + c.get_left(),
					i = d - d * this.get_scale() + c.get_top();
				e = c.get_width() * this.get_scale();
				f = c.get_height() * this.get_scale();
				this.tiling ? this._mContext$3.drawImage(this._canvas$3, h, i, e, f) : this._mContext$3.drawImage(this._canvas$3, b.get_left(), b.get_top());
				if(null != this._frame$3.get_mrtiInfo()) {
					e = this._magnifedCanvas$3.getContext("2d");
					e.clearRect(0, 0, this._magnifedCanvas$3.width, this._magnifedCanvas$3.height);
					for(d = 0; d < this._chunkList$3.length; d++) b = this._chunkList$3[d], b.get_resolution().get_width() === this._tileResolution$3.get_width() && e.drawImage(b.get_canvas(), b.get_rect().get_left() - a[0].get_x(), b.get_rect().get_top() - a[0].get_y(), b.get_canvas().width, b.get_canvas().height);
					if(this._chunkList$3.length) {
						g = lt.LeadRectD.create(g.offsetLeft, g.offsetTop, g.width, g.height);
						for(d = 0; d < this._chunkList$3.length; d++) b = this._chunkList$3[d], e = c.get_width() / b.get_resolution().get_width() * this.get_scale(), f = c.get_height() /
							b.get_resolution().get_height() * this.get_scale(), e = lt.LeadRectD.create(b.get_rect().get_left() * e + h, b.get_rect().get_top() * f + i, b.get_canvas().width * e, b.get_canvas().height * f), b.get_resolution().get_width() !== this._tileResolution$3.get_width() && this._mContext$3.drawImage(b.get_canvas(), e.get_left(), e.get_top(), e.get_width(), e.get_height()), g.intersectsWith(e) || (lt.Controls.Medical.Tools._removeChunk(this._chunkList$3, d), d--);
						e = c.get_width() / this._tileResolution$3.get_width() * this.get_scale();
						f = c.get_height() /
							this._tileResolution$3.get_height() * this.get_scale();
						e = lt.LeadRectD.create(a[0].get_x() * e + h, a[0].get_y() * f + i, this._magnifedCanvas$3.width * e, this._magnifedCanvas$3.height * f);
						this._mContext$3.drawImage(this._magnifedCanvas$3, e.get_left(), e.get_top(), e.get_width(), e.get_height())
					}
				}
			}
		},
		_scale$3: 2,
		get_scale: function() {
			return this._scale$3
		},
		set_scale: function(a) {
			return this._scale$3 = a
		},
		_calculatePositionScale$3: function() {
			var a = this.get_interactiveModeCanvas(),
				b = lt.Controls.Medical.MedicalSpyGlassInteractiveMode.callBaseMethod(this,
					"get_item"),
				c = a.offsetLeft + a.width / 2,
				a = a.offsetTop + a.height / 2,
				d = b.get_imageViewer().getItemViewBounds(b, lt.Controls.ImageViewerItemPart.image, !1),
				c = (c - d.get_left()) / d.get_width(),
				a = (a - d.get_top()) / d.get_height();
			this._getDisplayedRect$3(b);
			this._positionScale$3 = String.format("X: {0} \t Y: {1} \t {2}X", c.toFixed(2), a.toFixed(2), this.get_scale().toFixed(2))
		},
		_getInputCanvas$3: function(a) {
			var b = null != this._frame$3.lowResImage ? this._frame$3.lowResImage.get_canvas() : null != this._frame$3.thumbnailImage ?
				this._frame$3.thumbnailImage.get_canvas() : null;
			Type.canCast(a.get_parentCell(), lt.Controls.Medical.MPRCell) && (b = a.get_parentCell()._mprImage);
			this.tiling || (b = a.get_parentCell().get_imageViewer().get_foreCanvas(), null == this._magnifedCanvas$3 && (this._magnifedCanvas$3 = document.createElement("canvas")), a = a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.view, !1), this._magnifedCanvas$3.width = parseInt(a.get_width()), this._magnifedCanvas$3.height = parseInt(a.get_height()), this._magnifedCanvas$3.getContext("2d").drawImage(b, -a.get_left(), -a.get_top()), b = this._magnifedCanvas$3);
			return b
		},
		_service_DragStarted$3: function(a, b) {
			if(this.get_mouseButtons() === b.get_mouseButton()) {
				var c = lt.Controls.Medical.MedicalSpyGlassInteractiveMode.callBaseMethod(this, "get_item");
				this._frame$3 = c.get_attachedFrame();
				null != this._frame$3 && null != this._frame$3.get__magnifyMRTIRenderer() && this._frame$3.get__magnifyMRTIRenderer().add_renderChunk(ss.Delegate.create(this, this._magnifyMRTIRenderer_RenderChunk$3));
				var d = lt.Controls.Medical.MedicalSpyGlassInteractiveMode.callBaseMethod(this,
					"get_interactiveService");
				this._oldEnableMouseWheel$3 = d.get_enableMouseWheel();
				d.set_enableMouseWheel(!1);
				null != this.__imageRequested$3 && (d = this._getInputCanvas$3(c), d = new lt.Controls.Medical.SpyGlassEventArgs(d, this._canvas$3, c), this.__imageRequested$3(this, d), null != d.get_canvas() && (this._canvas$3 = d.get_canvas()));
				this._sendPositionChanged$3(a);
				null != this._canvas$3 && this._createUserCanvasElement$3(c);
				this._spyStarted$3(c);
				this._updateUserCanvasSize$3(c);
				this._updateTopText$3();
				this._updateBottomText$3();
				null != this._canvas$3 && this._drawElement$3(c, this._canvas$3);
				if(b.get_mouseButton() === this.get_mouseButtons()) this.onWorkStarted(lt.LeadEventArgs.Empty);
				this.invalidate()
			}
		},
		get_text: function() {
			return this._text$3
		},
		set_text: function(a) {
			this._text$3 = a;
			this._updateTopText$3();
			return a
		},
		get_showOverlayText: function() {
			return this._showOverlayText$3
		},
		set_showOverlayText: function(a) {
			this._showOverlayText$3 = a;
			if(this.get_isWorking()) return null != this._topTextCanvas$3 && (this._topTextCanvas$3.style.visibility =
				this._showOverlayText$3 ? "visible" : "hidden"), null != this._bottomTextCanvas$3 && (this._bottomTextCanvas$3.style.visibility = this._showOverlayText$3 ? "visible" : "hidden"), a
		},
		get_name: function() {
			return "Medical Spy Glass"
		}
	};
	Object.defineProperty(lt.Controls.Medical.MedicalSpyGlassInteractiveMode.prototype, "imageRequested", {
		get: lt.Controls.Medical.MedicalSpyGlassInteractiveMode.prototype.__imageRequested$3_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MedicalSpyGlassInteractiveMode.prototype,
		"positionChanged", {
			get: lt.Controls.Medical.MedicalSpyGlassInteractiveMode.prototype.__positionChanged$3_handler_get,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.MedicalSpyGlassInteractiveMode.prototype, "scale", {
		get: lt.Controls.Medical.MedicalSpyGlassInteractiveMode.prototype.get_scale,
		set: lt.Controls.Medical.MedicalSpyGlassInteractiveMode.prototype.set_scale,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MedicalSpyGlassInteractiveMode.prototype,
		"text", {
			get: lt.Controls.Medical.MedicalSpyGlassInteractiveMode.prototype.get_text,
			set: lt.Controls.Medical.MedicalSpyGlassInteractiveMode.prototype.set_text,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.MedicalSpyGlassInteractiveMode.prototype, "showOverlayText", {
		get: lt.Controls.Medical.MedicalSpyGlassInteractiveMode.prototype.get_showOverlayText,
		set: lt.Controls.Medical.MedicalSpyGlassInteractiveMode.prototype.set_showOverlayText,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MedicalSpyGlassInteractiveMode.prototype,
		"name", {
			get: lt.Controls.Medical.MedicalSpyGlassInteractiveMode.prototype.get_name,
			enumerable: !0,
			configurable: !0
		});
	lt.Controls.Medical.ProbeToolEventArgs = function(a, b) {
		lt.Controls.Medical.ProbeToolEventArgs.initializeBase(this);
		this._position$1 = a;
		this._pixelValue$1 = "";
		this._target$1 = b
	};
	lt.Controls.Medical.ProbeToolEventArgs.prototype = {
		_position$1: null,
		_pixelValue$1: "",
		_target$1: null,
		get_position: function() {
			return this._position$1
		},
		get_pixelValue: function() {
			return this._pixelValue$1
		},
		set_pixelValue: function(a) {
			return this._pixelValue$1 =
				a
		},
		get_target: function() {
			return this._target$1
		}
	};
	Object.defineProperty(lt.Controls.Medical.ProbeToolEventArgs.prototype, "position", {
		get: lt.Controls.Medical.ProbeToolEventArgs.prototype.get_position,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.ProbeToolEventArgs.prototype, "pixelValue", {
		get: lt.Controls.Medical.ProbeToolEventArgs.prototype.get_pixelValue,
		set: lt.Controls.Medical.ProbeToolEventArgs.prototype.set_pixelValue,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.ProbeToolEventArgs.prototype,
		"target", {
			get: lt.Controls.Medical.ProbeToolEventArgs.prototype.get_target,
			enumerable: !0,
			configurable: !0
		});
	lt.Controls.Medical.ProbeToolInteractiveMode = function(a) {
		lt.Controls.Medical.ProbeToolInteractiveMode.initializeBase(this);
		this.set_autoItemMode(lt.Controls.ImageViewerAutoItemMode.autoSet);
		this.set_itemPart(lt.Controls.ImageViewerItemPart.item);
		this.set_isDragMouseWheelEnabled(!1);
		this._cell$1 = a;
		this._createTool$1(null != this._cell$1.get_viewer() ? this._cell$1.get_viewer().get_divId() : this._cell$1.get_divID())
	};
	lt.Controls.Medical.ProbeToolInteractiveMode.getPixelValue = function(a, b, c) {
		var d = a.get_mrtiInfo(),
			e = a.get_information();
		if(d.get_fullSize().get_width() >= b && d.get_fullSize().get_height() >= c) {
			var f = lt.Controls.Medical.ProbeToolInteractiveMode._getPointChunk$1(a, b, c);
			null == f && (f = null != a.lowResImage ? a.lowResImage : a.thumbnailImage);
			if(null == f) return [0, 0, 0];
			a = d.get_fullSize().get_width() / f.get_resolution().get_width();
			b = parseInt(b / a);
			c = parseInt(c / a);
			f = (16 === e.get_bitsPerPixel() || 12 === e.get_bitsPerPixel() ?
				f.get_backCanvas() : f.get_canvas()).getContext("2d").getImageData(b - f.get_rect().get_left(), c - f.get_rect().get_top(), 1, 1).data;
			return 16 === e.get_bitsPerPixel() || 12 === e.get_bitsPerPixel() ? [f[1] << 8 | f[2]] : [f[0], f[1], f[2]]
		}
		return null
	};
	lt.Controls.Medical.ProbeToolInteractiveMode._getPointChunk$1 = function(a, b, c) {
		var d = a.get_mrtiInfo();
		a.get_information();
		for(var e = a.get_subCell().get_chunkList(), f = e.length, g, h = 0, i = g = 0; i < f; i++)
			if(a.get__mrtiRenderer().tileResolution.get_width() === e[i].get_resolution().get_width() &&
				(g = d.get_fullSize().get_width() / e[i].get_resolution().get_width(), h = parseInt(b / g), g = parseInt(c / g), e[i].get_rect().contains(h, g))) return e[i];
		return null
	};
	lt.Controls.Medical.ProbeToolInteractiveMode.getHuFromData = function(a, b) {
		var c = 0;
		if(8 < a.get_bitsPerPixel() && lt.Controls.Medical.Tools._isGray(a)) {
			a.get_signed() && 32767 < b && (b -= 65536);
			var d;
			d = a.get_highBit() ? a.get_highBit() : a.get_bitsPerPixel() - 1;
			c = b;
			if(1 === (a.get_highBit() < a.get_bitsPerPixel() - 1 | 0 < a.get_lowBit())) {
				a.get_lowBit() && (c >>= a.get_lowBit(),
					d = a.get_highBit() - a.get_lowBit());
				var e;
				e = (1 << d + 1) / 2;
				c = parseInt((c - a.get_autoScaleIntercept()) / a.get_autoScaleSlope() + 0.5);
				c >= e && (c -= 1 << d + 1)
			}
		}
		return c
	};
	lt.Controls.Medical.ProbeToolInteractiveMode.getHuValue = function(a, b, c, d) {
		var e = a.get_mrtiInfo(),
			f = a.get_information();
		if(e.get_fullSize().get_width() >= b && e.get_fullSize().get_height() >= c) {
			d = lt.Controls.Medical.ProbeToolInteractiveMode._getPointChunk$1(a, b, c);
			null == d && (d = a.lowResImage);
			a = e.get_fullSize().get_width() / d.get_resolution().get_width();
			b = parseInt(b / a);
			c = parseInt(c / a);
			if(null == d || null == d.get_backCanvas()) return "N/A";
			c = d.get_backCanvas().getContext("2d").getImageData(b - d.get_rect().get_left(), c - d.get_rect().get_top(), 1, 1).data;
			d = c[1] << 8 | c[2];
			c = lt.Controls.Medical.ProbeToolInteractiveMode.getHuFromData(f, d);
			return 8 < f.get_bitsPerPixel() && lt.Controls.Medical.Tools._isGray(f) ? c.toString() : String.format("{0}, {1}, {2}", d >> 16 & 255, d >> 8 & 255, d & 255)
		}
		return "N/A"
	};
	lt.Controls.Medical.ProbeToolInteractiveMode.prototype = {
		_cell$1: null,
		_probeToolDiv$1: null,
		_viewer$1: null,
		_spanDiv$1: null,
		get_id: function() {
			return 102
		},
		_createTool$1: function(a) {
			a = document.getElementById(a);
			this._probeToolDiv$1 = document.createElement("div");
			this._probeToolDiv$1.id = "probeToolDiv";
			this._probeToolDiv$1.style.position = "absolute";
			this._probeToolDiv$1.style.visibility = "visible";
			this._probeToolDiv$1.style.zIndex = 100;
			this._probeToolDiv$1.style.background = "#0";
			this._probeToolDiv$1.style.width = "160px";
			a.appendChild(this._probeToolDiv$1);
			this._spanDiv$1 = document.createElement("span");
			this._spanDiv$1.style.cssText = "background: #FFEECC; color: #010101; display: block; font-family: arial; font-weight: bold; font-size: 130%;  padding: 6px 15px; text-shadow: 1px 1px black, 0px 1px black, -1px 1px black, 1px 0px black, -1px 0px black, 1px -1px black, 0px -1px black, -1px -1px black;  cursor: pointer; text-decoration:none;";
			this._spanDiv$1.innerText = "Select Series \n Something something";
			this._spanDiv$1.style.border = "black 1px solid";
			this._probeToolDiv$1.appendChild(this._spanDiv$1);
			this._probeToolDiv$1.style.visibility = "hidden";
			this._backgroundColor$1 = "#FFEECC";
			this._textColor$1 = "#010101";
			this._showBorder$1 = !0
		},
		start: function(a) {
			lt.Controls.Medical.ProbeToolInteractiveMode.callBaseMethod(this, "start", [a]);
			this._viewer$1 = a;
			a = lt.Controls.Medical.ProbeToolInteractiveMode.callBaseMethod(this, "get_interactiveService");
			a.add_dragStarted(ss.Delegate.create(this, this._service_DragStarted$1));
			a.add_dragDelta(ss.Delegate.create(this, this._service_DragDelta$1));
			a.add_dragCompleted(ss.Delegate.create(this,
				this._service_DragCompleted$1))
		},
		stop: function(a) {
			if(this.get_isStarted()) {
				var b = lt.Controls.Medical.ProbeToolInteractiveMode.callBaseMethod(this, "get_interactiveService");
				b.remove_dragStarted(ss.Delegate.create(this, this._service_DragStarted$1));
				b.remove_dragDelta(ss.Delegate.create(this, this._service_DragDelta$1));
				b.remove_dragCompleted(ss.Delegate.create(this, this._service_DragCompleted$1));
				lt.Controls.Medical.ProbeToolInteractiveMode.callBaseMethod(this, "stop", [a])
			}
		},
		_service_DragCompleted$1: function() {
			this._probeToolDiv$1.style.visibility =
				"hidden";
			if(this.get_isWorking()) this.onWorkCompleted(lt.LeadEventArgs.Empty)
		},
		_service_DragDelta$1: function(a, b) {
			var c = lt.Controls.Medical.ProbeToolInteractiveMode.callBaseMethod(this, "get_item");
			this.get_isWorking() && this._updateProbeTool$1(c, b.get_position())
		},
		add_probeToolUpdated: function(a) {
			this.__probeToolUpdated$1 = ss.Delegate.combine(this.__probeToolUpdated$1, a)
		},
		remove_probeToolUpdated: function(a) {
			this.__probeToolUpdated$1 = ss.Delegate.remove(this.__probeToolUpdated$1, a)
		},
		__probeToolUpdated$1_handler_get: function() {
			null ==
				this.__probeToolUpdated$1_handler && (this.__probeToolUpdated$1_handler = ss.EventHandler.create(this, this.add_probeToolUpdated, this.remove_probeToolUpdated));
			return this.__probeToolUpdated$1_handler
		},
		__probeToolUpdated$1: null,
		__probeToolUpdated$1_handler: null,
		_updateProbeTool$1: function(a, b) {
			var c = a.get_imageViewer().getItemViewBounds(a, lt.Controls.ImageViewerItemPart.image, !1),
				d = parseInt(a.get_imageSize().get_width()),
				e = parseInt(a.get_imageSize().get_height()),
				f = parseInt((b.get_x() - c.get_left()) * (d -
					1) / c.get_width()) >> 0,
				g = parseInt((b.get_y() - c.get_top()) * (e - 1) / c.get_height()) >> 0;
			c.contains(b.get_x(), b.get_y()) ? (f = Math.max(0, Math.min(d, f)), g = Math.max(0, Math.min(e, g)), c = "", null != this.__probeToolUpdated$1 ? (c = new lt.Controls.Medical.ProbeToolEventArgs(lt.LeadPointD.create(f, g), a.get_attachedFrame()), this.__probeToolUpdated$1(this, c), c = "\n" + c.get_pixelValue()) : (c = this._cell$1.get_frames().get_item(this._cell$1._getActiveSubCellIndex()), c = "\nHu = " + lt.Controls.Medical.ProbeToolInteractiveMode.getHuValue(c,
				parseInt(f), parseInt(g), -1)), this._spanDiv$1.innerText = "X = " + f + " Y = " + g + c, lt.LTHelper.device !== lt.LTDevice.desktop) ? (this._probeToolDiv$1.style.left = this._cell$1.get_div().offsetLeft - this._probeToolDiv$1.clientWidth + b.get_x() - 10 + "px", this._probeToolDiv$1.style.top = this._cell$1.get_div().offsetTop - this._probeToolDiv$1.clientHeight + b.get_y() - 10 + "px") : (this._probeToolDiv$1.style.left = this._cell$1.get_div().offsetLeft + b.get_x() + 10 + "px", this._probeToolDiv$1.style.top = this._cell$1.get_div().offsetTop +
				b.get_y() + 10 + "px") : this._spanDiv$1.innerText = ""
		},
		_backgroundColor$1: null,
		get_backgroundColor: function() {
			return this._backgroundColor$1
		},
		set_backgroundColor: function(a) {
			this._backgroundColor$1 = a;
			this._spanDiv$1.style.background = this._backgroundColor$1;
			return a
		},
		_textColor$1: null,
		get_textColor: function() {
			return this._textColor$1
		},
		set_textColor: function(a) {
			this._textColor$1 = a;
			this._spanDiv$1.style.color = this._textColor$1;
			return a
		},
		_showBorder$1: !1,
		get_showBorder: function() {
			return this._showBorder$1
		},
		set_showBorder: function(a) {
			this._showBorder$1 = a;
			this._spanDiv$1.style.border = this._showBorder$1 ? "black 1px solid" : "";
			return a
		},
		_service_DragStarted$1: function(a, b) {
			var c = lt.Controls.Medical.ProbeToolInteractiveMode.callBaseMethod(this, "get_item");
			if(this.canStartWork(b) && (null == c && (c = this.get_item()), null != this.get_item() && (this._updateProbeTool$1(c, b.get_position()), this._probeToolDiv$1.style.visibility = "visible", b.get_mouseButton() === this.get_mouseButtons() || b.get_nativeEvent().type === lt.LTHelper.mouseWheelEvent))) this.onWorkStarted(lt.LeadEventArgs.Empty)
		},
		get_name: function() {
			return "Probe Tool"
		}
	};
	Object.defineProperty(lt.Controls.Medical.ProbeToolInteractiveMode.prototype, "id", {
		get: lt.Controls.Medical.ProbeToolInteractiveMode.prototype.get_id,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.ProbeToolInteractiveMode.prototype, "probeToolUpdated", {
		get: lt.Controls.Medical.ProbeToolInteractiveMode.prototype.__probeToolUpdated$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.ProbeToolInteractiveMode.prototype,
		"backgroundColor", {
			get: lt.Controls.Medical.ProbeToolInteractiveMode.prototype.get_backgroundColor,
			set: lt.Controls.Medical.ProbeToolInteractiveMode.prototype.set_backgroundColor,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.ProbeToolInteractiveMode.prototype, "textColor", {
		get: lt.Controls.Medical.ProbeToolInteractiveMode.prototype.get_textColor,
		set: lt.Controls.Medical.ProbeToolInteractiveMode.prototype.set_textColor,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.ProbeToolInteractiveMode.prototype,
		"showBorder", {
			get: lt.Controls.Medical.ProbeToolInteractiveMode.prototype.get_showBorder,
			set: lt.Controls.Medical.ProbeToolInteractiveMode.prototype.set_showBorder,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.ProbeToolInteractiveMode.prototype, "name", {
		get: lt.Controls.Medical.ProbeToolInteractiveMode.prototype.get_name,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical._imageViewerGridViewLayout = function(a) {
		lt.Controls.Medical._imageViewerGridViewLayout.initializeBase(this);
		this._cell$1 = a
	};
	lt.Controls.Medical._imageViewerGridViewLayout.prototype = {
		get_name: function() {
			return "Grid"
		},
		_cell$1: null,
		get_cell: function() {
			return this._cell$1
		},
		set_cell: function(a) {
			return this._cell$1 = a
		},
		updateTransform: function(a, b, c, d, e, f) {
			null == a && lt.Annotations.Core.ExceptionHelper.argumentNullException("imageViewer");
			null == f && lt.Annotations.Core.ExceptionHelper.argumentNullException("itemBounds");
			f.length === this._cell$1.get_imageViewer().get_items().get_count() && this._cell$1._layoutCell(e,
				f)
		}
	};
	lt.Controls.Medical._imageViewerTransformInteractiveMode = function(a) {
		this._scaleKeyModifier$1 = lt.Controls.Keys.control;
		this._origin$1 = lt.LeadPointD.get_empty();
		lt.Controls.Medical._imageViewerTransformInteractiveMode.initializeBase(this);
		this.set_autoItemMode(lt.Controls.ImageViewerAutoItemMode.autoSet);
		this.set_itemPart(lt.Controls.ImageViewerItemPart.item);
		this.set_isDragMouseWheelEnabled(!1);
		this.enableZoom = a;
		this.enablePan = !a
	};
	lt.Controls.Medical._imageViewerTransformInteractiveMode.prototype = {
		isPinch: !1,
		_scaleAtPosition$1: !1,
		get_scaleAtPosition: function() {
			return this._scaleAtPosition$1
		},
		set_scaleAtPosition: function(a) {
			return this._scaleAtPosition$1 = a
		},
		get_scaleKeyModifier: function() {
			return this._scaleKeyModifier$1
		},
		set_scaleKeyModifier: function(a) {
			switch(a) {
				case lt.Controls.Keys.none:
				case lt.Controls.Keys.alt:
				case lt.Controls.Keys.shift:
				case lt.Controls.Keys.control:
					this._scaleKeyModifier$1 = a;
					break;
				default:
					throw Error("Invalid value ScaleKeyModifier");
			}
			return a
		},
		get_name: function() {
			return "ItemTransform"
		},
		get_id: function() {
			return lt.Controls.ImageViewerInteractiveMode.userModeId + 1
		},
		start: function(a) {
			lt.Controls.Medical._imageViewerTransformInteractiveMode.callBaseMethod(this, "start", [a]);
			a = lt.Controls.Medical._imageViewerTransformInteractiveMode.callBaseMethod(this, "get_interactiveService");
			this.isPinch && (a.add_pinchStarted(ss.Delegate.create(this, this._service_PinchStarted$1)), a.add_pinchCompleted(ss.Delegate.create(this, this._service_PinchCompleted$1)), a.add_pinchDelta(ss.Delegate.create(this, this._service_PinchDelta$1)));
			a.add_dragStarted(ss.Delegate.create(this, this._service_DragStarted$1));
			a.add_dragDelta(ss.Delegate.create(this, this._service_DragDelta$1));
			a.add_dragCompleted(ss.Delegate.create(this, this._service_DragCompleted$1))
		},
		stop: function(a) {
			if(this.get_isStarted()) {
				var b = lt.Controls.Medical._imageViewerTransformInteractiveMode.callBaseMethod(this, "get_interactiveService");
				b.remove_dragStarted(ss.Delegate.create(this, this._service_DragStarted$1));
				b.remove_dragDelta(ss.Delegate.create(this, this._service_DragDelta$1));
				b.remove_dragCompleted(ss.Delegate.create(this, this._service_DragCompleted$1));
				this.isPinch && (b.remove_pinchStarted(ss.Delegate.create(this, this._service_PinchStarted$1)), b.remove_pinchCompleted(ss.Delegate.create(this, this._service_PinchCompleted$1)), b.remove_pinchDelta(ss.Delegate.create(this, this._service_PinchDelta$1)));
				lt.Controls.Medical._imageViewerTransformInteractiveMode.callBaseMethod(this, "stop", [a])
			}
		},
		_previousLength$1: 0,
		_calculateDistance$1: function(a, b) {
			var c = a.get_x() - b.get_x(),
				d = a.get_y() -
				b.get_y();
			return Math.sqrt(c * c + d * d)
		},
		_scaleFactor$1: 0,
		_service_PinchDelta$1: function(a, b) {
			if(this.get_isWorking() && this._isPinching$1) {
				var c = this.get_item();
				if(null != c) {
					this._scaleFactor$1 || (this._scaleFactor$1 = c.get_scaleFactor());
					var d = this.get_imageViewer(),
						e = b.get_distanceRatio() * this._scaleFactor$1;
					c.zoom(lt.Controls.ControlSizeMode.none, e, this._origin$1);
					var e = (b.get_position().get_x() + b.get_position2().get_x()) / 2,
						f = (b.get_position().get_y() + b.get_position2().get_y()) / 2;
					this._translate$1(d,
						c, parseInt(this._origin$1.get_x() - e), parseInt(this._origin$1.get_y() - f));
					this._origin$1.set_x(e);
					this._origin$1.set_y(f);
					d.automationInvalidate(d.getItemViewBounds(c, lt.Controls.ImageViewerItemPart.item, !1));
					b.set_isHandled(!0)
				}
			}
		},
		_service_PinchStarted$1: function(a, b) {
			this.canStartWork(b) && (this._startPoint$1 = b.get_origin().clone(), this._stopPoint$1 = b.get_position().clone(), this._scaleFactor$1 = 0, this._previousLength$1 = b.get_distance(), this._origin$1 = lt.LeadPointD.create((b.get_position().get_x() +
				b.get_position2().get_x()) / 2, (b.get_position().get_y() + b.get_position2().get_y()) / 2), this._isPinching$1 = !0, b.set_isHandled(!0), this.onWorkStarted(lt.LeadEventArgs.Empty), this._onPinchStarted$1(lt.LeadEventArgs.Empty))
		},
		_fingers$1: 0,
		_service_PinchCompleted$1: function(a, b) {
			this._stopPoint$1 = b.get_position().clone();
			b.set_isHandled(!0);
			this.onWorkCompleted(lt.LeadEventArgs.Empty);
			this._fingers$1 = 0;
			this._isPinching$1 = !1;
			this._onPinchCompleted$1(lt.LeadEventArgs.Empty)
		},
		add_pinchWorkCompleted: function(a) {
			this.__pinchWorkCompleted$1 =
				ss.Delegate.combine(this.__pinchWorkCompleted$1, a)
		},
		remove_pinchWorkCompleted: function(a) {
			this.__pinchWorkCompleted$1 = ss.Delegate.remove(this.__pinchWorkCompleted$1, a)
		},
		__pinchWorkCompleted$1_handler_get: function() {
			null == this.__pinchWorkCompleted$1_handler && (this.__pinchWorkCompleted$1_handler = ss.EventHandler.create(this, this.add_pinchWorkCompleted, this.remove_pinchWorkCompleted));
			return this.__pinchWorkCompleted$1_handler
		},
		__pinchWorkCompleted$1: null,
		__pinchWorkCompleted$1_handler: null,
		add_pinchWorkStarted: function(a) {
			this.__pinchWorkStarted$1 =
				ss.Delegate.combine(this.__pinchWorkStarted$1, a)
		},
		remove_pinchWorkStarted: function(a) {
			this.__pinchWorkStarted$1 = ss.Delegate.remove(this.__pinchWorkStarted$1, a)
		},
		__pinchWorkStarted$1_handler_get: function() {
			null == this.__pinchWorkStarted$1_handler && (this.__pinchWorkStarted$1_handler = ss.EventHandler.create(this, this.add_pinchWorkStarted, this.remove_pinchWorkStarted));
			return this.__pinchWorkStarted$1_handler
		},
		__pinchWorkStarted$1: null,
		__pinchWorkStarted$1_handler: null,
		_onPinchStarted$1: function(a) {
			null !=
				this.__pinchWorkStarted$1 && this.__pinchWorkStarted$1(this, a)
		},
		_onPinchCompleted$1: function(a) {
			null != this.__pinchWorkCompleted$1 && this.__pinchWorkCompleted$1(this, a)
		},
		_startPoint$1: null,
		get__startPoint: function() {
			return this._startPoint$1
		},
		_stopPoint$1: null,
		get__stopPoint: function() {
			return this._stopPoint$1
		},
		_isPinching$1: !1,
		_service_DragStarted$1: function(a, b) {
			this._fingers$1 += 1;
			if(!(this.isPinch || !this.canStartWork(b) || null == this.get_item()) && !(this._isPinching$1 || 1 < this._fingers$1)) this._cursorPoint$1 =
				b.get_position().clone(), b.set_isHandled(!0), this.onWorkStarted(lt.LeadEventArgs.Empty)
		},
		enablePan: !1,
		enableZoom: !1,
		_service_DragDelta$1: function(a, b) {
			if(this.get_isWorking() && !(this._isPinching$1 || 1 < this._fingers$1)) {
				var c = this.get_item();
				if(null != c) {
					var d = b.get_change().get_x(),
						e = b.get_change().get_y(),
						f = this.get_imageViewer();
					this.enableZoom && this._scale$1(f, c, parseInt(e), b.get_origin());
					this.enablePan && this._translate$1(f, c, parseInt(d), parseInt(e));
					b.set_isHandled(!0)
				}
			}
		},
		_service_DragCompleted$1: function(a,
			b) {
			this._fingers$1 = Math.max(0, this._fingers$1 - 1);
			this.get_isWorking() && !this._isPinching$1 && (this._cursorPoint$1 = b.get_position().clone(), b.set_isHandled(!0), this.onWorkCompleted(lt.LeadEventArgs.Empty))
		},
		_service_DoubleTap$1: function(a, b) {
			if(!this.isPinch && !this.get_isWorking() && this.canStartWork(b)) {
				var c = this.get_item();
				null != c && (b.set_isHandled(!0), this.onWorkStarted(lt.LeadEventArgs.Empty), this._identity$1(this.get_imageViewer(), c), this.onWorkCompleted(lt.LeadEventArgs.Empty))
			}
		},
		_identity$1: function(a,
			b) {
			a.beginTransform();
			b.set_offset(lt.LeadPointD.create(0, 0));
			b.set_scale(lt.LeadSizeD.create(1, 1));
			b.set_flip(!1);
			b.set_reverse(!1);
			b.set_rotateAngle(0);
			a.endTransform()
		},
		_scale$1: function(a, b, c, d) {
			if(c) {
				var e = a.getItemViewBounds(b, lt.Controls.ImageViewerItemPart.item, !1).get_height(),
					c = b.get_scaleFactor() * (0 < e ? 1 - 2 * c / e : 1),
					d = this.get_scaleAtPosition() ? a.convertPoint(b, lt.Controls.ImageViewerCoordinateType.control, lt.Controls.ImageViewerCoordinateType.item, d) : b.get_defaultZoomOrigin();
				a.beginUpdate();
				b.zoom(lt.Controls.ControlSizeMode.none, c, d);
				a.endUpdate()
			}
		},
		_translate$1: function(a, b, c, d) {
			if(c || d) lt.Controls.Medical.MRTISubCell.getFloatImageRect(b.get_imageViewer(), b), a = lt.LeadPointD.create(-c, -d), b.offsetBy(a)
		},
		_cursorPoint$1: null,
		get__cursorPoint: function() {
			return this._cursorPoint$1
		}
	};
	Object.defineProperty(lt.Controls.Medical._imageViewerTransformInteractiveMode.prototype, "pinchWorkCompleted", {
		get: lt.Controls.Medical._imageViewerTransformInteractiveMode.prototype.__pinchWorkCompleted$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical._imageViewerTransformInteractiveMode.prototype, "pinchWorkStarted", {
		get: lt.Controls.Medical._imageViewerTransformInteractiveMode.prototype.__pinchWorkStarted$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.HistogramGeneratedEventArgs = function(a, b, c) {
		lt.Controls.Medical.HistogramGeneratedEventArgs.initializeBase(this);
		this._histogram$1 = a;
		this._frame$1 = b;
		this._type$1 = c
	};
	lt.Controls.Medical.HistogramGeneratedEventArgs.prototype = {
		_histogram$1: null,
		_frame$1: null,
		_type$1: 0,
		get_histogram: function() {
			return this._histogram$1
		},
		get_frame: function() {
			return this._frame$1
		},
		get_type: function() {
			return this._type$1
		}
	};
	Object.defineProperty(lt.Controls.Medical.HistogramGeneratedEventArgs.prototype, "histogram", {
		get: lt.Controls.Medical.HistogramGeneratedEventArgs.prototype.get_histogram,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.HistogramGeneratedEventArgs.prototype, "frame", {
		get: lt.Controls.Medical.HistogramGeneratedEventArgs.prototype.get_frame,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.HistogramGeneratedEventArgs.prototype, "type", {
		get: lt.Controls.Medical.HistogramGeneratedEventArgs.prototype.get_type,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.LineProfileInteractiveMode = function() {
		this._histogramMarker$1 = -1;
		this._histogramColorType$1 = 2;
		lt.Controls.Medical.LineProfileInteractiveMode.initializeBase(this);
		this.set_autoItemMode(lt.Controls.ImageViewerAutoItemMode.autoSet);
		this.set_itemPart(lt.Controls.ImageViewerItemPart.item);
		this.set_isDragMouseWheelEnabled(!1)
	};
	lt.Controls.Medical.LineProfileInteractiveMode.prototype = {
		refresh: function(a) {
			a = a.get_selectedItem();
			this._initializeCanvas$1(a);
			this._subCell$1 = a;
			a.get_parentCell().get_lineProfile()._updateHistogram()
		},
		get_name: function() {
			return "LineProfile"
		},
		get_id: function() {
			return lt.Controls.ImageViewerInteractiveMode.userModeId + 2
		},
		start: function(a) {
			this._viewer$1 = a;
			lt.Controls.Medical.LineProfileInteractiveMode.callBaseMethod(this, "start", [a]);
			a = lt.Controls.Medical.LineProfileInteractiveMode.callBaseMethod(this,
				"get_interactiveService");
			a.add_dragStarted(ss.Delegate.create(this, this._service_DragStarted$1));
			a.add_dragDelta(ss.Delegate.create(this, this._service_DragDelta$1));
			a.add_dragCompleted(ss.Delegate.create(this, this._service_DragCompleted$1))
		},
		_viewer$1: null,
		stop: function(a) {
			if(this.get_isStarted()) {
				var b = lt.Controls.Medical.LineProfileInteractiveMode.callBaseMethod(this, "get_interactiveService");
				b.remove_dragStarted(ss.Delegate.create(this, this._service_DragStarted$1));
				b.remove_dragDelta(ss.Delegate.create(this,
					this._service_DragDelta$1));
				b.remove_dragCompleted(ss.Delegate.create(this, this._service_DragCompleted$1));
				lt.Controls.Medical.LineProfileInteractiveMode.callBaseMethod(this, "stop", [a])
			}
		},
		get_histogramMarker: function() {
			return this._histogramMarker$1
		},
		set_histogramMarker: function(a) {
			return this._histogramMarker$1 = a
		},
		get_histogramColorType: function() {
			return this._histogramColorType$1
		},
		set_histogramColorType: function(a) {
			this._histogramColorType$1 = a;
			this.refresh(this._viewer$1.get_activeItem().get_parentCell());
			return a
		},
		_startPoint$1: null,
		_stopPoint$1: null,
		_initializeCanvas$1: function(a) {
			null == a.get_imageViewer() || !a.get_imageViewer().get_foreCanvas().width || !a.get_imageViewer().get_foreCanvas().height || a.get_parentCell().get_lineProfile().attachFrame(a.get_attachedFrame())
		},
		_setFirstPoint$1: !1,
		_service_DragStarted$1: function(a, b) {
			if(this.canStartWork(b) && null != this.get_item()) {
				var c = this.get_item(),
					d = c.get_parentCell();
				d.get_lineProfile().set_physicalStartPoint(lt.LeadPointD.create(0, 0));
				d.get_lineProfile().set_physicalEndPoint(lt.LeadPointD.create(0,
					1));
				this._initializeCanvas$1(c);
				this._setFirstPoint$1 = !0;
				this._startPoint$1 = b.get_origin().clone();
				this._stopPoint$1 = b.get_position().clone();
				b.set_isHandled(!0);
				this.onWorkStarted(lt.LeadEventArgs.Empty)
			}
		},
		_subCell$1: null,
		_service_DragDelta$1: function(a, b) {
			if(this.get_isWorking() && null != this.get_item()) {
				var c = this.get_item(),
					d = c.get_parentCell();
				c.get_imageViewer().getItemViewBounds(c, lt.Controls.ImageViewerItemPart.image, !1);
				this._setFirstPoint$1 && (this._setFirstPoint$1 = !1, d.get_lineProfile().set_physicalStartPoint(lt.LeadPointD.create(this._startPoint$1.get_x(),
					this._startPoint$1.get_y())));
				d.get_lineProfile().set_physicalEndPoint(lt.LeadPointD.create(b.get_position().get_x(), b.get_position().get_y()));
				lt.Controls.Medical.Tools._pointsAreTheSame(d.get_lineProfile().get_physicalEndPoint(), d.get_lineProfile().get_physicalStartPoint()) || (this._subCell$1 = c, d.get_lineProfile()._updateHistogram());
				this.get_imageViewer().automationInvalidate(lt.LeadRectD.get_empty());
				b.set_isHandled(!0)
			}
		},
		_service_DragCompleted$1: function(a, b) {
			this.get_isWorking() && (b.set_isHandled(!0),
				this.onWorkCompleted(lt.LeadEventArgs.Empty))
		},
		_service_DoubleTap$1: function(a, b) {
			!this.get_isWorking() && this.canStartWork(b) && null != this.get_item() && (b.set_isHandled(!0), this.onWorkStarted(lt.LeadEventArgs.Empty), this.onWorkCompleted(lt.LeadEventArgs.Empty))
		}
	};
	Object.defineProperty(lt.Controls.Medical.LineProfileInteractiveMode.prototype, "name", {
		get: lt.Controls.Medical.LineProfileInteractiveMode.prototype.get_name,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LineProfileInteractiveMode.prototype,
		"id", {
			get: lt.Controls.Medical.LineProfileInteractiveMode.prototype.get_id,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.LineProfileInteractiveMode.prototype, "histogramMarker", {
		get: lt.Controls.Medical.LineProfileInteractiveMode.prototype.get_histogramMarker,
		set: lt.Controls.Medical.LineProfileInteractiveMode.prototype.set_histogramMarker,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.LineProfileInteractiveMode.prototype, "histogramColorType", {
		get: lt.Controls.Medical.LineProfileInteractiveMode.prototype.get_histogramColorType,
		set: lt.Controls.Medical.LineProfileInteractiveMode.prototype.set_histogramColorType,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.TransformItemInteractiveMode = function(a) {
		lt.Controls.Medical.TransformItemInteractiveMode.initializeBase(this);
		this._cell$1 = a;
		this.set_autoItemMode(lt.Controls.ImageViewerAutoItemMode.autoSet);
		this.set_itemPart(lt.Controls.ImageViewerItemPart.item);
		this.set_isDragMouseWheelEnabled(!1)
	};
	lt.Controls.Medical.TransformItemInteractiveMode.prototype = {
		_viewer$1: null,
		_cell$1: null,
		get_id: function() {
			return 104
		},
		get_name: function() {
			return "Drag"
		},
		start: function(a) {
			this._viewer$1 = a;
			lt.Controls.Medical.TransformItemInteractiveMode.callBaseMethod(this, "start", [a]);
			a = lt.Controls.Medical.TransformItemInteractiveMode.callBaseMethod(this, "get_interactiveService");
			a.add_dragStarted(ss.Delegate.create(this, this._service_DragStarted$1));
			a.add_dragDelta(ss.Delegate.create(this, this._service_DragDelta$1));
			a.add_dragCompleted(ss.Delegate.create(this, this._service_DragCompleted$1));
			a.add_move(ss.Delegate.create(this,
				this._service_Move$1))
		},
		_service_Move$1: function() {},
		stop: function(a) {
			if(this.get_isStarted()) {
				var b = lt.Controls.Medical.TransformItemInteractiveMode.callBaseMethod(this, "get_interactiveService");
				b.remove_dragStarted(ss.Delegate.create(this, this._service_DragStarted$1));
				b.remove_dragDelta(ss.Delegate.create(this, this._service_DragDelta$1));
				b.remove_dragCompleted(ss.Delegate.create(this, this._service_DragCompleted$1));
				lt.Controls.Medical.TransformItemInteractiveMode.callBaseMethod(this, "stop", [a])
			}
		},
		_position$1: null,
		_bounds$1: null,
		_editType$1: 0,
		_threshold$1: 5,
		_subCell$1: null,
		_getSubCellAndLocation$1: function(a, b) {
			for(var c = 0, c = b.get_items().get_count(), d, e = lt.LeadRectD.get_empty(), f, g = !1, c = c - 1; 0 <= c; c--) {
				d = b.get_items().get_item(c);
				if(null == d) break;
				e = d.get_imageViewer().getItemViewBounds(d, lt.Controls.ImageViewerItemPart.view, !1);
				if(e.get_isEmpty()) break;
				f = e.clone();
				f.inflate(10, 10);
				if(f.contains(a.get_x(), a.get_y())) {
					this._subCell$1 = d;
					g = !0;
					break
				}
			}
			c = 0;
			g || (e = lt.LeadRectD.create(b.get_mainDiv().clientLeft,
				b.get_mainDiv().clientTop, b.get_mainDiv().clientWidth, b.get_mainDiv().clientHeight));
			Math.abs(a.get_x() - e.get_x()) <= this._threshold$1 ? c |= 1 : Math.abs(a.get_x() - e.get_right()) <= this._threshold$1 && (c |= 4);
			Math.abs(a.get_y() - e.get_y()) <= this._threshold$1 ? c |= 2 : Math.abs(a.get_y() - e.get_bottom()) <= this._threshold$1 && (c |= 8);
			c || (c = 10);
			return c
		},
		_service_DragStarted$1: function(a, b) {
			if(b.get_nativeEvent().type !== lt.LTHelper.mouseWheelEvent && this.canStartWork(b)) {
				this._editType$1 = this._getSubCellAndLocation$1(b.get_position(),
					this._viewer$1);
				var c = this._subCell$1;
				null != c ? (c.get_imageViewer().getItemViewBounds(c, lt.Controls.ImageViewerItemPart.view, !1), this._bounds$1 = c.get_bounds().clone()) : this._bounds$1 = this._cell$1.get_bounds().clone();
				this._position$1 = this._getPosition$1(b.get_nativeEvent());
				this.onWorkStarted(lt.LeadEventArgs.Empty)
			}
		},
		_getPosition$1: function(a) {
			var b = 0,
				c = 0;
			void 0 != a.targetTouches ? (b = a.targetTouches[0].pageX, c = a.targetTouches[0].pageY) : (b = a.clientX, c = a.clientY);
			return lt.LeadPointD.create(b, c)
		},
		_service_DragDelta$1: function(a,
			b) {
			if(b.get_nativeEvent().type !== lt.LTHelper.mouseWheelEvent && this.get_isWorking()) {
				var c = this._subCell$1,
					d = this._getPosition$1(b.get_nativeEvent()),
					e = this._position$1.get_x() - d.get_x(),
					f = this._position$1.get_y() - d.get_y();
				this._position$1.set_x(d.get_x());
				this._position$1.set_y(d.get_y());
				var g;
				null != c ? (d = c.get_parentCell().get_div().clientWidth, g = c.get_parentCell().get_div().clientHeight) : (d = this._cell$1.get_parent().get_div().clientWidth, g = this._cell$1.get_parent().get_div().clientHeight);
				if(10 ===
					this._editType$1) this._bounds$1.set_x(this._bounds$1.get_x() - e / d), this._bounds$1.set_y(this._bounds$1.get_y() - f / g);
				else {
					var h = this._bounds$1.get_x(),
						i = this._bounds$1.get_y(),
						j = this._bounds$1.get_right(),
						k = this._bounds$1.get_bottom();
					this._editType$1 & 1 && (h -= e / d);
					this._editType$1 & 2 && (i -= f / g);
					this._editType$1 & 4 && (j -= e / d);
					this._editType$1 & 8 && (k -= f / g);
					this._bounds$1.set_x(h);
					this._bounds$1.set_y(i);
					this._bounds$1.set_width(Math.max(0.001, j - h));
					this._bounds$1.set_height(Math.max(0.001, k - i))
				}
				this._editType$1 &&
					(null != c ? (c.set_bounds(this._bounds$1), c.get_parentCell().onSizeChanged()) : (this._cell$1.set_bounds(this._bounds$1), this._cell$1.onSizeChanged(), this._cell$1.get_viewer().onSizeChanged(), this._cell$1.get_imageViewer().onSizeChanged()))
			}
		},
		_service_DragCompleted$1: function(a, b) {
			this._subCell$1 = null;
			if(b.get_nativeEvent().type !== lt.LTHelper.mouseWheelEvent && this.get_isWorking()) {
				if(null != this._viewer$1) this._viewer$1.get_interactiveService().onSizeChanged();
				this.onWorkCompleted(lt.LeadEventArgs.Empty)
			}
		}
	};
	Object.defineProperty(lt.Controls.Medical.TransformItemInteractiveMode.prototype, "id", {
		get: lt.Controls.Medical.TransformItemInteractiveMode.prototype.get_id,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.TransformItemInteractiveMode.prototype, "name", {
		get: lt.Controls.Medical.TransformItemInteractiveMode.prototype.get_name,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.FrameChangedEventArgs = function(a) {
		lt.Controls.Medical.FrameChangedEventArgs.initializeBase(this);
		this._frameIndex$1 =
			a
	};
	lt.Controls.Medical.FrameChangedEventArgs.prototype = {
		_frameIndex$1: 0,
		get_frameIndex: function() {
			return this._frameIndex$1
		}
	};
	Object.defineProperty(lt.Controls.Medical.FrameChangedEventArgs.prototype, "frameIndex", {
		get: lt.Controls.Medical.FrameChangedEventArgs.prototype.get_frameIndex,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.CinePlayer = function(a) {
		this._cell = a;
		this._shuffler = new lt.Controls.Medical._shuffleData(0);
		null == lt.Controls.Medical.MedicalViewer._animator && (lt.Controls.Medical.MedicalViewer._animator =
			new lt.Controls.Medical._animator);
		this._animator = lt.Controls.Medical.MedicalViewer._animator
	};
	lt.Controls.Medical.CinePlayer.prototype = {
		_playing: !1,
		_shuffler: null,
		_animator: null,
		_bounceDirection: 1,
		_cell: null,
		_timeStamp: 0,
		get_isPlaying: function() {
			return this._playing
		},
		_totalFrames: 0,
		get__totalFrames: function() {
			return this._totalFrames
		},
		set__totalFrames: function(a) {
			this._totalFrames = a;
			this._shuffler.reset(a);
			return a
		},
		_newFrameIndex: 0,
		_currentFrame: 0,
		get_currentFrame: function() {
			return this._currentFrame
		},
		set_currentFrame: function(a) {
			this._newFrameIndex = this._currentFrame = a;
			this._restartAnimation();
			return a
		},
		_fps: 30,
		get_FPS: function() {
			return this._fps
		},
		set_FPS: function(a) {
			this._fps = a;
			this._restartAnimation();
			return a
		},
		_restartAnimation: function() {
			this.get_isPlaying() && (this.stop(), this.play())
		},
		_loop: !0,
		get_loop: function() {
			return this._loop
		},
		set_loop: function(a) {
			this._loop = a;
			this._restartAnimation();
			return a
		},
		_direction: 0,
		get_direction: function() {
			return this._direction
		},
		set_direction: function(a) {
			this._direction =
				a;
			this._restartAnimation();
			return a
		},
		_maxSkip: 10,
		get_maxSkip: function() {
			return this._maxSkip
		},
		set_maxSkip: function(a) {
			this._maxSkip = a;
			this._cell.get_fullDownload() || (this._maxSkip = 0);
			this._restartAnimation();
			return a
		},
		add_frameChanged: function(a) {
			this.__frameChanged = ss.Delegate.combine(this.__frameChanged, a)
		},
		remove_frameChanged: function(a) {
			this.__frameChanged = ss.Delegate.remove(this.__frameChanged, a)
		},
		__frameChanged_handler_get: function() {
			null == this.__frameChanged_handler && (this.__frameChanged_handler =
				ss.EventHandler.create(this, this.add_frameChanged, this.remove_frameChanged));
			return this.__frameChanged_handler
		},
		__frameChanged: null,
		__frameChanged_handler: null,
		dispose: function() {
			this._animator.remove_update(ss.Delegate.create(this, this._animator_Update));
			this._animator.remove_draw(ss.Delegate.create(this, this._animator_Draw))
		},
		get__skippedFrames: function() {
			return 1E3 / this._fps
		},
		play: function() {
			this.get_isPlaying() || (this._animator.cellRegisteredCount++, this.set__totalFrames(lt.Controls.Medical.Tools._getMaxAllowed(this._cell)),
				this._currentFrame = this._cell.get_currentOffset(), this._animator.add_update(ss.Delegate.create(this, this._animator_Update)), this._animator.add_draw(ss.Delegate.create(this, this._animator_Draw)), this._playing = !0, this._timeStamp = Date.get_now().getTime(), this._animator.start())
		},
		_animator_Draw: function() {
			0 < this._skippedFrames && this._drawFrame()
		},
		_skippedFrames: 0,
		_animator_Update: function() {
			var a;
			this._skippedFrames = 0;
			for(a = this.get__skippedFrames(); Date.get_now().getTime() > this._timeStamp && this._skippedFrames <=
				this._maxSkip;) this._updateFrame(), this._timeStamp += a, this._skippedFrames++
		},
		stop: function() {
			this._playing && (this._playing = !1, this._shuffler.reset(this._totalFrames), this._animator.remove_update(ss.Delegate.create(this, this._animator_Update)), this._animator.remove_draw(ss.Delegate.create(this, this._animator_Draw)), this._animator.cellRegisteredCount--, this._animator.cellRegisteredCount || this._animator.stop())
		},
		_updateFrame: function() {
			if(this.get_isPlaying()) {
				switch(this._direction) {
					case 0:
						this._updateForward();
						break;
					case 1:
						this._updateBackward();
						break;
					case 2:
						this._updateShuffle();
						break;
					case 3:
						this._updateSweep()
				}
				this._frameUpdatingCallBack(this._newFrameIndex, this._currentFrame) ? this._currentFrame = this._newFrameIndex : this._newFrameIndex = this._currentFrame
			}
		},
		add__frameUpdating: function(a) {
			this.__frameUpdating = ss.Delegate.combine(this.__frameUpdating, a)
		},
		remove__frameUpdating: function(a) {
			this.__frameUpdating = ss.Delegate.remove(this.__frameUpdating, a)
		},
		__frameUpdating_handler_get: function() {
			null == this.__frameUpdating_handler &&
				(this.__frameUpdating_handler = ss.EventHandler.create(this, this.add__frameUpdating, this.remove__frameUpdating));
			return this.__frameUpdating_handler
		},
		__frameUpdating: null,
		_frameUpdatingCallBack: function(a, b) {
			if(null != this.__frameUpdating) {
				var c = new lt.Controls.Medical._frameUpdatingEventArgs(a, b);
				this.__frameUpdating(this, c);
				return c.get_update()
			}
			return !0
		},
		_drawFrame: function() {
			this._cell.set_currentOffset(this._currentFrame);
			null != this.__frameChanged && this.__frameChanged(this, new lt.Controls.Medical.FrameChangedEventArgs(this._currentFrame))
		},
		_updateForward: function() {
			this._currentFrame >= this._totalFrames - 1 && !this._loop ? (this._currentFrame = this._totalFrames, this.stop()) : this._currentFrame >= this._totalFrames - 1 ? this._newFrameIndex = 0 : this._newFrameIndex++
		},
		_updateBackward: function() {
			1 >= this._currentFrame && !this._loop ? (this._currentFrame = 1, this.stop()) : 1 >= this._currentFrame ? this._newFrameIndex = this._totalFrames : this._newFrameIndex--
		},
		_updateShuffle: function() {
			!this._shuffler.get_isNewAvailable() && !this._loop ? this.stop() : this._shuffler.get_isNewAvailable() ?
				this._newFrameIndex = this._shuffler.get_randomFrame() : this._shuffler.reset(this._totalFrames)
		},
		_updateSweep: function() {
			this._currentFrame >= this._totalFrames - 1 ? this._bounceDirection = -1 : 0 >= this._currentFrame && (this._bounceDirection = 1);
			0 < this._bounceDirection ? this._newFrameIndex++ : this._newFrameIndex--
		}
	};
	Object.defineProperty(lt.Controls.Medical.CinePlayer.prototype, "isPlaying", {
		get: lt.Controls.Medical.CinePlayer.prototype.get_isPlaying,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.CinePlayer.prototype,
		"currentFrame", {
			get: lt.Controls.Medical.CinePlayer.prototype.get_currentFrame,
			set: lt.Controls.Medical.CinePlayer.prototype.set_currentFrame,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.CinePlayer.prototype, "FPS", {
		get: lt.Controls.Medical.CinePlayer.prototype.get_FPS,
		set: lt.Controls.Medical.CinePlayer.prototype.set_FPS,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.CinePlayer.prototype, "loop", {
		get: lt.Controls.Medical.CinePlayer.prototype.get_loop,
		set: lt.Controls.Medical.CinePlayer.prototype.set_loop,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.CinePlayer.prototype, "direction", {
		get: lt.Controls.Medical.CinePlayer.prototype.get_direction,
		set: lt.Controls.Medical.CinePlayer.prototype.set_direction,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.CinePlayer.prototype, "maxSkip", {
		get: lt.Controls.Medical.CinePlayer.prototype.get_maxSkip,
		set: lt.Controls.Medical.CinePlayer.prototype.set_maxSkip,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.CinePlayer.prototype, "frameChanged", {
		get: lt.Controls.Medical.CinePlayer.prototype.__frameChanged_handler_get,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical._shuffleData = function(a) {
		this.reset(a)
	};
	lt.Controls.Medical._shuffleData.prototype = {
		_totalCount: 0,
		_usedCount: 0,
		_usedFrames: null,
		reset: function(a) {
			this._totalCount = a;
			this._usedCount = 0;
			this._usedFrames = Array(a)
		},
		get_isNewAvailable: function() {
			return this._usedCount < this._totalCount
		},
		get_randomFrame: function() {
			var a;
			if(!this.get_isNewAvailable()) return 0;
			a = Math.floor(Math.random() * this._totalCount);
			if(this._usedFrames[a]) return this.get_randomFrame();
			this._usedFrames[a] = !0;
			this._usedCount++;
			return ++a
		}
	};
	lt.Controls.Medical._frameUpdatingEventArgs = function(a, b) {
		lt.Controls.Medical._frameUpdatingEventArgs.initializeBase(this);
		this._newFrameIndex$1 = a;
		this._oldFrameIndex$1 = b
	};
	lt.Controls.Medical._frameUpdatingEventArgs.prototype = {
		_update$1: !0,
		_newFrameIndex$1: 0,
		get_newFrameIndex: function() {
			return this._newFrameIndex$1
		},
		set_newFrameIndex: function(a) {
			return this._newFrameIndex$1 = a
		},
		_oldFrameIndex$1: 0,
		get_oldFrameIndex: function() {
			return this._oldFrameIndex$1
		},
		set_oldFrameIndex: function(a) {
			return this._oldFrameIndex$1 = a
		},
		get_update: function() {
			return this._update$1
		},
		set_update: function(a) {
			return this._update$1 = a
		}
	};
	lt.Controls.Medical._animator = function() {};
	lt.Controls.Medical._animator.prototype = {
		_running: !1,
		cellRegisteredCount: 0,
		callback: function() {
			this._run()
		},
		_timerID: 0,
		_requestAnimationFrame: function() {
			this._timerID =
				lt.LTHelper.supportsAnimationFrame && lt.LTHelper.device === lt.LTDevice.desktop ? lt.LTHelper.requestAnimationFrame(ss.Delegate.create(this, this.callback)) : setTimeout(ss.Delegate.create(this, this.callback), 1E3 / 60)
		},
		_cancelAnimationFrame: function() {
			lt.LTHelper.supportsAnimationFrame && lt.LTHelper.device === lt.LTDevice.desktop ? lt.LTHelper.cancelAnimationFrame(this._timerID) : clearTimeout(this._timerID)
		},
		start: function() {
			this._running || (this._running = !0, this._requestAnimationFrame())
		},
		stop: function() {
			this._running &&
				(this._running = !1, this._cancelAnimationFrame())
		},
		add_update: function(a) {
			this.__update = ss.Delegate.combine(this.__update, a)
		},
		remove_update: function(a) {
			this.__update = ss.Delegate.remove(this.__update, a)
		},
		__update_handler_get: function() {
			null == this.__update_handler && (this.__update_handler = ss.EventHandler.create(this, this.add_update, this.remove_update));
			return this.__update_handler
		},
		__update: null,
		__update_handler: null,
		_updateCallBack: function() {
			null != this.__update && this.__update(this, lt.LeadEventArgs.Empty)
		},
		add_draw: function(a) {
			this.__draw = ss.Delegate.combine(this.__draw, a)
		},
		remove_draw: function(a) {
			this.__draw = ss.Delegate.remove(this.__draw, a)
		},
		__draw_handler_get: function() {
			null == this.__draw_handler && (this.__draw_handler = ss.EventHandler.create(this, this.add_draw, this.remove_draw));
			return this.__draw_handler
		},
		__draw: null,
		__draw_handler: null,
		_drawCallBack: function() {
			null != this.__draw && this.__draw(this, lt.LeadEventArgs.Empty)
		},
		_run: function() {
			this._running && this._requestAnimationFrame();
			this._updateCallBack();
			this._drawCallBack()
		}
	};
	Object.defineProperty(lt.Controls.Medical._animator.prototype, "update", {
		get: lt.Controls.Medical._animator.prototype.__update_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical._animator.prototype, "draw", {
		get: lt.Controls.Medical._animator.prototype.__draw_handler_get,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical._ultraSoundCalibrationRegion = function(a) {
		this._rect = a.clone()
	};
	lt.Controls.Medical._ultraSoundCalibrationRegion.prototype = {
		_calibrationScaleX: 0,
		_calibrationScaleY: 0,
		_rect: null,
		_regionFlag: 0,
		get_regionFlag: function() {
			return this._regionFlag
		},
		set_regionFlag: function(a) {
			return this._regionFlag = a
		},
		get_rect: function() {
			return this._rect
		},
		set_rect: function(a) {
			return this._rect = a
		},
		get_calibrationScaleX: function() {
			return this._calibrationScaleX
		},
		set_calibrationScaleX: function(a) {
			return this._calibrationScaleX = a
		},
		get_calibrationScaleY: function() {
			return this._calibrationScaleY
		},
		set_calibrationScaleY: function(a) {
			return this._calibrationScaleY = a
		}
	};
	lt.Controls.Medical._dicomTag =
		function() {};
	lt.Controls.Medical._dicomElement = function() {};
	lt.Controls.Medical._dicomElement.prototype = {
		value: null
	};
	lt.Controls.Medical._dicomDataSet = function(a) {
		this._json = a
	};
	lt.Controls.Medical._dicomDataSet.prototype = {
		_json: null,
		findFirstElement: function(a, b) {
			for(var c = new lt.Controls.Medical._dicomElement, d = b.toString(16), e = 8 - d.length, f = 0, g = "", f = 0; f < e; f++) g += "0";
			d = this._json[g + d];
			if(null == d) return null;
			c.value = d.Value;
			return c
		}
	};
	lt.Controls.Medical._dateTime = function(a, b, c, d, e, f, g) {
		this._date =
			new Date(a, b, c, d, e, f, g)
	};
	lt.Controls.Medical._dateTime.prototype = {
		_date: null,
		get_date: function() {
			return this._date
		}
	};
	lt.Controls.Medical.Cursor3DInteractiveMode = function() {
		lt.Controls.Medical.Cursor3DInteractiveMode.initializeBase(this);
		this.set_autoItemMode(lt.Controls.ImageViewerAutoItemMode.autoSet);
		this.set_itemPart(lt.Controls.ImageViewerItemPart.item);
		this.set_isDragMouseWheelEnabled(!1)
	};
	lt.Controls.Medical.Cursor3DInteractiveMode.prototype = {
		_viewer$1: null,
		get_id: function() {
			return 104
		},
		start: function(a) {
			lt.Controls.Medical.Cursor3DInteractiveMode.callBaseMethod(this,
				"start", [a]);
			this._viewer$1 = a;
			a = lt.Controls.Medical.Cursor3DInteractiveMode.callBaseMethod(this, "get_interactiveService");
			a.add_dragStarted(ss.Delegate.create(this, this._service_DragStarted$1));
			a.add_dragDelta(ss.Delegate.create(this, this._service_DragDelta$1));
			a.add_dragCompleted(ss.Delegate.create(this, this._service_DragCompleted$1))
		},
		stop: function(a) {
			if(this.get_isStarted()) {
				var b = lt.Controls.Medical.Cursor3DInteractiveMode.callBaseMethod(this, "get_interactiveService");
				b.remove_dragStarted(ss.Delegate.create(this,
					this._service_DragStarted$1));
				b.remove_dragDelta(ss.Delegate.create(this, this._service_DragDelta$1));
				b.remove_dragCompleted(ss.Delegate.create(this, this._service_DragCompleted$1));
				lt.Controls.Medical.Cursor3DInteractiveMode.callBaseMethod(this, "stop", [a])
			}
		},
		_service_DragCompleted$1: function() {
			if(this.get_isWorking()) this.onWorkCompleted(lt.LeadEventArgs.Empty);
			this._unregisterPostRender$1(lt.Controls.Medical.Cursor3DInteractiveMode.callBaseMethod(this, "get_item"))
		},
		_cell_PostRender$1: function(a, b) {
			var c =
				a.get_parentCell(),
				d = c.Cusor3DPosition,
				c = Math.max(0, Math.min((50 - c.Cusor3DPositionDistance) / 50));
			null != d && (d = lt.Controls.Medical.Tools.logicalToPhysical(a, lt.LeadPointD.create(d.get_x(), d.get_y())), b.get_context().save(), b.get_context().beginPath(), b.get_context().strokeStyle = String.format("rgba(0, 128, 255, {0})", c), b.get_context().arc(d.get_x(), d.get_y(), 20, 0, 2 * Math.PI, !1), b.get_context().stroke(), b.get_context().restore())
		},
		_registerPostRender$1: function(a) {
			for(var a = a.get_parentCell().get_viewer(),
					b = ss.IEnumerator.getEnumerator(a.layout.get_items()); b.moveNext();) a = b.current, a.add_postRender(ss.Delegate.create(this, this._cell_PostRender$1))
		},
		_unregisterPostRender$1: function(a) {
			if(null != a)
				for(var a = a.get_parentCell().get_viewer(), b = ss.IEnumerator.getEnumerator(a.layout.get_items()); b.moveNext();) a = b.current, a.remove_postRender(ss.Delegate.create(this, this._cell_PostRender$1)), a.invalidate(), a.Cusor3DPosition = void 0, a.Cusor3DPositionDistance = 0
		},
		_scroll$1: !0,
		get_scroll: function() {
			return this._scroll$1
		},
		set_scroll: function(a) {
			return this._scroll$1 = a
		},
		_findPointOnCell$1: function(a, b, c, d, e) {
			a.get_attachedFrame();
			a = lt.Controls.Medical._cursor3D._findCursor3DPosition(e, a, b, c, d, this._scroll$1);
			null != a && (b = c.get_frames().indexOf(a.frame), c.get_currentOffset() !== b && c.set_currentOffset(b), c.Cusor3DPosition = a.point, c.Cusor3DPositionDistance = a.distance, c.invalidate())
		},
		_find3DCursorOnLinkedSeries$1: function(a, b, c, d, e) {
			this._findPointOnCell$1(a.get_selectedItem(), b[0], c, d[0], e)
		},
		_updateAttachedCells$1: function(a,
			b) {
			if(null != a) {
				var c = a.get_parentCell(),
					d = lt.Controls.Medical.Tools.physicalToLogical(a, b);
				c.get_viewer()._enumerateLinkedSeries(c, ss.Delegate.create(this, this._find3DCursorOnLinkedSeries$1), d)
			}
		},
		_service_DragDelta$1: function(a, b) {
			var c = lt.Controls.Medical.Cursor3DInteractiveMode.callBaseMethod(this, "get_item");
			this.get_isWorking() && this._updateAttachedCells$1(c, lt.LeadPointD.create(b.get_position().get_x(), b.get_position().get_y()))
		},
		_service_DragStarted$1: function(a, b) {
			if(this.canStartWork(b) &&
				null != this.get_item()) {
				var c = lt.Controls.Medical.Cursor3DInteractiveMode.callBaseMethod(this, "get_item");
				this._registerPostRender$1(c);
				null == c && (c = this.get_item());
				if(b.get_mouseButton() === this.get_mouseButtons() || b.get_nativeEvent().type === lt.LTHelper.mouseWheelEvent) this._updateAttachedCells$1(c, lt.LeadPointD.create(b.get_position().get_x(), b.get_position().get_y())), this.onWorkStarted(lt.LeadEventArgs.Empty)
			}
		},
		get_name: function() {
			return "Probe Tool"
		}
	};
	Object.defineProperty(lt.Controls.Medical.Cursor3DInteractiveMode.prototype,
		"id", {
			get: lt.Controls.Medical.Cursor3DInteractiveMode.prototype.get_id,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.Cursor3DInteractiveMode.prototype, "scroll", {
		get: lt.Controls.Medical.Cursor3DInteractiveMode.prototype.get_scroll,
		set: lt.Controls.Medical.Cursor3DInteractiveMode.prototype.set_scroll,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.Cursor3DInteractiveMode.prototype, "name", {
		get: lt.Controls.Medical.Cursor3DInteractiveMode.prototype.get_name,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.Cursor3DAction = function() {
		lt.Controls.Medical.Cursor3DAction.initializeBase(this)
	};
	lt.Controls.Medical.Cursor3DAction.prototype = {
		_cursor3DInteractiveMode$1: null,
		init: function() {
			this._cursor3DInteractiveMode$1 = new lt.Controls.Medical.Cursor3DInteractiveMode;
			this._cursor3DInteractiveMode$1.set_idleCursor("default");
			this._cursor3DInteractiveMode$1.set_workingCursor("crosshair");
			return this._cursor3DInteractiveMode$1
		},
		_scroll$1: !0,
		get_scroll: function() {
			return this._scroll$1
		},
		set_scroll: function(a) {
			this._scroll$1 = a;
			this._cursor3DInteractiveMode$1.set_scroll(this._scroll$1);
			return a
		},
		start: function(a) {
			this._setInteractiveMode(a)
		}
	};
	Object.defineProperty(lt.Controls.Medical.Cursor3DAction.prototype, "scroll", {
		get: lt.Controls.Medical.Cursor3DAction.prototype.get_scroll,
		set: lt.Controls.Medical.Cursor3DAction.prototype.set_scroll,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical._mrtiRenderChunkEventArgs = function(a, b, c, d, e, f, g, h, i) {
		this._sourceRect$1 = lt.LeadRectD.get_empty();
		this._targetRect$1 = lt.LeadRectD.get_empty();
		this._chunkRect$1 = lt.LeadRectD.get_empty();
		lt.Controls.Medical._mrtiRenderChunkEventArgs.initializeBase(this);
		this._sender$1 = a;
		this._sourceRect$1 = b;
		this._targetRect$1 = c;
		this._chunkRect$1 = d;
		this._chunkImage$1 = e;
		this._userState$1 = g;
		this._resolution$1 = f;
		this._chunkCanvas$1 = h;
		this._backCanvas$1 = i
	};
	lt.Controls.Medical._mrtiRenderChunkEventArgs.prototype = {
		_chunkCanvas$1: null,
		_backCanvas$1: null,
		get_backCanvas: function() {
			return this._backCanvas$1
		},
		get_chunkCanvas: function() {
			return this._chunkCanvas$1
		},
		_sender$1: null,
		get_sender: function() {
			return this._sender$1
		},
		get_sourceRect: function() {
			return this._sourceRect$1
		},
		get_targetRect: function() {
			return this._targetRect$1
		},
		_userState$1: null,
		get_userState: function() {
			return this._userState$1
		},
		get_chunkRect: function() {
			return this._chunkRect$1
		},
		_chunkImage$1: null,
		get_chunkImage: function() {
			return this._chunkImage$1
		},
		_resolution$1: null,
		get_resolution: function() {
			return this._resolution$1
		}
	};
	lt.Controls.Medical.ChunkLoadedEventArgs = function(a) {
		lt.Controls.Medical.ChunkLoadedEventArgs.initializeBase(this);
		this._chunk$1 = a
	};
	lt.Controls.Medical.ChunkLoadedEventArgs.prototype = {
		_chunk$1: null,
		get_chunk: function() {
			return this._chunk$1
		}
	};
	Object.defineProperty(lt.Controls.Medical.ChunkLoadedEventArgs.prototype, "chunk", {
		get: lt.Controls.Medical.ChunkLoadedEventArgs.prototype.get_chunk,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical._chunkEventArgs = function(a, b, c) {
		lt.Controls.Medical._chunkEventArgs.initializeBase(this);
		this.chunk = a.clone();
		this.image = c;
		this.renderer = b
	};
	lt.Controls.Medical._chunkEventArgs.prototype = {
		chunk: null,
		image: null,
		renderer: null
	};
	lt.Controls.Medical._debugEventArgs = function(a, b, c, d) {
		lt.Controls.Medical._debugEventArgs.initializeBase(this);
		this.param1 = b;
		this.param2 = c;
		this.param3 = d;
		this.text = a
	};
	lt.Controls.Medical._debugEventArgs.prototype = {
		param1: 0,
		param2: 0,
		param3: 0,
		text: null
	};
	lt.Controls.Medical._chunkStatus = function() {
		this.inverted = !1;
		this.visible = !0;
		this.processed = !1
	};
	lt.Controls.Medical._chunkStatus.prototype = {
		inverted: !1,
		visible: !1,
		processed: !1
	};
	lt.Controls.Medical.ChunkData = function(a, b, c, d) {
		this._image = a;
		this.set_rect(b);
		this.set_resolution(c);
		this.set_canvas(d);
		this._status = new lt.Controls.Medical._chunkStatus
	};
	lt.Controls.Medical.ChunkData.prototype = {
		_image: null,
		_canvas: null,
		_backCanvas: null,
		_resolution: null,
		_rect: null,
		_status: null,
		get_canvas: function() {
			return this._canvas
		},
		set_canvas: function(a) {
			return this._canvas = a
		},
		get_backCanvas: function() {
			return this._backCanvas
		},
		set_backCanvas: function(a) {
			return this._backCanvas = a
		},
		get_resolution: function() {
			return this._resolution
		},
		set_resolution: function(a) {
			return this._resolution =
				a
		},
		get_rect: function() {
			return this._rect
		},
		set_rect: function(a) {
			return this._rect = a
		},
		_disposeImage: function(a) {
			a.crossOrigin = "Anonymous";
			a.src = "onepixel.png"
		},
		dispose: function() {
			this._disposeImage(this._image)
		},
		_getInfo: function() {
			return new lt.Controls.Medical._chunkInfo(this.get_rect(), this.get_resolution())
		},
		equal: function(a) {
			return this.get_rect().get_left() === a.get_rect().get_left() && this.get_rect().get_top() === a.get_rect().get_top() && this.get_rect().get_width() === a.get_rect().get_width() && this.get_rect().get_height() ===
				a.get_rect().get_height() && this.get_resolution().get_width() === a.get_resolution().get_width() && this.get_resolution().get_height() === a.get_resolution().get_height() ? !0 : !1
		},
		clone: function() {
			return new lt.Controls.Medical.ChunkData(this._image, this.get_rect(), this.get_resolution(), this.get_canvas())
		}
	};
	Object.defineProperty(lt.Controls.Medical.ChunkData.prototype, "canvas", {
		get: lt.Controls.Medical.ChunkData.prototype.get_canvas,
		set: lt.Controls.Medical.ChunkData.prototype.set_canvas,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.ChunkData.prototype, "backCanvas", {
		get: lt.Controls.Medical.ChunkData.prototype.get_backCanvas,
		set: lt.Controls.Medical.ChunkData.prototype.set_backCanvas,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.ChunkData.prototype, "resolution", {
		get: lt.Controls.Medical.ChunkData.prototype.get_resolution,
		set: lt.Controls.Medical.ChunkData.prototype.set_resolution,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.ChunkData.prototype,
		"rect", {
			get: lt.Controls.Medical.ChunkData.prototype.get_rect,
			set: lt.Controls.Medical.ChunkData.prototype.set_rect,
			enumerable: !0,
			configurable: !0
		});
	lt.Controls.Medical._recycledData = function(a, b) {
		this.canvas = a;
		this.backCanvas = b;
		null != a && (a.width = 1, a.height = 1);
		null != this.backCanvas && (this.backCanvas.width = 1, this.backCanvas.height = 1)
	};
	lt.Controls.Medical._recycledData.prototype = {
		canvas: null,
		backCanvas: null
	};
	lt.Controls.Medical._chunkInfo = function(a, b) {
		this.rect = a;
		this.resolution = b
	};
	lt.Controls.Medical._chunkInfo.prototype = {
		resolution: null,
		rect: null,
		equal: function(a) {
			return this.rect.get_left() === a.rect.get_left() && this.rect.get_top() === a.rect.get_top() && this.rect.get_width() === a.rect.get_width() && this.rect.get_height() === a.rect.get_height() && this.resolution.get_width() === a.resolution.get_width() && this.resolution.get_height() === a.resolution.get_height() ? !0 : !1
		},
		clone: function() {
			return new lt.Controls.Medical._chunkInfo(this.rect, this.resolution)
		},
		dispose: function() {}
	};
	lt.Controls.Medical._mrtiRenderer = function(a) {
		this.tileResolution =
			lt.LeadSizeD.get_empty();
		this.tileBackGroundResolution = lt.LeadSizeD.get_empty();
		this._image = a
	};
	lt.Controls.Medical._mrtiRenderer.transformPoint = function(a, b, c, d, e) {
		var f = a.get_x() - b.get_x(),
			a = a.get_y() - b.get_y(),
			g = 0,
			h = 1;
		switch(e) {
			case 90:
			case -270:
				g = 1;
				h = 0;
				break;
			case -90:
			case 270:
				g = -1;
				h = 0;
				break;
			case 180:
			case -180:
				g = 0, h = -1
		}
		c && (a = -a);
		d && (f = -f);
		c = f * g + a * h;
		f = f * h - a * g + b.get_x();
		c += b.get_y();
		return lt.LeadPointD.create(f, c)
	};
	lt.Controls.Medical._mrtiRenderer.transformPoint2 = function(a, b, c, d, e) {
		var f = a.get_x() -
			b.get_x(),
			a = a.get_y() - b.get_y(),
			g = 0,
			h = 1;
		switch(e) {
			case 90:
			case -270:
				g = 1;
				h = 0;
				break;
			case -90:
			case 270:
				g = -1;
				h = 0;
				break;
			case 180:
			case -180:
				g = 0, h = -1
		}
		e = f * h - a * g;
		f = f * g + a * h;
		c && (f = -f);
		d && (e = -e);
		e += b.get_x();
		f += b.get_y();
		return lt.LeadPointD.create(e, f)
	};
	lt.Controls.Medical._mrtiRenderer.prototype = {
		_dontRequest: !1,
		imageProcessingList: null,
		getTransformedRect2: function(a, b, c, d, e, f) {
			c = lt.LeadPointD.create(b / 2, c / 2);
			b = lt.Controls.Medical._mrtiRenderer.transformPoint(lt.LeadPointD.create(a.get_left(), a.get_top()),
				c, d, e, f);
			f = lt.Controls.Medical._mrtiRenderer.transformPoint(lt.LeadPointD.create(a.get_right(), a.get_bottom()), c, d, e, f);
			a = Math.min(b.get_x(), f.get_x());
			d = Math.min(b.get_y(), f.get_y());
			e = Math.max(b.get_x(), f.get_x());
			b = Math.max(b.get_y(), f.get_y());
			return lt.LeadRectD.create(a, d, e - a, b - d)
		},
		getTransformedRect: function(a, b, c, d, e, f) {
			c = lt.LeadPointD.create(b / 2, c / 2);
			b = lt.Controls.Medical._mrtiRenderer.transformPoint(lt.LeadPointD.create(a.get_left(), a.get_top()), c, d, e, f);
			f = lt.Controls.Medical._mrtiRenderer.transformPoint(lt.LeadPointD.create(a.get_right(),
				a.get_bottom()), c, d, e, f);
			a = Math.min(b.get_x(), f.get_x());
			d = Math.min(b.get_y(), f.get_y());
			e = Math.max(b.get_x(), f.get_x());
			b = Math.max(b.get_y(), f.get_y());
			return lt.LeadRectD.create(a, d, e - a, b - d)
		},
		addTextLine: function() {},
		dispose: function() {},
		_isChunkAlreadyRequested: function(a) {
			for(var b = 0, b = 0; b < this._alreadyRequested.length; b++)
				if(a.equal(this._alreadyRequested[b])) return b;
			return -1
		},
		_isChunkAlreadyDownloading: function(a) {
			for(var b = 0, b = 0; b < this._downloading.length; b++)
				if(a.equal(this._downloading[b])) return b;
			return -1
		},
		_updateRequestedChunksAndRectList: function(a) {
			for(var b = 0, c, b = a.rectList.length - 1; 0 <= b; b--) c = a.rectList[b], -1 !== this._isChunkAlreadyRequested(c) ? a.rectList.removeAt(b) : -1 !== this._isChunkAlreadyDownloading(c) && a.rectList.removeAt(b)
		},
		_arrangeRectList: function(a, b, c) {
			var d, e = [],
				f = [],
				g = 0;
			d = this._alreadyRequested;
			for(var h = d.length, i, j, k, l = parseInt(b.get_left() + b.get_width()) / 2, b = parseInt(b.get_top() + b.get_height()) / 2, g = 0; g < h; g++) i = 1 * a.targetRect.get_width() / d[g].get_resolution().get_width(),
				j = 1 * a.targetRect.get_height() / d[g].get_resolution().get_height(), k = this.getTransformedRect(d[g].get_rect(), d[g].get_resolution().get_width(), d[g].get_resolution().get_height(), this._flipped, this._reversed, this._rotateAngle), k = lt.LeadRectD.create(k.get_left() * i, k.get_top() * j, k.get_width() * i, k.get_height() * j), i = k.get_left() + k.get_width() / 2 - c.get_left() - l, k = k.get_top() + k.get_height() / 2 - c.get_top() - b, k = Math.sqrt(i * i + k * k), a.tileResolution !== d[g].get_resolution() && (k /= 2 * a.tileResolution.get_width() / d[g].get_resolution().get_width()),
				e.add(k);
			for(a = -1; e.length;) {
				k = 1E5;
				a = -1;
				for(g = 0; g < e.length; g++) e[g] < k && (k = e[g], a = g);
				if(-1 === a) return;
				f.add(d[a]);
				d.removeAt(a);
				e.removeAt(a)
			}
			this._alreadyRequested = f
		},
		cancelRequestsForUselessChunks: function(a, b, c, d, e) {
			for(var f = 0, f = this._alreadyRequested.length, g, c = b.get_width() / this._image.get_fullSize().get_width(), h = b.get_height() / this._image.get_fullSize().get_height(), a = lt.LeadRectD.create(0, 0, a.get_width(), a.get_height()), i = 0, f = f - 1; 0 <= f; f--) this._alreadyRequested[f].get_resolution().get_width() !==
				d.get_width() && this._alreadyRequested[f].get_resolution().get_width() !== e.get_width() ? i = !0 : 2 <= (this._alreadyRequested[f].get_resolution().get_width() + 0.5) / this.tileResolution.get_width() ? i = !0 : (i = parseInt(this._image.get_fullSize().get_width() / this._alreadyRequested[f].get_resolution().get_width() + 0.5), g = this.getTransformedRect(this._alreadyRequested[f].get_rect(), this._alreadyRequested[f].get_resolution().get_width(), this._alreadyRequested[f].get_resolution().get_height(), this._flipped, this._reversed,
					this._rotateAngle), g.set_x(parseInt(g.get_left() * i * c) - b.get_x()), g.set_y(parseInt(g.get_top() * i * h) - b.get_y()), g.set_width(parseInt(g.get_width() * i * c)), g.set_height(parseInt(g.get_height() * i * h)), i = !a.intersectsWith(g)), i && lt.Controls.Medical.Tools._removeChunk(this._alreadyRequested, f)
		},
		_initializeChunks: function(a) {
			for(var b = 0, c = a.rectList.length, b = 0; b < c; b++) this._alreadyRequested.add(a.rectList[b].clone())
		},
		testDebug: function() {},
		_alreadyRequested: null,
		_downloading: null,
		get_downloading: function() {
			return this._downloading
		},
		get_alreadyRequested: function() {
			return this._alreadyRequested
		},
		_flipped: !1,
		_reversed: !1,
		_rotateAngle: 0,
		_previousRect: null,
		_scaling: !1,
		qualityFactor: 0,
		renderAsync: function(a, b, c, d, e, f, g, h, i, j) {
			if(!this._dontRequest && (this._flipped = g, this._reversed = h, this._rotateAngle = i, !a.get_isEmpty() && !b.get_isEmpty())) {
				this._scaling = !1;
				null != this._previousRect && !this._previousRect.get_isEmpty() && 1 < Math.abs(b.get_width() - this._previousRect.get_width()) && 1 < Math.abs(b.get_height() - this._previousRect.get_height()) &&
					(this._scaling = !0);
				this._previousRect = b.clone();
				null == lt.Controls.Medical._mrtiRenderer._loader && (lt.Controls.Medical._mrtiRenderer._loader = new lt.Controls.Medical._imageLoader(4));
				lt.Controls.Medical._mrtiRenderer._loader.slowStart = this._scaling;
				null == this._alreadyRequested && (this._alreadyRequested = [], this._downloading = []);
				if(null == this._image || null == this._image.get_imageUri() && String.isNullOrEmpty(this._image.get_imageName())) throw new lt.ArgumentException("Make sure that 'IMRTIRenderer.Image' is valid and contains valid image Uri/Name",
					"_image");
				g = this._image.get_tileSize();
				c = new lt.Controls.Medical._myWorkItemData(null, this._image, lt.LeadSizeD.get_empty(), lt.LeadRectD.get_empty(), 0, this._image.get_mimeType(), a, b, g, 0, c, d);
				c.tileResolution = this.tileResolution;
				c.tileBackGroundResolution = this.tileBackGroundResolution;
				this.cancelRequestsForUselessChunks(a, b, f, this.tileResolution, this.tileBackGroundResolution);
				if(!j) {
					c.testingValue = e;
					c.recycledList = f;
					this.tileResolution = c.tileResolution;
					c.rectList = this.findExpectedNumberOfChunks2(c.excludedRect,
						c.tileSize, c.sourceRect, c.targetRect, c.tileResolution);
					if(!this.tileBackGroundResolution.get_isEmpty()) {
						a = this.findExpectedNumberOfChunks2(c.excludedRect, c.tileSize, c.sourceRect, c.targetRect, c.tileBackGroundResolution);
						for(b = b = 0; b < a.length; b++) c.rectList.add(a[b])
					}
					this._updateRequestedChunksAndRectList(c);
					this._initializeChunks(c);
					this._arrangeRectList(c, c.sourceRect, c.targetRect);
					c.rectList.length ? (c.expectedNumberOfChunks = c.rectList.length + 1, lt.Controls.Medical._mrtiRenderer._loader.addRenderer(this),
						lt.Controls.Medical._mrtiRenderer._loader.lookForChunksToLoad()) : this.addTextLine("Nothing to request")
				}
			}
		},
		chunkLoaded: function(a) {
			var b = a.chunk,
				a = a.image,
				c = this._isChunkAlreadyRequested(new lt.Controls.Medical.ChunkData(null, b.get_rect(), b.get_resolution(), null)); - 1 !== c && this.get_alreadyRequested().removeAt(c);
			c = this._isChunkAlreadyDownloading(new lt.Controls.Medical.ChunkData(null, b.get_rect(), b.get_resolution(), null)); - 1 !== c && this._downloading.removeAt(c);
			if(!(b.get_resolution().get_width() !==
					this.tileResolution.get_width() && b.get_resolution().get_width() !== this.tileBackGroundResolution.get_width()) && (b = lt.Controls.Medical._rendererTools.drawChunkOnCanvas(this._image, b, a, this._image.get_tileSize(), lt.LeadSizeD.create(b.get_rect().get_width(), b.get_rect().get_height())), null != a)) this.onRenderChunk(new lt.Controls.Medical._mrtiRenderChunkEventArgs(this, lt.LeadRectD.get_empty(), lt.LeadRectD.get_empty(), b.get_rect(), a, b.get_resolution(), b, b.get_canvas(), b.get_backCanvas()))
		},
		_uselessChunk: function(a,
			b, c) {
			if(null == c) return !1;
			for(var d = 0, e = c.length, f, d = 0; d < e; d++)
				if(f = c[d].rect, b.get_width() === c[d].resolution.get_width() && f.get_x() <= a.get_x() && f.get_y() <= a.get_y() && f.get_bottom() >= a.get_bottom() && f.get_right() >= a.get_right()) return !0;
			return !1
		},
		findBackGroundResolution: function(a, b) {
			for(var c = 0, d = a.get_resolutions().length, c = 0; c < d; c++)
				if(a.get_resolutions()[c].get_width() === b.get_width()) {
					if(c + 3 >= d) break;
					else if(512 > Math.max(a.get_resolutions()[c + 3].get_width(), a.get_resolutions()[c + 3].get_height())) break;
					return lt.LeadSizeD.create(a.get_resolutions()[c + 3].get_width(), a.get_resolutions()[c + 3].get_height())
				}
			return lt.LeadSizeD.get_empty()
		},
		findExpectedNumberOfChunks2: function(a, b, c, d, e) {
			var f = 1 * e.get_width() / d.get_width(),
				g = 1 * e.get_height() / d.get_height();
			d.set_x(-d.get_x());
			d.set_y(-d.get_y());
			for(var c = this.getTransformedRect2(c, d.get_right() + d.get_left(), d.get_bottom() + d.get_top(), this._flipped, this._reversed, -this._rotateAngle), h = lt.LeadRectD.create(c.get_left() * f, c.get_top() * g, c.get_width() * f,
					c.get_height() * g), i = lt.LeadRectD.create(-d.get_left() * f, -d.get_top() * g, d.get_width() * f, d.get_height() * g), j = parseInt(h.get_left() + i.get_left() + 0.5), c = parseInt(h.get_top() + i.get_top() + 0.5), f = parseInt(b.get_width()), b = parseInt(b.get_height()), k = parseInt(Math.max(0, j) / f), g = parseInt(Math.max(0, c) / b), j = Math.min(j + h.get_width(), i.get_width()), c = Math.min(c + h.get_height(), i.get_height()), h = parseInt(Math.min(j - 1, e.get_width()) / f) + 1, i = parseInt(Math.min(c - 1, e.get_height()) / b) + 1, l = [], m = 0, n; k < h; k++)
				for(n = g; n < i; n++) m++,
					j = k * f, c = n * b, c = lt.LeadRectD.create(j, c, Math.min(parseInt(e.get_width() - j), f), Math.min(parseInt(e.get_height() - c), b)), this._uselessChunk(c, e, a) || l.add(new lt.Controls.Medical.ChunkData(null, c, e, null));
			d.set_x(-d.get_x());
			d.set_y(-d.get_y());
			return l
		},
		getNewResolution: function(a, b) {
			for(var c = lt.LeadSizeD.get_empty(), d = lt.LeadSizeD.get_empty(), e = lt.LeadSizeD.get_empty(), e = b.get_resolutions().length - 1; 0 <= e; e--) {
				var f = b.get_resolutions()[e];
				if(parseInt(f.get_width() * f.get_height()) >= a) {
					c = f;
					e + 1 <= b.get_resolutions().length -
						1 && (d = b.get_resolutions()[e + 1]);
					break
				}
			}
			f = lt.LeadSizeD.create(parseInt(c.get_width() / 2), parseInt(c.get_height() / 2));
			e = parseInt(c.get_width() * c.get_height());
			f = parseInt(f.get_width() * f.get_height());
			return e = c.get_isEmpty() && d.get_isEmpty() ? b.get_resolutions()[0] : 1 < this.qualityFactor ? d : Math.abs(e - a) < Math.abs(f - a) ? c : d
		},
		_image: null,
		get_image: function() {
			return this._image
		},
		set_image: function(a) {
			return this._image = a
		},
		add_renderChunk: function(a) {
			this.__renderChunk = ss.Delegate.combine(this.__renderChunk,
				a)
		},
		remove_renderChunk: function(a) {
			this.__renderChunk = ss.Delegate.remove(this.__renderChunk, a)
		},
		__renderChunk_handler_get: function() {
			null == this.__renderChunk_handler && (this.__renderChunk_handler = ss.EventHandler.create(this, this.add_renderChunk, this.remove_renderChunk));
			return this.__renderChunk_handler
		},
		__renderChunk: null,
		__renderChunk_handler: null,
		renderChunkCount: 0,
		onRenderChunk: function(a) {
			var b = a.get_userState(),
				c = this._isChunkAlreadyRequested(new lt.Controls.Medical.ChunkData(null, a.get_chunkRect(),
					a.get_resolution(), null)); - 1 !== c && this._alreadyRequested.removeAt(c);
			c = this._isChunkAlreadyDownloading(new lt.Controls.Medical.ChunkData(null, a.get_chunkRect(), a.get_resolution(), null)); - 1 !== c && this._downloading.removeAt(c);
			null != this.__renderChunk && this.__renderChunk(this, new lt.Controls.Medical._mrtiRenderChunkEventArgs(this, a.get_sourceRect(), a.get_targetRect(), a.get_chunkRect(), a.get_chunkImage(), a.get_resolution(), b, a.get_chunkCanvas(), a.get_backCanvas()))
		}
	};
	Object.defineProperty(lt.Controls.Medical._mrtiRenderer.prototype,
		"renderChunk", {
			get: lt.Controls.Medical._mrtiRenderer.prototype.__renderChunk_handler_get,
			enumerable: !0,
			configurable: !0
		});
	lt.Controls.Medical._parser = function() {};
	lt.Controls.Medical._parser.convertToString = function(a) {
		var b = "";
		Type.canCast(a, lt.LeadRectD) ? b = a.get_left() + "," + a.get_top() + "," + a.get_width() + "," + a.get_height() : Type.canCast(a, lt.LeadSizeD) && (b = a.get_width() + "," + a.get_height());
		return b
	};
	lt.Controls.Medical._parser.parseString = function(a, b) {
		if(1 === b) {
			var c = a.split(",");
			return lt.LeadRectD.create(parseInt(c[0]),
				parseInt(c[1]), parseInt(c[2]), parseInt(c[3]))
		}
		return !b ? (c = a.split(","), lt.LeadSizeD.create(parseInt(c[0]), parseInt(c[1]))) : null
	};
	lt.Controls.Medical._imageLoader = function(a) {
		this._timerID = -1;
		var b;
		this._readyList = [];
		this._imageElements = [];
		this._rendererList = [];
		for(var c = 0, c = 0; c < a; c++) {
			b = document.createElement("img");
			b.ImageIndex = c;
			this._imageElements.add(b);
			this._readyList.add(b);
			var d = ss.Delegate.create(this, this._chunkImageLoaded1);
			b.addEventListener("load", d, !1)
		}
	};
	lt.Controls.Medical._imageLoader._constructIPAddress =
		function(mrtiRender) {
			var b = 0,
				c = "&data=";
			if(null == mrtiRender || null == mrtiRender.imageProcessingList) return c;
			for(var d = mrtiRender.imageProcessingList.get_count(), e = null; b < d; b++)
				if(e = mrtiRender.imageProcessingList.get_item(b), e.ReadyToProcess) {
					var c = c + e.get_command(),
						f = e.get_arguments(),
						g = "";
					Object.keys(f).forEach(function(a) {
						g += "," + a + ":" + f[a]
					});
					c += g + ";"
				}
			return c
		};
	lt.Controls.Medical._imageLoader.temp_construct_fileName = function(rect, res, c, mrtiImg, mrtiRender) {
		var f = mrtiImg.get_imageUri(),
			f = String.format("{0}&frame={1}&x={2}&y={3}&w={4}&h={5}&xr={6}&yr={7}&wldata={8}", mrtiImg.get_imageUri(),
				mrtiImg.get_frameIndex(), rect.get_left(), rect.get_top(), c ? 0 : rect.get_width(), c ? 0 : rect.get_height(), res.get_width(), res.get_height(), mrtiImg.get_supportWindowLevel());
		var	a = lt.Controls.Medical._imageLoader._constructIPAddress(mrtiRender);
		return f + a
	};
	lt.Controls.Medical._imageLoader.prototype = {
		_imageElements: null,
		_readyList: null,
		slowStart: !1,
		_fetchNewChunk: function() {
			clearInterval(this._timerID);
			this._timerID = -1;
			if(this._rendererList.length) {
				var a = this._rendererList[this._rendererList.length - 1];
				if(this._readyList.length)
					if(a.get_alreadyRequested().length) {
						var b =
							a.get_alreadyRequested()[0];
						this._readyList[this._readyList.length - 1].ChunkData = b.clone();
						this._readyList[this._readyList.length - 1].Renderer = a;
						this._readyList[this._readyList.length - 1].crossOrigin = "Anonymous";
						this._readyList[this._readyList.length - 1].src = lt.Controls.Medical._imageLoader.temp_construct_fileName(b.get_rect(), b.get_resolution(), !1, a.get_image(), a);
						this._readyList.removeAt(this._readyList.length - 1);
						a.get_alreadyRequested().removeAt(0);
						a.get_downloading().add(b);
						this._readyList.length &&
							this.lookForChunksToLoad()
					} else this._rendererList.removeAt(this._rendererList.length - 1), this.lookForChunksToLoad()
			}
		},
		_rendererList: null,
		addRenderer: function(a) {
			this._rendererList.add(a)
		},
		lookForChunksToLoad: function() {
			-1 === this._timerID && (this._timerID = setInterval(ss.Delegate.create(this, this._fetchNewChunk), this.slowStart ? 400 : 10), this.slowStart = !1)
		},
		_chunkImageLoaded1: function(a) {
			var b = a.currentTarget.Renderer;
			b.chunkLoaded(new lt.Controls.Medical._chunkEventArgs(a.currentTarget.ChunkData, b, a.currentTarget)); -
			1 === this._readyList.indexOf(a.currentTarget) && this._readyList.add(a.currentTarget);
			this.lookForChunksToLoad()
		},
		_loader_ChunkLoaded: function() {}
	};
	lt.Controls.Medical._rendererTools = function() {};
	lt.Controls.Medical._rendererTools.allocateArray = function(a) {
		return lt.LTHelper.supportsTypedArray ? new Uint32Array(a) : Array(a)
	};
	lt.Controls.Medical._rendererTools.extract16BitData = function(ctx, canvas) {
		null == ctx && (ctx = canvas.getContext("2d"));
		for(var c = ctx.getImageData(0, 0, canvas.width, canvas.height), d = 0, e = c.data.length, f = lt.Controls.Medical._rendererTools.allocateArray(e),
				c = c.data, g = -1, d = 0; d < e; d += 4) 
			f[++g] = c[d + 1] << 8 | c[d + 2];
				
		return f;
	};
	lt.Controls.Medical._rendererTools._updateCanvas = function(a, b) {
		if(null == b) return null;
		b.width = parseInt(a.get_tileSize().get_width());
		b.height = parseInt(a.get_tileSize().get_height());
		return b
	};
	lt.Controls.Medical._rendererTools.prepareBackCanvas = function(canvas, img, width, height) {
		null == canvas && (canvas = document.createElement("canvas"));
		
		canvas.width = parseInt(width);
		canvas.height = parseInt(height);
		
		var ctx = canvas.getContext("2d");
		
		(img.naturalWidth !== canvas.width || img.naturalHeight !== canvas.height) && ctx.clearRect(0,
			0, canvas.width, canvas.height);
			
		try {
			ctx.drawImage(img, 0, 0);
		} catch(e) {
			alert(e.message);
		}
		
		return canvas;
	};
	
	lt.Controls.Medical._rendererTools.drawChunkOnCanvas = function(mrtiImg, chunkData, img, d, res) {
		var f = lt.Controls.Medical.Tools._recycledElements.length - 1;
		0 <= f ? chunkData.set_canvas(lt.Controls.Medical._rendererTools._updateCanvas(mrtiImg, lt.Controls.Medical.Tools._recycledElements[f].canvas)) : chunkData.set_canvas(document.createElement("canvas"));
		
		chunkData.get_canvas().width = parseInt(res.get_width());
		chunkData.get_canvas().height = parseInt(res.get_height());
		
		0 <= f ? chunkData.set_backCanvas(lt.Controls.Medical._rendererTools._updateCanvas(mrtiImg,
			lt.Controls.Medical.Tools._recycledElements[f].backCanvas)) : chunkData.set_backCanvas(document.createElement("canvas"));
			
		if(0 <= f && (lt.Controls.Medical.Tools._recycledElements.removeAt(f), lt.Controls.Medical.Tools._forDebug))
			for(var a = 0; a < lt.Controls.Medical.Tools._recycledElements.length; a++) 
				chunkData.get_backCanvas();
			
		lt.Controls.Medical._rendererTools.prepareBackCanvas(chunkData.get_backCanvas(), img, d.get_width(), d.get_height());
		
		return chunkData
	};
	
	lt.Controls.Medical.MRTIImage = function() {};
	lt.Controls.Medical.MRTIImage.prototype = {
		_frameIndex: 0,
		get_frameIndex: function() {
			return this._frameIndex
		},
		set_frameIndex: function(a) {
			return this._frameIndex = a
		},
		_imageUri: null,
		get_imageUri: function() {
			return this._imageUri
		},
		set_imageUri: function(a) {
			return this._imageUri = a
		},
		_imageName: null,
		get_imageName: function() {
			return this._imageName
		},
		set_imageName: function(a) {
			return this._imageName = a
		},
		_mimeType: null,
		get_mimeType: function() {
			return this._mimeType
		},
		set_mimeType: function(a) {
			return this._mimeType = a
		},
		_fullSize: null,
		get_fullSize: function() {
			return this._fullSize
		},
		set_fullSize: function(a) {
			return this._fullSize = a
		},
		_fullDpi: null,
		get_fullDpi: function() {
			return this._fullDpi
		},
		set_fullDpi: function(a) {
			return this._fullDpi = a
		},
		_resolutions: null,
		get_resolutions: function() {
			return this._resolutions
		},
		set_resolutions: function(a) {
			return this._resolutions = a
		},
		_tileSize: null,
		get_tileSize: function() {
			return this._tileSize
		},
		set_tileSize: function(a) {
			return this._tileSize = a
		},
		_supportWindowLevel: !1,
		get_supportWindowLevel: function() {
			return this._supportWindowLevel
		},
		set_supportWindowLevel: function(a) {
			return this._supportWindowLevel =
				a
		}
	};
	Object.defineProperty(lt.Controls.Medical.MRTIImage.prototype, "frameIndex", {
		get: lt.Controls.Medical.MRTIImage.prototype.get_frameIndex,
		set: lt.Controls.Medical.MRTIImage.prototype.set_frameIndex,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MRTIImage.prototype, "imageUri", {
		get: lt.Controls.Medical.MRTIImage.prototype.get_imageUri,
		set: lt.Controls.Medical.MRTIImage.prototype.set_imageUri,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MRTIImage.prototype,
		"imageName", {
			get: lt.Controls.Medical.MRTIImage.prototype.get_imageName,
			set: lt.Controls.Medical.MRTIImage.prototype.set_imageName,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.MRTIImage.prototype, "mimeType", {
		get: lt.Controls.Medical.MRTIImage.prototype.get_mimeType,
		set: lt.Controls.Medical.MRTIImage.prototype.set_mimeType,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MRTIImage.prototype, "fullSize", {
		get: lt.Controls.Medical.MRTIImage.prototype.get_fullSize,
		set: lt.Controls.Medical.MRTIImage.prototype.set_fullSize,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MRTIImage.prototype, "fullDpi", {
		get: lt.Controls.Medical.MRTIImage.prototype.get_fullDpi,
		set: lt.Controls.Medical.MRTIImage.prototype.set_fullDpi,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MRTIImage.prototype, "resolutions", {
		get: lt.Controls.Medical.MRTIImage.prototype.get_resolutions,
		set: lt.Controls.Medical.MRTIImage.prototype.set_resolutions,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MRTIImage.prototype, "tileSize", {
		get: lt.Controls.Medical.MRTIImage.prototype.get_tileSize,
		set: lt.Controls.Medical.MRTIImage.prototype.set_tileSize,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.MRTIImage.prototype, "supportWindowLevel", {
		get: lt.Controls.Medical.MRTIImage.prototype.get_supportWindowLevel,
		set: lt.Controls.Medical.MRTIImage.prototype.set_supportWindowLevel,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical._d3DXVECTOR3 = function(a, b, c) {
		this.x = a;
		this.y = b;
		this.z = c
	};
	lt.Controls.Medical._d3DXVECTOR3.prototype = {
		x: 0,
		y: 0,
		z: 0
	};
	lt.Controls.Medical._orientationLetters = function(a) {
		this._orientCol = Array(3);
		this._orientRow = Array(3);
		this._originalOrientationCol = Array(3);
		this._originalOrientationRow = Array(3);
		this._findOrientationLetter(a);
		this.updateImageProjection(this._projectionOrientation);
		this._applyTransformation()
	};
	lt.Controls.Medical._orientationLetters.create = function(a) {
		return new lt.Controls.Medical._orientationLetters(a)
	};
	lt.Controls.Medical._orientationLetters.prototype = {
		_orientCol: null,
		_orientRow: null,
		_originalOrientationCol: null,
		_originalOrientationRow: null,
		projectionRrotateAngle: 0,
		projectionIsFlipped: !1,
		projectionIsReversed: !1,
		_rotateAngle: 0,
		get_rotateAngle: function() {
			return this._rotateAngle
		},
		set_rotateAngle: function(a) {
			this._rotateAngle = a % 360;
			this._applyTransformation();
			return a
		},
		_rotateOrientation: function() {
			switch(this._rotateAngle) {
				case 0:
					break;
				case 90:
				case -270:
					this._swapArray(this._orientRow, this._orientCol);
					this._flipOrientation(this._orientRow);
					break;
				case 180:
				case -180:
					this._flipOrientation(this._orientRow);
					this._flipOrientation(this._orientCol);
					break;
				case -90:
				case 270:
					this._swapArray(this._orientRow, this._orientCol);
					this._flipOrientation(this._orientCol);
					break;
				default:
					throw Error("invalid angle value, the angle must be a multiple of 90");
			}
		},
		_swapArray: function(a, b) {
			var c, d;
			for(d = 0; 3 > d; d++) c = a[d], a[d] = b[d], b[d] = c
		},
		_isFlipped: !1,
		get_flip: function() {
			return this._isFlipped
		},
		set_flip: function(a) {
			this._isFlipped !==
				a && (this._isFlipped = a, this._applyTransformation());
			return a
		},
		_isReversed: !1,
		get_reverse: function() {
			return this._isReversed
		},
		set_reverse: function(a) {
			this._isReversed !== a && (this._isReversed = a, this._applyTransformation());
			return a
		},
		_revertToOriginal: function() {
			var a;
			for(a = 0; 3 > a; a++) this._orientRow[a] = this._originalOrientationRow[a], this._orientCol[a] = this._originalOrientationCol[a]
		},
		updateImageProjection: function(a) {
			this._projectionOrientation !== a && (this._projectionOrientation = a);
			if(1 === this._projectionOrientation)
				if("R" ===
					this.getOriginalTop().charAt(0) || "L" === this.getOriginalBottom().charAt(0)) this.projectionRrotateAngle = 270;
				else if("L" === this.getOriginalTop().charAt(0) || "R" === this.getOriginalBottom().charAt(0)) this.projectionRrotateAngle = 90;
			else {
				if("R" === this.getOriginalRight().charAt(0) || "L" === this.getOriginalLeft().charAt(0)) this.projectionIsReversed = !0
			} else if(2 === this._projectionOrientation)
				if("L" === this.getOriginalTop().charAt(0) || "R" === this.getOriginalBottom().charAt(0)) this.projectionRrotateAngle = 270;
				else if("R" ===
				this.getOriginalTop().charAt(0) || "L" === this.getOriginalBottom().charAt(0)) this.projectionRrotateAngle = 90;
			else if("L" === this.getOriginalRight().charAt(0) || "R" === this.getOriginalLeft().charAt(0)) this.projectionIsReversed = !0
		},
		mprType: 0,
		_getMPRType: function() {
			var a = this._getOrientationText(!0, this._orientRow, !1),
				b = this._getOrientationText(!0, this._orientCol, !1);
			if("L" === a[0] || "R" === a[0])
				if("A" === b[0] || "P" === b[0]) this.mprType = 0;
				else if("H" === b[0] || "F" === b[0]) this.mprType = 2;
			if("A" === a[0] || "P" === a[0])
				if("L" ===
					b[0] || "R" === b[0]) this.mprType = 0;
				else if("H" === b[0] || "F" === b[0]) this.mprType = 1;
			if("H" === a[0] || "F" === a[0])
				if("A" === b[0] || "P" === b[0]) this.mprType = 1;
				else if("L" === b[0] || "R" === b[0]) this.mprType = 2
		},
		_applyTransformation: function() {
			this._revertToOriginal();
			this._getMPRType();
			this._rotateOrientation(this._rotateAngle);
			this._isFlipped && this._flipOrientation(this._orientCol);
			this._isReversed && this._flipOrientation(this._orientRow)
		},
		_projectionOrientation: 0,
		get_projectionOrientation: function() {
			return this._projectionOrientation
		},
		set_projectionOrientation: function(a) {
			this._projectionOrientation = a;
			this._applyTransformation();
			return a
		},
		getLeft: function() {
			return this._createOrientation(0, this._orientRow, this._orientCol)
		},
		getRight: function() {
			return this._createOrientation(1, this._orientRow, this._orientCol)
		},
		getTop: function() {
			return this._createOrientation(2, this._orientRow, this._orientCol)
		},
		getBottom: function() {
			return this._createOrientation(3, this._orientRow, this._orientCol)
		},
		getOriginalLeft: function() {
			return this._createOrientation(0,
				this._originalOrientationRow, this._originalOrientationCol)
		},
		getOriginalRight: function() {
			return this._createOrientation(1, this._originalOrientationRow, this._originalOrientationCol)
		},
		getOriginalTop: function() {
			return this._createOrientation(2, this._originalOrientationRow, this._originalOrientationCol)
		},
		getOriginalBottom: function() {
			return this._createOrientation(3, this._originalOrientationRow, this._originalOrientationCol)
		},
		_createOrientation: function(a, b, c) {
			switch(a) {
				case 0:
					return this._getOrientationText(!0,
						b, !1);
				case 1:
					return this._getOrientationText(!1, b, !1);
				case 2:
					return this._getOrientationText(!0, c, !1);
				case 3:
					return this._getOrientationText(!1, c, !1)
			}
			return null
		},
		_flipOrientation: function(a) {
			for(var b = 0; 3 > b; b++) switch(a[b]) {
				case 0:
					a[b] = 1;
					break;
				case 1:
					a[b] = 0;
					break;
				case 2:
					a[b] = 3;
					break;
				case 3:
					a[b] = 2;
					break;
				case 4:
					a[b] = 5;
					break;
				case 5:
					a[b] = 4;
					break;
				case 6:
					return
			}
		},
		_getOrientationText: function(a, b, c) {
			for(var d = 0, e = "", a = 1 === (a ^ c), d = 0; 3 > d; d++) switch(b[d]) {
				case 0:
					e += a ? "L" : "R";
					break;
				case 1:
					e += a ? "R" : "L";
					break;
				case 2:
					e += a ? "H" : "F";
					break;
				case 3:
					e += a ? "F" : "H";
					break;
				case 4:
					e += a ? "A" : "P";
					break;
				case 5:
					e += a ? "P" : "A";
					break;
				case 6:
					return e
			}
			return e
		},
		_getOrientationNumbers: function(a, b) {
			for(var c = 0, c = 0; 3 > c; c++) switch(b.charAt(c)) {
				case "L":
					a[c] = 0;
					break;
				case "R":
					a[c] = 1;
					break;
				case "S":
				case "H":
					a[c] = 2;
					break;
				case "I":
				case "F":
					a[c] = 3;
					break;
				case "A":
					a[c] = 4;
					break;
				case "P":
					a[c] = 5;
					break;
				case "\x00":
					a[c] = 6;
					return
			}
		},
		setProjectionRadiographOrientation: function(a) {
			var b = a[0].toUpperCase(),
				a = a[1].toUpperCase(),
				c = Array(3),
				d = Array(3);
			this._getOrientationNumbers(c, b);
			this._getOrientationNumbers(d, a);
			b = this._getOrientationText(!1, c, !1);
			a = this._getOrientationText(!1, d, !1);
			this._orientCol = Array(3);
			this._orientRow = Array(3);
			this._originalOrientationCol = Array(3);
			this._originalOrientationRow = Array(3);
			this._getOrientationNumbers(this._originalOrientationRow, b);
			this._getOrientationNumbers(this._originalOrientationCol, a);
			this._applyTransformation()
		},
		_findOrientationLetter: function(a) {
			var b = new lt.Controls.Medical._d3DXVECTOR3(a[0], a[1],
					a[2]),
				a = new lt.Controls.Medical._d3DXVECTOR3(a[3], a[4], a[5]);
			this._createOrientationLetters(b, a)
		},
		_createOrientationLetters: function(a, b) {
			for(var c = Array(3), d = Array(3), e = 0 < a.x ? 1 : 0, f = 0 < a.y ? 4 : 5, g = 0 < a.z ? 3 : 2, h = Math.abs(a.x), i = Math.abs(a.y), j = Math.abs(a.z), k = 0, l = 0; 3 > l; l++) 0.01 < h && h > i && h > j ? (c[k++] = e, h = 0) : 0.01 < i && i > h && i > j ? (c[k++] = f, i = 0) : 0.01 < j && j > h && j > i ? (c[k++] = g, j = 0) : c[k++] = 6;
			e = 0 < b.x ? 1 : 0;
			f = 0 < b.y ? 4 : 5;
			g = 0 < b.z ? 3 : 2;
			h = Math.abs(b.x);
			i = Math.abs(b.y);
			j = Math.abs(b.z);
			for(l = k = 0; 3 > l; l++) 0.01 < h && h > i && h > j ? (d[k++] = e,
				h = 0) : 0.01 < i && i > h && i > j ? (d[k++] = f, i = 0) : 0.01 < j && j > h && j > i ? (d[k++] = g, j = 0) : d[k++] = 6;
			this._originalOrientationRow[0] = this._orientRow[0] = c[0];
			this._originalOrientationRow[1] = this._orientRow[1] = c[1];
			this._originalOrientationRow[2] = this._orientRow[2] = c[2];
			this._originalOrientationCol[0] = this._orientCol[0] = d[0];
			this._originalOrientationCol[1] = this._orientCol[1] = d[1];
			this._originalOrientationCol[2] = this._orientCol[2] = d[2]
		}
	};
	lt.Controls.Medical.FramePosition = function() {};
	lt.Controls.Medical.FramePosition.prototype = {
		orientation: null,
		position: null
	};
	lt.Controls.Medical.StackSynchronization = function() {};
	lt.Controls.Medical.StackSynchronization._angleBetweenPlane = function(a, b) {
		if(null == a || null == b) return 0;
		var c = [a[0], a[1], a[2]],
			d = [a[3], a[4], a[5]],
			e = [b[0], b[1], b[2]],
			f = [b[3], b[4], b[5]],
			g = Array(3),
			h = Array(3);
		g[0] = c[1] * d[2] - c[2] * d[1];
		g[1] = c[2] * d[0] - c[0] * d[2];
		g[2] = c[0] * d[1] - c[1] * d[0];
		h[0] = e[1] * f[2] - e[2] * f[1];
		h[1] = e[2] * f[0] - e[0] * f[2];
		h[2] = e[0] * f[1] - e[1] * f[0];
		c = g[0] * h[0] + g[1] * h[1] + g[2] * h[2];
		1 < c && (c = 1); - 1 > c && (c = -1);
		return Math.abs(180 *
			Math.acos(c) / Math.PI)
	};
	lt.Controls.Medical.StackSynchronization._isImagePositionFilled = function(a) {
		return null != a.position
	};
	lt.Controls.Medical.StackSynchronization.alignFrames = function(a, b, c, d) {
		if(null == a.get_imagePosition() || null == a.get_imageOrientation()) return -1;
		new lt.Controls.Medical._point3D(d.get_x() - b.get_x(), d.get_y() - b.get_y(), d.get_z() - b.get_z());
		var b = new lt.Controls.Medical._d3DXVECTOR3(parseFloat(a.get_imagePosition()[0].toString()) - b.get_x(), parseFloat(a.get_imagePosition()[1].toString()) -
				b.get_y(), parseFloat(a.get_imagePosition()[2].toString()) + -b.get_z()),
			e = 0,
			f, g, h, i = 0,
			j = -1;
		if(null == a.get_imagePosition()) throw Error("The frame you want to align to doesn't have a valid position value");
		for(var k = c.get_frames().get_count(), e = 0; e < k; e++)
			if(h = c.get_frames().get_item(e), null != h.get_imagePosition() && null != h.get_imageOrientation() && !(30 < lt.Controls.Medical.StackSynchronization._angleBetweenPlane(a.get_imageOrientation(), h.get_imageOrientation())) && (f = h.get_imagePosition()[0] - d.get_x() - b.x,
					g = h.get_imagePosition()[1] - d.get_y() - b.y, h = h.get_imagePosition()[2] - d.get_z() - b.z, f = f * f + g * g + h * h, f < i || -1 === j)) j = e, i = f;
		return j
	};
	lt.Controls.Medical.StackSynchronization.findBestAlignment = function(a, b) {
		var c = new lt.Controls.Medical._d3DXVECTOR3(a.position[0], a.position[1], a.position[2]),
			d = 0,
			e, f, g, h = 0,
			i = -1;
		if(!lt.Controls.Medical.StackSynchronization._isImagePositionFilled(a)) throw Error("The frame you want to align to doesn't have a valid position value");
		for(var j = b.length, d = 0; d < j; d++)
			if(lt.Controls.Medical.StackSynchronization._isImagePositionFilled(b[d]) &&
				!(30 < lt.Controls.Medical.StackSynchronization._angleBetweenPlane(a.orientation, b[d].orientation)) && (e = b[d].position[0] - c.x, f = b[d].position[1] - c.y, g = b[d].position[2] - c.z, e = e * e + f * f + g * g, e < h || -1 === i)) i = d, h = e;
		return i
	};
	lt.Controls.Medical._d3DXPLANE = function() {};
	lt.Controls.Medical._d3DXPLANE.prototype = {
		a: 0,
		b: 0,
		c: 0,
		d: 0
	};
	lt.Controls.Medical._d3DXVECTOR4 = function(a, b, c, d) {
		this.x = a;
		this.y = b;
		this.z = c;
		this.w = d
	};
	lt.Controls.Medical._d3DXVECTOR4.prototype = {
		x: 0,
		y: 0,
		z: 0,
		w: 0
	};
	lt.Controls.Medical._d3DXMATRIX = function() {
		this.m =
			Array(4);
		for(var a = 0; 4 > a; a++) this.m[a] = Array(4)
	};
	lt.Controls.Medical._d3DXMATRIX.prototype = {
		m: null,
		get_m_11: function() {
			return this.m[0][0]
		},
		set_m_11: function(a) {
			return this.m[0][0] = a
		},
		get_m_12: function() {
			return this.m[0][1]
		},
		set_m_12: function(a) {
			return this.m[0][1] = a
		},
		get_m_13: function() {
			return this.m[0][2]
		},
		set_m_13: function(a) {
			return this.m[0][2] = a
		},
		get_m_14: function() {
			return this.m[0][3]
		},
		set_m_14: function(a) {
			return this.m[0][3] = a
		},
		get_m_21: function() {
			return this.m[1][0]
		},
		set_m_21: function(a) {
			return this.m[1][0] =
				a
		},
		get_m_22: function() {
			return this.m[1][1]
		},
		set_m_22: function(a) {
			return this.m[1][1] = a
		},
		get_m_23: function() {
			return this.m[1][2]
		},
		set_m_23: function(a) {
			return this.m[1][2] = a
		},
		get_m_24: function() {
			return this.m[1][3]
		},
		set_m_24: function(a) {
			return this.m[1][3] = a
		},
		get_m_31: function() {
			return this.m[2][0]
		},
		set_m_31: function(a) {
			return this.m[2][0] = a
		},
		get_m_32: function() {
			return this.m[2][1]
		},
		set_m_32: function(a) {
			return this.m[2][1] = a
		},
		get_m_33: function() {
			return this.m[2][2]
		},
		set_m_33: function(a) {
			return this.m[2][2] =
				a
		},
		get_m_34: function() {
			return this.m[2][3]
		},
		set_m_34: function(a) {
			return this.m[2][3] = a
		},
		get_m_41: function() {
			return this.m[3][0]
		},
		set_m_41: function(a) {
			return this.m[3][0] = a
		},
		get_m_42: function() {
			return this.m[3][1]
		},
		set_m_42: function(a) {
			return this.m[3][1] = a
		},
		get_m_43: function() {
			return this.m[3][2]
		},
		set_m_43: function(a) {
			return this.m[3][2] = a
		},
		get_m_44: function() {
			return this.m[3][3]
		},
		set_m_44: function(a) {
			return this.m[3][3] = a
		}
	};
	lt.Controls.Medical._d3DXVECTOR2 = function(a, b) {
		this.x = a;
		this.y = b
	};
	lt.Controls.Medical._d3DXVECTOR2.prototype = {
		x: 0,
		y: 0,
		clone: function() {
			return new lt.Controls.Medical._d3DXVECTOR2(this.x, this.y)
		}
	};
	lt.Controls.Medical._MVSINGLEREFERENCELINE = function() {
		this.rowDirLocal = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		this.colDirLocal = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		this.normDirLocal = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		this.rowDirReal = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		this.colDirReal = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		this.normDirReal = new lt.Controls.Medical._d3DXVECTOR3(0,
			0, 0);
		this.dxImagePosition = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		this.realImagePosition = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		this.worldDX_Hieght = this.worldDX_Width = 0;
		this._viewMatTrans = new lt.Controls.Medical._d3DXMATRIX;
		this._projMatTrans = new lt.Controls.Medical._d3DXMATRIX;
		this._worldMatTrans = new lt.Controls.Medical._d3DXMATRIX;
		this.incrementDirection = new lt.Controls.Medical._d3DXVECTOR2(0, 0)
	};
	lt.Controls.Medical._MVSINGLEREFERENCELINE.prototype = {
		rowDirLocal: null,
		colDirLocal: null,
		normDirLocal: null,
		rowDirReal: null,
		colDirReal: null,
		normDirReal: null,
		dxImagePosition: null,
		realImagePosition: null,
		worldDX_Width: 0,
		worldDX_Hieght: 0,
		_viewMatTrans: null,
		_projMatTrans: null,
		_worldMatTrans: null,
		incrementDirection: null
	};
	lt.Controls.Medical._MVREFLINEPARAM = function() {
		this.diffParam = new lt.Controls.Medical._MVSINGLEREFERENCELINE;
		this._rotMatScan2Stand = new lt.Controls.Medical._d3DXMATRIX;
		this._dxCoord2RealWorldCoor = new lt.Controls.Medical._d3DXMATRIX;
		this._realWorldCoor2DXCoord = new lt.Controls.Medical._d3DXMATRIX
	};
	lt.Controls.Medical._MVREFLINEPARAM.prototype = {
		imageWidth: 0,
		imageHight: 0,
		screenShiftY: 0,
		screenShiftX: 0,
		_rotMatScan2Stand: null,
		_dxCoord2RealWorldCoor: null,
		_realWorldCoor2DXCoord: null,
		jf: 0,
		diffParam: null,
		m_uInHight: 0,
		m_uInWidth: 0,
		m_fWidthRatio: 0,
		m_fHightRatio: 0,
		m_fDepthRatio: 0,
		vhSliceThickness: 0,
		orientRow: null,
		orientCol: null,
		orientationType: 0
	};
	lt.Controls.Medical.LeadLine = function(a, b, c, d) {
		this.point1 = lt.LeadPointD.create(a, b);
		this.point2 = lt.LeadPointD.create(c, d)
	};
	lt.Controls.Medical.LeadLine.prototype = {
		point1: null,
		point2: null
	};
	lt.Controls.Medical.ReferenceLine = function() {};
	lt.Controls.Medical.ReferenceLine._getLineEquationUnmodified = function(a, b, c, d) {
		a = c - a ? (d - b) / (c - a) : 1E8;
		1E5 < a ? a = 1E8 : -1E4 > a && (a = -1E8);
		lt.Controls.Medical.ReferenceLine._outM = a;
		lt.Controls.Medical.ReferenceLine._outC = 1E4 < a || -1E4 > a ? c : d - a * c
	};
	lt.Controls.Medical.ReferenceLine._getIntersectionPointWithBoundary = function(a, b, c, d, e, f, g, h) {
		var i = Math.abs(d - b) > Math.abs(1E3 * (a - c));
		if(i) {
			var j;
			j = a;
			a = b;
			b = j;
			j = c;
			c = d;
			d = j;
			j = e;
			e = f;
			f = j;
			j = g;
			g = h;
			h = j
		}
		lt.Controls.Medical.ReferenceLine._getLineEquationUnmodified(a,
			b, c, d);
		a = lt.Controls.Medical.ReferenceLine._outM;
		b = lt.Controls.Medical.ReferenceLine._outC;
		if(e === g) {
			g = a * e + b;
			if(g < f || g > h) return !1;
			lt.Controls.Medical.ReferenceLine._intersectionX = e;
			lt.Controls.Medical.ReferenceLine._intersectionY = g
		} else {
			f = (h - b) / a;
			if(f < e || f > g) return !1;
			lt.Controls.Medical.ReferenceLine._intersectionX = f;
			lt.Controls.Medical.ReferenceLine._intersectionY = h
		}
		i && (j = lt.Controls.Medical.ReferenceLine._intersectionX, lt.Controls.Medical.ReferenceLine._intersectionX = lt.Controls.Medical.ReferenceLine._intersectionY,
			lt.Controls.Medical.ReferenceLine._intersectionY = j);
		return !0
	};
	lt.Controls.Medical.ReferenceLine.rotate = function(a, b, c, d) {
		a = new lt.Controls.Medical.LeadLine(a.point1.get_x(), a.point1.get_y(), a.point2.get_x(), a.point2.get_y());
		0 > b && (b += 360);
		for(var e = b / 90, f, g, b = 0; b < e; b++) g = a.point1.get_x(), f = d - a.point1.get_y(), a.point1.set_x(f), a.point1.set_y(g), g = a.point2.get_x(), f = d - a.point2.get_y(), a.point2.set_x(f), a.point2.set_y(g), f = d, d = c, c = f;
		return a
	};
	lt.Controls.Medical.ReferenceLine.flip = function(a, b, c) {
		a =
			new lt.Controls.Medical.LeadLine(a.point1.get_x(), a.point1.get_y(), a.point2.get_x(), a.point2.get_y());
		a.point1.set_y(c - a.point1.get_y());
		a.point2.set_y(c - a.point2.get_y());
		return a
	};
	lt.Controls.Medical.ReferenceLine.reverse = function(a, b) {
		var c = new lt.Controls.Medical.LeadLine(a.point1.get_x(), a.point1.get_y(), a.point2.get_x(), a.point2.get_y());
		c.point1.set_x(b - c.point1.get_x());
		c.point2.set_x(b - c.point2.get_x());
		return c
	};
	lt.Controls.Medical.ReferenceLine.draw = function(a, b, c, d, e) {
		if(null == a || b.get_isEmpty() ||
			c.get_isEmpty()) return !1;
		var f = d.point1,
			d = d.point2,
			g = Math.max(1 + b.get_left(), c.get_left()),
			h = Math.max(1, c.get_top()),
			i = Math.min(b.get_right() - 2, c.get_right()),
			j = Math.min(b.get_bottom() - 2, c.get_bottom()),
			k = Math.max(21, c.get_top()),
			l = Math.min(b.get_bottom() - 2 - 18, c.get_bottom()),
			b = Math.min(b.get_right() - 2 - 36, c.get_right()),
			c = !1,
			m = 0,
			n = !1,
			o = 0,
			p = Array(2);
		p[0] = new lt.Controls.Medical._d3DXVECTOR2(0, 0);
		p[1] = new lt.Controls.Medical._d3DXVECTOR2(0, 0);
		var t = "center",
			q = "middle";
		if(c = lt.Controls.Medical.ReferenceLine._getIntersectionPointWithBoundary(f.get_x(),
				f.get_y(), d.get_x(), d.get_y(), b, h, b, j)) {
			if(b <= g) return !1;
			n = !0;
			o = m;
			p[m].x = parseInt(lt.Controls.Medical.ReferenceLine._intersectionX + 0.5);
			p[m].y = parseInt(lt.Controls.Medical.ReferenceLine._intersectionY + 0.5);
			t = "left";
			q = "middle";
			m++
		}
		n && (k = h);
		if(c = lt.Controls.Medical.ReferenceLine._getIntersectionPointWithBoundary(f.get_x(), f.get_y(), d.get_x(), d.get_y(), g, k, i, k)) {
			if(k >= j) return !1;
			p[m].x = parseInt(lt.Controls.Medical.ReferenceLine._intersectionX + 0.5);
			p[m].y = parseInt(lt.Controls.Medical.ReferenceLine._intersectionY +
				0.5);
			n || (n = !0, o = m, t = "center", q = "bottom");
			m++
		}
		if(2 > m && (n && (l = j), c = lt.Controls.Medical.ReferenceLine._getIntersectionPointWithBoundary(f.get_x(), f.get_y(), d.get_x(), d.get_y(), g, l, i, l))) {
			if(l <= h) return !1;
			p[m].x = parseInt(lt.Controls.Medical.ReferenceLine._intersectionX + 0.5);
			p[m].y = parseInt(lt.Controls.Medical.ReferenceLine._intersectionY + 0.5);
			n || (o = m, t = "center", q = "top");
			m++
		}
		if(2 > m && (c = lt.Controls.Medical.ReferenceLine._getIntersectionPointWithBoundary(f.get_x(), f.get_y(), d.get_x(), d.get_y(), g, h, g, j))) p[m].x =
			parseInt(lt.Controls.Medical.ReferenceLine._intersectionX + 0.5), p[m].y = parseInt(lt.Controls.Medical.ReferenceLine._intersectionY + 0.5), m++;
		2 === m && (a.moveTo(p[0].x, p[0].y), a.lineTo(p[1].x, p[1].y), a.textAlign = t, a.textBaseline = q, a.fillText(" " + e + " ", p[o].x, p[o].y));
		return !0
	};
	lt.Controls.Medical.ReferenceLine.find = function(a, b, c, d, e, f, g, h, i, j) {
		if(null == a || null == b || null == f || null == g) return new lt.Controls.Medical.LeadLine(0, 0, 1, 1);
		var k = new lt.Controls.Medical._d3DXVECTOR3(a[0], a[1], a[2]),
			l = new lt.Controls.Medical._d3DXVECTOR3(a[3],
				a[4], a[5]),
			a = new lt.Controls.Medical._MVREFLINEPARAM,
			b = new lt.Controls.Medical._d3DXVECTOR3(b[0], b[1], b[2]),
			g = new lt.Controls.Medical._d3DXVECTOR3(g[0], g[1], g[2]);
		lt.Controls.Medical.ReferenceLine._mvMapLocalizerImage(b, k, l, c.get_x(), c.get_y(), d, e, 1, a);
		k = new lt.Controls.Medical._d3DXVECTOR3(f[0], f[1], f[2]);
		l = new lt.Controls.Medical._d3DXVECTOR3(f[3], f[4], f[5]);
		c = new lt.Controls.Medical._MVREFLINEPARAM;
		lt.Controls.Medical.ReferenceLine._mvMapLocalizerImage(g, k, l, h.get_x(), h.get_y(), i, j, 1, c);
		h = new lt.Controls.Medical._d3DXVECTOR2(0,
			0);
		k = new lt.Controls.Medical._d3DXVECTOR2(0, 0);
		lt.Controls.Medical.ReferenceLine._mvFindReferenceObj1OnObj2(a, c, h, k);
		c = a = 0;
		j < i ? c = (512 - 512 * j / i) / 2 : j > i && (a = (512 - 512 * i / j) / 2);
		h.x -= a;
		h.y -= c;
		k.x -= a;
		k.y -= c;
		i = Math.max(i, j) / 512;
		h.x *= i;
		h.y *= i;
		k.x *= i;
		k.y *= i;
		return new lt.Controls.Medical.LeadLine(h.x, h.y, k.x, k.y)
	};
	lt.Controls.Medical.ReferenceLine._mV_D3DXVec4Cross = function(a, b, c, d) {
		if(null == b || null == c || null == d || null == a) return null;
		a.x = b.y * (c.z * d.w - d.z * c.w) - b.z * (c.y * d.w - d.y * c.w) + b.w * (c.y * d.z - c.z * d.y);
		a.y = -(b.x *
			(c.z * d.w - d.z * c.w) - b.z * (c.x * d.w - d.x * c.w) + b.w * (c.x * d.z - d.x * c.z));
		a.z = b.x * (c.y * d.w - d.y * c.w) - b.y * (c.x * d.w - d.x * c.w) + b.w * (c.x * d.y - d.x * c.y);
		a.w = -(b.x * (c.y * d.z - d.y * c.z) - b.y * (c.x * d.z - d.x * c.z) + b.z * (c.x * d.y - d.x * c.y));
		return a
	};
	lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Cross = function(a, b, c) {
		if(null == b || null == c || null == a) return null;
		a.x = b.y * c.z - b.z * c.y;
		a.y = b.z * c.x - b.x * c.z;
		a.z = b.x * c.y - b.y * c.x;
		return a
	};
	lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformNormal = function(a, b, c) {
		if(null == c || null == b || null == a) return null;
		a.x = c.m[0][0] * b.x + c.m[1][0] * b.y + c.m[2][0] * b.z;
		a.y = c.m[0][1] * b.x + c.m[1][1] * b.y + c.m[2][1] * b.z;
		a.z = c.m[0][2] * b.x + c.m[1][2] * b.y + c.m[2][2] * b.z;
		return a
	};
	lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Dot = function(a, b) {
		return null == a || null == b ? 0 : a.x * b.x + a.y * b.y + a.z * b.z
	};
	lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformCoord = function(a, b, c) {
		if(null == c || null == b || null == a) return null;
		var d;
		(d = c.m[0][3] * b.x + c.m[1][3] * b.y + c.m[2][3] * b.z + c.m[3][3]) ? (a.x = (c.m[0][0] * b.x + c.m[1][0] * b.y + c.m[2][0] * b.z + c.m[3][0]) /
			d, a.y = (c.m[0][1] * b.x + c.m[1][1] * b.y + c.m[2][1] * b.z + c.m[3][1]) / d, a.z = (c.m[0][2] * b.x + c.m[1][2] * b.y + c.m[2][2] * b.z + c.m[3][2]) / d) : (a.x = 0, a.y = 0, a.z = 0);
		return a
	};
	lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Normalize = function(a, b) {
		if(null == a || null == b) return null;
		var c = Math.sqrt(b.x * b.x + b.y * b.y + b.z * b.z);
		if(1.0E-8 > c) return a.x = 0, a.y = 0, a.z = 0, a;
		a.x = b.x / c;
		a.y = b.y / c;
		a.z = b.z / c;
		return a
	};
	lt.Controls.Medical.ReferenceLine._mV_D3DXPlaneFromPointNormal = function(a, b, c) {
		if(null == c || null == b || null == a) return null;
		a.a = c.x;
		a.b = c.y;
		a.c = c.z;
		a.d = -lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Dot(b, c);
		return a
	};
	lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Length = function(a) {
		return null == a ? 0 : Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z)
	};
	lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixfDeterminant = function(a) {
		if(null == a) return 0;
		var b = new lt.Controls.Medical._d3DXVECTOR4(0, 0, 0, 0),
			c = new lt.Controls.Medical._d3DXVECTOR4(0, 0, 0, 0),
			d = new lt.Controls.Medical._d3DXVECTOR4(0, 0, 0, 0),
			e = new lt.Controls.Medical._d3DXVECTOR4(0, 0, 0, 0),
			f = 0;
		c.x =
			a.m[0][0];
		c.y = a.m[1][0];
		c.z = a.m[2][0];
		c.w = a.m[3][0];
		d.x = a.m[0][1];
		d.y = a.m[1][1];
		d.z = a.m[2][1];
		d.w = a.m[3][1];
		e.x = a.m[0][2];
		e.y = a.m[1][2];
		e.z = a.m[2][2];
		e.w = a.m[3][2];
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec4Cross(b, c, d, e);
		return f = -(a.m[0][3] * b.x + a.m[1][3] * b.y + a.m[2][3] * b.z + a.m[3][3] * b.w)
	};
	lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixInverse = function(a, b, c) {
		if(null == c || null == a) return null;
		var d, b = new lt.Controls.Medical._d3DXVECTOR4(0, 0, 0, 0),
			e = Array(3);
		for(d = 0; 3 > d; d++) e[d] = new lt.Controls.Medical._d3DXVECTOR4(0,
			0, 0, 0);
		var f = 0,
			g, h, i;
		g = lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixfDeterminant(c);
		if(!g) return null;
		lt.Controls.Medical.ReferenceLine._deter111 = g;
		for(h = 0; 4 > h; h++) {
			for(i = 0; 4 > i; i++) i !== h && (d = i, i > h && (d -= 1), e[d].x = c.m[i][0], e[d].y = c.m[i][1], e[d].z = c.m[i][2], e[d].w = c.m[i][3]);
			lt.Controls.Medical.ReferenceLine._mV_D3DXVec4Cross(b, e[0], e[1], e[2]);
			for(i = 0; 4 > i; i++) {
				switch(i) {
					case 0:
						f = b.x;
						break;
					case 1:
						f = b.y;
						break;
					case 2:
						f = b.z;
						break;
					case 3:
						f = b.w
				}
				a.m[i][h] = Math.pow(-1, h) * f / g
			}
		}
		return a
	};
	lt.Controls.Medical.ReferenceLine._mvFindReferenceObj1OnObj2 =
		function(a, b, c, d) {
			var e = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0),
				f = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
			lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformCoord(e, a.diffParam.realImagePosition, b._realWorldCoor2DXCoord);
			lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformNormal(f, a.diffParam.normDirReal, b._realWorldCoor2DXCoord);
			a = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
			lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Normalize(f, f);
			lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Normalize(b.diffParam.normDirLocal,
				b.diffParam.normDirLocal);
			lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Cross(a, f, b.diffParam.normDirLocal);
			if(1.0E-6 > lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Length(a)) return new lt.Controls.Medical._d3DXVECTOR2(1E5, 1E6), new lt.Controls.Medical._d3DXVECTOR2(1E5, 1000010), !1;
			lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Normalize(a, a);
			var g = new lt.Controls.Medical._d3DXPLANE,
				h = new lt.Controls.Medical._d3DXPLANE;
			lt.Controls.Medical.ReferenceLine._mV_D3DXPlaneFromPointNormal(g, e, f);
			lt.Controls.Medical.ReferenceLine._mV_D3DXPlaneFromPointNormal(h,
				b.diffParam.dxImagePosition, b.diffParam.normDirLocal);
			e = new lt.Controls.Medical._d3DXMATRIX;
			e.set_m_11(f.x);
			e.set_m_12(f.y);
			e.set_m_13(f.z);
			e.set_m_14(0);
			e.set_m_21(b.diffParam.normDirLocal.x);
			e.set_m_22(b.diffParam.normDirLocal.y);
			e.set_m_23(b.diffParam.normDirLocal.z);
			e.set_m_24(0);
			e.set_m_31(a.x);
			e.set_m_32(a.y);
			e.set_m_33(a.z);
			e.set_m_34(0);
			e.set_m_41(0);
			e.set_m_42(0);
			e.set_m_43(0);
			e.set_m_44(1);
			var i = new lt.Controls.Medical._d3DXMATRIX;
			if(null == lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixInverse(i,
					0, e) || !lt.Controls.Medical.ReferenceLine._deter111) return !1;
			f = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
			e = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
			f.x = -(i.get_m_11() * g.d + i.get_m_12() * h.d);
			f.y = -(i.get_m_21() * g.d + i.get_m_22() * h.d);
			f.z = -(i.get_m_31() * g.d + i.get_m_32() * h.d);
			e = lt.Controls.Medical.ReferenceLine._addVectors3(f, a);
			a = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
			g = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
			lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformCoord(a, f, b.diffParam._worldMatTrans);
			lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformCoord(g, e, b.diffParam._worldMatTrans);
			var i = b.diffParam._viewMatTrans,
				j = b.diffParam._projMatTrans,
				b = 2 / 512,
				h = 2 / 512,
				f = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0),
				e = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
			f.x = a.x * j.get_m_11() * i.get_m_11();
			f.y = a.y * j.get_m_22() * i.get_m_22();
			f.z = 0;
			e.x = g.x * j.get_m_11() * i.get_m_11();
			e.y = g.y * j.get_m_22() * i.get_m_22();
			e.z = 0;
			a = new lt.Controls.Medical._d3DXVECTOR2(0, 0);
			g = new lt.Controls.Medical._d3DXVECTOR2(0, 0);
			a.x =
				(1 + f.x) / b;
			a.y = (1 - f.y) / h;
			g.x = (1 + e.x) / b;
			g.y = (1 - e.y) / h;
			b = lt.Controls.Medical.ReferenceLine._subtractVectors2(g, a);
			if(h = Math.sqrt(b.x * b.x + b.y * b.y)) b.x /= h, b.y /= h;
			b = lt.Controls.Medical.ReferenceLine._multiplyVectors2ByNumber(b, 1500);
			a = lt.Controls.Medical.ReferenceLine._subtractVectors2(a, b);
			g = lt.Controls.Medical.ReferenceLine._addVectors2(g, b);
			c.x = a.x;
			c.y = a.y;
			d.x = g.x;
			d.y = g.y;
			return !0
		};
	lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixIdentity = function(a) {
		if(null == a) return null;
		a.set_m_11(1);
		a.set_m_12(0);
		a.set_m_13(0);
		a.set_m_14(0);
		a.set_m_21(0);
		a.set_m_22(1);
		a.set_m_23(0);
		a.set_m_24(0);
		a.set_m_31(0);
		a.set_m_32(0);
		a.set_m_33(1);
		a.set_m_34(0);
		a.set_m_41(0);
		a.set_m_42(0);
		a.set_m_43(0);
		a.set_m_44(1);
		return a
	};
	lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixRotationAxis = function(a, b, c) {
		if(null == b || null == a) return null;
		var d = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Normalize(d, b);
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixIdentity(a);
		a.set_m_11((1 - Math.cos(c)) *
			d.x * d.x + Math.cos(c));
		a.set_m_12((1 - Math.cos(c)) * d.y * d.x + Math.sin(c) * d.z);
		a.set_m_13((1 - Math.cos(c)) * d.z * d.x - Math.sin(c) * d.y);
		a.set_m_21((1 - Math.cos(c)) * d.x * d.y - Math.sin(c) * d.z);
		a.set_m_22((1 - Math.cos(c)) * d.y * d.y + Math.cos(c));
		a.set_m_23((1 - Math.cos(c)) * d.z * d.y + Math.sin(c) * d.x);
		a.set_m_31((1 - Math.cos(c)) * d.x * d.z + Math.sin(c) * d.y);
		a.set_m_32((1 - Math.cos(c)) * d.y * d.z - Math.sin(c) * d.x);
		a.set_m_33((1 - Math.cos(c)) * d.z * d.z + Math.cos(c));
		return a
	};
	lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixLookAtLH = function(a,
		b, c, d) {
		if(null == a || null == b || null == c || null == d) return null;
		var e = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0),
			f = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0),
			g = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0),
			h = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0),
			i = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0),
			j = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		j.x = c.x - b.x;
		j.y = c.y - b.y;
		j.z = c.z - b.z;
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Normalize(i, j);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Cross(e, d, i);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Cross(g,
			i, e);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Normalize(f, e);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Normalize(h, g);
		a.m[0][0] = f.x;
		a.m[1][0] = f.y;
		a.m[2][0] = f.z;
		a.m[3][0] = -lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Dot(f, b);
		a.m[0][1] = h.x;
		a.m[1][1] = h.y;
		a.m[2][1] = h.z;
		a.m[3][1] = -lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Dot(h, b);
		a.m[0][2] = i.x;
		a.m[1][2] = i.y;
		a.m[2][2] = i.z;
		a.m[3][2] = -lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Dot(i, b);
		a.m[0][3] = 0;
		a.m[1][3] = 0;
		a.m[2][3] = 0;
		a.m[3][3] = 1;
		return a
	};
	lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixOrthoLH = function(a, b, c, d, e) {
		if(null == a) return null;
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixIdentity(a);
		a.m[0][0] = 2 / b;
		a.m[1][1] = 2 / c;
		a.m[2][2] = 1 / (e - d);
		a.m[3][2] = d / (d - e);
		return a
	};
	lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixMultiply = function(a, b, c) {
		if(null == b || null == c || null == a) return null;
		var d = new lt.Controls.Medical._d3DXMATRIX,
			e, f;
		for(e = 0; 4 > e; e++)
			for(f = 0; 4 > f; f++) d.m[e][f] = b.m[e][0] * c.m[0][f] + b.m[e][1] * c.m[1][f] + b.m[e][2] * c.m[2][f] + b.m[e][3] *
				c.m[3][f];
		for(e = 0; 4 > e; e++)
			for(f = 0; 4 > f; f++) a.m[e][f] = d.m[e][f];
		return a
	};
	lt.Controls.Medical.ReferenceLine._mvMapLocalizerImage = function(a, b, c, d, e, f, g, h, i) {
		if(null == i) return !1;
		i.screenShiftX = 0;
		i.screenShiftY = 0;
		i.imageWidth = f;
		i.imageHight = g;
		if(g < f) {
			i.screenShiftY = (f - g) / 2;
			var j = lt.Controls.Medical.ReferenceLine._multiplyVectors3ByNumber(c, (f - g) * e / 2),
				a = lt.Controls.Medical.ReferenceLine._subtractVectors3(a, j),
				g = f
		} else g > f && (i.screenShiftX = (g - f) / 2, j = lt.Controls.Medical.ReferenceLine._multiplyVectors3ByNumber(b,
			(g - f) * d / 2), a = lt.Controls.Medical.ReferenceLine._subtractVectors3(a, j), f = g);
		var j = i.diffParam,
			k = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Cross(k, c, b);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Normalize(b, b);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Normalize(c, c);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Normalize(k, k);
		var l = new lt.Controls.Medical._d3DXVECTOR3(-1, 0, 0),
			m = new lt.Controls.Medical._d3DXVECTOR3(0, -1, 0),
			n = new lt.Controls.Medical._d3DXVECTOR3(0,
				0, -1),
			o = lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Dot(n, k);
		1 < o && (o = 1); - 1 > o && (o = -1);
		o = Math.acos(o);
		0.001 > Math.abs(o) && (o = 0);
		var p = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Cross(p, k, n);
		1.0E-4 > lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Length(p) && (p = m);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Normalize(p, p);
		m = new lt.Controls.Medical._d3DXMATRIX;
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixRotationAxis(m, p, o);
		var o = new lt.Controls.Medical._d3DXVECTOR3(0,
				0, 0),
			p = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0),
			t = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformNormal(o, b, m);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformNormal(p, c, m);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformNormal(t, k, m);
		b = lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Dot(l, o);
		1 < b && (b = 1); - 1 > b && (b = -1);
		b = Math.acos(b);
		0.001 > Math.abs(b) && (b = 0);
		c = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Cross(c,
			o, l);
		1.0E-4 > lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Length(c) && (c = n);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Normalize(c, c);
		l = new lt.Controls.Medical._d3DXMATRIX;
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixRotationAxis(l, c, b);
		n = new lt.Controls.Medical._d3DXMATRIX;
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixMultiply(n, m, l);
		l = new lt.Controls.Medical._d3DXMATRIX;
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixInverse(l, 0, n);
		i._rotMatScan2Stand = l;
		n = Math.max(f, g);
		l = f / (2 * n);
		n = g / (2 * n);
		j.dxImagePosition = new lt.Controls.Medical._d3DXVECTOR3(l, n, 0);
		j.rowDirLocal = new lt.Controls.Medical._d3DXVECTOR3(-1, 0, 0);
		j.colDirLocal = new lt.Controls.Medical._d3DXVECTOR3(0, -1, 0);
		j.normDirLocal = new lt.Controls.Medical._d3DXVECTOR3(0, 0, -1);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformNormal(j.rowDirReal, j.rowDirLocal, i._rotMatScan2Stand);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformNormal(j.colDirReal, j.colDirLocal, i._rotMatScan2Stand);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformNormal(j.normDirReal,
			j.normDirLocal, i._rotMatScan2Stand);
		m = 0;
		m = Math.max(l, n);
		b = new lt.Controls.Medical._d3DXMATRIX;
		c = new lt.Controls.Medical._d3DXMATRIX;
		k = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 100);
		o = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		p = new lt.Controls.Medical._d3DXVECTOR3(0, 1, 0);
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixLookAtLH(b, k, o, p);
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixOrthoLH(c, 2 * m / h, 2 * m / h, 1, 200);
		j._viewMatTrans = b;
		j._projMatTrans = c;
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixIdentity(j._worldMatTrans);
		j.worldDX_Width = 2 * l;
		j.worldDX_Hieght = 2 * n;
		d *= f;
		g *= e;
		e = new lt.Controls.Medical._d3DXMATRIX;
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixIdentity(e);
		e.set_m_11(d / (2 * l));
		e.set_m_22(g / (2 * n));
		e.set_m_33(e.get_m_22());
		f = j.dxImagePosition;
		g = new lt.Controls.Medical._d3DXMATRIX;
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixIdentity(g);
		g.set_m_33(-1);
		h = new lt.Controls.Medical._d3DXMATRIX;
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixMultiply(h, e, g);
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixMultiply(h,
			h, i._rotMatScan2Stand);
		d = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformCoord(d, f, h);
		f = new lt.Controls.Medical._d3DXMATRIX;
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixIdentity(f);
		f.set_m_41(a.x - d.x);
		f.set_m_42(a.y - d.y);
		f.set_m_43(a.z - d.z);
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixMultiply(i._dxCoord2RealWorldCoor, e, g);
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixMultiply(i._dxCoord2RealWorldCoor, i._dxCoord2RealWorldCoor, i._rotMatScan2Stand);
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixMultiply(i._dxCoord2RealWorldCoor, i._dxCoord2RealWorldCoor, f);
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixInverse(i._realWorldCoor2DXCoord, 0, i._dxCoord2RealWorldCoor);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformCoord(j.realImagePosition, j.dxImagePosition, i._dxCoord2RealWorldCoor);
		return !0
	};
	lt.Controls.Medical.ReferenceLine._addVectors3 = function(a, b) {
		var c = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		c.x = a.x + b.x;
		c.y = a.y + b.y;
		c.z = a.z + b.z;
		return c
	};
	lt.Controls.Medical.ReferenceLine._subtractVectors3 = function(a, b) {
		var c = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		c.x = a.x - b.x;
		c.y = a.y - b.y;
		c.z = a.z - b.z;
		return c
	};
	lt.Controls.Medical.ReferenceLine._multiplyVectors3 = function(a, b) {
		var c = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		c.x = a.x * b.x;
		c.y = a.y * b.y;
		c.z = a.z * b.z;
		return c
	};
	lt.Controls.Medical.ReferenceLine._multiplyVectors3ByNumber = function(a, b) {
		var c = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		c.x = a.x * b;
		c.y = a.y * b;
		c.z = a.z * b;
		return c
	};
	lt.Controls.Medical.ReferenceLine._addVectors2 =
		function(a, b) {
			var c = new lt.Controls.Medical._d3DXVECTOR2(0, 0);
			c.x = a.x + b.x;
			c.y = a.y + b.y;
			return c
		};
	lt.Controls.Medical.ReferenceLine._subtractVectors2 = function(a, b) {
		var c = new lt.Controls.Medical._d3DXVECTOR2(0, 0);
		c.x = a.x - b.x;
		c.y = a.y - b.y;
		return c
	};
	lt.Controls.Medical.ReferenceLine._multiplyVectors2 = function(a, b) {
		var c = new lt.Controls.Medical._d3DXVECTOR2(0, 0);
		c.x = a.x * b.x;
		c.y = a.y * b.y;
		return c
	};
	lt.Controls.Medical.ReferenceLine._multiplyVectors2ByNumber = function(a, b) {
		var c = new lt.Controls.Medical._d3DXVECTOR2(0,
			0);
		c.x = a.x * b;
		c.y = a.y * b;
		return c
	};
	lt.Controls.Medical.ReferenceLine._foo = function(a, b, c, d, e) {
		var d = 1,
			b = lt.Controls.Medical.ReferenceLine._subtractVectors3(c, b),
			f = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Normalize(f, b);
		b = new lt.Controls.Medical._d3DXVECTOR3(a[0], a[1], a[2]);
		a = new lt.Controls.Medical._d3DXVECTOR3(a[3], a[4], a[5]);
		c = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Cross(c, a, b);
		var g = new lt.Controls.Medical._d3DXVECTOR3(0,
			0, 0);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Cross(g, a, b);
		f = lt.Controls.Medical.ReferenceLine._subtractVectors3(f, g);
		1 < lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Length(f) && (d = -1);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Normalize(b, b);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Normalize(a, a);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Normalize(c, c);
		var f = new lt.Controls.Medical._d3DXVECTOR3(-1, 0, 0),
			h = new lt.Controls.Medical._d3DXVECTOR3(0, -1, 0),
			g = new lt.Controls.Medical._d3DXVECTOR3(0,
				0, -1),
			i = lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Dot(g, c);
		1 < i && (i = 1); - 1 > i && (i = -1);
		i = Math.acos(i);
		0.001 > Math.abs(i) && (i = 0);
		var j = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Cross(j, c, g);
		1.0E-4 > lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Length(j) && (j = h);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Normalize(j, j);
		h = new lt.Controls.Medical._d3DXMATRIX;
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixRotationAxis(h, j, i);
		var i = new lt.Controls.Medical._d3DXVECTOR3(0,
				0, 0),
			j = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0),
			k = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformNormal(i, b, h);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformNormal(j, a, h);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformNormal(k, c, h);
		b = lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Dot(f, i);
		1 < b && (b = 1); - 1 > b && (b = -1);
		b = Math.acos(b);
		0.001 > Math.abs(b) && (b = 0);
		a = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Cross(a,
			i, f);
		1.0E-4 > lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Length(a) && (a = g);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Normalize(a, a);
		c = new lt.Controls.Medical._d3DXMATRIX;
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixRotationAxis(c, a, b);
		b = new lt.Controls.Medical._d3DXMATRIX;
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixMultiply(b, h, c);
		lt.Controls.Medical.ReferenceLine._mV_D3DXMatrixInverse(e, 0, b);
		return d
	};
	lt.Controls.Medical.ReferenceLine._indentifyOrientation = function(a, b, c, d, e, f) {
		a.z *= e;
		b.z *= e;
		var g = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0),
			e = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformNormal(g, a, f);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformNormal(e, b, f);
		for(var a = Array(3), b = Array(3), f = 0 < g.x ? 1 : 0, h = 0 < g.y ? 4 : 5, i = 0 < g.z ? 3 : 2, j = Math.abs(g.x), k = Math.abs(g.y), g = Math.abs(g.z), l = 0, m = 0; 3 > m; m++) 0.01 < j && j > k && j > g ? (a[l++] = f, j = 0) : 0.01 < k && k > j && k > g ? (a[l++] = h, k = 0) : 0.01 < g && g > j && g > k ? (a[l++] = i, g = 0) : a[l++] = 6;
		f = 0 < e.x ? 1 : 0;
		h = 0 < e.y ? 4 : 5;
		i =
			0 < e.z ? 3 : 2;
		j = Math.abs(e.x);
		k = Math.abs(e.y);
		g = Math.abs(e.z);
		for(m = l = 0; 3 > m; m++) 0.01 < j && j > k && j > g ? (b[l++] = f, j = 0) : 0.01 < k && k > j && k > g ? (b[l++] = h, k = 0) : 0.01 < g && g > j && g > k ? (b[l++] = i, g = 0) : b[l++] = 6;
		c[0] = a[0];
		c[1] = a[1];
		c[2] = a[2];
		d[0] = b[0];
		d[1] = b[1];
		d[2] = b[2]
	};
	lt.Controls.Medical.ReferenceLine._indentifyMPRDICOMTages = function(a, b, c, d, e) {
		a.z *= d;
		b.z *= d;
		var d = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0),
			f = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformNormal(d, a, e);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3TransformNormal(f,
			b, e);
		c.xOrientation[0] = d.x;
		c.xOrientation[1] = d.y;
		c.xOrientation[2] = d.z;
		c.yOrientation[0] = f.x;
		c.yOrientation[1] = f.y;
		c.yOrientation[2] = f.z;
		a = new lt.Controls.Medical._d3DXVECTOR3(0, 0, 0);
		lt.Controls.Medical.ReferenceLine._mV_D3DXVec3Cross(a, d, f);
		c.zOrientation[0] = a.x;
		c.zOrientation[1] = a.y;
		c.zOrientation[2] = a.z
	};
	lt.Controls.Medical.ReferenceLine._l_FMEMCPY = function(a, b, c) {
		for(var c = parseInt(c), d = 0, d = 0; d < c; d++) a[d] = b[d]
	};
	lt.Controls.Medical.ReferenceLine._l_MEMCPY = function(a, b, c) {
		for(var d = 0, d = 0; d < c; d++) a[d] =
			b[d]
	};
	lt.Controls.Medical.ReferenceLine._set3OrthogonalOrientation = function(a, b, c) {
		var d = Array(5),
			e = Array(5),
			f = Array(3),
			g = Array(3),
			h = Array(3),
			i = new lt.Controls.Medical._NEWDICOMTAGES,
			j = Array(3),
			k = Array(3),
			l = Array(3),
			m = new lt.Controls.Medical._NEWDICOMTAGES,
			n = Array(3),
			o = Array(3),
			p = Array(3),
			t = new lt.Controls.Medical._NEWDICOMTAGES,
			q = 0,
			s = new lt.Controls.Medical._d3DXMATRIX,
			q = lt.Controls.Medical.ReferenceLine._foo(a, b, c, q, s),
			a = new lt.Controls.Medical._d3DXVECTOR3(-1, 0, 0),
			b = new lt.Controls.Medical._d3DXVECTOR3(0, -1, 0);
		lt.Controls.Medical.ReferenceLine._indentifyOrientation(a, b, f, g, q, s);
		a = new lt.Controls.Medical._d3DXVECTOR3(0, -1, 0);
		b = new lt.Controls.Medical._d3DXVECTOR3(0, 0, -1);
		lt.Controls.Medical.ReferenceLine._indentifyOrientation(a, b, j, k, q, s);
		a = new lt.Controls.Medical._d3DXVECTOR3(-1, 0, 0);
		b = new lt.Controls.Medical._d3DXVECTOR3(0, 0, -1);
		lt.Controls.Medical.ReferenceLine._indentifyOrientation(a, b, n, o, q, s);
		a = new lt.Controls.Medical._d3DXVECTOR3(-1, 0, 0);
		b = new lt.Controls.Medical._d3DXVECTOR3(0, -1, 0);
		lt.Controls.Medical.ReferenceLine._indentifyMPRDICOMTages(a,
			b, i, q, s);
		a = new lt.Controls.Medical._d3DXVECTOR3(0, -1, 0);
		b = new lt.Controls.Medical._d3DXVECTOR3(0, 0, -1);
		lt.Controls.Medical.ReferenceLine._indentifyMPRDICOMTages(a, b, m, q, s);
		a = new lt.Controls.Medical._d3DXVECTOR3(-1, 0, 0);
		b = new lt.Controls.Medical._d3DXVECTOR3(0, 0, -1);
		lt.Controls.Medical.ReferenceLine._indentifyMPRDICOMTages(a, b, t, q, s);
		q = i;
		s = m;
		a = t;
		d[4] = 2 !== f[0] && 3 !== f[0] && 2 !== g[0] && 3 !== g[0] ? 4 : 2 !== j[0] && 3 !== j[0] && 2 !== k[0] && 3 !== k[0] ? 1 : 2;
		d[1] = f[0] && 1 !== f[0] && g[0] && 1 !== g[0] ? 4 : j[0] && 1 !== j[0] && k[0] && 1 !== k[0] ?
			1 : 2;
		d[2] = 4 !== f[0] && 5 !== f[0] && 4 !== g[0] && 5 !== g[0] ? 4 : 4 !== j[0] && 5 !== j[0] && 4 !== k[0] && 5 !== k[0] ? 1 : 2;
		var b = Array(3),
			r = Array(3),
			c = Array(3),
			u = new lt.Controls.Medical._NEWDICOMTAGES;
		4 !== d[4] && (1 === d[4] ? (u = s.clone(), s = q.clone(), q = u.clone(), lt.Controls.Medical.ReferenceLine._l_MEMCPY(b, k, 3), lt.Controls.Medical.ReferenceLine._l_MEMCPY(r, j, 3), lt.Controls.Medical.ReferenceLine._l_MEMCPY(k, g, 3), lt.Controls.Medical.ReferenceLine._l_MEMCPY(j, f, 3)) : (u = a.clone(), a = q.clone(), q = u.clone(), lt.Controls.Medical.ReferenceLine._l_MEMCPY(b,
			o, 3), lt.Controls.Medical.ReferenceLine._l_MEMCPY(r, n, 3), lt.Controls.Medical.ReferenceLine._l_MEMCPY(o, g, 3), lt.Controls.Medical.ReferenceLine._l_MEMCPY(n, f, 3)), lt.Controls.Medical.ReferenceLine._l_MEMCPY(g, b, 3), lt.Controls.Medical.ReferenceLine._l_MEMCPY(f, r, 3));
		1 !== d[1] && (u = s.clone(), s = a.clone(), a = u.clone(), lt.Controls.Medical.ReferenceLine._l_MEMCPY(b, k, 3), lt.Controls.Medical.ReferenceLine._l_MEMCPY(r, j, 3), lt.Controls.Medical.ReferenceLine._l_MEMCPY(k, o, 3), lt.Controls.Medical.ReferenceLine._l_MEMCPY(j,
			n, 3), lt.Controls.Medical.ReferenceLine._l_MEMCPY(o, b, 3), lt.Controls.Medical.ReferenceLine._l_MEMCPY(n, r, 3));
		r = Array(7);
		r[0] = 1;
		r[1] = 0;
		r[2] = 3;
		r[3] = 2;
		r[4] = 5;
		r[5] = 4;
		r[6] = 6;
		h[0] = -1;
		h[1] = -1;
		h[2] = -1;
		p[0] = -1;
		p[1] = -1;
		p[2] = -1;
		l[0] = -1;
		l[1] = -1;
		l[2] = -1;
		u = 0;
		f[0] && 1 !== f[0] && (lt.Controls.Medical.ReferenceLine._l_FMEMCPY(c, q.xOrientation, 3), lt.Controls.Medical.ReferenceLine._l_FMEMCPY(q.xOrientation, q.yOrientation, 3), lt.Controls.Medical.ReferenceLine._l_FMEMCPY(q.yOrientation, c, 3), q.yOrientation[0] *= -1, q.yOrientation[1] *=
			-1, q.yOrientation[2] *= -1, lt.Controls.Medical.ReferenceLine._l_MEMCPY(b, g, 3), lt.Controls.Medical.ReferenceLine._l_MEMCPY(g, f, 3), lt.Controls.Medical.ReferenceLine._l_MEMCPY(f, b, 3), f[0] = r[f[0]], f[1] = r[f[1]], f[2] = r[f[2]], h[u] = 1, u++);
		1 !== f[0] && (q.yOrientation[0] *= -1, q.yOrientation[1] *= -1, q.yOrientation[2] *= -1, f[0] = r[f[0]], f[1] = r[f[1]], f[2] = r[f[2]], h[u] = 2, u++);
		4 !== g[0] && (q.xOrientation[0] *= -1, q.xOrientation[1] *= -1, q.xOrientation[2] *= -1, g[0] = r[g[0]], g[1] = r[g[1]], g[2] = r[g[2]], h[u] = 3);
		u = 0;
		n[0] && 1 !== n[0] &&
			(lt.Controls.Medical.ReferenceLine._l_FMEMCPY(c, a.xOrientation, 3), lt.Controls.Medical.ReferenceLine._l_FMEMCPY(a.xOrientation, a.yOrientation, 3), lt.Controls.Medical.ReferenceLine._l_FMEMCPY(a.yOrientation, c, 3), a.yOrientation[0] *= -1, a.yOrientation[1] *= -1, a.yOrientation[2] *= -1, lt.Controls.Medical.ReferenceLine._l_MEMCPY(b, o, 3), lt.Controls.Medical.ReferenceLine._l_MEMCPY(o, n, 3), lt.Controls.Medical.ReferenceLine._l_MEMCPY(n, b, 3), n[0] = r[n[0]], n[1] = r[n[1]], n[2] = r[n[2]], p[u] = 1, u++);
		1 !== n[0] && (a.yOrientation[0] *=
			-1, a.yOrientation[1] *= -1, a.yOrientation[2] *= -1, n[0] = r[n[0]], n[1] = r[n[1]], n[2] = r[n[2]], p[u] = 2, u++);
		2 !== o[0] && (a.xOrientation[0] *= -1, a.xOrientation[1] *= -1, a.xOrientation[2] *= -1, o[0] = r[o[0]], o[1] = r[o[1]], o[2] = r[o[2]], p[u] = 3);
		u = 0;
		4 !== j[0] && 5 !== j[0] && (lt.Controls.Medical.ReferenceLine._l_FMEMCPY(c, s.xOrientation, 3), lt.Controls.Medical.ReferenceLine._l_FMEMCPY(s.xOrientation, s.yOrientation, 3), lt.Controls.Medical.ReferenceLine._l_FMEMCPY(s.yOrientation, c, 3), s.yOrientation[0] *= -1, s.yOrientation[1] *= -1, s.yOrientation[2] *=
			-1, lt.Controls.Medical.ReferenceLine._l_MEMCPY(b, k, 3), lt.Controls.Medical.ReferenceLine._l_MEMCPY(k, j, 3), lt.Controls.Medical.ReferenceLine._l_MEMCPY(j, b, 3), j[0] = r[j[0]], j[1] = r[j[1]], j[2] = r[j[2]], l[u] = 1, u++);
		4 !== j[0] && (s.yOrientation[0] *= -1, s.yOrientation[1] *= -1, s.yOrientation[2] *= -1, j[0] = r[j[0]], j[1] = r[j[1]], j[2] = r[j[2]], l[u] = 2, u++);
		2 !== k[0] && (s.xOrientation[0] *= -1, s.xOrientation[1] *= -1, s.xOrientation[2] *= -1, k[0] = r[k[0]], k[1] = r[k[1]], k[2] = r[k[2]], l[u] = 3);
		for(q = 0; 5 > q; q++)
			for(s = 0; 5 > s; s++) d[s] === q &&
				(e[q] = 4 === s ? 0 : s);
		i.r = f;
		i.c = g;
		i.flip = h;
		i.map3DOrthMPRToItsConventionalNames = d;
		i.map3DOrthMPRToItsConventionalNamesInv = e;
		m.r = j;
		m.c = k;
		m.flip = l;
		m.map3DOrthMPRToItsConventionalNames = d;
		m.map3DOrthMPRToItsConventionalNamesInv = e;
		t.r = n;
		t.c = o;
		t.flip = p;
		t.map3DOrthMPRToItsConventionalNames = d;
		t.map3DOrthMPRToItsConventionalNamesInv = e;
		d = new lt.Controls.Medical._mprCellsInfo;
		d.axial_DICOMTage = i;
		d.sag_DICOMTage = m;
		d.coro_DICOMTage = t;
		return d
	};
	lt.Controls.Medical._mprOrientationInfo = function() {};
	lt.Controls.Medical._mprOrientationInfo.prototype = {
		mprType: 0,
		orientation: null,
		transform: null
	};
	lt.Controls.Medical._mprCellsInfo = function() {};
	lt.Controls.Medical._mprCellsInfo.prototype = {
		axial_DICOMTage: null,
		sag_DICOMTage: null,
		coro_DICOMTage: null
	};
	lt.Controls.Medical._NEWDICOMTAGES = function() {
		this.xOrientation = Array(3);
		this.yOrientation = Array(3);
		this.zOrientation = Array(3);
		this.startPosition = Array(3);
		this.distanceBetweenFrames = Array(3)
	};
	lt.Controls.Medical._NEWDICOMTAGES.prototype = {
		clone: function() {
			for(var a = new lt.Controls.Medical._NEWDICOMTAGES,
					b = 0; 3 > b; b++) a.xOrientation[b] = this.xOrientation[b], a.yOrientation[b] = this.yOrientation[b], a.zOrientation[b] = this.zOrientation[b], a.startPosition[b] = this.startPosition[b], a.distanceBetweenFrames[b] = this.distanceBetweenFrames[b];
			return a
		},
		xOrientation: null,
		yOrientation: null,
		zOrientation: null,
		startPosition: null,
		distanceBetweenFrames: null,
		r: null,
		c: null,
		flip: null,
		map3DOrthMPRToItsConventionalNames: null,
		map3DOrthMPRToItsConventionalNamesInv: null
	};
	lt.Controls.Medical._cursor3DPosition = function(a, b, c, d) {
		this.point =
			a;
		this.frame = b;
		this.frameIndex = c;
		this.distance = d
	};
	lt.Controls.Medical._cursor3DPosition.prototype = {
		point: null,
		frame: null,
		frameIndex: 0,
		distance: 0
	};
	lt.Controls.Medical._cursor3D = function() {};
	lt.Controls.Medical._cursor3D._dot_v3v3 = function(a, b) {
		return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
	};
	lt.Controls.Medical._cursor3D._mul_v3_v3fl = function(a, b, c) {
		a[0] = b[0] * c;
		a[1] = b[1] * c;
		a[2] = b[2] * c
	};
	lt.Controls.Medical._cursor3D._normalize_v3 = function(a) {
		return lt.Controls.Medical._cursor3D._normalize_v3_v3(a, a)
	};
	lt.Controls.Medical._cursor3D._cross_v3_v3v3 =
		function(a, b, c) {
			a[0] = b[1] * c[2] - b[2] * c[1];
			a[1] = b[2] * c[0] - b[0] * c[2];
			a[2] = b[0] * c[1] - b[1] * c[0]
		};
	lt.Controls.Medical._cursor3D._normalize_v3_v3 = function(a, b) {
		var c = lt.Controls.Medical._cursor3D._dot_v3v3(b, b);
		1.0E-35 < c ? (c = Math.sqrt(c), lt.Controls.Medical._cursor3D._mul_v3_v3fl(a, b, 1 / c)) : c = a[0] = a[1] = a[2] = 0;
		return c
	};
	lt.Controls.Medical._cursor3D._axis_dominant_v3_single = function(a) {
		var b = Math.abs(a[0]),
			c = Math.abs(a[1]),
			a = Math.abs(a[2]);
		return b > c ? b > a ? 0 : 2 : c > a ? 1 : 2
	};
	lt.Controls.Medical._cursor3D._landPointOnPlane =
		function(a, b) {
			var c = [b[0], b[1], b[2]],
				c = [a[0] + 1E3 * c[0], a[1] + 1E3 * c[1], a[2] + 1E3 * c[2]],
				c = [c[0] - a[0], c[1] - a[1], c[2] - a[2]],
				d = (b[3] - b[0] * a[0] - b[1] * a[1] - b[2] * a[2]) / (b[0] * c[0] + b[1] * c[1] + b[2] * c[2]),
				e = a[1] + c[1] * d,
				f = a[2] + c[2] * d;
			a[0] += c[0] * d;
			a[1] = e;
			a[2] = f
		};
	lt.Controls.Medical._cursor3D._ortho_v3_v3 = function(a, b) {
		switch(lt.Controls.Medical._cursor3D._axis_dominant_v3_single(b)) {
			case 0:
				a[0] = -b[1] - b[2];
				a[1] = b[0];
				a[2] = b[0];
				break;
			case 1:
				a[0] = b[1];
				a[1] = -b[0] - b[2];
				a[2] = b[1];
				break;
			case 2:
				a[0] = b[2], a[1] = b[2], a[2] = -b[0] -
					b[1]
		}
	};
	lt.Controls.Medical._cursor3D._unit_m3 = function(a) {
		a[0][0] = a[1][1] = a[2][2] = 1;
		a[0][1] = a[0][2] = 0;
		a[1][0] = a[1][2] = 0;
		a[2][0] = a[2][1] = 0
	};
	lt.Controls.Medical._cursor3D._rotation_between_vecs_to_mat3 = function(a, b, c) {
		var d = Array(3),
			e;
		lt.Controls.Medical._cursor3D._cross_v3_v3v3(d, b, c);
		e = lt.Controls.Medical._cursor3D._normalize_v3(d);
		c = lt.Controls.Medical._cursor3D._dot_v3v3(b, c);
		1.0E-8 < e ? lt.Controls.Medical._cursor3D._axis_angle_normalized_to_mat3_ex(a, d, e, c) : 0 < c ? lt.Controls.Medical._cursor3D._unit_m3(a) :
			(lt.Controls.Medical._cursor3D._ortho_v3_v3(d, b), lt.Controls.Medical._cursor3D._normalize_v3(d), lt.Controls.Medical._cursor3D._axis_angle_normalized_to_mat3_ex(a, d, 0, -1))
	};
	lt.Controls.Medical._cursor3D._mulitplyVectorByMatrix = function(a, b) {
		var c, d, e;
		c = b[0] * a[0][0] + b[1] * a[0][1] + b[2] * a[0][2];
		d = b[0] * a[1][0] + b[1] * a[1][1] + b[2] * a[1][2];
		e = b[0] * a[2][0] + b[1] * a[2][1] + b[2] * a[2][2];
		b[0] = c;
		b[1] = d;
		b[2] = e
	};
	lt.Controls.Medical._cursor3D.get3DPointPosition = function(a, b) {
		var c = [1, 0, 0],
			d = [0, 0, 1],
			e, f;
		e = b.get_x();
		f = b.get_y();
		lt.Controls.Medical._cursor3D._cross_v3_v3v3(d, c, [0, 1, 0]);
		var g = [a.get_imageOrientation()[0], a.get_imageOrientation()[1], a.get_imageOrientation()[2]],
			h = [a.get_imageOrientation()[3], a.get_imageOrientation()[4], a.get_imageOrientation()[5]],
			i = [0, 0, 1];
		lt.Controls.Medical._cursor3D._normalize_v3(g);
		lt.Controls.Medical._cursor3D._normalize_v3(h);
		lt.Controls.Medical._cursor3D._cross_v3_v3v3(i, g, h);
		h = Array(3);
		h[0] = [0, 0, 0];
		h[1] = [0, 0, 0];
		h[2] = [0, 0, 0];
		lt.Controls.Medical._cursor3D._rotation_between_vecs_to_mat3(h,
			i, d);
		lt.Controls.Medical._cursor3D._mulitplyVectorByMatrix(h, c);
		d = [e, f, 0];
		lt.Controls.Medical._cursor3D._mulitplyVectorByMatrix(h, d);
		lt.Controls.Medical._cursor3D._rotation_between_vecs_to_mat3(h, g, c);
		lt.Controls.Medical._cursor3D._mulitplyVectorByMatrix(h, d);
		d[0] += parseFloat(a.get_imagePosition()[0].toString());
		d[1] += parseFloat(a.get_imagePosition()[1].toString());
		d[2] += parseFloat(a.get_imagePosition()[2].toString());
		return d
	};
	lt.Controls.Medical._cursor3D._findCursor3DPosition = function(a, b, c, d,
		e, f) {
		var b = b.get_attachedFrame(),
			a = lt.Controls.Medical._cursor3D.get3DPointPosition(b, lt.LeadPointD.create(a.get_x() * b.get_columnSpacing(), a.get_y() * b.get_rowSpacing())),
			g = Array(3);
		g[0] = parseFloat(c.get_x().toString());
		g[1] = parseFloat(c.get_y().toString());
		g[2] = parseFloat(c.get_z().toString());
		var c = 0,
			h = d.get_frames().get_count(),
			i = Array(4),
			j, k, l = Array(3),
			m = -1,
			n = null,
			o = Array(4),
			p = Array(3);
		p[0] = [0, 0, 0];
		p[1] = [0, 0, 0];
		p[2] = [0, 0, 0];
		var t = null,
			q = Array(3),
			s = Array(3),
			r = -1;
		f || (h = 1);
		for(c = 0; c < h; c++) {
			b = f ? d.get_frames().get_item(c) :
				d.get_imageViewer().get_items().get_item(0).get_attachedFrame();
			if(null == b.get_imageOrientation()) return null;
			j = [b.get_imageOrientation()[0], b.get_imageOrientation()[1], b.get_imageOrientation()[2]];
			k = [b.get_imageOrientation()[3], b.get_imageOrientation()[4], b.get_imageOrientation()[5]];
			lt.Controls.Medical._cursor3D._cross_v3_v3v3(l, j, k);
			q[0] = a[0] - (parseFloat(e.get_x().toString()) + parseFloat(b.get_imagePosition()[0].toString())) + g[0];
			q[1] = a[1] - (parseFloat(e.get_y().toString()) + parseFloat(b.get_imagePosition()[1].toString())) +
				g[1];
			q[2] = a[2] - (parseFloat(e.get_z().toString()) + parseFloat(b.get_imagePosition()[2].toString())) + g[2];
			lt.Controls.Medical._cursor3D._createPlaneEquation(i, l, j);
			k = lt.Controls.Medical._cursor3D._distanceFromPoint(i, q);
			if(k < m || -1 === m) m = k, n = b, o = i.clone(), t = j.clone(), r = c, s = q.clone()
		}
		lt.Controls.Medical._cursor3D._landPointOnPlane(s, o);
		l = [o[0], o[1], o[2]];
		lt.Controls.Medical._cursor3D._rotation_between_vecs_to_mat3(p, [0, 0, 1], l);
		lt.Controls.Medical._cursor3D._mulitplyVectorByMatrix(p, s);
		lt.Controls.Medical._cursor3D._mulitplyVectorByMatrix(p,
			t);
		lt.Controls.Medical._cursor3D._rotation_between_vecs_to_mat3(p, [1, 0, 0], t);
		lt.Controls.Medical._cursor3D._mulitplyVectorByMatrix(p, s);
		return new lt.Controls.Medical._cursor3DPosition(lt.LeadPointD.create(s[0] / n.get_columnSpacing(), s[1] / n.get_rowSpacing()), n, r, m)
	};
	lt.Controls.Medical._cursor3D._distanceFromPoint = function(a, b) {
		var c = Math.abs(a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3]),
			d = lt.Controls.Medical._cursor3D._vectorDistance(a[0], a[1], a[2]);
		return c / d
	};
	lt.Controls.Medical._cursor3D._vectorDistance =
		function(a, b, c) {
			return Math.sqrt(a * a + b * b + c * c)
		};
	lt.Controls.Medical._cursor3D._createPlaneEquation = function(a, b, c) {
		a[0] = b[0];
		a[1] = b[1];
		a[2] = b[2];
		a[3] = -(b[0] * c[0] + b[1] * c[1] + b[2] * c[2])
	};
	lt.Controls.Medical._cursor3D._axis_angle_normalized_to_mat3_ex = function(a, b, c, d) {
		var e = Array(3),
			f, g, h, i, j;
		f = 1 - d;
		e[0] = b[0] * c;
		e[1] = b[1] * c;
		e[2] = b[2] * c;
		c = b[0] * b[0] * f;
		g = b[0] * b[1] * f;
		h = b[1] * b[1] * f;
		i = b[0] * b[2] * f;
		j = b[1] * b[2] * f;
		b = b[2] * b[2] * f;
		a[0][0] = c + d;
		a[0][1] = g + e[2];
		a[0][2] = i - e[1];
		a[1][0] = g - e[2];
		a[1][1] = h + d;
		a[1][2] = j + e[0];
		a[2][0] =
			i + e[1];
		a[2][1] = j - e[0];
		a[2][2] = b + d
	};
	lt.Controls.Medical._point3D = function(a, b, c) {
		this.x = a;
		this.y = b;
		this.z = c
	};
	lt.Controls.Medical._point3D.prototype = {
		x: 0,
		y: 0,
		z: 0
	};
	lt.Controls.Medical.SortingOperation = function() {};
	lt.Controls.Medical.SortingOperation.prototype = {
		_sortByCategory: 0,
		_selectorAttribute: 0,
		_order: 0,
		get_sortByCategory: function() {
			return this._sortByCategory
		},
		set_sortByCategory: function(a) {
			return this._sortByCategory = a
		},
		get_selectorAttribute: function() {
			return this._selectorAttribute
		},
		set_selectorAttribute: function(a) {
			return this._selectorAttribute =
				a
		},
		get_order: function() {
			return this._order
		},
		set_order: function(a) {
			return this._order = a
		},
		clone: function() {
			var a = new lt.Controls.Medical.SortingOperation;
			a.set_sortByCategory(this.get_sortByCategory());
			a.set_selectorAttribute(this.get_selectorAttribute());
			a.set_order(this.get_order());
			return a
		}
	};
	Object.defineProperty(lt.Controls.Medical.SortingOperation.prototype, "sortByCategory", {
		get: lt.Controls.Medical.SortingOperation.prototype.get_sortByCategory,
		set: lt.Controls.Medical.SortingOperation.prototype.set_sortByCategory,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.SortingOperation.prototype, "selectorAttribute", {
		get: lt.Controls.Medical.SortingOperation.prototype.get_selectorAttribute,
		set: lt.Controls.Medical.SortingOperation.prototype.set_selectorAttribute,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.SortingOperation.prototype, "order", {
		get: lt.Controls.Medical.SortingOperation.prototype.get_order,
		set: lt.Controls.Medical.SortingOperation.prototype.set_order,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical._dicomDataSetInfo = function(a, b) {
		this.item = a;
		this.dataSet3DIndex = b
	};
	lt.Controls.Medical._dicomDataSetInfo.prototype = {
		item: null,
		dataSet3DIndex: 0
	};
	lt.Controls.Medical._myConverter = function() {};
	lt.Controls.Medical._myConverter.compareDates = function(a, b) {
		var c = a.get_date().getTime(),
			d = b.get_date().getTime();
		return c === d ? 0 : c < d ? -1 : 1
	};
	lt.Controls.Medical._myConverter.parseDoubleArray = function(a) {
		if(null == a) return null;
		for(var b = a.length, c = Array(b), d = 0; d < b; d++) c[d] = lt.Controls.Medical._myConverter.parseDouble(a[d]);
		return c
	};
	lt.Controls.Medical._myConverter.isDouble = function(a) {
		return !isNaN(parseFloat(a)) && isFinite(a)
	};
	lt.Controls.Medical._myConverter.isDate = function(a) {
		return 8 === a.length ? !0 : !1
	};
	lt.Controls.Medical._myConverter.parseDouble = function(a) {
		return parseFloat(a)
	};
	lt.Controls.Medical._myConverter.parseDate = function(a) {
		return new lt.Controls.Medical._dateTime(parseInt(a.substring(0, 4)), parseInt(a.substring(4, 2)), parseInt(a.substring(6, 2)), 0, 0, 0, 0)
	};
	lt.Controls.Medical._dicomDataSetItem = function(a, b) {
		this._dicomDataSet =
			a;
		this._userData = b
	};
	lt.Controls.Medical._dicomDataSetItem.prototype = {
		_dicomDataSet: null,
		_userData: null,
		get_dicomDataSetJson: function() {
			return this._dicomDataSet
		},
		get_userData: function() {
			return this._userData
		}
	};
	lt.Controls.Medical._sortDicom = function() {};
	lt.Controls.Medical._sortDicom._createSortingArray = function(a, b) {
		if(null == b) return null;
		var c = a.length,
			d = Array(c),
			e = Array(3);
		e[0] = b[4] * b[2] - b[5] * b[1];
		e[1] = b[5] * b[0] - b[3] * b[2];
		e[2] = b[3] * b[1] - b[4] * b[0];
		var f;
		f = e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
		if(0.001 >
			f) throw Error("Invalid orientation values");
		f = Math.sqrt(f);
		e[0] /= f;
		e[1] /= f;
		e[2] /= f;
		for(f = 0; f < c; f++) d[f] = e[0] * a[f].x + e[1] * a[f].y + e[2] * a[f].z;
		return d
	};
	lt.Controls.Medical._sortDicom._preceeding = function(a, b, c, d) {
		if(d === c.length) return !1;
		var e = c[d],
			f, g;
		if(1 === e.get_sortByCategory()) f = a.dataSet3DIndex.toString(), g = b.dataSet3DIndex.toString();
		else {
			if(null == a.item.get_dicomDataSetJson().getDicomTag(e.get_selectorAttribute()) || null == b.item.get_dicomDataSetJson().getDicomTag(e.get_selectorAttribute())) return !1;
			f = a.item.get_dicomDataSetJson().getDicomTag(e.get_selectorAttribute()).toString();
			g = b.item.get_dicomDataSetJson().getDicomTag(e.get_selectorAttribute()).toString()
		}
		if(null == f || !f || null == g || !g) return !1;
		var h = 0;
		lt.Controls.Medical._myConverter.isDouble(f) ? (f = lt.Controls.Medical._myConverter.parseDouble(f), g = lt.Controls.Medical._myConverter.parseDouble(g), h = f === g ? 0 : f < g ? -1 : 1) : lt.Controls.Medical._myConverter.isDate(f) ? (f = lt.Controls.Medical._myConverter.parseDate(f), g = lt.Controls.Medical._myConverter.parseDate(g),
			h = lt.Controls.Medical._myConverter.compareDates(f, g)) : h = String.compare(f, g, !0);
		return !h ? lt.Controls.Medical._sortDicom._preceeding(a, b, c, d + 1) : e.get_order() ? 1 === h ? !0 : !1 : -1 === h ? !0 : !1
	};
	lt.Controls.Medical._sortDicom._getAvailableAcqusitionTag = function(a) {
		var b, c = [524322, 524330, 524338, 524339, 1609844],
			d = 0;
		for(b = 0; b < c.length; b++)
			if(null != a.getDicomTag(c[b])) {
				d = c[b];
				break
			}
		return d
	};
	lt.Controls.Medical._sortDicom.sort = function(a, b) {
		for(var c = [], d = [], e = 0, f = a.length, g, h, e = 0; e < f; e++) g = null, null != a && null != a[e] &&
			null != a[e].get_dicomDataSetJson() && (h = a[e].get_dicomDataSetJson().getDicomTag(2097202), null != h && (g = h.toString())), null != g ? (h = lt.Controls.Medical._myConverter.parseDoubleArray(g.split("\\")), c.add(new lt.Controls.Medical._point3D(h[0], h[1], h[2]))) : c.add(null), g = null, null != a && null != a[e] && null != a[e].get_dicomDataSetJson() && (h = a[e].get_dicomDataSetJson().getDicomTag(2097207), null != h && (g = h.toString())), null != g ? d.add(lt.Controls.Medical._myConverter.parseDoubleArray(g.split("\\"))) : d.add(null);
		var i = lt.Controls.Medical._sortDicom._createSortingArray(c,
				d[0]),
			j = 0,
			c = !1,
			d = [];
		h = [];
		g = [];
		for(var k = [], e = 0; e < f; e++) d.add(new lt.Controls.Medical._dicomDataSetInfo(a[e], null == i ? 0 : i[e]));
		i = lt.Controls.Medical._sortDicom._getAvailableAcqusitionTag(a[0].get_dicomDataSetJson());
		for(e = 0; e < b.length; e++)
			if(h.add(b[e].clone()), 2 === h[e].get_sortByCategory()) {
				h[e].set_sortByCategory(0);
				if(!i) throw Error("No Acquisition Time tag found");
				h[e].set_selectorAttribute(i)
			}
		for(e = 0; e < f; e++) {
			for(j = 0; j < g.length; j++)
				if(c = !1, lt.Controls.Medical._sortDicom._preceeding(d[e], g[j], h,
						0)) {
					g.insert(j, d[e]);
					c = !0;
					break
				}
			c || g.add(d[e])
		}
		for(e = 0; e < f; e++) k.add(g[e].item);
		return k
	};
	lt.Controls.Medical._dicomDataSetJson = function(a) {
		this._json = a
	};
	lt.Controls.Medical._dicomDataSetJson.prototype = {
		_json: null,
		getDicomTagObject: function(a) {
			a = this._findFirstElement(null, a, !0);
			return null != a ? a.value : null
		},
		getDicomTag: function(a) {
			a = this._findFirstElement(null, a, !0);
			return null != a ? this._getConvertValue(a) : null
		},
		_findFirstElement: function(a, b) {
			var c = new lt.Controls.Medical._dicomElement,
				d = this._json[lt.Controls.Medical.Tools.getHexaString(b)];
			if(null == d) return null;
			c.value = d.Value;
			return c
		},
		_getConvertValue: function(a) {
			var b = "";
			if(void 0 != a.value.length) {
				var c = a.value.length,
					d = 0;
				if(1 === c) return a.value;
				for(d = 0; d < c; d++) b += a.value[d], d !== c - 1 && (b += "\\")
			} else return a.value;
			return b
		}
	};
	lt.Controls.Medical.WindowLevelData = function() {};
	lt.Controls.Medical.WindowLevelData.prototype = {
		_renderer: null,
		_interactiveMode: null,
		get_interactiveMode: function() {
			return this._interactiveMode
		},
		set_interactiveMode: function(a) {
			return this._interactiveMode = a
		},
		get_renderer: function() {
			return this._renderer
		},
		set_renderer: function(a) {
			this._renderer !== a && (this._renderer = a, this._calculateSensitivyValue());
			return a
		},
		_calculateSensitivyValue: function() {
			if(null == this._renderer) this._windowLevelSensitivity = 1;
			else {
				var a = this._renderer.get_information(); - 1 === a.get_maxValue() && a.get_bitsPerPixel();
				a.get_minValue();
				this._windowLevelSensitivity = Math.max(1, Math.round(this._renderer.get_originalWindowLevelWidth() / 1024))
			}
		},
		_image: null,
		get_image: function() {
			return this._image
		},
		set_image: function(a) {
			return this._image = a
		},
		_canvas: null,
		get_canvas: function() {
			return this._canvas
		},
		set_canvas: function(a) {
			return this._canvas = a
		},
		_dragDeltaSensitivityToUse: 0,
		_dragDeltaSensitivity: 0,
		get_dragDeltaSensitivity: function() {
			return this._dragDeltaSensitivity
		},
		set_dragDeltaSensitivity: function(a) {
			return this._dragDeltaSensitivityToUse = this._dragDeltaSensitivity = a
		},
		_windowLevelSensitivity: 0,
		get_windowLevelSensitivity: function() {
			return this._enableWindowLevelSensitivity ? this._windowLevelSensitivity :
				1
		},
		_enableWindowLevelSensitivity: !1,
		get_enableWindowLevelSensitivity: function() {
			return this._enableWindowLevelSensitivity
		},
		set_enableWindowLevelSensitivity: function(a) {
			return this._enableWindowLevelSensitivity = a
		},
		get_resizedCanvas: function() {
			return null
		},
		get_resizedRenderer: function() {
			return null
		},
		get_imageData: function() {
			return null
		},
		set_imageData: function(a) {
			return a
		},
		get_resizedImageData: function() {
			return null
		},
		set_resizedImageData: function(a) {
			return a
		},
		get_resizeFactor: function() {
			return 0
		},
		set_resizeFactor: function(a) {
			return a
		}
	};
	Object.defineProperty(lt.Controls.Medical.WindowLevelData.prototype, "interactiveMode", {
		get: lt.Controls.Medical.WindowLevelData.prototype.get_interactiveMode,
		set: lt.Controls.Medical.WindowLevelData.prototype.set_interactiveMode,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.WindowLevelData.prototype, "renderer", {
		get: lt.Controls.Medical.WindowLevelData.prototype.get_renderer,
		set: lt.Controls.Medical.WindowLevelData.prototype.set_renderer,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.WindowLevelData.prototype,
		"image", {
			get: lt.Controls.Medical.WindowLevelData.prototype.get_image,
			set: lt.Controls.Medical.WindowLevelData.prototype.set_image,
			enumerable: !0,
			configurable: !0
		});
	Object.defineProperty(lt.Controls.Medical.WindowLevelData.prototype, "canvas", {
		get: lt.Controls.Medical.WindowLevelData.prototype.get_canvas,
		set: lt.Controls.Medical.WindowLevelData.prototype.set_canvas,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.WindowLevelData.prototype, "dragDeltaSensitivity", {
		get: lt.Controls.Medical.WindowLevelData.prototype.get_dragDeltaSensitivity,
		set: lt.Controls.Medical.WindowLevelData.prototype.set_dragDeltaSensitivity,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.WindowLevelData.prototype, "windowLevelSensitivity", {
		get: lt.Controls.Medical.WindowLevelData.prototype.get_windowLevelSensitivity,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.WindowLevelData.prototype, "enableWindowLevelSensitivity", {
		get: lt.Controls.Medical.WindowLevelData.prototype.get_enableWindowLevelSensitivity,
		set: lt.Controls.Medical.WindowLevelData.prototype.set_enableWindowLevelSensitivity,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.WindowLevelData.prototype, "resizedCanvas", {
		get: lt.Controls.Medical.WindowLevelData.prototype.get_resizedCanvas,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.WindowLevelData.prototype, "resizedRenderer", {
		get: lt.Controls.Medical.WindowLevelData.prototype.get_resizedRenderer,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.WindowLevelData.prototype, "imageData", {
		get: lt.Controls.Medical.WindowLevelData.prototype.get_imageData,
		set: lt.Controls.Medical.WindowLevelData.prototype.set_imageData,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.WindowLevelData.prototype, "resizedImageData", {
		get: lt.Controls.Medical.WindowLevelData.prototype.get_resizedImageData,
		set: lt.Controls.Medical.WindowLevelData.prototype.set_resizedImageData,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.WindowLevelData.prototype, "resizeFactor", {
		get: lt.Controls.Medical.WindowLevelData.prototype.get_resizeFactor,
		set: lt.Controls.Medical.WindowLevelData.prototype.set_resizeFactor,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical.WindowLevelInteractiveMode = function() {
		lt.Controls.Medical.WindowLevelInteractiveMode.initializeBase(this);
		this.set_autoItemMode(lt.Controls.ImageViewerAutoItemMode.autoSet);
		this.set_itemPart(lt.Controls.ImageViewerItemPart.item);
		this.set_isDragMouseWheelEnabled(!1);
		this._data$1 = new lt.Controls.Medical.WindowLevelData
	};
	lt.Controls.Medical.WindowLevelInteractiveMode.prototype = {
		_previousX$1: 0,
		_previousY$1: 0,
		get_id: function() {
			return 103
		},
		_data$1: null,
		get_data: function() {
			return this._data$1
		},
		set_data: function(a) {
			null != this._data$1 && this._data$1.set_interactiveMode(null);
			this._data$1 = a;
			null != this._data$1 && this._data$1.set_interactiveMode(this);
			return a
		},
		get_name: function() {
			return "WindowLevel"
		},
		reset: function() {
			this.get_isStarted() && (this._data$1.get_renderer().updateWindowLevelLUT(this._data$1.get_renderer().get_originalWindowLevelWidth(), this._data$1.get_renderer().get_originalWindowLevelCenter()),
				this._data$1.get_renderer()._renderUsingCanvasInternal(this._data$1.get_canvas(), !1))
		},
		start: function(a) {
			lt.Controls.Medical.WindowLevelInteractiveMode.callBaseMethod(this, "start", [a]);
			a = lt.Controls.Medical.WindowLevelInteractiveMode.callBaseMethod(this, "get_interactiveService");
			a.add_dragStarted(ss.Delegate.create(this, this._service_DragStarted$1));
			a.add_dragDelta(ss.Delegate.create(this, this._service_DragDelta$1));
			a.add_dragCompleted(ss.Delegate.create(this, this._service_DragCompleted$1))
		},
		stop: function(a) {
			if(this.get_isStarted()) {
				var b =
					lt.Controls.Medical.WindowLevelInteractiveMode.callBaseMethod(this, "get_interactiveService");
				b.remove_dragStarted(ss.Delegate.create(this, this._service_DragStarted$1));
				b.remove_dragDelta(ss.Delegate.create(this, this._service_DragDelta$1));
				b.remove_dragCompleted(ss.Delegate.create(this, this._service_DragCompleted$1));
				lt.Controls.Medical.WindowLevelInteractiveMode.callBaseMethod(this, "stop", [a])
			}
		},
		_service_DragStarted$1: function(a, b) {
			if(b.get_nativeEvent().type !== lt.LTHelper.mouseWheelEvent && this.canStartWork(b) &&
				(this.onWorkStarted(lt.LeadEventArgs.Empty), null != this._data$1)) {
				if(null == this._data$1.get_renderer()) throw Error("Must call SetRenderer with a valid DICOMImageInformationRenderer first");
				this._previousX$1 = parseInt(b.get_position().get_x());
				this._previousY$1 = parseInt(b.get_position().get_y())
			}
		},
		_service_DragDelta$1: function (a, b) {
		    if (!(b.get_nativeEvent().type === lt.LTHelper.mouseWheelEvent || null == this._data$1) && this.get_isWorking()) {
		        var c = parseInt(b.get_change().get_x()),
					d = parseInt(b.get_change().get_y()),
					e = parseInt(b.get_position().get_x()),
					f = parseInt(b.get_position().get_y()),
					g = e - this._previousX$1,
					h = f - this._previousY$1,
					i = this._data$1._dragDeltaSensitivityToUse;

		        this._data$1._dragDeltaSensitivityToUse !== this._data$1.get_dragDeltaSensitivity();
		        this._data$1.set_dragDeltaSensitivity(this._data$1._dragDeltaSensitivityToUse);

		        if (!(Math.abs(g) <= i && Math.abs(h) <= i) && (c || d)) {

		            lt.Controls.Medical.WindowLevelInteractiveMode.callBaseMethod(this, "get_item");
		            this._previousX$1 = e;
		            this._previousY$1 = f;
		            c = this._data$1.get_renderer().get_windowLevelWidth() + g * this._data$1.get_windowLevelSensitivity();
		            d = this._data$1.get_renderer().get_windowLevelCenter() + h * this._data$1.get_windowLevelSensitivity();
		            b.set_change(lt.LeadPointD.create(g * this._data$1.get_windowLevelSensitivity(), h * this._data$1.get_windowLevelSensitivity()));
		            if (null != this.__workDelta$1) {
		                this.__workDelta$1(this, b);
		                this._data$1.get_renderer().get_information().get_photometricInterpretation();
		                this._data$1.get_renderer().updateWindowLevelLUT(c, d);
		                if (!this._needsRender$1) {
		                    this._needsRender$1 = !0;
		                    lt.LTHelper.requestAnimationFrame(ss.Delegate.create(this, this._doRender$1));
		                }
		            }
		        }
		    }
		},
		_needsRender$1: !1,
		_mrtiEnabled$1: !0,
		add_render: function(a) {
			this.__render$1 = ss.Delegate.combine(this.__render$1, a)
		},
		remove_render: function(a) {
			this.__render$1 = ss.Delegate.remove(this.__render$1, a)
		},
		__render$1_handler_get: function() {
			null == this.__render$1_handler && (this.__render$1_handler = ss.EventHandler.create(this, this.add_render, this.remove_render));
			return this.__render$1_handler
		},
		__render$1: null,
		__render$1_handler: null,
		add_workDelta: function(a) {
			this.__workDelta$1 = ss.Delegate.combine(this.__workDelta$1,
				a)
		},
		remove_workDelta: function(a) {
			this.__workDelta$1 = ss.Delegate.remove(this.__workDelta$1, a)
		},
		__workDelta$1_handler_get: function() {
			null == this.__workDelta$1_handler && (this.__workDelta$1_handler = ss.EventHandler.create(this, this.add_workDelta, this.remove_workDelta));
			return this.__workDelta$1_handler
		},
		__workDelta$1: null,
		__workDelta$1_handler: null,
		add_renderCompleted: function(a) {
			this.__renderCompleted$1 = ss.Delegate.combine(this.__renderCompleted$1, a)
		},
		remove_renderCompleted: function(a) {
			this.__renderCompleted$1 =
				ss.Delegate.remove(this.__renderCompleted$1, a)
		},
		__renderCompleted$1_handler_get: function() {
			null == this.__renderCompleted$1_handler && (this.__renderCompleted$1_handler = ss.EventHandler.create(this, this.add_renderCompleted, this.remove_renderCompleted));
			return this.__renderCompleted$1_handler
		},
		__renderCompleted$1: null,
		__renderCompleted$1_handler: null,
		_doRender$1: function() {
		    if (this._needsRender$1) {
		        this._needsRender$1 = !1;
		        if (this._mrtiEnabled$1 && null != this.__render$1) {
		            this.__render$1(this, lt.LeadEventArgs.Empty);
				    this._data$1.get_renderer().onUpdateImageData(lt.LeadEventArgs.Empty);
		        }
		    }
		},
		_service_DragCompleted$1: function(a, b) {
			if(b.get_nativeEvent().type !== lt.LTHelper.mouseWheelEvent)
				if(null == this._data$1) this.onWorkCompleted(lt.LeadEventArgs.Empty);
				else this.get_isWorking() && (null != this.__renderCompleted$1 && this.__renderCompleted$1(this, lt.LeadEventArgs.Empty), this.onWorkCompleted(lt.LeadEventArgs.Empty))
		},
		dispose: function() {
			this._clear$1()
		},
		_clear$1: function() {},
		_flip$1: function(a, b) {
			a.translate(0, b.height);
			a.scale(1, -1)
		},
		_reverse$1: function(a, b) {
			a.translate(b.width, 0);
			a.scale(-1, 1)
		},
		_rotate$1: function(a, b, c) {
			var d = lt.Controls.Medical.WindowLevelInteractiveMode.callBaseMethod(this, "get_item"),
				e = d.get_flip(),
				d = d.get_reverse(),
				f = 1;
			if(e || d) e !== d && (f = -1);
			c *= f;
			e = c * Math.PI / 180;
			c = parseInt(c);
			d = b.height / b.width;
			f = b.width / b.height;
			switch(c) {
				case 90:
				case -270:
					a.rotate(e);
					a.scale(d, f);
					a.translate(0, -b.height);
					break;
				case -180:
				case 180:
					a.translate(b.width / 2, b.height / 2);
					a.rotate(e);
					a.translate(-b.width / 2, -b.height /
						2);
					break;
				case -90:
				case 270:
					a.rotate(e), a.scale(d, f), a.translate(-b.width, 0)
			}
		}
	};
	Object.defineProperty(lt.Controls.Medical.WindowLevelInteractiveMode.prototype, "id", {
		get: lt.Controls.Medical.WindowLevelInteractiveMode.prototype.get_id,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.WindowLevelInteractiveMode.prototype, "data", {
		get: lt.Controls.Medical.WindowLevelInteractiveMode.prototype.get_data,
		set: lt.Controls.Medical.WindowLevelInteractiveMode.prototype.set_data,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.WindowLevelInteractiveMode.prototype, "name", {
		get: lt.Controls.Medical.WindowLevelInteractiveMode.prototype.get_name,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.WindowLevelInteractiveMode.prototype, "render", {
		get: lt.Controls.Medical.WindowLevelInteractiveMode.prototype.__render$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.WindowLevelInteractiveMode.prototype, "workDelta", {
		get: lt.Controls.Medical.WindowLevelInteractiveMode.prototype.__workDelta$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	Object.defineProperty(lt.Controls.Medical.WindowLevelInteractiveMode.prototype, "renderCompleted", {
		get: lt.Controls.Medical.WindowLevelInteractiveMode.prototype.__renderCompleted$1_handler_get,
		enumerable: !0,
		configurable: !0
	});
	lt.Controls.Medical._workItem = function(a, b) {
		this._state = a;
		this._data = b
	};
	lt.Controls.Medical._workItem.prototype = {
		_state: null,
		get__state: function() {
			return this._state
		},
		_data: null
	};
	lt.Controls.Medical._myWorkItemData = function(a, b, c, d, e, f, g, h, i, j, k, l) {
		this.client = a;
		this.image = b;
		this.resolution = c;
		this.tileRect = d;
		this.bitsPerPixel = e;
		this.mimeType = f;
		this.sourceRect = g;
		this.targetRect = h;
		this.tileSize = i;
		this.expectedNumberOfChunks = j;
		this.excludedRect = k;
		this.userState = l
	};
	lt.Controls.Medical._myWorkItemData.prototype = {
		testingValue: 0,
		client: null,
		image: null,
		resolution: null,
		tileRect: null,
		tileResolution: null,
		tileBackGroundResolution: null,
		bitsPerPixel: 0,
		mimeType: null,
		sourceRect: null,
		targetRect: null,
		tileSize: null,
		userState: null,
		expectedNumberOfChunks: 0,
		rectList: null,
		recycledList: null,
		excludedRect: null,
		canceled: !1
	};
	lt.Controls.Medical._lT_VersionNumber.registerClass("lt.Controls.Medical._lT_VersionNumber");
	lt.Controls.Medical.AutomationImageViewer.registerClass("lt.Controls.Medical.AutomationImageViewer", lt.Controls.ImageViewer, lt.Annotations.Core.IAnnAutomationControl);
	lt.Controls.Medical.AutomationInteractiveMode.registerClass("lt.Controls.Medical.AutomationInteractiveMode",
		lt.Controls.ImageViewerInteractiveMode);
	lt.Controls.Medical._imageDataStreamer.registerClass("lt.Controls.Medical._imageDataStreamer");
	lt.Controls.Medical.DICOMImageInformation.registerClass("lt.Controls.Medical.DICOMImageInformation");
	lt.Controls.Medical.DICOMImageInformationRenderer.registerClass("lt.Controls.Medical.DICOMImageInformationRenderer");
	lt.Controls.Medical.ImageProcessing.registerClass("lt.Controls.Medical.ImageProcessing");
	lt.Controls.Medical._seriesReferenceLines.registerClass("lt.Controls.Medical._seriesReferenceLines");
	lt.Controls.Medical._referenceLineInformation.registerClass("lt.Controls.Medical._referenceLineInformation");
	lt.Controls.Medical._frameReferenceLines.registerClass("lt.Controls.Medical._frameReferenceLines");
	lt.Controls.Medical.LayoutManagerItem.registerClass("lt.Controls.Medical.LayoutManagerItem");
	lt.Controls.Medical._rightClickMenuItem.registerClass("lt.Controls.Medical._rightClickMenuItem");
	lt.Controls.Medical.LayoutManager.registerClass("lt.Controls.Medical.LayoutManager");
	lt.Controls.Medical.GridLayout.registerClass("lt.Controls.Medical.GridLayout");
	lt.Controls.Medical._matchedSeries.registerClass("lt.Controls.Medical._matchedSeries");
	lt.Controls.Medical.MedicalViewer.registerClass("lt.Controls.Medical.MedicalViewer", lt.Controls.InteractiveService);
	lt.Controls.Medical.CellGridLayout.registerClass("lt.Controls.Medical.CellGridLayout");
	lt.Controls.Medical.EmptyCell.registerClass("lt.Controls.Medical.EmptyCell", lt.Controls.Medical.LayoutManagerItem);
	lt.Controls.Medical.CellEventArgs.registerClass("lt.Controls.Medical.CellEventArgs", lt.LeadEventArgs);
	lt.Controls.Medical.ImageURLChangedEventArgs.registerClass("lt.Controls.Medical.ImageURLChangedEventArgs", lt.Controls.Medical.CellEventArgs);
	lt.Controls.Medical.ImageProcessingReadyEventArgs.registerClass("lt.Controls.Medical.ImageProcessingReadyEventArgs", lt.LeadEventArgs);
	lt.Controls.Medical.CellExplodedEventArgs.registerClass("lt.Controls.Medical.CellExplodedEventArgs", lt.LeadEventArgs);
	lt.Controls.Medical.FrameAttachedEventArgs.registerClass("lt.Controls.Medical.FrameAttachedEventArgs", lt.LeadEventArgs);
	lt.Controls.Medical.Cell.registerClass("lt.Controls.Medical.Cell", lt.Controls.Medical.LayoutManagerItem);
	lt.Controls.Medical.MPRCell.registerClass("lt.Controls.Medical.MPRCell", lt.Controls.Medical.Cell);
	lt.Controls.Medical.ScrollChangedEventArgs.registerClass("lt.Controls.Medical.ScrollChangedEventArgs", lt.LeadEventArgs);
	lt.Controls.Medical.TickBox.registerClass("lt.Controls.Medical.TickBox");
	lt.Controls.Medical._overlayInfo.registerClass("lt.Controls.Medical._overlayInfo");
	lt.Controls.Medical._actionInfo.registerClass("lt.Controls.Medical._actionInfo");
	lt.Controls.Medical.SubCell.registerClass("lt.Controls.Medical.SubCell", lt.Controls.ImageViewerItem);
	lt.Controls.Medical._chunkList.registerClass("lt.Controls.Medical._chunkList");
	lt.Controls.Medical.MRTISubCell.registerClass("lt.Controls.Medical.MRTISubCell", lt.Controls.Medical.SubCell);
	lt.Controls.Medical._fullRes_Thumb_ImageInfo.registerClass("lt.Controls.Medical._fullRes_Thumb_ImageInfo");
	lt.Controls.Medical._imagesLoader.registerClass("lt.Controls.Medical._imagesLoader");
	lt.Controls.Medical.Frame.registerClass("lt.Controls.Medical.Frame");
	lt.Controls.Medical._windowLevelValues.registerClass("lt.Controls.Medical._windowLevelValues");
	lt.Controls.Medical.OverlayText.registerClass("lt.Controls.Medical.OverlayText");
	lt.Controls.Medical.Tools.registerClass("lt.Controls.Medical.Tools");
	lt.Controls.Medical.ActionCommand.registerClass("lt.Controls.Medical.ActionCommand");
	lt.Controls.Medical._pinchAction.registerClass("lt.Controls.Medical._pinchAction", lt.Controls.Medical.ActionCommand);
	lt.Controls.Medical.OffsetAction.registerClass("lt.Controls.Medical.OffsetAction",
		lt.Controls.Medical.ActionCommand);
	lt.Controls.Medical.LineProfileAction.registerClass("lt.Controls.Medical.LineProfileAction", lt.Controls.Medical.ActionCommand);
	lt.Controls.Medical.TransformItemAction.registerClass("lt.Controls.Medical.TransformItemAction", lt.Controls.Medical.ActionCommand);
	lt.Controls.Medical.ScaleAction.registerClass("lt.Controls.Medical.ScaleAction", lt.Controls.Medical.ActionCommand);
	lt.Controls.Medical.MagnifyAction.registerClass("lt.Controls.Medical.MagnifyAction", lt.Controls.Medical.ActionCommand);
	lt.Controls.Medical.LeadPoint3D.registerClass("lt.Controls.Medical.LeadPoint3D");
	lt.Controls.Medical.CrossHairInteractiveMode.registerClass("lt.Controls.Medical.CrossHairInteractiveMode", lt.Controls.ImageViewerInteractiveMode);
	lt.Controls.Medical.CrossHairAction.registerClass("lt.Controls.Medical.CrossHairAction", lt.Controls.Medical.ActionCommand);
	lt.Controls.Medical.ProbeToolAction.registerClass("lt.Controls.Medical.ProbeToolAction", lt.Controls.Medical.ActionCommand);
	lt.Controls.Medical.SpyGlassAction.registerClass("lt.Controls.Medical.SpyGlassAction",
		lt.Controls.Medical.MagnifyAction);
	lt.Controls.Medical.StackAction.registerClass("lt.Controls.Medical.StackAction", lt.Controls.Medical.ActionCommand);
	lt.Controls.Medical.StackInteractiveMode.registerClass("lt.Controls.Medical.StackInteractiveMode", lt.Controls.ImageViewerInteractiveMode);
	lt.Controls.Medical.WindowLevelAction.registerClass("lt.Controls.Medical.WindowLevelAction", lt.Controls.Medical.ActionCommand);
	lt.Controls.Medical.AutomationInteractiveAction.registerClass("lt.Controls.Medical.AutomationInteractiveAction",
		lt.Controls.Medical.ActionCommand);
	lt.Controls.Medical.CobbAngle.registerClass("lt.Controls.Medical.CobbAngle");
	lt.Controls.Medical.ProgressLoading.registerClass("lt.Controls.Medical.ProgressLoading");
	lt.Controls.Medical.LineProfileObject.registerClass("lt.Controls.Medical.LineProfileObject");
	lt.Controls.Medical.ShutterObject.registerClass("lt.Controls.Medical.ShutterObject");
	lt.Controls.Medical.SpyGlassPositionChangedEventArgs.registerClass("lt.Controls.Medical.SpyGlassPositionChangedEventArgs",
		lt.LeadEventArgs);
	lt.Controls.Medical.SpyGlassEventArgs.registerClass("lt.Controls.Medical.SpyGlassEventArgs", lt.LeadEventArgs);
	lt.Controls.Medical.MedicalSpyGlassInteractiveMode.registerClass("lt.Controls.Medical.MedicalSpyGlassInteractiveMode", lt.Controls.ImageViewerMagnifyGlassInteractiveMode);
	lt.Controls.Medical.ProbeToolEventArgs.registerClass("lt.Controls.Medical.ProbeToolEventArgs", lt.LeadEventArgs);
	lt.Controls.Medical.ProbeToolInteractiveMode.registerClass("lt.Controls.Medical.ProbeToolInteractiveMode",
		lt.Controls.ImageViewerInteractiveMode);
	lt.Controls.Medical._imageViewerGridViewLayout.registerClass("lt.Controls.Medical._imageViewerGridViewLayout", lt.Controls.ImageViewerViewLayout);
	lt.Controls.Medical._imageViewerTransformInteractiveMode.registerClass("lt.Controls.Medical._imageViewerTransformInteractiveMode", lt.Controls.ImageViewerInteractiveMode);
	lt.Controls.Medical.HistogramGeneratedEventArgs.registerClass("lt.Controls.Medical.HistogramGeneratedEventArgs", lt.LeadEventArgs);
	lt.Controls.Medical.LineProfileInteractiveMode.registerClass("lt.Controls.Medical.LineProfileInteractiveMode",
		lt.Controls.ImageViewerInteractiveMode);
	lt.Controls.Medical.TransformItemInteractiveMode.registerClass("lt.Controls.Medical.TransformItemInteractiveMode", lt.Controls.ImageViewerInteractiveMode);
	lt.Controls.Medical.FrameChangedEventArgs.registerClass("lt.Controls.Medical.FrameChangedEventArgs", lt.LeadEventArgs);
	lt.Controls.Medical.CinePlayer.registerClass("lt.Controls.Medical.CinePlayer");
	lt.Controls.Medical._shuffleData.registerClass("lt.Controls.Medical._shuffleData");
	lt.Controls.Medical._frameUpdatingEventArgs.registerClass("lt.Controls.Medical._frameUpdatingEventArgs",
		lt.LeadEventArgs);
	lt.Controls.Medical._animator.registerClass("lt.Controls.Medical._animator");
	lt.Controls.Medical._ultraSoundCalibrationRegion.registerClass("lt.Controls.Medical._ultraSoundCalibrationRegion");
	lt.Controls.Medical._dicomTag.registerClass("lt.Controls.Medical._dicomTag");
	lt.Controls.Medical._dicomElement.registerClass("lt.Controls.Medical._dicomElement");
	lt.Controls.Medical._dicomDataSet.registerClass("lt.Controls.Medical._dicomDataSet");
	lt.Controls.Medical._dateTime.registerClass("lt.Controls.Medical._dateTime");
	lt.Controls.Medical.Cursor3DInteractiveMode.registerClass("lt.Controls.Medical.Cursor3DInteractiveMode", lt.Controls.ImageViewerInteractiveMode);
	lt.Controls.Medical.Cursor3DAction.registerClass("lt.Controls.Medical.Cursor3DAction", lt.Controls.Medical.ActionCommand);
	lt.Controls.Medical._mrtiRenderChunkEventArgs.registerClass("lt.Controls.Medical._mrtiRenderChunkEventArgs", lt.LeadEventArgs);
	lt.Controls.Medical.ChunkLoadedEventArgs.registerClass("lt.Controls.Medical.ChunkLoadedEventArgs", lt.LeadEventArgs);
	lt.Controls.Medical._chunkEventArgs.registerClass("lt.Controls.Medical._chunkEventArgs", lt.LeadEventArgs);
	lt.Controls.Medical._debugEventArgs.registerClass("lt.Controls.Medical._debugEventArgs", lt.LeadEventArgs);
	lt.Controls.Medical._chunkStatus.registerClass("lt.Controls.Medical._chunkStatus");
	lt.Controls.Medical.ChunkData.registerClass("lt.Controls.Medical.ChunkData");
	lt.Controls.Medical._recycledData.registerClass("lt.Controls.Medical._recycledData");
	lt.Controls.Medical._chunkInfo.registerClass("lt.Controls.Medical._chunkInfo");
	lt.Controls.Medical._mrtiRenderer.registerClass("lt.Controls.Medical._mrtiRenderer", null, lt.Controls.Medical._imrtiRenderer);
	lt.Controls.Medical._parser.registerClass("lt.Controls.Medical._parser");
	lt.Controls.Medical._imageLoader.registerClass("lt.Controls.Medical._imageLoader");
	lt.Controls.Medical._rendererTools.registerClass("lt.Controls.Medical._rendererTools");
	lt.Controls.Medical.MRTIImage.registerClass("lt.Controls.Medical.MRTIImage");
	lt.Controls.Medical._d3DXVECTOR3.registerClass("lt.Controls.Medical._d3DXVECTOR3");
	lt.Controls.Medical._orientationLetters.registerClass("lt.Controls.Medical._orientationLetters");
	lt.Controls.Medical.FramePosition.registerClass("lt.Controls.Medical.FramePosition");
	lt.Controls.Medical.StackSynchronization.registerClass("lt.Controls.Medical.StackSynchronization");
	lt.Controls.Medical._d3DXPLANE.registerClass("lt.Controls.Medical._d3DXPLANE");
	lt.Controls.Medical._d3DXVECTOR4.registerClass("lt.Controls.Medical._d3DXVECTOR4");
	lt.Controls.Medical._d3DXMATRIX.registerClass("lt.Controls.Medical._d3DXMATRIX");
	lt.Controls.Medical._d3DXVECTOR2.registerClass("lt.Controls.Medical._d3DXVECTOR2");
	lt.Controls.Medical._MVSINGLEREFERENCELINE.registerClass("lt.Controls.Medical._MVSINGLEREFERENCELINE");
	lt.Controls.Medical._MVREFLINEPARAM.registerClass("lt.Controls.Medical._MVREFLINEPARAM");
	lt.Controls.Medical.LeadLine.registerClass("lt.Controls.Medical.LeadLine");
	lt.Controls.Medical.ReferenceLine.registerClass("lt.Controls.Medical.ReferenceLine");
	lt.Controls.Medical._mprOrientationInfo.registerClass("lt.Controls.Medical._mprOrientationInfo");
	lt.Controls.Medical._mprCellsInfo.registerClass("lt.Controls.Medical._mprCellsInfo");
	lt.Controls.Medical._NEWDICOMTAGES.registerClass("lt.Controls.Medical._NEWDICOMTAGES");
	lt.Controls.Medical._cursor3DPosition.registerClass("lt.Controls.Medical._cursor3DPosition");
	lt.Controls.Medical._cursor3D.registerClass("lt.Controls.Medical._cursor3D");
	lt.Controls.Medical._point3D.registerClass("lt.Controls.Medical._point3D");
	lt.Controls.Medical.SortingOperation.registerClass("lt.Controls.Medical.SortingOperation");
	lt.Controls.Medical._dicomDataSetInfo.registerClass("lt.Controls.Medical._dicomDataSetInfo");
	lt.Controls.Medical._myConverter.registerClass("lt.Controls.Medical._myConverter");
	lt.Controls.Medical._dicomDataSetItem.registerClass("lt.Controls.Medical._dicomDataSetItem");
	lt.Controls.Medical._sortDicom.registerClass("lt.Controls.Medical._sortDicom");
	lt.Controls.Medical._dicomDataSetJson.registerClass("lt.Controls.Medical._dicomDataSetJson");
	lt.Controls.Medical.WindowLevelData.registerClass("lt.Controls.Medical.WindowLevelData");
	lt.Controls.Medical.WindowLevelInteractiveMode.registerClass("lt.Controls.Medical.WindowLevelInteractiveMode", lt.Controls.ImageViewerInteractiveMode);
	lt.Controls.Medical._workItem.registerClass("lt.Controls.Medical._workItem");
	lt.Controls.Medical._myWorkItemData.registerClass("lt.Controls.Medical._myWorkItemData");
	lt.Controls.Medical._lT_VersionNumber.l_VER_PRODUCT = "LEADTOOLS\u00ae for JavaScript";
	lt.Controls.Medical._lT_VersionNumber.l_VER_COMPANYNAME_STR = "LEAD Technologies, Inc.";
	lt.Controls.Medical._lT_VersionNumber.l_VER_LEGALTRADEMARKS_STR =
		"LEADTOOLS\u00ae is a trademark of LEAD Technologies, Inc.";
	lt.Controls.Medical._lT_VersionNumber.l_VER_LEGALCOPYRIGHT_STR = "\u00a9 1991-2017 LEAD Technologies, Inc.";
	lt.Controls.Medical._lT_VersionNumber.l_VER_DLLEXT = ".dll";
	lt.Controls.Medical._lT_VersionNumber.l_VER_EXEEXT = ".exe";
	lt.Controls.Medical._lT_VersionNumber.l_VER_PLATFORM = "";
	lt.Controls.Medical._lT_VersionNumber.l_VER_PLATFORM_FOR = "";
	lt.Controls.Medical._lT_VersionNumber.l_VER_PRODUCTNAME_STR = "LEADTOOLS\u00ae for JavaScript";
	lt.Controls.Medical._lT_VersionNumber.l_VER_ORIGINALFILENAME_STR_XXX =
		"Leadtools.Xxx.dll";
	lt.Controls.Medical._lT_VersionNumber.l_VER_FILEDESCRIPTION_STR_XXX = "LEADTOOLS Xxx";
	lt.Controls.Medical._lT_VersionNumber.l_VER_ORIGINALFILENAME_STR_KERNEL = "lt.dll";
	lt.Controls.Medical._lT_VersionNumber.l_VER_FILEDESCRIPTION_STR_KERNEL = "Leadtools";
	lt.Controls.Medical._lT_VersionNumber.l_VER_ORIGINALFILENAME_STR_CONTROLS = "lt.Controls.dll";
	lt.Controls.Medical._lT_VersionNumber.l_VER_FILEDESCRIPTION_STR_CONTROLS = "Controls";
	lt.Controls.Medical._lT_VersionNumber.l_VER_ORIGINALFILENAME_STR_DOCUMENTS_UI =
		"lt.Documents.UI.dll";
	lt.Controls.Medical._lT_VersionNumber.l_VER_FILEDESCRIPTION_STR_DOCUMENTS_UI = "Documents User Interface";
	lt.Controls.Medical._lT_VersionNumber.l_VER_ORIGINALFILENAME_STR_CONTROLS_MEDICAL = "lt.Controls.Medical.dll";
	lt.Controls.Medical._lT_VersionNumber.l_VER_FILEDESCRIPTION_STR_CONTROLS_MEDICAL = "Medical Controls";
	lt.Controls.Medical._lT_VersionNumber.l_VER_ORIGINALFILENAME_STR_DOCUMENTS = "lt.Documents.dll";
	lt.Controls.Medical._lT_VersionNumber.l_VER_FILEDESCRIPTION_STR_DOCUMENTS =
		"Documents";
	lt.Controls.Medical._lT_VersionNumber.l_VER_ORIGINALFILENAME_STR_ANNOTATIONS_CORE = "lt.Annotations.Core.dll";
	lt.Controls.Medical._lT_VersionNumber.l_VER_FILEDESCRIPTION_STR_ANNOTATIONS_CORE = "Annotations Core";
	lt.Controls.Medical._lT_VersionNumber.l_VER_ORIGINALFILENAME_STR_ANNOTATIONS_AUTOMATION = "lt.Annotations.Automation.dll";
	lt.Controls.Medical._lT_VersionNumber.l_VER_FILEDESCRIPTION_STR_ANNOTATIONS_AUTOMATION = "Annotations Automation";
	lt.Controls.Medical._lT_VersionNumber.l_VER_ORIGINALFILENAME_STR_ANNOTATIONS_DESIGNERS =
		"lt.Annotations.Designers.dll";
	lt.Controls.Medical._lT_VersionNumber.l_VER_FILEDESCRIPTION_STR_ANNOTATIONS_DESIGNERS = "Annotations Designers";
	lt.Controls.Medical._lT_VersionNumber.l_VER_ORIGINALFILENAME_STR_ANNOTATIONS_RENDERING = "lt.Annotations.Rendering.dll";
	lt.Controls.Medical._lT_VersionNumber.l_VER_FILEDESCRIPTION_STR_ANNOTATIONS_RENDERING = "Annotations Rendering";
	lt.Controls.Medical._lT_VersionNumber.l_VER_ORIGINALFILENAME_STR_CCOW = "Leadtools.Ccow.dll";
	lt.Controls.Medical._lT_VersionNumber.l_VER_FILEDESCRIPTION_STR_CCOW =
		"Leadtools CCOW Library";
	lt.Controls.Medical._lT_VersionNumber.l_VER_ORIGINALFILENAME_STR_ANNOTATIONS_DOCUMENTS = "Leadtools.Annotations.Documents.dll";
	lt.Controls.Medical._lT_VersionNumber.l_VER_FILEDESCRIPTION_STR_ANNOTATIONS_DOCUMENTS = "Annotations Documents";
	lt.Controls.Medical._lT_VersionNumber.l_VER_ORIGINALFILENAME_STR_ANNOTATIONS_LEGACY = "Leadtools.Annotations.Legacy.dll";
	lt.Controls.Medical._lT_VersionNumber.l_VER_FILEDESCRIPTION_STR_ANNOTATIONS_LEGACY = "Annotations Legacy";
	lt.Controls.Medical._lT_VersionNumber.l_VER_ORIGINALFILENAME_STR_ANNOTATIONS_JAVASCRIPT =
		"Leadtools.Annotations.JavaScript.dll";
	lt.Controls.Medical._lT_VersionNumber.l_VER_FILEDESCRIPTION_STR_ANNOTATIONS_JAVASCRIPT = "JavaScripot Annotations";
	lt.Controls.Medical._lT_VersionNumber.l_VER_PRODUCTVERSION_DOT_STR = "19.0.0.0";
	lt.Controls.Medical._lT_VersionNumber.l_VER_FILEVERSION_DOT_STR = "19.0.0.7";
	lt.Controls.Medical.AutomationImageViewer._activeStroke$1 = lt.Annotations.Core.AnnStroke.create(lt.Annotations.Core.AnnSolidColorBrush.create("yellow"), lt.LeadLengthD.create(4));
	lt.Controls.Medical.AutomationImageViewer._normalStroke$1 =
		lt.Annotations.Core.AnnStroke.create(lt.Annotations.Core.AnnSolidColorBrush.create("green"), lt.LeadLengthD.create(4));
	lt.Controls.Medical.MedicalViewer._animator = null;
	lt.Controls.Medical.Tools.pointerdown = null;
	lt.Controls.Medical.Tools.pointerup = null;
	lt.Controls.Medical.Tools.pointercancel = null;
	lt.Controls.Medical.Tools.pointermove = null;
	lt.Controls.Medical.Tools._chunkList = null;
	lt.Controls.Medical.Tools._counter = 0;
	lt.Controls.Medical.Tools._nameCounter = 0;
	lt.Controls.Medical.Tools._forDebug = !1;
	lt.Controls.Medical.Tools._recycledElements =
		null;
	lt.Controls.Medical.Tools._colorsByName = null;
	lt.Controls.Medical.Tools._epsilon = 1.0E-8;
	(function() {
		var a = lt.LTHelper.OS === lt.LTOS.windows && lt.LTHelper.device === lt.LTDevice.mobile; - 1 !== window.navigator.userAgent.toLocaleLowerCase().indexOf("windows nt 6.2") || a ? (lt.Controls.Medical.Tools.pointerdown = "MSPointerDown", lt.Controls.Medical.Tools.pointerup = "MSPointerUp", lt.Controls.Medical.Tools.pointercancel = "MSPointerCancel", lt.Controls.Medical.Tools.pointermove = "MSPointerMove") : (lt.Controls.Medical.Tools.pointerdown =
			"pointerdown", lt.Controls.Medical.Tools.pointerup = "pointerup", lt.Controls.Medical.Tools.pointercancel = "pointercancel", lt.Controls.Medical.Tools.pointermove = "pointermove")
	})();
	lt.Controls.Medical._dicomTag.acquisitionDate = 524322;
	lt.Controls.Medical._dicomTag.acquisitionDateTime = 524330;
	lt.Controls.Medical._dicomTag.acquisitionTime = 524338;
	lt.Controls.Medical._dicomTag.acquisitionTimeSynchronized = 1579008;
	lt.Controls.Medical._dicomTag.contentTime = 524339;
	lt.Controls.Medical._dicomTag.frameAcquisitionDateTime =
		1609844;
	lt.Controls.Medical._dicomTag.imagePositionPatient = 2097202;
	lt.Controls.Medical._dicomTag.imageOrientationPatient = 2097207;
	lt.Controls.Medical._dicomTag.sequenceOfUltrasoundRegions = 1597457;
	lt.Controls.Medical._dicomTag.regionSpatialFormat = 1597458;
	lt.Controls.Medical._dicomTag.regionDataType = 1597460;
	lt.Controls.Medical._dicomTag.regionFlags = 1597462;
	lt.Controls.Medical._dicomTag.regionLocationMinX0 = 1597464;
	lt.Controls.Medical._dicomTag.regionLocationMinY0 = 1597466;
	lt.Controls.Medical._dicomTag.regionLocationMaxX1 =
		1597468;
	lt.Controls.Medical._dicomTag.regionLocationMaxY1 = 1597470;
	lt.Controls.Medical._dicomTag.referencePixelX0 = 1597472;
	lt.Controls.Medical._dicomTag.referencePixelY0 = 1597474;
	lt.Controls.Medical._dicomTag.physicalUnitsXDirection = 1597476;
	lt.Controls.Medical._dicomTag.physicalUnitsYDirection = 1597478;
	lt.Controls.Medical._dicomTag.referencePixelPhysicalValueX = 1597480;
	lt.Controls.Medical._dicomTag.referencePixelPhysicalValueY = 1597482;
	lt.Controls.Medical._dicomTag.physicalDeltaX = 1597484;
	lt.Controls.Medical._dicomTag.physicalDeltaY =
		1597486;
	lt.Controls.Medical._mrtiRenderer._loader = null;
	lt.Controls.Medical.ReferenceLine._outM = 0;
	lt.Controls.Medical.ReferenceLine._outC = 0;
	lt.Controls.Medical.ReferenceLine._intersectionX = 0;
	lt.Controls.Medical.ReferenceLine._intersectionY = 0;
	lt.Controls.Medical.ReferenceLine._deter111 = 0
})();